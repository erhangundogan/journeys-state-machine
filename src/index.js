const fs = require('fs');
const { Machine, interpret } = require('xstate');
const runService = require('./helpers/run-service');
const stateMachine = require('./helpers/state-machine');
const extractJourneys = require('./helpers/extract-journeys');
const direction = require('./helpers/direction');

const createMachine = (initial, context) => {
  return Machine({
    ...stateMachine,
    initial,
    context,
  });
};

const data = fs.readFileSync('./src/data/journeys', 'utf8');
const journeys = extractJourneys(data);

journeys.forEach(journey => {
  const { initial, commands, result } = journey;
  const [x, y, d] = initial.split(' ');
  const [rx, ry, rd] = result.split(' ');
  const machine = createMachine(direction(d), { pos: { x: +x, y: +y } });
  const service = interpret(machine);
  runService(service, commands);

  const { value, context: { pos: { x: cx, y: cy } } } = service.state;
  const isEqual = direction(rd) === value &&
    Number(cx) === Number(rx) &&
    Number(cy) === Number(ry);

  console.log(x, y, d, '->', rx, ry, rd, '->', isEqual);
});

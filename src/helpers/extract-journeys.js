module.exports = (data) => {
  const linesRegExp = new RegExp(/(.*)\n/, 'g');
  const linesFound = data.match(linesRegExp);

  function* linesGenerator() {
    const lines = linesFound.slice().reverse();
    while(lines.length > 0) {
      yield lines.pop();
    }
  }

  const journeys = [];
  const linesIterator = linesGenerator();
  let iteration = { done: false };

  while (!iteration.done) {
    let item = Object.assign({});

    for (let c = 0; c < 4; c++) {
      iteration = linesIterator.next();

      if (iteration.done) {
        break;
      }

      let value = iteration.value.replace('\n', '');

      if (iteration.value === '\n') {
        continue;
      }

      switch (c) {
        case 0: {
          item.initial = value;
          break;
        }
        case 1: {
          item.commands = value;
          break;
        }
        case 2: {
          item.result = value;
          break;
        }
      }
    }

    journeys.push(item);
  }

  return journeys;
};

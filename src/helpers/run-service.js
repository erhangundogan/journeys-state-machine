module.exports = (service, commandString) => {
  if (!service || !commandString) {
    return;
  }
  service.start();
  const commands = commandString.split('');
  commands.forEach(command => {
    switch (command) {
      case 'F': {
        service.send('FORWARD');
        break;
      }
      case 'R': {
        service.send('RIGHT');
        break;
      }
      case 'L': {
        service.send('LEFT');
        break;
      }
      // no default
    }
  });
  service.stop();
};

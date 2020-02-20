const { assign } = require('xstate');
const forward = require('./forward');

module.exports = {
  id: 'journey',
  states: {
    west: {
      on: {
        RIGHT: 'north',
        LEFT: 'south',
        FORWARD: {
          actions: assign({ pos: forward('west') })
        }
      }
    },
    north: {
      on: {
        RIGHT: 'east',
        LEFT: 'west',
        FORWARD: {
          actions: assign({ pos: forward('north') })
        }
      }
    },
    east: {
      on: {
        RIGHT: 'south',
        LEFT: 'north',
        FORWARD: {
          actions: assign({ pos: forward('east') })
        }
      }
    },
    south: {
      on: {
        RIGHT: 'west',
        LEFT: 'east',
        FORWARD: {
          actions: assign({ pos: forward('south') })
        }
      }
    }
  }
};

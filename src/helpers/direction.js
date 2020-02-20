module.exports = (direction) => {
  switch (direction) {
    case 'W': {
      return 'west';
    }
    case 'N': {
      return 'north';
    }
    case 'E': {
      return 'east';
    }
    case 'S': {
      return 'south';
    }
    // no default
  }
};

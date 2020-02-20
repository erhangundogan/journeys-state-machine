module.exports = (direction) => ({ pos: { x, y } }) => {
  switch (direction) {
    case 'west':
      return { x: x - 1, y };
    case 'north':
      return { x, y: y + 1 };
    case 'east':
      return { x: x + 1, y };
    case 'south':
      return { x, y: y - 1 };
    // no default
  }
};

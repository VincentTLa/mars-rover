/* eslint-disable no-param-reassign */
function move(instructions, position, compassPoint, grid) {
  for (let i = 0; i < instructions.length; i += 1) {
    // turn left
    if (instructions[i] === 'L') {
      if (compassPoint === 'N') {
        compassPoint = 'W';
      } else if (compassPoint === 'E') {
        compassPoint = 'N';
      } else if (compassPoint === 'S') {
        compassPoint = 'E';
      } else if (compassPoint === 'W') {
        compassPoint = 'S';
      }
    } else if (instructions[i] === 'R') {
      // turn right
      if (compassPoint === 'N') {
        compassPoint = 'E';
      } else if (compassPoint === 'E') {
        compassPoint = 'S';
      } else if (compassPoint === 'S') {
        compassPoint = 'W';
      } else if (compassPoint === 'W') {
        compassPoint = 'N';
      }
    } else if (instructions[i] === 'M') {
      // move forward
      if (compassPoint === 'N') {
        position[1] += 1;
      } else if (compassPoint === 'E') {
        position[0] += 1;
      } else if (compassPoint === 'S') {
        position[1] -= 1;
      } else if (compassPoint === 'W') {
        position[0] -= 1;
      }
      checkPlateu(grid, position);
    }
  }
  return `${position[0]} ${position[1]} ${compassPoint}`;
}

function checkPlateu(plateu, pos) {
  if (pos[0] > plateu[0] || pos[1] > plateu[1]) {
    return console.log('The rover has fallen out of bounds!', pos, plateu);
  }
  return false;
}

export default move;

/* eslint-disable no-param-reassign */
export function navigate(instructions, position, compassPoint, grid) {
  for (let i = 0; i < instructions.length; i += 1) {
    // turn left
    if (instructions[i] === 'L') {
      compassPoint = turnLeft(compassPoint);
    } else if (instructions[i] === 'R') {
      // turn right
      compassPoint = turnRight(compassPoint);
    } else if (instructions[i] === 'M') {
      // move forward
      move(position, compassPoint);
      if (checkPlateu(grid, position)) {
        return `Rover has fallen out of bounds! Fell at position ${position} ${compassPoint}`;
      }
    }
  }
  return `${position[0]} ${position[1]} ${compassPoint}`;
}

export function turnLeft(compassPoint) {
  if (compassPoint === 'N') {
    compassPoint = 'W';
  } else if (compassPoint === 'E') {
    compassPoint = 'N';
  } else if (compassPoint === 'S') {
    compassPoint = 'E';
  } else if (compassPoint === 'W') {
    compassPoint = 'S';
  } else {
    throw new Error('Incorrect Compass Point');
  }
  return compassPoint;
}

export function turnRight(compassPoint) {
  if (compassPoint === 'N') {
    compassPoint = 'E';
  } else if (compassPoint === 'E') {
    compassPoint = 'S';
  } else if (compassPoint === 'S') {
    compassPoint = 'W';
  } else if (compassPoint === 'W') {
    compassPoint = 'N';
  } else {
    throw new Error('Incorrect Compass Point');
  }
  return compassPoint;
}

export function move(position, compassPoint) {
  if (compassPoint === 'N') {
    position[1] += 1;
  } else if (compassPoint === 'E') {
    position[0] += 1;
  } else if (compassPoint === 'S') {
    position[1] -= 1;
  } else if (compassPoint === 'W') {
    position[0] -= 1;
  } else {
    throw new Error('Incorrect Compass Point');
  }
  return position;
}

export function checkPlateu(plateu, pos) {
  if (pos[0] > plateu[0] || pos[1] > plateu[1] || pos[0] < 0 || pos[1] < 0) {
    return true;
  }
  return false;
}

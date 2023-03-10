import { turnLeft, turnRight, move, checkPlateu } from '../../src/helper/rover';

describe('Rover turning left', () => {
  it('given a compassPoint N, turnLeft() returns compassPoint W', () => {
    expect(turnLeft('N')).toEqual('W');
  });
  it('given a compassPoint E, turnLeft() returns compassPoint N', () => {
    expect(turnLeft('E')).toEqual('N');
  });
  it('given a compassPoint S, turnLeft() returns compassPoint E', () => {
    expect(turnLeft('S')).toEqual('E');
  });
  it('given a compassPoint W, turnLeft() returns compassPoint S', () => {
    expect(turnLeft('W')).toEqual('S');
  });
  it('given an incorrect compassPoint, turnLeft() returns error', () => {
    function compassPointD() {
      turnLeft('D');
    }
    expect(compassPointD).toThrow(new Error('Incorrect Compass Point'));
  });
});

describe('Rover turning  right', () => {
  it('given a compassPoint N, turnRight() returns compassPoint E', () => {
    expect(turnRight('N')).toEqual('E');
  });
  it('given a compassPoint E, turnRight() returns compassPoint S', () => {
    expect(turnRight('E')).toEqual('S');
  });
  it('given a compassPoint S, turnRight() returns compassPoint W', () => {
    expect(turnRight('S')).toEqual('W');
  });
  it('given a compassPoint W, turnRight() returns compassPoint N', () => {
    expect(turnRight('W')).toEqual('N');
  });
  it('given an incorrect compassPoint, turnRight() returns error', () => {
    function compassPointD() {
      turnRight('D');
    }
    expect(compassPointD).toThrow(new Error('Incorrect Compass Point'));
  });
});

describe('Rover moving forward', () => {
  it('given a compass point N, move() returns a position of 0,1', () => {
    expect(move([0, 0], 'N')).toEqual([0, 1]);
  });
  it('given a compass point E, move() returns a position of 0,1', () => {
    expect(move([0, 0], 'E')).toEqual([1, 0]);
  });
  it('given a compass point S, move() returns a position of 0,1', () => {
    expect(move([0, 0], 'S')).toEqual([0, -1]);
  });
  it('given a compass point W, move() returns a position of 0,1', () => {
    expect(move([0, 0], 'W')).toEqual([-1, 0]);
  });
});

describe('Checking the Plateu', () => {
  it('given a position is in range of plateu, return false', () => {
    expect(checkPlateu([5, 5], [1, 5])).toEqual(false);
  });
  it('given a position is outside range of plateu, return true', () => {
    expect(checkPlateu([5, 5], [6, 6])).toEqual(true);
  });
  it('given a position is negative co-ordinates, return true', () => {
    expect(checkPlateu([5, 5], [-1, -5])).toEqual(true);
  });
});

import { Alert } from 'react-native';
import { handleCoordinates, handleDirections } from '../../src/helper/validate';

describe('Validation on co-ordinates and directions input', () => {
  it('given an input, handleCoordinates() returns an array of numbers ', () => {
    expect(handleCoordinates('5 5')).toEqual([5, 5]);
  });

  it('given input is 0 0, handleCoordinates returns an alert', () => {
    expect(handleCoordinates('0 0')).toEqual([0, 0]);
  });
  it('given empty coordinates, handleCoordinates returns an alert', () => {
    expect(handleCoordinates('')).toEqual(Alert.alert('Uh oh'));
  });

  it('given negative co-ordinates, handleCoordinates returns an alert', () => {
    expect(handleCoordinates('-2 2')).toEqual(Alert.alert('Uh oh'));
  });

  it('given input has more than two numbers, handleCoordinates returns an alert', () => {
    expect(handleCoordinates('2 2 2')).toEqual(Alert.alert('Uh oh'));
  });

  it('given input only has one number, handleCoordinates returns an alert', () => {
    expect(handleCoordinates('1')).toEqual(Alert.alert('Uh oh'));
  });

  it('given letters in the input, handleCoordinates returns an alert', () => {
    expect(handleCoordinates('a b')).toEqual(Alert.alert('Uh oh'));
  });

  it('given special characters in the input, handleCoordinates returns an alert', () => {
    expect(handleCoordinates('@ @')).toEqual(Alert.alert('Uh oh'));
  });
});

describe('Validation on directions input', () => {
  it('given an input with proper instructions, handleDirections() returns ', () => {
    expect(handleDirections('LMLMLMLMM')).toEqual(['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']);
  });

  it('given an input with a character that is not L R or M, handleDirections() returns an alert', () => {
    expect(handleDirections('ASD')).toEqual(Alert.alert('Uh oh'));
  });
  it('given an input with a character that is not L R or M, handleDirections() returns an alert', () => {
    expect(handleDirections('ALMLMLMRLMLMR')).toEqual(Alert.alert('Uh oh'));
  });

  it('given an input is empty, handleDirections() returns an alert', () => {
    expect(handleDirections('')).toEqual(Alert.alert('Uh oh'));
  });

  it('given an input contains special characters, handleDirections() returns an alert', () => {
    expect(handleDirections('!@#$@$#%')).toEqual(Alert.alert('Uh oh'));
  });
});

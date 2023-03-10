import { Alert } from 'react-native';

export function handleCoordinates(input) {
  if (input) {
    // Only digits and a space
    const re = /^[0-9 ]+$/;
    const coordinates = input.trim();
    if (re.test(coordinates)) {
      const newArray = coordinates.split(' ');
      const newNumArray = newArray.map(Number);
      if (newArray.length !== 2) {
        return Alert.alert('Uh oh', 'Only two numbers are allowed in the field! Please try again');
      }
      return newNumArray;
    }
    return Alert.alert(
      'Uh oh',
      'Only positive numbers are allowed in these fields. Please try again',
    );
  }
  return Alert.alert('Uh oh', 'Seems like you left an empty field. Please try again');
}

export function handleDirections(input) {
  const re = /^[LRM]+$/;
  if (input) {
    const formattedInput = input.replace(/[\s]/g, '');
    if (re.test(formattedInput)) {
      return formattedInput.split('');
    }
    return Alert.alert(
      'Uh oh',
      'Seems like you entered characters other than L,R or M. Please try again',
    );
  }
  return Alert.alert('Uh oh', 'Seems like you left the field empty');
}

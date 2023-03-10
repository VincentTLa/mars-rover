import { Alert } from 'react-native';

export function handleCoordinates(input) {
  if (input) {
    // Regex that checks for only digits and a space
    const re = /^[0-9 ]+$/;
    // Triming any trailing spaces
    const coordinates = input.trim();
    if (re.test(coordinates)) {
      // newArray will split the string into array i.e ["5", "5"]
      const newArray = coordinates.split(' ');
      // newNumArray changes the values in array to numbers i.e [5, 5]
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
  // Regex that checks for only LRM and allows for space in string
  const re = /^[LRM]+$/;
  if (input) {
    // Replaces the spaces in the string input if there are any
    const formattedInput = input.replace(/[\s]/g, '');
    if (re.test(formattedInput)) {
      // Splits the instructions into an array of char
      return formattedInput.split('');
    }
    return Alert.alert(
      'Uh oh',
      'Seems like you entered characters other than L,R or M. Please try again',
    );
  }
  return Alert.alert('Uh oh', 'Seems like you left the field empty');
}

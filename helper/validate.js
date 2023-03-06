import { Alert } from "react-native";

export function handleCoordinates(input) {
  // Only digits and a space
  if (input) {
    const coordinates = input.trim();
    var re = /^[0-9 ]+$/;
    if (re.test(coordinates)) {
      const newArray = coordinates.split(" ");
      if (newArray.length != 2) {
        Alert.alert("Uh oh", "Only two numbers are allowed in the field! Please try again");
      }
      return newArray;
    } else {
      Alert.alert("Uh oh", "Only positive numbers are allowed in these fields. Please try again");
    }
  } else {
    Alert.alert("Uh oh", "Seems like you left an empty field. Please try again");
  }
}

export function handleStartPosition(coordinates, ccPoint) {
  return coordinates + " " + ccPoint;
}

export function handleDirections(input) {
  var re = /^[LRM]+$/;
  const formattedInput = input.replace(/[\s]/g, "");
  if (input) {
    if (re.test(formattedInput)) {
      return formattedInput;
    } else {
      Alert.alert("Uh oh", "Seems like you entered characters other than L,R or M. Please try again");
    }
  } else {
    Alert.alert("Uh oh", "Seems like you left the field empty");
  }
}

/* eslint-disable react-native/no-raw-text */
import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Title from '../components/Title';
import InformationText from '../components/InformationText';
import Submit from '../components/Submit';
import { handleCoordinates, handleDirections } from '../helper/validate';
import move from '../helper/rover';

export default function HomeScreen() {
  const ccPoint = ['N', 'E', 'S', 'W'];

  // plateu size set
  const [plateu, setPlateu] = useState();

  // rover start pos and end pos
  const [startPos, setStartPos] = useState();
  const [endPos, setEndPos] = useState();
  // starting compass direction
  const [compassPoint, setCompassPoint] = useState(ccPoint[0]);

  // user input for rover directions
  const [directions, setDirections] = useState();

  function handleSubmission() {
    const formattedPlateu = handleCoordinates(plateu);
    const formattedStartPos = handleCoordinates(startPos);
    const formattedDirections = handleDirections(directions);
    const instructions = formattedDirections.split('');

    const end = move(instructions, formattedStartPos, compassPoint);
    setEndPos(end.split(''));
    console.log(formattedPlateu);
    console.log(formattedStartPos);
    console.log(end);
  }

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Title fontSize={40}>Mars Rover</Title>
      </View>
      <View style={styles.container}>
        <InformationText>To begin, please enter the:</InformationText>
        <View style={styles.list}>
          <InformationText>
            - Size of the Plateu using x,y co-ordinates greater than 0,0
          </InformationText>
          <InformationText>
            - Starting Position of the Rover using the format of co-ordinates within the range of
            the plateu and selecting facing position
          </InformationText>
          <InformationText>- Directions of Rover using L,R or M</InformationText>
        </View>
      </View>

      <View style={styles.container}>
        <InformationText>Size of Plateu</InformationText>
        <TextInput
          style={styles.inputPlateu}
          placeholder="0 0"
          onChangeText={(text) => setPlateu(text)}
        />
      </View>

      <View style={styles.container}>
        <InformationText>Starting Position</InformationText>
        <View style={styles.row}>
          <TextInput
            style={styles.inputStartPos}
            placeholder="1 2"
            onChangeText={(text) => setStartPos(text)}
          />
          <SelectDropdown
            data={ccPoint}
            defaultValue="N"
            onSelect={(selectedItem) => {
              setCompassPoint(selectedItem);
            }}
            buttonStyle={styles.dropdownBtnStyle}
            buttonTextStyle={styles.dropdownBtnTxtStyle}
            dropdownStyle={styles.dropdownDropdownStyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowTxtStyle}
          />
        </View>
      </View>

      <View style={styles.container}>
        <InformationText>Directions</InformationText>
        <TextInput
          style={styles.input}
          placeholder="LRMMLRMRLMR"
          onChangeText={(text) => setDirections(text)}
        />
      </View>

      <View style={styles.btnContainer}>
        <Submit
          // eslint-disable-next-line react/jsx-no-bind
          onPress={handleSubmission}
          title="Submit"
        />
      </View>

      <View style={styles.container}>
        <InformationText>Output</InformationText>
        <View style={styles.output}>
          {endPos ? <InformationText>{endPos}</InformationText> : ''}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  banner: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderBottomColor: '#cdcdcd',
    borderBottomWidth: 1,
  },
  list: {
    paddingLeft: 20,
    paddingVertical: 8,
  },
  input: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#cdcdcd',
    backgroundColor: 'white',
  },
  inputPlateu: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#cdcdcd',
    backgroundColor: 'white',
    width: 150,
  },
  inputStartPos: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#cdcdcd',
    backgroundColor: 'white',
    width: 200,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dropdownBtnStyle: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdownBtnTxtStyle: {
    color: '#444',
    textAlign: 'center',
  },
  dropdownDropdownStyle: {
    backgroundColor: '#EFEFEF',
  },
  dropdownRowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdownRowTxtStyle: {
    color: '#444',
    textAlign: 'center',
  },
  output: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#cdcdcd',
    padding: 20,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

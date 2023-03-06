import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";
import InformationText from "../components/InformationText";
import SelectDropdown from "react-native-select-dropdown";
import Submit from "../components/Submit";
import { handleCoordinates, handleDirections, handleStartPosition } from "../helper/validate";

export default function HomeScreen() {
  const ccPoint = ["N", "E", "S", "W"];
  const [plateu, setPlateu] = useState();
  const [startPos, setStartPos] = useState();
  const [endPos, setEndPos] = useState();
  const [compassPoint, setCompassPoint] = useState("N");
  const [directions, setDirections] = useState();

  function handleSubmission() {
    const formattedPlateu = handleCoordinates(plateu);
    const formattedStartPos = handleCoordinates(startPos);
    const formattedStart = handleStartPosition(formattedStartPos, compassPoint);
    const formattedDirections = handleDirections(directions);
    const instructions = formattedDirections.split("");
    // logic to get output
    // if L or R change the CCPOINT
    console.log("compass point:", compassPoint);
    console.log(instructions);
    console.log(compassPoint);
    console.log("start pos:", formattedStartPos);
    console.log("plateu:", formattedPlateu);
    let cc = ccPoint.indexOf(compassPoint);
    let x = formattedStartPos[0];
    console.log(x);
    let y = formattedStartPos[1];
    console.log(y);
    for (let i = 0; i < instructions.length; i++) {
      console.log(instructions[i]);
      if (instructions[i] === "L") {
        switch (cc) {
          case 0:
            cc = 3;
            break;
          case 1:
            cc = 0;
            break;
          case 2:
            cc = 1;
            break;
          case 3:
            cc = 2;
            break;
        }
      }
      if (instructions[i] === "R") {
        switch (cc) {
          case 0:
            cc = 1;
            break;
          case 1:
            cc = 2;
            break;
          case 2:
            cc = 3;
            break;
          case 3:
            cc = 0;
            break;
        }
      }
      if (instructions[i] === "M") {
        switch (cc) {
          case 0:
            y = parseInt(y) + 1;
            break;
          case 1:
            x = parseInt(x) + 1;
            break;
          case 2:
            y = parseInt(y) - 1;
            break;
          case 3:
            x = parseInt(x) - 1;
            break;
        }

        console.log(x + " " + y);
      }
    }
    console.log(endPos);
    setCompassPoint(ccPoint[cc]);
    setEndPos(x + " " + y);
  }

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Title fontSize={40}>Mars Rover</Title>
      </View>
      <View style={styles.container}>
        <InformationText>To begin, please enter the:</InformationText>
        <View style={styles.list}>
          <InformationText>- Size of the Plateu using x,y co-ordinates greater than 0,0</InformationText>
          <InformationText>
            - Starting Position of the Rover using the format of co-ordinates within the range of the plateu and
            selecting facing position
          </InformationText>
          <InformationText>- Directions of Rover using L,R or M</InformationText>
        </View>
      </View>

      <View style={styles.container}>
        <InformationText>Size of Plateu</InformationText>
        <TextInput
          style={[styles.input, { width: 150 }]}
          placeholder="0 0"
          onChangeText={text => setPlateu(text)}
        />
      </View>

      <View style={styles.container}>
        <InformationText>Starting Position</InformationText>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, { width: 200 }]}
            placeholder="1 2"
            onChangeText={text => setStartPos(text)}
          />
          <SelectDropdown
            data={ccPoint}
            defaultValue={"N"}
            onSelect={(selectedItem, index) => {
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
          onChangeText={text => setDirections(text)}
        />
      </View>

      <View style={styles.btnContainer}>
        <Submit
          onPress={handleSubmission}
          title={"Submit"}
        />
      </View>

      <View style={styles.container}>
        <InformationText>Output</InformationText>
        <View style={styles.output}>
          {endPos ? (
            <InformationText>
              {endPos} {compassPoint}
            </InformationText>
          ) : (
            ""
          )}
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
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderBottomColor: "#cdcdcd",
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
    borderColor: "#cdcdcd",
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dropdownBtnStyle: {
    width: 50,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdownBtnTxtStyle: {
    color: "#444",
    textAlign: "center",
  },
  dropdownDropdownStyle: {
    backgroundColor: "#EFEFEF",
  },
  dropdownRowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdownRowTxtStyle: {
    color: "#444",
    textAlign: "center",
  },
  output: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#cdcdcd",
    padding: 20,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

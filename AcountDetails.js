import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
const K_OPTIONS = [
  {
    item: "General Account",
    id: "General Account",
  },
  {
    item: " Priority Banking",
    id: "Priority Banking",
  },
  {
    item: " Preferred Banking ",
    id: "Preferred Banking",
  },
  {
    item: "Private Banking ",
    id: "Private Banking ",
  },
  {
    item: " Time Deposit",
    id: "Time Deposit",
  },
];
const Acount = () => {
  const [selectedTeam, setSelectedTeam] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);
  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], "id"));
  }
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.text}> Account Details </Text>
      </View>

      <Text style={styles.text1}> Branch </Text>

      <View style={styles.inputview2}>
        <TextInput style={styles.textinput} placeholderTextColor="#12c3ff" />
      </View>
      <Text style={styles.text1}> Account in the name(s) of</Text>
      <View>
        <View style={styles.inputview2}>
          <TextInput style={styles.textinput} placeholderTextColor="#12c3ff" />
        </View>
      </View>
      <Text style={styles.text1}>Account type</Text>
      <View style={styles.inputview2}>
        <SelectBox
          label="Select multiple"
          options={K_OPTIONS}
          selectedValues={selectedTeams}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
        />
      </View>
      <Text style={styles.text1}>Monthly Salary</Text>
      <View style={styles.inputview2}>
        <TextInput
          style={styles.textinput}
          keyboardType="numeric"
          placeholderTextColor="#12c3ff"
        />
      </View>
      <Text style={styles.text1}>Marital Status</Text>
      <View style={styles.inputview2}>
        <TextInput style={styles.textinput} placeholderTextColor="#12c3ff" />
      </View>
      <Text style={styles.text1}>Language</Text>
      <View style={styles.inputview2}>
        <TextInput style={styles.textinput} />
      </View>
      <Text style={styles.text1}>Occupation</Text>
      <View style={styles.inputview2}>
        <TextInput style={styles.textinput} placeholderTextColor="#12c3ff" />
      </View>
    </ScrollView>
  );
};
export default Acount;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    fontStyle: "italic",
    margin: 10,
    textAlign: "center",
  },
  text1: {
    fontSize: 18,
    color: "black",
    margin: 10,
  },
  textinput: {
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    flex: 1,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    color: "black",
    fontSize: 18,
  },

  inputview2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

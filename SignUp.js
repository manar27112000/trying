import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  
} from "react-native";



const SignUp = () => {

  return (
    <View>
      <View>
        <Text style={styles.text}> Bank Account Information Form </Text>
      </View>
      <ScrollView>
      <Text style={styles.text1}> Name </Text>

      <View style={styles.countaner}>
        <View style={styles.inputview}>
          <TextInput
            style={styles.textinput}
            placeholder="First"
            placeholderTextColor="#E8E8E8"
          />
        </View>
        <View style={styles.inputview}>
          <TextInput
            style={styles.textinput}
            placeholder="Last"
            placeholderTextColor="#E8E8E8"
          />
        </View>
      </View>
      <Text style={styles.text1}  > Date Of Birth </Text>

        <View style={styles.inputview2}>
          <TextInput
            style={styles.textinput}
            placeholder="MM/DD/YYY"
            placeholderTextColor="#E8E8E8"
          />
        </View>
        <Text style={styles.text1}  > Residential Address </Text>
       <View>
        <View style={styles.inputview2}>
          <TextInput
            style={styles.textinput}
            placeholder="Street Address"
            placeholderTextColor="#E8E8E8"
          />
        </View>
        <View style={styles.inputview2}>
          <TextInput
            style={styles.textinput}
            placeholder="City"
            placeholderTextColor="#E8E8E8"
          />
        </View>
        <View style={styles.inputview2}>
          <TextInput
            style={styles.textinput}
            placeholder="Postal/Zip Code"
            placeholderTextColor="#E8E8E8"
          />
        </View>
        <View style={styles.inputview2}>
          <TextInput
            style={styles.textinput}
            placeholder="Country"
            placeholderTextColor="#E8E8E8"
          />
        </View>
        </View>
        <Text style={styles.text1}  >Phone </Text>
        <View style={styles.inputview2}>
          <TextInput
            style={styles.textinput}
            placeholder="### ### ####"
            placeholderTextColor="#E8E8E8"
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.text1}  >Email </Text>
        <View style={styles.inputview2}>
          <TextInput
            style={styles.textinput}
            placeholderTextColor="#E8E8E8"
            type="email"
          />
        </View>
        </ScrollView>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
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
  inputview: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 170,
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
  countaner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  inputview2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

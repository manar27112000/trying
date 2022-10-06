import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
  Image,
} from "react-native";
import { firebase } from '../config/config';
const SignIn = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handleuser = (v) => {
    setusername(v);
  };
  const handlepassword = (v) => {
    setpassword(v);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets//bank.png")} />
      <View style={styles.inputview}>
        <TextInput
          style={styles.textinput}
          placeholder="Enter Your Email"
          placeholderTextColor="#E8E8E8"
          type="email"
          onChangeText={handleuser}
          value={username}
        />
      </View>

      <View style={styles.inputview}>
        <TextInput
          style={styles.textinput}
          placeholder="Enter Your Password"
          placeholderTextColor="#E8E8E8"
          secureTextEntry={true}
          onChangeText={handlepassword}
          value={password}
        />
      </View>

      <View style={styles.buttonview}>
        <Button title="sign in" style={styles.button} />

        <TouchableOpacity>
          <Text style={styles.forgetpassowrd}>Forgot Password? </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Button title="Create A New Acount" style={styles.button} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  inputview: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2100,
  },
  textinput: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    flex: 1,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    color: "black",
    fontSize: 18,
  },
  image: {
    marginBottom: 35,
    resizeMode: "stretch",
    height: 200,
    width: 300,
  },
  buttonview: {
    margin: 10,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    elevation: 3,
    flex: 1,
  },
  forgetpassowrd: {
    padding: 5,
    color: "black",
    marginBottom: 5,
    fontSize: 18,
    elevation: 10,
  },
});

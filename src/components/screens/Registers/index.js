import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView,
  Alert
} from "react-native";
import styles from "./styles";
import Dimensions from "Dimensions";
import PropTypes from "prop-types";
import LoginScreen from "../Login_1";
import { Text } from "react-native-elements";
import Newfeeds from "../Newfeeds";

var URL = "http://192.168.1.26:8088/backendAPI/registers.php"

class Registers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      email: '',
      name: '',
      password: ''
    };
    this.showPass = this.showPass.bind(this);
  }
  showPass() {
    this.state.press === false
      ? this.setState({ showPass: false, press: true })
      : this.setState({ showPass: true, press: false });
  }

  login() {
    this.props.navigation.navigate("Login");
  }
  userRegister = () => {
    const { name, email, password } = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == "") {
      Alert.alert('Information', "Please enter Email address");
    }
    else if (reg.test(email) === false) {
      Alert.alert('Information', "Email is Not Correct!");
      return false;
    }
    else if (password == "") {
      Alert.alert('Information', "Please enter password");
    }
    else if (name == "") {
      Alert.alert('Information', "Please enter name");
    }
    else {
      fetch(URL, {
        method: 'post',
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error == "OK") {
          Alert.alert('Information', "Register Successfully!");
          this.props.navigation.navigate("Login");
        }
        else {
          Alert.alert('Information', "Register error!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }

  }


  render() {

    return (
      <ImageBackground
        source={require("../images/wallpaper.png")}
        imageStyle={{
          resizeMode: "cover"
        }}
        style={styles.container}
      >
        <Image source={require("../images/logo.png")} style={styles.logo} />
        <Text style={styles.kma}>REGISTERS ACCOUNT</Text>
        <TextInput
          style={LoginStyles.login_username}
          placeholder="Username"
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          style={LoginStyles.login_email}
          placeholder="Email"
          onChangeText={(email) =>
            this.setState({ email })
          }
        />

        <TextInput
          style={LoginStyles.login_pass}
          ref={input => (this.passwordInput = input)}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          onChangeText={(password) =>
            this.setState({ password })
          }
          secureTextEntry={true}
        />

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.userRegister}
        >
          <Text style={styles.loginText}>Create Account</Text>
        </TouchableHighlight>
        <TouchableOpacity
          onPress={() => {
            this.login();
          }}
          style={styles.buttonBack}
        >
          <Image
            source={require("../images/left-arrow.png")}
            style={styles.back}
          />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
// LoginScreen.propTypes = {
//   onCreateUser: PropTypes.func.isRequired
// };

const DEVICE_WIDTH = Dimensions.get("window").width;

const LoginStyles = StyleSheet.create({
  login_email: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    position: "absolute",
    top: 400,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 20,
    color: "#ffffff"
  },
  logo_email: {
    height: 45,
    position: "absolute",
    top: 80
  },
  login_pass: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    position: "absolute",
    top: 450,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 20,
    color: "#ffffff"
  },
  login_username: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    position: "absolute",
    top: 350,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 20,
    color: "#ffffff"
  },
  container: {
    top: 0,
    width: DEVICE_WIDTH,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  text: {
    color: "white",
    backgroundColor: "transparent"
  }
});

export default Registers;

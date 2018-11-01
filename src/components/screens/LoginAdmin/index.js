import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  TouchableHighlight,
  Image,
  Alert,
  Keyboard
} from "react-native";
import styles from "./styles";
import Dimensions from "Dimensions";
import { Text } from "react-native-elements";
import Newfeeds from '../Newfeeds';

var URL = "http://192.168.1.26:8088/backendAPI/loginAdmin.php"

class LoginAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      email: '',
      password: ''
    };
    this.showPass = this.showPass.bind(this);
  }

  showPass() {
    this.state.press === false
      ? this.setState({ showPass: false, press: true })
      : this.setState({ showPass: true, press: false });
  }

  getStarted() {
    this.props.navigation.navigate("LoginView");
  }

  register() {
    this.props.navigation.navigate("Registers");
  }

  UserLoginFunction = () => {

    const { email, password } = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == "") {
      Alert.alert('Information',"Please enter Email address");
    }
    else if (reg.test(email) === false) {
      Alert.alert('Information', "Email is Not Correc");
      return false;
    }
    else if (password == "") {
      Alert.alert('Information',"Please enter password");
    }
    else {
      fetch(URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,

        })
      }).then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.error == "OK") {
            Alert.alert('Information',"Successfully Login!")
            this.props.navigation.navigate("HandlePage");
          }
          else {
            Alert.alert('Information',"Wrong Login Detail!");
          }
        }).catch((error) => {
          console.error(error);
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
          <Text style={styles.kma}>LOGIN ADMIN</Text>

          <TextInput
            style={LoginStyles.login_email}
            onChangeText={(email) =>
              this.setState({email})}
            autoCorrect={false}
            placeholder="Email"
            returnKeyType={"done"}
            autoCapitalize={"none"}
            autoCorrect={false}
          />

          <TextInput
            style={LoginStyles.login_pass}
            onChangeText={(password) =>
              this.setState({password})}
            placeholder="Password"
            returnKeyType={"done"}
            autoCapitalize={"none"}
            autoCorrect={false}
            ref={input => (this.passwordInput = input)}
            secureTextEntry={this.state.showPass}
          />

          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={this.UserLoginFunction}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>
          <View style={LoginStyles.container}>
            <TouchableOpacity
              onPress={() => {
                this.register();
              }}
            >
              <Text style={LoginStyles.text}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={LoginStyles.text}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.getStarted();
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

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const LoginStyles = StyleSheet.create({
  login_email: {
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
    top: 400,
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

export default LoginAdmin;

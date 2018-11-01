import React, { Component } from "react";
import {
  Text,
  TouchableHighlight,
  ImageBackground,
  Image
} from "react-native";
import styles from "./styles";

export default class LoginView extends Component {
  getstarted() {
    this.props.navigation.navigate("Login");
  }

  admin() {
    this.props.navigation.navigate("LoginAdmin");
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
        <Text style={styles.kma}>MẠNG XÃ HỘI KMA</Text>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => {
            this.admin();
          }}
        >
          <Text style={styles.loginText}>Login Admin</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => {
            this.getstarted();
          }}
        >
          <Text style={styles.loginText}>Get Started</Text>
        </TouchableHighlight>
      </ImageBackground>
    );
  }
}

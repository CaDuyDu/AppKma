import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Icon,
  Left,
  Button,
  Title,
  Body,
  Right,
  DatePicker,
  Text,
  ListItem,
} from "native-base";
import { Picker, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import ImagePicker from "react-native-image-picker";

const options = {
  title: "Select Photo",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

var URL = 'http://192.168.1.26:8088/backendAPI/addGroupList.php';

export default class AddGroupSchools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      name: '',
    };
  }

  list() {
    this.props.navigation.navigate("ListSchools");
  }


  addGroups = () => {
    const { name } = this.state;
    fetch(URL, {
      method: 'post',
      body: JSON.stringify({
        name: name,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.error == "OK") {
        Alert.alert('Information', "Add Successfully!");
        this.props.navigation.navigate("ListSchools");
      }
      else {
        Alert.alert('Information', "Add error!");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  selectPhotoTapped() {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response.uri };

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.list();
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Add Groups School</Title>
          </Body>
          <Right>
          <TouchableOpacity
              onPress={this.addGroups}
            >
            <Title>Add</Title>
            
              <Icon
                style={{ fontSize: 15, color: "white", padding: 3 }}
                name="add"
              />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item regular style={{marginTop:20}}>
              <Input
                onChangeText={(name) => this.setState({ name })}
                placeholder="Name"
                style={{width: 100}}

              />
            </Item>
            <ListItem icon style={{ padding: 20, paddingTop: 50 }}>
              <Left>
                <Button
                  style={{ backgroundColor: "#FF9501" }}
                  onPress={this.selectPhotoTapped.bind(this)}
                >
                  <Icon active name="photo" type="FontAwesome" />
                </Button>
              </Left>
              <Body>
                <Text>Avarta</Text>
              </Body>
            </ListItem>
            <Image
              style={{flex:1, textAlign: 'center',position: "absolute", left: 50}}
              source={this.state.avatarSource != null ? this.state.avatarSource : require('../../images/temp-inventory-landing.jpg')}
              style={{ height: 200, width: 200 }}
            />
          </Form>
        </Content>
      </Container>
    );
  }
}

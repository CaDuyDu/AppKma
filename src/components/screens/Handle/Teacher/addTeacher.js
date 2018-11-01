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

var URL = 'http://192.168.1.26:8088/backendAPI/addTeacher.php';

export default class AddTeachers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Choice",
      chosenDate: new Date(),
      avatarSource: null,
      name: '',
      email: '',
      address: '',
      age: '',
      heigth: '',
      weigth: '',
      gender: ''
    };
    this.setDate = this.setDate.bind(this);
  }

  list() {
    this.props.navigation.navigate("ListTeachers");
  }

  updateGender = value => {
    this.setState({
      selected: value
    });
  };

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  addTeacher = () => {
    const { name, email, address, age, heigth, weigth, gender} = this.state;
    fetch(URL, {
      method: 'post',
      body: JSON.stringify({
        name: name,
        email: email,
        address: address,
        age: age,
        heigth: heigth,
        weigth: weigth,
        gender: gender
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.error == "OK") {
        console.log(responseJson);
        Alert.alert('Information', "Add Successfully!");
        this.props.navigation.navigate("ListTeachers");
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
            <Title>Add Teachers</Title>
          </Body>
          <Right>
          <TouchableOpacity
              onPress={this.addTeacher}
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
            <Item rounded style={{marginTop:20}}>
              <Input
                onChangeText={(name) => this.setState({ name })}
                placeholder="User name"
                style={{borderWidth:1, borderRadius: 50}}

              />
            </Item>
            <Item rounded style={{marginTop:20}}>
              <Input
                onChangeText={(email) => this.setState({ email })}
                placeholder="Email"
                style={{borderWidth:1, borderRadius: 50}}
              />
            </Item>
            <Item rounded style={{marginTop:20}}>
              <Input
                onChangeText={(age) => this.setState({ age })}
                placeholder="Age"
                style={{borderWidth:1, borderRadius: 50}}
              />
            </Item>
            <Item rounded style={{marginTop:20}}>
              <Input
                onChangeText={(address) => this.setState({ address })}
                placeholder="Address"
                style={{borderWidth:1, borderRadius: 50}}
              />
            </Item>
            <Item rounded style={{marginTop:20}}>
              <Input
                onChangeText={(gender) => this.setState({ gender })}
                placeholder="Gender"
                style={{borderWidth:1, borderRadius: 50}}
              />
            </Item>
            <Item rounded style={{marginTop:20}}>
              <Input
                onChangeText={(heigth) => this.setState({ heigth })}
                placeholder="Heigth"
                style={{borderWidth:1, borderRadius: 50}}
              />
            </Item>
            <Item rounded style={{marginTop:20}}>
              <Input
                onChangeText={(weigth) => this.setState({ weigth })}
                placeholder="Weigth"
                style={{borderWidth:1, borderRadius: 50}}
              />
            </Item>
            <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Birth Day"
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={this.setDate}
              style={{ padding: 10 }}
            />
            <Text>Date: {this.state.chosenDate.toString().substr(4, 12)}</Text>
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
              style={{alignItems: 'center'}}
              source={this.state.avatarSource != null ? this.state.avatarSource : require('../../images/temp-inventory-landing.jpg')}
              style={{ height: 200, width: 200 }}
            />
          </Form>
        </Content>
      </Container>
    );
  }
}

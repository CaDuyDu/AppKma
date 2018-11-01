import React, { Component } from "react";
import { TextInput, Text, View, Alert } from "react-native";
import {
  Left,
  Body,
  Icon,
  Thumbnail,
  Content,
  ListItem,
  Header,
  Button,
  Right,
  Title,
  Item,
  Input
} from "native-base";
import styles from "./styles";
import ImagePicker from 'react-native-image-picker';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Photo',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

var URL = 'http://192.168.1.26:8088/backendAPI/addNotification.php';

export default class AddNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      title: '',
      content: '',
    };
  }

  listNotifi() {
    this.props.navigation.navigate("NotificationsHandle");
  }

  selectPhotoTapped() {

    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  addPostNews = () => {
    const { title, content } = this.state;
    if (title == "") {
      Alert.alert('Information', "Title Is Not Empty!");
    }
    else if (content == "") {
      Alert.alert('Information', "Content Is Not Empty!");
    }
    else {
      fetch(URL, {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          content: content
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.error == "OK") {
            Alert.alert('Information', "Add Successfully!");
            this.props.navigation.navigate("NotificationsHandle");
          }
          else {
            Alert.alert('Information', "Add error!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (

      // <Image
      //   source={this.state.avatarSource}
      //   style={{ height: 200, width: 200 }}
      // />
      <View >
        <Header style={styles.headerPost}>
          <Left>
            <Button transparent
              onPress={() => this.listNotifi()}
            >
              <Icon style={styles.textPost} name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.textPost}>News Report</Title>
          </Body>
          <Right>
            <Button transparent
              onPress={this.addPostNews}
            >
              <Text style={styles.textPost}>Add</Text>
            </Button>
          </Right>
        </Header>
        <ListItem>
          <Content>
            <Left>
              <Thumbnail
                source={require("../../images/stock-vector-usser-account-669118549.jpg")}
              />
              <Body>
                <Text style={styles.textPost}>Admin</Text>
              </Body>
            </Left>
            <Item regular>
              <Input 
                placeholder='Title...' 
                onChangeText={(title) => this.setState({ title })}
              />
            </Item>
            <TextInput
              onChangeText={(content) => this.setState({ content })}
              placeholder="Enter your content..."
              style={styles.textInputPost}
              multiline={true}
            />
            <ListItem icon>
              <Left>
                <Button
                  style={{ backgroundColor: "#FF9501" }}
                  onPress={this.selectPhotoTapped.bind(this)}
                >
                  <Icon active name="photo" type="FontAwesome" />
                </Button>
              </Left>
              <Body>
                <Text>Add your Photo</Text>
              </Body>
            </ListItem>
          </Content>
        </ListItem>
      </View>
    );
  }
}

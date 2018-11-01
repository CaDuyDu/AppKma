import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Separator,
  Left,
  Body,
  Button,
  Icon,
  Title,
  Right
} from "native-base";
import { TouchableOpacity, Alert } from "react-native";
export default class HandlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getstarted() {
    this.props.navigation.navigate("LoginView");
  }

  listTeacher() {
    this.props.navigation.navigate("ListTeachers");
  }

  listGroups() {
    this.props.navigation.navigate("ListSchools");
  }

  listClass() {
    this.props.navigation.navigate("ClassLists");
  }

  listNotification(){
    this.props.navigation.navigate("NotificationsHandle");
  }


  logout() {
    //Alert.alert('Infomation', "Are you sure you want to log out? ")
    this.props.navigation.navigate("LoginAdmin");
  }
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Handle</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Separator bordered>
            <Text style={{ fontSize: 15, color: "black" }}>
              Management Field Information
            </Text>
          </Separator>
          <ListItem last>
            <Body>
              <Text>Groups Lists</Text>
            </Body>
            <Right>
              <TouchableOpacity
                onPress={() => {
                  this.listGroups();
                }}
              >
                <Icon name="arrow-forward" />
              </TouchableOpacity>
            </Right>
          </ListItem>
          <ListItem last>
            <Body>
              <Text>Class Lists</Text>
            </Body>

            <Right>
              <TouchableOpacity
                onPress={() => { this.listClass();}}
              >
                <Icon name="arrow-forward" />
              </TouchableOpacity>
            </Right>

          </ListItem>
          <Separator bordered>
            <Text style={{ fontSize: 13, color: "black" }}>
              Staff Management
            </Text>
          </Separator>
          <ListItem>
            <Body>
              <Text>Teacher Lists</Text>
            </Body>
            <Right>
              <TouchableOpacity
                onPress={() => {
                  this.listTeacher();
                }}
              >
                <Icon name="arrow-forward" />
              </TouchableOpacity>
            </Right>
          </ListItem>
          <Separator bordered>
            <Text style={{ fontSize: 13, color: "black" }}>Notificatons</Text>
          </Separator>
          <ListItem>
            <Body>
              <Text>Notification Program List</Text>
            </Body>
            <Right>
              <TouchableOpacity
                onPress={()=>{this.listNotification()}}
              >
                <Icon name="arrow-forward" />
              </TouchableOpacity>
            </Right>
          </ListItem>
          <Separator bordered>
            <Text style={{ fontSize: 13, color: "black" }}>Login/Logout</Text>
          </Separator>
          <ListItem>
            <Body>
              <Text>Log out</Text>
            </Body>
            <Right>
              <TouchableOpacity
                onPress={() => Alert.alert(
                  'Infomations',
                  'Are you sure you want to log out?',
                  [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                    {text: 'OK', onPress: () => this.logout()},
                  ],
                  { cancelable: false }
                )}
                
              >
                <Icon name="logout" type="MaterialCommunityIcons" />
              </TouchableOpacity>
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

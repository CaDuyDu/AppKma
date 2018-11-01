import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  Button,
  Body,
  Title,
  Thumbnail
} from "native-base";
import { TouchableOpacity, ListView, Alert } from "react-native";

var URL = "http://192.168.1.26:8088/backendAPI/listGroups.php";
var URL_API = "http://192.168.1.26:8088/backendAPI/memberGroups.php";

export default class ListGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      id:''
    };
  }

  getstarted() {
    this.props.navigation.navigate("HandlePage");
  }

  addGroups() {
    this.props.navigation.navigate("AddGroupSchools");
  }

  postGroups(){
    this.props.navigation.navigate("PostGroups");
  }

  render() {
    return (
      <Container>
        <Content>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => {
                  this.getstarted();
                }}
              >
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Groups School</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="menu" />
              </Button>
            </Right>
          </Header>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>KMA GROUPS</Text>
                <Text note numberOfLines={1}>Public</Text>
              </Body>
              <Right>
                <Button transparent
                    onPress={()=>{this.postGroups()}}
                >
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

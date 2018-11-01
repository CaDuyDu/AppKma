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

export default class ListSchools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      id:''
    };
    this.deleteData = this.deleteData.bind(this);
  }

  getstarted() {
    this.props.navigation.navigate("HandlePage");
  }

  addGroups() {
    this.props.navigation.navigate("AddGroupSchools");
  }

  fetchData() {
    fetch(URL, {
      method: "POST",
      body: null
    })
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData)
        });
      })
      .done();
  }

  deleteData() {
    fetch(API_DELETE,{
      method: "POST",
      body: JSON.stringify({
        id: id
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.error == "OK") {
        Alert.alert('Information', "Delete Successfully!");
      }
      else {
        Alert.alert('Information', "Error!");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.fetchData();
  }


  taohang(property) {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={require("../../images/logo.png")}
          />
        </Left>
        <Body>
          <Text>{property.name}</Text>
          <Text note numberOfLines={1}>
            {property.address}
          </Text>
        </Body>
        <Right>
          <Button 
            transparent style={{fontSize: 5}}
            onPress={() => {this.listMemberGroups()}}
          >
            <Text>View</Text>
          </Button>
          <Button 
            transparent 
            onPress={() => {
              this.deleteData;
            }}
          >
            <Text>Delete</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }

  listMemberGroups = () =>{
    // fetch(URL_API, {
    //   method: "POST",
    //   body:null
    // })
    // .then(response => response.json())
    // .then(responseData => {
    //   console.log(responseData);
    //   this.props.navigation.navigate("ListMemberGroups");
    // })
    // .done();
    this.props.navigation.navigate("ListMemberGroups");
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
            <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
              <Left>
                <Text>Add Groups</Text>
              </Left>
              <Right>
                <TouchableOpacity
                  onPress={() => {
                    this.addGroups();
                  }}
                >
                  <Icon name="md-add" type="Ionicons" />
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListView
              enableEmptySections
              dataSource={this.state.dataSource}
              renderRow={this.taohang.bind(this)}
            />
          </List>
        </Content>
      </Container>
    );
  }
}

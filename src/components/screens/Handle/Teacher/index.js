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

var URL = "http://192.168.1.26:8088/backendAPI/listTeacher.php";
var API_DELETE = "http://192.168.1.26:8088/backendAPI/deleteTeacher.php";

export default class ListTeachers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      id:'',
    };
    this.deleteData = this.deleteData.bind(this);
  }

  getstarted() {
    this.props.navigation.navigate("HandlePage");
  }

  addTeachers() {
    this.props.navigation.navigate("AddTeachers");
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

  deleteData = (id) => {
    fetch(API_DELETE,{
      method: "DELETE",
      body: JSON.stringify({
        id: id
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      if (responseData.error == "OK") {
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

  viewTeacher(){
    this.props.navigation.navigate("ViewTeacher");
  }


  taohang(property) {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={require("../../images/teacher.png")}
          />
        </Left>
        <Body>
          <Text>{property.name}</Text>
          <Text note numberOfLines={1}>
            {property.email}
          </Text>
        </Body>
        <Right>
          <Button 
            transparent style={{fontSize: 5}}
            onPress={()=>{this.viewTeacher()}}
          >
            <Text>View</Text>
          </Button>
          <Button 
            transparent 
            onPress={() => {
              this.deleteData(property.id);
            }}
          >
            <Text>Delete</Text>
          </Button>
        </Right>
      </ListItem>
    );
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
              <Title>Teachers</Title>
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
                <Text>Add Teachers</Text>
              </Left>
              <Right>
                <TouchableOpacity
                  onPress={() => {
                    this.addTeachers();
                  }}
                >
                  <Icon name="md-add" type="Ionicons" />
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.taohang.bind(this)}
            />
          </List>
        </Content>
      </Container>
    );
  }
}

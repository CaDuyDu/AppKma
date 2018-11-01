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

var URL = "http://192.168.1.26:8088/backendAPI/listNotification.php";

export default class NotificationsHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      id:'',
    };
  }

  getstarted() {
    this.props.navigation.navigate("HandlePage");
  }

  addNotifications() {
    this.props.navigation.navigate("AddNotifications");
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

  componentDidMount() {
    this.fetchData();
  }


  taohang(property) {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={require("../../images/thongbao.jpg")}
          />
        </Left>
        <Body>
          <Text>{property.title}</Text>
          <Text note numberOfLines={1}>
            {property.create_at}
          </Text>
        </Body>
        <Right>
          <Button transparent style={{fontSize: 5}}
            onPress={()=> {this.viewNotifi()}}
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

  viewNotifi = () =>{
    this.props.navigation.navigate("ViewNotifi");
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
              <Title>Notifications</Title>
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
                <Text>Add Notifications</Text>
              </Left>
              <Right>
                <TouchableOpacity
                  onPress={() => {
                    this.addNotifications();
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

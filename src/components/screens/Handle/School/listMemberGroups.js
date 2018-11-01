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

var URL = "http://192.168.1.26:8088/backendAPI/memberGroups.php";

export default class ListMemberGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
    };
  }

  getstarted() {
    this.props.navigation.navigate("HandlePage");
  }

  addMembers() {
    this.props.navigation.navigate("AddMembers");
  }

  fetchData(id) {
    fetch(URL, {
      method: "POST",
      body:null
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
            source={require("../../images/teacher.png")}
          />
        </Left>
        <Body>
          <Text>{property.name}</Text>
          <Text note numberOfLines={1}>
            {property.address}
          </Text>
        </Body>
        <Right>
          <Button transparent style={{fontSize: 5}}>
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
              <Title>Members Group</Title>
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
                <Text>Add Members</Text>
              </Left>
              <Right>
                <TouchableOpacity
                  onPress={() => {
                    this.addMembers();
                  }}
                >
                  <Icon name="md-add" type="Ionicons" />
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListView
              enableEmptySections
              dataSource={this.state.dataSource}
              renderRow={this.taohang}
            />
          </List>
        </Content>
      </Container>
    );
  }
}

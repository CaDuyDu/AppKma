import React, { Component } from "react";
import { Text, View, Image, ScrollView, ListView } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Item,
  Input,
  Footer,
  FooterTab,
  Badge,
  Card,
  CardItem,
  Thumbnail,
  Content,
  ListItem,
  List
} from "native-base";
import styles from "./styles";

var URL = "http://192.168.1.26:8088/backendAPI/listNotification.php";

export default class Thongbaomoi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  _newFeeds() {
    this.props.navigation.navigate("Newfeeds");
  }

  _handleNotifi() {
    this.props.navigation.navigate("Notifications");
  }

  _handleProfile() {
    this.props.navigation.navigate("Profiles");
  }

  _handleGroups() {
    this.props.navigation.navigate("Groups");
  }

  notifiComment(){
    this.props.navigation.navigate("CommentsNotifi");
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
          <Thumbnail square source={require("../images/thongbao.jpg")} />
        </Left>
        <Body>
          <Text>{property.title}</Text>
          <Text note numberOfLines={1}>
            {property.create_at}
          </Text>
        </Body>
        <Right>
          <Button transparent style={{ fontSize: 5 }}
            onPress={()=>{this.notifiComment()}}
          >
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }

  render() {
    return (
      <Container>
        <Header style={styles.container}>
          <Icon
            name="arrow-back"
            type="MaterialIcons"
            style={styles.arrowBack}
          />
          <Body>
            <Title style={{ color: "black" }}>Notifications</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <Content>
            <List>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={this.taohang.bind(this)}
              />
            </List>
          </Content>
        </ScrollView>
        <Footer>
          <FooterTab style={styles.footerColor}>
            <Button
              badge
              vertical
              onPress={() => {
                this._newFeeds();
              }}
            >
              <Badge>
                <Text></Text>
              </Badge>
              <Icon style={styles.iconClor} name="apps" />
              <Text style={styles.textFooter}>Apps</Text>
            </Button>

            <Button
              vertical
              onPress={() => {
                this._handleProfile();
              }}
            >
              <Icon style={styles.iconClor} name="user" type="EvilIcons" />
              <Text style={styles.textFooter}>Profile</Text>
            </Button>

            <Button
              badge
              vertical
              onPress={() => {
                this._handleNotifi();
              }}
            >
              <Badge>
                <Text>1</Text>
              </Badge>
              <Icon
                style={styles.iconClor}
                active
                name="bell"
                type="EvilIcons"
              />
              <Text style={styles.textFooter}>Notifications</Text>
            </Button>

            <Button
              vertical
              onPress={() => {
                this._handleGroups();
              }}
            >
              <Icon style={styles.iconClor} name="menu" type="MaterialIcons" />
              <Text style={styles.textFooter}>Groups</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

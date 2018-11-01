import React, { Component } from "react";
import { Text, View, Image, ScrollView,Alert } from "react-native";
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
export default class Groups extends Component {
  _newFeeds() {
    this.props.navigation.navigate("Newfeeds");
  }

  _handleNotifi() {
    this.props.navigation.navigate("Notifications");
  }

  _handleProfiles() {
    this.props.navigation.navigate("Profiles");
  }

  _handleGroups() {
    this.props.navigation.navigate("Groups");
  }

  _handleAddGroups() {
    this.props.navigation.navigate("ListGroups");
  }

  _handleLogout() {
    this.props.navigation.navigate("Login");
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
            <Title style={{ color: 'black'}}>Groups</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <ListItem icon>
            <Left>
              <Button
                style={{ backgroundColor: "#FF9501" }}
                onPress={() => {
                  this._handleAddGroups();
                }}
              >
                <Icon active name="group" type="FontAwesome" />
              </Button>
            </Left>
            <Body>
              <Text>Groups</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="help-with-circle" type="Entypo" />
              </Button>
            </Left>
            <Body>
              <Text>Help</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button
                style={{ backgroundColor: "#007AFF" }}
                onPress={() => Alert.alert(
                  'Infomations',
                  'Are you sure you want to log out?',
                  [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                    {text: 'OK', onPress: () => this._handleLogout()},
                  ],
                  { cancelable: false }
                )}
              >
                <Icon active name="logout" type="MaterialCommunityIcons" />
              </Button>
            </Left>
            <Body>
              <Text>Log out</Text>
            </Body>
          </ListItem>
        </Content>
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
                <Text>2</Text>
              </Badge>
              <Icon style={styles.iconClor} name="apps" />
              <Text style={styles.textFooter}>Apps</Text>
            </Button>
            
            <Button vertical
              onPress={() => {
                this._handleProfiles();
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
              <Icon style={styles.iconClor} active name="bell" type="EvilIcons" />
              <Text style={styles.textFooter}>Notifications</Text>
            </Button>

             <Button vertical
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

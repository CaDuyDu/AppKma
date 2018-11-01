import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  AppRegistry,
  TextInput
} from "react-native";
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
  ListItem
} from "native-base";
import styles from "./styles";

export default class CommentsNotifi extends Component {
  constructor(props) {
    super(props);
  }

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
  _handlePost() {
    this.props.navigation.navigate("PostNews");
  }
  render() {
    return (
      <Container>
        <ScrollView>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                source={require("../images/stock-vector-usser-account-669118549.jpg")}
              />
            </Left>
            <Body>
              <Text>Admin</Text>
              <Text note numberOfLines={1}>
                2018-10-26
              </Text>
            </Body>
          </ListItem>
          <ListItem>
            <Content>
              <Image
                source={require("../images/thongbao.jpg")}
                style={{ height: 200, width: null, flex: 1 }}
              />
              <Left>
                <Button transparent>
                  <Icon name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="share" />
                  <Text>Share</Text>
                </Button>
              </Right>
              <Body>
                <TextInput
                  onChangeText={text => this.setState({ text })}
                  placeholder="Wirte a reply..."
                  onKeyPress={keyPress => console.log(keyPress)}
                  onFocus={() => this._handlePost()}
                  style={styles.textInputCMT}
                />
              </Body>
            </Content>
          </ListItem>
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
                <Text>2</Text>
              </Badge>
              <Icon style={styles.iconClor} name="apps" />
              <Text style={styles.textFooter}>Apps</Text>
            </Button>

            <Button
              vertical
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
                <Text>51</Text>
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

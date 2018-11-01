import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  Image,
  ScrollView,
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

export default class FooterScreen extends Component {
  constructor(props) {
    super(props);
  }

  _newFeeds() {
    this.props.navigation.navigate("Newfeeds");
  }

  _handleNotifi() {
    this.props.navigation.navigate("Notifications");
  }

  render() {
    return (
      <Footer style={{ backgroundColor: "#aaaaff" }}>
        <FooterTab>
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
            <Icon name="apps" />
            <Text style={styles.textFooter}>Apps</Text>
          </Button>

          <Button vertical>
            <Icon name="camera" type="EvilIcons" />
            <Text style={styles.textFooter}>Camera</Text>
          </Button>

          <Button
            active
            badge
            vertical
            onPress={() => {
              this._handleNotifi();
            }}
          >
            <Badge>
              <Text>51</Text>
            </Badge>
            <Icon active name="bell" type="EvilIcons" />
            <Text style={styles.textFooter}>Notifications</Text>
          </Button>

          <Button vertical>
            <Icon name="user" type="EvilIcons" />
            <Text style={styles.textFooter}>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

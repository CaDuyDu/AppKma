import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Text, View, Image, ScrollView  } from "react-native";
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
} from "native-base";
import styles from "./styles";

export default class SlideHeader extends Component {
  constructor(props){
    super(props);
  }
  _newFeeds(){
    this.props.navigation.navigate("Newfeeds");
  }
  render() {
    return (
            <Header style={styles.container}>
                <Body>
                    <Item style={styles.searchHome}>
                    <Icon name="search" />
                    <Input style={styles.inputsearch} placeholder="Search" />
                    <Icon name="people" />
                    </Item>
                </Body>
                <Right>
                    <Button transparent>
                    <Icon name="heart" />
                    </Button>
                    <Button transparent>
                    <Icon name="more" />
                    </Button>
                </Right>
            </Header>
    );
  }
}

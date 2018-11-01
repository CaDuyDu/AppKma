import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Left,
  Right,
  Title, Icon
} from "native-base";
import styles from "./styles";
export default class ViewNotifi extends Component {
  listNotifi() {
    this.props.navigation.navigate("NotificationsHandle");
  }
  render() {
    return (
      <Container>
        <Header style={styles.headerPost}>
          <Left>
            <Button transparent onPress={() => this.listNotifi()}>
              <Icon style={styles.textPost} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.textPost}>News Report</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.addPostNews}>
              <Text style={styles.textPost}>Add</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Card>
            <CardItem header>
              <Text>THONG BAO</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Day la thong bao tu quan tri vien!</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>2018-10-26</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

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
export default class ViewTeacher extends Component {
    listTeacher() {
    this.props.navigation.navigate("ListTeachers");
  }
  render() {
    return (
      <Container>
        <Header style={styles.headerPost}>
          <Left>
            <Button transparent onPress={() => this.listTeacher()}>
              <Icon style={styles.textPost} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.textPost}>Infomations</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.addPostNews}>
              <Text style={styles.textPost}></Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Card>
            <CardItem header>
              <Text>Thông tin cá nhân</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Họ Tên: Giaovien1</Text>
                <Text>Địa chỉ email: gv1@gmail.com</Text>
                <Text>Tuổi: 30</Text>
                <Text>Chiều cao: 1m70</Text>
                <Text>Cân nặng: 60kg</Text>
                <Text>Giới tính: Nam</Text>
                <Text>Địa chỉ: HANOI</Text>
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

import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  Image,
  ScrollView,
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

export default class PostGroups extends Component {
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
            <Title style={{ color: 'black'}}>Profiles</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <ListItem>
            <Content>
              <Image
                source={require("../images/logo.png")}
                style={{ height: 200, width: null, flex: 1 }}
              />
              <Image
                style={styles.anhbia}
                source={require("../images/teacher.png")}
                resizeMode="stretch"
              />
              <Text style={styles.name}>
                KMA GROUPS
              </Text>
              
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon name="account-edit" type="MaterialCommunityIcons" />
                    <Text>Edit Infomatons</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon name="list" />
                    <Text>Actions</Text>
                  </Button>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name="info" type="Feather" />
                    <Text>Other</Text>
                  </Button>
                </Right>
              </CardItem>
              
              <Card>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Text>About</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Text>Photo</Text>
                  </Button>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>Friends</Text>
                  </Button>
                </Right>
              </CardItem>
              </Card>
            </Content>
          </ListItem>
          <ListItem>
            <Content>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail
                      source={require("../images/teacher.png")}
                    />
                    <Body>
                      <TextInput
                        onChangeText={text => this.setState({ text })}
                        placeholder="Posts New...."
                      />
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon name="videocam" type="MaterialIcons" />
                      <Text>Live</Text>
                    </Button>
                  </Left>
                  <Body>
                    <Button transparent>
                      <Icon name="photo" type="FontAwesome" />
                      <Text>Photo/Video</Text>
                    </Button>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Icon name="map-marker" type="FontAwesome" />
                      <Text>Check in</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
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
                <Text></Text>
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

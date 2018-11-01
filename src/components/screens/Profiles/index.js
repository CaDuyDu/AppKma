import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  Image,
  ScrollView,
  TextInput,
  ListView
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

var URL = "http://192.168.1.26:8088/backendAPI/listPost.php";

export default class Profiles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isImageViewVisible: false,
      activeTab: 0,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    }
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
      <ListItem>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require("../images/teacher.png")}
                />
                <Body>
                  <Text>Duy Du</Text>
                  <Text note>{property.create_at}</Text>
                </Body>
              </Left>
              <Right>
                <Button transparent>
                  <Icon name="remove" type="FontAwesome" />
                </Button>
                <Button transparent>
                  <Icon name="edit" type="FontAwesome" />
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{property.title}</Text>
                <Text>{property.content}</Text>
                <Image
                  source={require('../images/kehoach.jpg')}
                  style={{ height: 200, width: 285, flex: 1 }}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="thumbs-up" />
                  <Text>0 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent
                  onPress={() => { this._handleAddcoments() }}
                >
                  <Icon name="chatbubbles" />
                  <Text>0 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="share" />
                  <Text>Share</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
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
            <Title style={{ color: 'black'}}>Profiles</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <ListItem>
            <Content>
              <Image
                source={require("../images/2ee84dfa883866663f29.jpg")}
                style={{ height: 200, width: null, flex: 1 }}
              />
              <Image
                style={styles.anhbia}
                source={require("../images/teacher.png")}
                resizeMode="stretch"
              />
              <Text style={styles.name}>
                Duy Du
              </Text>
              
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon name="account-edit" type="MaterialCommunityIcons" />
                    <Text>Edit profiles</Text>
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
              <Text style={styles.prof}>
                <Icon style={styles.icon} name="book" type="FontAwesome" />
                Học tại Học viện Kỹ thuật Mật Mã
              </Text>
              <Text style={styles.prof}>
                <Icon style={styles.icon} name="book" type="FontAwesome" />
                Đã học tại THPT Thành Phố Điện Biên Phủ
              </Text>
              <Text style={styles.prof}>
              <Icon style={styles.icon} name="home" type="FontAwesome" />
                Sống tại Điện Biên Phủ
              </Text>
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
                        placeholder="What's on your mind , Duy?"
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
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.taohang.bind(this)}
          />
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

import React, { Component } from "react";
import {
  Text,
  Image,
  ScrollView,
  TextInput,
  ListView
} from "react-native";
import {
  Container,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Footer,
  FooterTab,
  Badge,
  Card,
  CardItem,
  Thumbnail,
  Content,
  ListItem,
  Picker
} from "native-base";
import SlideHeader from "../Header";
import styles from "./styles";

var URL = "http://192.168.1.26:8088/backendAPI/listPost.php";
var URL_API = "http://192.168.1.26:8088/backendAPI/listNotification.php";

export default class Newfeeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isImageViewVisible: false,
      activeTab: 0,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      dataSource1: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
    }
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

  fetchData1() {
    fetch(URL_API, {
      method: "POST",
      body: null
    })
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          dataSource1: this.state.dataSource1.cloneWithRows(responseData)
        });
      })
      .done();
  }

  componentDidMount() {
    this.fetchData();
    this.fetchData1();
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

  _handleAddcoments() {
    this.props.navigation.navigate("Addcomments");
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

  thongbao(property) {
    return (
      <ListItem>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require("../images/stock-vector-usser-account-669118549.jpg")}
                />
                <Body>
                  <Text>Admin</Text>
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
                  source={require('../images/thongbao.jpg')}
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
                  onPress={() => this._handleAddcoments()}
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
        <SlideHeader />
        <ScrollView>
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
                        onKeyPress={keyPress => console.log(keyPress)}
                        onFocus={() => this._handlePost()}
                      />
                    </Body>
                  </Left>
                </CardItem>
                <CardItem >
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
          <ListView
            dataSource={this.state.dataSource1}
            renderRow={this.thongbao.bind(this)}
          />
          <ListItem>
            <Content>
              <Card style={{ flex: 0 }}>
                <CardItem>
                  <Left>
                    <Thumbnail
                      source={require("../images/teacher.png")}
                    />
                    <Body>
                      <Text>Duy Dự</Text>
                      <Text note>2018-10-26 19:10:15</Text>
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
                    <Text>THÔNG BÁO MỚI</Text>
                    <Text>Kế hoạch gặp mặt đầu năm 2018</Text>
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
                      <Text>2 Comments</Text>
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
              <Badge styles={" backgroundColor: '#EEEEEE'"}>

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

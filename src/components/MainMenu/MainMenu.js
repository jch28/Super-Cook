import React from 'react';
import {
    View,
    StyleSheet,
    StatusBar
} from 'react-native';

import firebase from 'firebase';
import TabBar from '../TabBar/TabBar';
import HeaderBar from '../HeaderBar/HeaderBar';
import IngredientList from '../IngredientList/IngredientList';
import CheckOut from '../CheckOut/CheckOut';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ScrollableTabView from 'react-native-scrollable-tab-view'


class MainMenu extends React.Component {

  static navigationOptions = {
        header: null,
    }

  constructor() {
    super()
    this.state = {
      isReady: false,
      list: [],
      //selectedIndex: 1
    }
    console.disableYellowBox = true;
    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
    this.removeFilterUpdate = this.removeFilterUpdate.bind(this);
    //this.handleUpdateIndex = this.handleUpdateIndex.bind(this)
  }

  handleFilterUpdate(filterValue) {

        var t = 0;
        for(var i = 0; i < this.state.list.length; i++) {
          if (this.state.list[i] === (filterValue)) {
            t = 1;
            break;
          }
        }

        if (t === 0){
          this.setState({
            list: this.state.list.concat(
              filterValue
            )
          })
        }
    }

  removeFilterUpdate(filterValue) {
    for(var i = 0; i < this.state.list.length; i++) {
        if(this.state.list[i] === (filterValue)) {
          var array = this.state.list;
          array.splice(i, 1);
          this.setState({
            list: array
          })
        }
    }
  }

  componentWillMount() {

    Expo.Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });

  }

  render () {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
      }
    const { navigation } = this.props;
    return (



      <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#FFF'
                  }}>
        <View style={{
                    flex: 1,
                    }}>
          <StatusBar
            backgroundColor="#06544b"
            barStyle="light-content"
            />
            <HeaderBar
              navigation = {navigation}
              change={this.handleFilterUpdate}
              remove={this.removeFilterUpdate}
            />

            <ScrollableTabView
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                      initialPage={0}
                      tabBarUnderlineStyle ={{
                        backgroundColor: '#fff',
                        height: 2,
                      }}
                      tabBarUnderlineColor="#fff"
                      tabBarBackgroundColor ='#075e54'
                      tabBarActiveTextColor="#fff"
                      tabBarInactiveTextColor="#88b0ac"
                      >
            <IngredientList navigation={navigation} change={this.handleFilterUpdate} remove={this.removeFilterUpdate} tabLabel="Add Ingredients" />
            <CheckOut navigation={navigation} item={this.state.list} remove={this.removeFilterUpdate} tabLabel="Ingredients List" />

            </ScrollableTabView>

            <View style={{}} />
          </View>
        </View>

      )
    }
  }

  export default MainMenu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },
});

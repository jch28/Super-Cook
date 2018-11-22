import React from 'react'
import { View, ScrollView, Image, ImageBackground, Text, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
import {
  Header,
  CheckBox
} from 'react-native-elements';
import BakingList from './BakingList';

const CustomHeader = () => (
  <View style = {{flexDirection: 'row'}}>
    <View style = {{paddingTop: 4, paddingLeft: -3}}>
    </View>
    <View style = {{flexDirection: 'column'}}>
      <Text style={{paddingBottom:2, color: 'white', fontSize: 21, fontWeight: 'bold'}}>{"  Baking & Grains"}</Text>
    </View>
  </View>
);

export default class Baking extends React.Component {
  state = {
    checked: false,
  };

  change (value) {
    this.props.navigation.state.params.adds(value);
  }

  rem (value) {
    this.props.navigation.state.params.dels(value);
  }

  static navigationOptions = ({ navigation }) => ({
      headerTitle: <CustomHeader/> ,
      headerTintColor: 'white',
      headerStyle: {height: 55,backgroundColor: '#075e54', marginTop: -20},
  });

  render() {
    return (
      <View style={styles.container}>

      <BakingList changed = {this.change.bind(this)} deleted = {this.rem.bind(this)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    //justifyContent: 'center',
    //alignItems: 'center',
  }
})

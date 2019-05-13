import React from 'react'
import Dimensions from 'Dimensions';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking, Switch } from 'react-native'
import {
  CheckBox,
  List,
  ListItem,
  Button,
  Avatar,
} from 'react-native-elements';
import data from './Recipes';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class Results extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      recipes:[],
      newList: this.props.navigation.state.params.lists,
      bonusrecipes:[],
      toggle: false,
    }
    this.switchMore = this.switchMore.bind(this)
  }

  componentDidMount(props){

    this.props.navigation.setParams({
      toggle: this.state.toggle,
      switchMore: this.switchMore,
     });

    var obj = Object.values(data.recipes)
    var samples = []
    var moresamples = []
    for (var i = 0; i < obj.length; i++) {
        var matches = 0;
        for (var j = 0; j < this.state.newList.length; j++){
            if (this.state.newList[j].toLowerCase().replace(/ /g,'') in obj[i]){
                matches++;
            }
        }

        if ("vegetableoil" in obj[i] && !this.state.newList.includes("Vegetable Oil")){
          matches++;
        }

        if (matches === obj[i].s){
          samples.push(obj[i])
        }

        else if (matches === obj[i].s - 1 && obj[i].s !== 1 && (obj[i].s !== 2 && "vegetableoil" in obj[i])){
          moresamples.push(obj[i])
        }
    }

    samples.sort((a, b) => (a.s) - (b.s)).reverse();
    moresamples.sort((a, b) => (a.s) - (b.s)).reverse();

    this.setState({
          recipes: samples,
          bonusrecipes: moresamples
    })
  }

  switchMore = () => {
    var current = this.state.toggle
    this.setState({
      toggle: !current
    })
    this.props.navigation.setParams({
      toggle: !this.state.toggle,
    })
  }

  static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
          headerTitle:
          <View style = {{flexDirection: 'row'}}>
            <View style = {{paddingTop: 4, paddingLeft: -3}}>
            </View>
            <View style = {{flexDirection: 'column'}}>
              <Text style={{paddingBottom:2, color: 'white', fontSize: 21, fontWeight: 'bold'}}>{"  Recipes"}</Text>
            </View>
          </View>,
          headerTintColor: 'white',
          headerStyle: {height: 55,backgroundColor: '#075e54', marginTop: -20},
          headerRight:
          <View style = {{flexDirection: 'row', paddingRight: DEVICE_WIDTH * 0.02 }}>
            <Switch value = {params.toggle} onValueChange = {() => params.switchMore()}/>
          </View>,
        };
    };

  render() {
    return (
      <View>

      {this.state.recipes[0] === undefined ?
        <View style={styles.othercontainer}>
        <Text style = {{color: '#4c4c4c'}}>No Results Found</Text>
        </View> : null
      }

      {this.state.recipes[0] !== undefined ?
      <ScrollView>


        {this.state.toggle === false ?
         <List containerStyle = {{
           flex: 1,
           marginTop: 0,
           borderTopWidth: 0,
           }}>
           {this.state.recipes.map((k) => (
             <TouchableOpacity>
             <ListItem containerStyle = {{ height: 80, paddingTop: 15, borderTopWidth:0, borderBottomWidth: 0.25}}
               avatar={
                 <Avatar
                 medium
                 rounded
                 source={{uri: 'https://i.imgur.com/Qnq8g5T.png'}}
                 />
               }
               title = {
                 k.b
               }
               subtitle = 'allrecipes.com'
               onPress={() => Linking.openURL("https://www.allrecipes.com/recipe/" + k.l)}
             />
             </TouchableOpacity>
           ))
         }
         </List> :
         <List containerStyle = {{
           flex: 1,
           marginTop: 0,
           borderTopWidth: 0,
           }}>
           {this.state.bonusrecipes.map((k) => (
             <TouchableOpacity>
             <ListItem containerStyle = {{ height: 80, paddingTop: 15, borderTopWidth:0, borderBottomWidth: 0.25}}
               avatar={
                 <Avatar
                 medium
                 rounded
                 source={{uri: 'https://i.imgur.com/Qnq8g5T.png'}}
                 />
               }
               title = {
                 k.b
               }
               subtitle = 'allrecipes.com'
               badge={{ value: 1 }}
               onPress={() => Linking.openURL("https://www.allrecipes.com/recipe/" + k.l)}
               hideChevron
             />
             </TouchableOpacity>
           ))
         }
         </List>
       }
      </ScrollView>:null
    }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  othercontainer: {
    flex: 1,
    paddingTop: DEVICE_HEIGHT * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

import React from 'react'
import { View, Linking, TouchableOpacity, AsyncStorage, ScrollView, Image, ImageBackground, Text, BackHandler, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
import {
  Header,
  CheckBox,
  List,
  ListItem,
  Button,
  Avatar,
} from 'react-native-elements';
import Icon from '@expo/vector-icons/FontAwesome';
import Results from '../Results/Results';

export default class CheckOut extends React.Component {
  constructor() {
    super()
    this.state = {
      unavailable: [],
      list: [],
      selectedIndex: 0,
      recipelist: []
    }
    this.handleUpdateIndex = this.handleUpdateIndex.bind(this)
  }

  static navigationOptions = {
    header: null,
    };

  handleUpdateIndex (selected) {
    this.componentDidMount();
    this.setState({selectedIndex : selected})
  }

  componentDidMount() {
  }

  _onRefresh = () => {
    this.componentDidMount();
  }

  render() {

    const { selectedIndex } = this.state
    return(
      <View style={styles.container}>
      {this.state.selectedIndex === 1 ?
        <View>
        <ScrollView>
        <List containerStyle = {{
          flex: 1,
          marginTop: 0,
          borderTopWidth: 0,
          paddingBottom: 70
          }}>
          {this.state.recipelist.map((k) => (
            <TouchableOpacity>
            <ListItem containerStyle = {{ height: 100, paddingTop: 15, borderTopWidth:0, borderBottomWidth: 0.25}}
              avatar={

                <Avatar
                large
                rounded
                source={{uri: k.url}}
                />

              }
              title = {
                <Text style={{
                  fontSize:18
                }}>
                {"  " + k.base}
                </Text>
              }
              subtitle = 'food.com'
              onPress={() => Linking.openURL('https://google.com')}

            />
            </TouchableOpacity>
          ))
        }
        </List>
        </ScrollView>
        </View>: null
      }

      {this.state.selectedIndex === 0 ?
      <View style = {{Color: '#FFF'}}>
      <ScrollView Style = {{flex: 1, backgroundColor: '#FFF'}}>

        <View Style = {{backgroundColor: '#FFF'}}>
        <ScrollView Style = {{backgroundColor: '#FFF'}}>
        <List containerStyle = {{
          flex: 1,
          marginTop: 0,
          borderTopWidth: 0,
          paddingBottom: 10,
          backgroundColor: '#FFF'
          }}>
          {this.props.item.map((l) => (
            <ListItem containerStyle = {{ height: 50, paddingTop: 15, borderTopWidth:0, borderBottomWidth: 0.25}}
              avatar={
                <View style = {{flexDirection: 'row', backgroundColor: '#FFF'}}>
                <TouchableOpacity
                  onPress={() =>

                    {
                      this.props.remove(l)
                    }
                  }
                >
                <Image
                  style={{width: 30, height: 30}}
                  source={{uri: 'https://i.imgur.com/9ukbPRu.png'}}/>
                </TouchableOpacity>
                <Text style = {{color: 'steelblue', paddingTop: 5}}>

                {'   '+l }
                </Text>

                </View>
              }
              hideChevron
            />
          ))
        }
        </List>
        </ScrollView>
        </View>
      </ScrollView>



      <TouchableOpacity
        style={{
          position: 'absolute',
          alignItems:'center',
          justifyContent:'center',
          width:55,
          height:55,
          backgroundColor:'rgba(30, 30, 30, 0.2)',
          borderRadius:100,
          alignSelf: 'flex-end',
          margin: 50,
          top: Dimensions.get('window').height * 0.595,
          left: Dimensions.get('window').width * 0.615,
          //position: 'absolute',
          //top: Dimensions.get('window').height*0.68,
          //left: Dimensions.get('window').width*0.66
        }}
        onPress={() => this.props.navigation.navigate('Results',
          {
            lists : this.props.item
          })}
      >
      <Icon
        size={30}
        type='entypo'
        color="#FFF"
         />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          alignItems:'center',
          justifyContent:'center',
          top: Dimensions.get('window').height * 0.59,
          left: Dimensions.get('window').width * 0.615,
          width:55,
          height:55,
          backgroundColor:"#075e54",
          borderRadius:100,
          alignSelf: 'flex-end',
          margin: 50,
          shadowColor:'#000000',
          shadowOpacity:0.7,
        }}
        onPress={() => this.props.navigation.navigate('Results',
          {
            lists : this.props.item
          })}

      >
        <Icon
          name={"arrow-right"}
          size={30}
          type='entypo'
          color="#FFF"
           />
      </TouchableOpacity>
      </View>:null
    }
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

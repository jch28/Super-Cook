import React, { Component } from 'react';
import { AppRegistry, View, Dimensions, Image, ImageBackground, Text } from 'react-native';
import {
  Header,
  CheckBox
} from 'react-native-elements';

export default class DairyGrid extends React.Component {

  constructor() {
   super()
   this.state = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checkbox9: false,
     //selectedIndex: 1
     };
     //this.handleUpdateIndex = this.handleUpdateIndex.bind(this)
   }

  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
      }}>
        <View style={{paddingTop: 12}}>

          <View style={{width: Dimensions.get('window').width *0.29, height: Dimensions.get('window').width *0.37, marginLeft:10, backgroundColor: '#FFF'}}>
          <ImageBackground source={{uri: 'https://i.imgur.com/HLXryqV.png'}}
          style={{width: Dimensions.get('window').width * 0.21, height: Dimensions.get('window').height * 0.13}}>
          <CheckBox
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
            paddingTop: -14,
            height: Dimensions.get('window').height * 0.14,
            width: Dimensions.get('window').width * 0.32,
            paddingLeft:  Dimensions.get('window').width * 0.18,
          }}
          checked={this.state.checkbox1}
          onPress={() => this.setState({ checkbox1: !this.state.checkbox1 })}
          />

          </ImageBackground>
          <Text style={{textAlign: 'center', paddingTop: 5, paddingRight: 17, fontWeight: 'bold', fontSize: 14, color: 'steelblue'}}> Butter </Text>
          </View>

          <View style={{width: Dimensions.get('window').width *0.29, height: Dimensions.get('window').width *0.37, marginLeft:10, backgroundColor: '#FFF'}}>
          <ImageBackground source={{uri: 'https://i.imgur.com/GvAJcnX.png'}}
          style={{width: Dimensions.get('window').width * 0.21, height: Dimensions.get('window').height * 0.13}}>
          <CheckBox
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
            paddingTop: -14,
            height: Dimensions.get('window').height * 0.14,
            width: Dimensions.get('window').width * 0.32,
            paddingLeft:  Dimensions.get('window').width * 0.18,
          }}
          checked={this.state.checkbox2}
          onPress={() => this.setState({ checkbox2: !this.state.checkbox2 })}
          />
          </ImageBackground>
          <Text style={{textAlign: 'center', paddingTop: 5, paddingRight: 17,  fontWeight: 'bold', fontSize: 14, color: 'steelblue'}}> Custard </Text>
          </View>

          <View style={{width: Dimensions.get('window').width *0.29, height: Dimensions.get('window').width *0.37, marginLeft:10, backgroundColor: '#FFF'}}>
          <ImageBackground source={{uri: 'https://i.imgur.com/36POo0n.png'}}
          style={{width: Dimensions.get('window').width * 0.21, height: Dimensions.get('window').height * 0.13}}>
          <CheckBox
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
            paddingTop: -14,
            height: Dimensions.get('window').height * 0.14,
            width: Dimensions.get('window').width * 0.32,
            paddingLeft:  Dimensions.get('window').width * 0.18,
          }}
          checked={this.state.checkbox3}
          onPress={() => this.setState({ checkbox3: !this.state.checkbox3 })}
          />
          </ImageBackground>
          <Text style={{textAlign: 'center', paddingTop: 5, paddingRight: 17, fontWeight: 'bold', fontSize: 14, color: 'steelblue'}}> Milk </Text>
          </View>
        </View>

        <View style={{paddingTop: 12}}>

          <View style={{width: Dimensions.get('window').width *0.29, height: Dimensions.get('window').width *0.37, marginLeft:10, backgroundColor: '#FFF'}}>
          <ImageBackground source={{uri: 'https://i.imgur.com/9SENqe3.png'}}
          style={{width: Dimensions.get('window').width * 0.21, height: Dimensions.get('window').height * 0.13}}>
          <CheckBox
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
            paddingTop: -14,
            height: Dimensions.get('window').height * 0.14,
            width: Dimensions.get('window').width * 0.32,
            paddingLeft:  Dimensions.get('window').width * 0.18,
          }}
          checked={this.state.checkbox4}
          onPress={() => this.setState({ checkbox4: !this.state.checkbox4 })}
          />
          </ImageBackground>
          <Text style={{textAlign: 'center', paddingTop: 5, paddingRight: 17,  fontWeight: 'bold', fontSize: 14, color: 'steelblue'}}> Butter Milk </Text>
          </View>

          <View style={{width: Dimensions.get('window').width *0.29, height: Dimensions.get('window').width *0.37, marginLeft:10, backgroundColor: '#FFF'}}>
          <ImageBackground source={{uri: 'https://i.imgur.com/UhcQt2I.png'}}
          style={{width: Dimensions.get('window').width * 0.21, height: Dimensions.get('window').height * 0.13}}>
          <CheckBox
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
            paddingTop: -14,
            height: Dimensions.get('window').height * 0.14,
            width: Dimensions.get('window').width * 0.32,
            paddingLeft:  Dimensions.get('window').width * 0.18,
          }}
          checked={this.state.checkbox5}
          onPress={() => this.setState({ checkbox5: !this.state.checkbox5})}
          />
          </ImageBackground>
          <Text style={{textAlign: 'center', paddingTop: 5, paddingRight: 17,  fontWeight: 'bold', fontSize: 14, color: 'steelblue'}}> Egg </Text>
          </View>

          <View style={{width: Dimensions.get('window').width *0.29, height: Dimensions.get('window').width *0.37, marginLeft:10, backgroundColor: '#FFF'}}>
          <ImageBackground source={{uri: 'https://i.imgur.com/xUALZzO.png'}}
          style={{width: Dimensions.get('window').width * 0.21, height: Dimensions.get('window').height * 0.13}}>
          <CheckBox
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
            paddingTop: -14,
            height: Dimensions.get('window').height * 0.14,
            width: Dimensions.get('window').width * 0.32,
            paddingLeft:  Dimensions.get('window').width * 0.18,
          }}
          checked={this.state.checkbox6}
          onPress={() => this.setState({ checkbox6: !this.state.checkbox6 })}
          />
          </ImageBackground>
          <Text style={{textAlign: 'center', paddingTop: 5, paddingRight: 17,  fontWeight: 'bold', fontSize: 14, color: 'steelblue'}}> Sour Cream </Text>
          </View>
        </View>
        <View style={{paddingTop: 12}}>

          <View style={{width: Dimensions.get('window').width *0.29, height: Dimensions.get('window').width *0.37, marginLeft:10, backgroundColor: '#FFF'}}>
          <ImageBackground source={{uri: 'https://i.imgur.com/IueK52c.png'}}
          style={{width: Dimensions.get('window').width * 0.21, height: Dimensions.get('window').height * 0.13}}>
          <CheckBox
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
            paddingTop: -14,
            height: Dimensions.get('window').height * 0.14,
            width: Dimensions.get('window').width * 0.32,
            paddingLeft:  Dimensions.get('window').width * 0.18,
          }}
          checked={this.state.checkbox7}
          onPress={() => this.setState({ checkbox7: !this.state.checkbox7 })}
          />
          </ImageBackground>
          <Text style={{textAlign: 'center', paddingTop: 5, paddingRight: 17,  fontWeight: 'bold', fontSize: 14, color: 'steelblue'}}> Cheese </Text>
          </View>
          <View style={{width: Dimensions.get('window').width *0.29, height: Dimensions.get('window').width *0.37, marginLeft:10, backgroundColor: '#FFF'}}>
          <ImageBackground source={{uri: 'https://i.imgur.com/RJr5bWL.png'}}
          style={{width: Dimensions.get('window').width * 0.21, height: Dimensions.get('window').height * 0.13}}>
          <CheckBox
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
            paddingTop: -14,
            height: Dimensions.get('window').height * 0.14,
            width: Dimensions.get('window').width * 0.32,
            paddingLeft:  Dimensions.get('window').width * 0.18,
          }}
          checked={this.state.checkbox8}
          onPress={() => this.setState({ checkbox8: !this.state.checkbox8 })}
          />
          </ImageBackground>
          <Text style={{textAlign: 'center', paddingTop: 5, paddingRight: 17,  fontWeight: 'bold', fontSize: 14, color: 'steelblue'}}> Ice Cream </Text>
          </View>
          <View style={{width: Dimensions.get('window').width *0.29, height: Dimensions.get('window').width *0.37, marginLeft:10, backgroundColor: '#FFF'}}>
          <ImageBackground source={{uri: 'https://i.imgur.com/zYBk9Jx.png'}}
          style={{width: Dimensions.get('window').width * 0.21, height: Dimensions.get('window').height * 0.13}}>
          <CheckBox
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
            paddingTop: -14,
            height: Dimensions.get('window').height * 0.14,
            width: Dimensions.get('window').width * 0.32,
            paddingLeft:  Dimensions.get('window').width * 0.18,
          }}
          checked={this.state.checkbox9}
          onPress={() => this.setState({ checkbox9: !this.state.checkbox9 })}
          />
          </ImageBackground>
          <Text style={{textAlign: 'center', paddingTop: 5, paddingRight: 17,  fontWeight: 'bold', fontSize: 14, color: 'steelblue'}}> Yoghurt </Text>
          </View>
        </View>
      </View>


    );
  }
};

// skip this line if using Create React Native App

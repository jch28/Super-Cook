import React from 'react';
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
    AppRegistry,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Font } from 'expo';
import Search from '../Search/Search';
import Icon from '@expo/vector-icons/FontAwesome';

import {
  Header
} from 'react-native-elements';

class HeaderBar extends React.Component {

    add (value) {
          this.props.change(value);
    }
    del (value) {
          this.props.remove(value);
    }

    state = {
      fontLoaded: false,
    };

    async componentDidMount() {
      await Font.loadAsync({
        'KlavikaBold': require('./KlavikaBold.ttf'),
      });
      this.setState({ fontLoaded: true });
    }

    render () {
      return (
        <View>
        {
          this.state.fontLoaded ? (
        <Header
          outerContainerStyles={{
            backgroundColor: '#075e54',
            borderBottomWidth: 0,
            height: 55
          }}

          placement = "left"

          leftComponent={
            <View style = {{flexDirection: 'row', paddingTop: 2}}>
            <Text style={{
              color: '#fff',
              fontSize: 24,
              fontFamily: 'KlavikaBold',
            }}> Super Cook </Text>
            </View>
          }
          rightComponent={
            <View style = {{flexDirection: 'row', paddingTop: 2, paddingRight: 20}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Search',
              {
                adds: this.add.bind(this),
                dels: this.del.bind(this)
              })
            }
            >
            <Icon
              name={"search"}
              size={24}
              type='entypo'
              color="#FFF"
               />
             </TouchableOpacity>
             </View>

          }
        />
      ) : null}
      </View>
      )
      }
    }

export default HeaderBar

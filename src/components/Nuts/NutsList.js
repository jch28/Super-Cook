import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    StatusBar,
    Image,
    ImageBackground,
    BackHandler,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';

import {
  List,
  ListItem,
  Icon,
  CheckBox
} from 'react-native-elements';

import { createStackNavigator } from 'react-navigation';
import Dairy from '../Dairy/Dairy';
import Vegetables from '../Vegetables/Vegetables';
import HeaderBar from '../HeaderBar/HeaderBar';

const list = [
  {
    name: 'Allspice',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Almond',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Cashew',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Macadamia',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Nutmeg',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Peanut',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Peanut Butter',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Pecan',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Walnut',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  }
]

export default class NutsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        checked : [],
        included: false,
    }
  }

  checkItem = checkbox => {

     const { checked } = this.state;
     if (!checked.includes(checkbox)) {
      this.setState({ checked: checked.concat([checkbox]) });
      var number = checkbox.toString();
      this.props.changed(number);
    } else {
      this.setState({ checked: checked.filter(a => a !== checkbox) });
      var number = checkbox.toString();
      this.props.deleted(number);
    }
  };

  render () {
    return(
      <View containerStyle = {{backgroundColor: '#FFF'}}>
      <ScrollView containerStyle = {{backgroundColor: '#FFF'}}>
      <View>
      <List containerStyle = {{
        flex: 1,
        marginTop: 0,
        borderTopWidth: 0,
        }}>
        {list.map((l) => (
          <ListItem containerStyle = {{borderTopWidth:0, borderBottomWidth: 0.25}}

            avatar={
              <View style = {{flexDirection: 'row'}}>
                <Image
                  style={{width: 45, height: 45}}
                  source={{uri: l.avatar_url}}/>

                <Text style = {{paddingTop:20, color: 'steelblue'}}>

                {'  '+l.name }
                </Text>
              </View>
            }
            title={
              <CheckBox
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
              }}
              right
              checkedIcon='minus-circle'
              uncheckedIcon='plus-circle'
              iconRight
              onPress={
                () => {
                  this.checkItem(l.name);
                }
                //() => this.checkItem(l.checkbox)
              }
              checked={this.state.checked.includes(l.name)}

              />
            }
            hideChevron
          />
        ))
      }
      </List>
      </View>

      </ScrollView>
      </View>
    )
  }
}

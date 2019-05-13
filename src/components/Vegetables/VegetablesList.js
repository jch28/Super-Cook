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
    name: 'Avocado',
    avatar_url: 'https://i.imgur.com/ubwLE1E.png',
  },
  {
    name: 'Basil',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Beans',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Broccoli',
    avatar_url: 'https://i.imgur.com/sIxzkAH.png',
  },
  {
    name: 'Cabbage',
    avatar_url: 'https://i.imgur.com/PIgw93G.png',
  },
  {
    name: 'Carrot',
    avatar_url: 'https://i.imgur.com/iX6q5cx.png',
  },
  {
    name: 'Cauliflower',
    avatar_url: 'https://i.imgur.com/jepRRBh.png',
  },
  {
    name: 'Celery',
    avatar_url: 'https://i.imgur.com/cIc4BpR.png',
  },
  {
    name: 'Coriander',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Corn',
    avatar_url: 'https://i.imgur.com/T1zgMRS.png',
  },
  {
    name: 'Cucumber',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Eggplant',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Garlic',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Ginger',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Lettuce',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Mint',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Mushroom',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Olive',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Onion',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Oregano',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Pickle',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Potato',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Pumpkin',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Seeds',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Shallot',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Spinach',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Sweet Potato',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Thyme',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Tomato',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  },
  {
    name: 'Zucchini',
    avatar_url: 'https://i.imgur.com/0zfrvlw.png',
  }
]

export default class VegetablesList extends React.Component {

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

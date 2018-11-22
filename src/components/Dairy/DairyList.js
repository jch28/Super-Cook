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
    name: 'Butter',
    avatar_url: 'https://i.imgur.com/HLXryqV.png',
    key: 1,
    //subtitle: 'Vice President'
  },
  {
    name: 'Butter Milk',
    avatar_url: 'https://i.imgur.com/9SENqe3.png',
    key: 2,
    //subtitle: 'Vice Chairman'
  },
  {
    name: 'Cheese',
    avatar_url: 'https://i.imgur.com/IueK52c.png',
    key: 3,
  },
  {
    name: 'Custard',
    avatar_url: 'https://i.imgur.com/GvAJcnX.png',
    key: 4,
  },
  {
    name: 'Egg',
    avatar_url: 'https://i.imgur.com/UhcQt2I.png',
    key: 5,
  },
  {
    name: 'Ice Cream',
    avatar_url: 'https://i.imgur.com/RJr5bWL.png',
    key: 6,
  },
  {
    name: 'Milk',
    avatar_url: 'https://i.imgur.com/36POo0n.png',
    key: 7,
  },
  {
    name: 'Sour Cream',
    avatar_url: 'https://i.imgur.com/GvAJcnX.png',
    key: 8,
  },
  {
    name: 'Yoghurt',
    avatar_url: 'https://i.imgur.com/zYBk9Jx.png',
    key: 9,
  }
]



export default class DairyList extends React.Component {


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

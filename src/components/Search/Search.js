import React from 'react'
import Dimensions from 'Dimensions';
import { Searchbar } from 'react-native-paper';
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
    ActivityIndicator
} from 'react-native';

import {
  List,
  ListItem,
  Icon,
  CheckBox
} from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const screen = Dimensions.get("window");

let _this = null;

export default class Search extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      completelist: [
        'Baking Soda', 'Baking Powder', 'Batter', 'Blueberries', 'Bread', 'Chocolate', 'Cocoa', 'Dough', 'Flour', 'Noodles', 'Pasta', 'Rice', 'Vanilla', 'Yeast', 'Avocado', 'Basil', 'Beans', 'Broccoli', 'Cabbage', 'Carrot', 'Cauliflower', 'Celery', 'Corn', 'Cucumber', 'Eggplant', 'Garlic', 'Ginger', 'Lettuce', 'Mint', 'Mushroom', 'Olive', 'Onion', 'Oregano', 'Pickle', 'Potato', 'Pumpkin', 'Seed', 'Shallot', 'Spinach', 'Sweet Potato', 'Thyme', 'Tomato', 'Zucchini','Butter', 'Butter Milk', 'Cheese', 'Custard', 'Egg', 'Ice Cream', 'Milk', 'Sour Cream', 'Yoghurt', 'Apple', 'Banana', 'Blackberries', 'Cherries', 'Coconut', 'Cranberries', 'Grapes', 'Kiwi', 'Lemon', 'Lime', 'Mango', 'Orange', 'Peach', 'Pear', 'Pineapple', 'Raspberries', 'Strawberries', 'Beef Soup', 'Beer', 'Chicken Soup', 'Lamb Soup', 'Olive Oil', 'Red Wine', 'Vegetable Oil', 'White Wine', 'Barbeque Sauce', 'Syrup', 'Fish Sauce', 'Honey', 'Mayonnaise', 'Mustard', 'Soy Sauce', 'Vinegar', 'Carp', 'Catfish', 'Crab', 'Eel', 'Lobster', 'Mackerel', 'Mussel', 'Oyster', 'Prawn', 'Salmon', 'Sardine', 'Scallop', 'Shrimp', 'Squid', 'Trout', 'Tuna', 'Almond', 'Cashew', 'Macadamia', 'Peanut', 'Peanut Butter', 'Walnut', 'Bacon', 'Beef', 'Chicken', 'Ham', 'Lamb', 'Pork', 'Salami', 'Sausage', 'Turkey', 'Watermelon', 'Paprika', 'Apple Juice', 'Orange Juice', 'Coriander', 'Pecan', 'Allspice', 'Nutmeg', 'Tomato Sauce'
      ],
      list: [],
      checked:[],
      included:false,
    }
    this.handleFilterUpdate = this.handleFilterUpdate.bind(this)
  }

  componentDidMount() {
       _this = this;
   }

  checkItem = checkbox => {
     const { checked } = this.state;
     if (!checked.includes(checkbox)) {
      this.setState({ checked: checked.concat([checkbox]) });
      var number = checkbox.toString();
      this.props.navigation.state.params.adds(number);
    } else {
      this.setState({ checked: checked.filter(a => a !== checkbox) });
      var number = checkbox.toString();
      this.props.navigation.state.params.dels(number);
    }
  };

  findstr(string){

    var sample = [];
    if (string != "" && string != " "){
      for(var i = 0; i < this.state.completelist.length; i++) {
        if (this.state.completelist[i].toLowerCase().includes(string.toLowerCase())){
          var word = this.state.completelist[i]
          sample.push(word)
        }
      }
    }
    this.setState({
        list: sample
    })
  }

  static navigationOptions = {
    headerTitle:
      <View style={{width: DEVICE_WIDTH - 80}}>
      <Searchbar
        placeholder="Search"
        onChangeText={(query) => _this.findstr(query)}
      />
      </View>,
    headerStyle: {height: 55, backgroundColor: '#075e54', marginTop: -20},
    headerTintColor: 'white',
  }

  handleFilterUpdate() {
  }

  render() {
    return (
      <View containerStyle = {{backgroundColor: '#FFF'}}>

      {this.state.list[0] === undefined ?
        <View style={styles.container}>
        <Text style = {{color: '#4c4c4c'}}>No Results Found</Text>
        </View>: null
      }

      {this.state.list[0] !== undefined ?
      <ScrollView containerStyle = {{backgroundColor: '#FFF'}}>
      <View>
      <List containerStyle = {{
        flex: 1,
        marginTop: 0,
        borderTopWidth: 0,
        }}>
        {this.state.list.map((l) => (
          <ListItem containerStyle = {{borderTopWidth:0, borderBottomWidth: 0.25}}

            avatar={
              <View style = {{flexDirection: 'row'}}>
                <Image
                  style={{width: 45, height: 45}}
                  source={{uri: 'https://i.imgur.com/0zfrvlw.png'}}/>

                <Text style = {{paddingTop:20, color: 'steelblue'}}>

                {'  '+l }
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
                  this.checkItem(l);
                }
                //() => this.checkItem(l.checkbox)
              }
              checked={this.state.checked.includes(l)}

              />
            }
            hideChevron
          />
        ))
      }
      </List>
      </View>

      </ScrollView>:null
    }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: DEVICE_HEIGHT * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

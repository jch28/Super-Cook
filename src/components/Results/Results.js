import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native'
import {
  Header,
  CheckBox,
  List,
  ListItem,
  Button,
  Avatar,
} from 'react-native-elements';
import firebase from 'firebase';
import LoadScreen from '../LoadScreen/LoadScreen';

const CustomHeader = () => (
  <View style = {{flexDirection: 'row'}}>
    <View style = {{paddingTop: 4, paddingLeft: -3}}>
    </View>
    <View style = {{flexDirection: 'column'}}>
      <Text style={{paddingBottom:2, color: 'white', fontSize: 21, fontWeight: 'bold'}}>{"  Recipes"}</Text>
    </View>
  </View>
);

export default class Results extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      recipes:[],
      completelist: [
        'Baking Soda', 'Baking Powder', 'Batter', 'Blueberries', 'Bread', 'Chocolate', 'Cocoa', 'Dough', 'Flour', 'Noodles', 'Pasta', 'Rice', 'Vanilla', 'Yeast', 'Avocado', 'Basil', 'Beans', 'Broccoli', 'Cabbage', 'Carrot', 'Cauliflower', 'Celery', 'Corn', 'Cucumber', 'Eggplant', 'Garlic', 'Ginger', 'Lettuce', 'Mint', 'Mushroom', 'Olive', 'Onion', 'Oregano', 'Pickle', 'Potato', 'Pumpkin', 'Seed', 'Shallot', 'Spinach', 'Sweet Potato', 'Thyme', 'Tomato', 'Zucchini','Butter', 'Butter Milk', 'Cheese', 'Custard', 'Egg', 'Ice Cream', 'Milk', 'Sour Cream', 'Yoghurt', 'Apple', 'Banana', 'Blackberries', 'Cherries', 'Coconut', 'Cranberries', 'Grapes', 'Kiwi', 'Lemon', 'Lime', 'Mango', 'Orange', 'Peach', 'Pear', 'Pineapple', 'Raspberries', 'Strawberries', 'Beef Soup', 'Beer', 'Chicken Soup', 'Lamb Soup', 'Olive Oil', 'Red Wine', 'Vegetable Oil', 'White Wine', 'Barbeque Sauce', 'Syrup', 'Fish Sauce', 'Honey', 'Mayonnaise', 'Mustard', 'Soy Sauce', 'Vinegar', 'Carp', 'Catfish', 'Crab', 'Eel', 'Lobster', 'Mackerel', 'Mussel', 'Oyster', 'Prawn', 'Salmon', 'Sardine', 'Scallop', 'Shrimp', 'Squid', 'Trout', 'Tuna', 'Almond', 'Cashew', 'Macadamia', 'Peanut', 'Peanut Butter', 'Walnut', 'Bacon', 'Beef', 'Chicken', 'Ham', 'Lamb', 'Pork', 'Salami', 'Sausage', 'Turkey'
      ],
      secondlist: [
        'Baking Soda', 'Baking Powder', 'Batter', 'Blueberries', 'Bread', 'Chocolate', 'Cocoa', 'Dough', 'Flour', 'Noodles', 'Pasta', 'Rice', 'Vanilla', 'Yeast', 'Avocado', 'Basil', 'Beans', 'Broccoli', 'Cabbage', 'Carrot', 'Cauliflower', 'Celery', 'Corn', 'Cucumber', 'Eggplant', 'Garlic', 'Ginger', 'Lettuce', 'Mint', 'Mushroom', 'Olive', 'Onion', 'Oregano', 'Pickle', 'Potato', 'Pumpkin', 'Seed', 'Shallot', 'Spinach', 'Sweet Potato', 'Thyme', 'Tomato', 'Zucchini','Butter', 'Butter Milk', 'Cheese', 'Custard', 'Egg', 'Ice Cream', 'Milk', 'Sour Cream', 'Yoghurt', 'Apple', 'Banana', 'Blackberries', 'Cherries', 'Coconut', 'Cranberries', 'Grapes', 'Kiwi', 'Lemon', 'Lime', 'Mango', 'Orange', 'Peach', 'Pear', 'Pineapple', 'Raspberries', 'Strawberries', 'Beef Soup', 'Beer', 'Chicken Soup', 'Lamb Soup', 'Olive Oil', 'Red Wine', 'Vegetable Oil', 'White Wine', 'Barbeque Sauce', 'Syrup', 'Fish Sauce', 'Honey', 'Mayonnaise', 'Mustard', 'Soy Sauce', 'Vinegar', 'Carp', 'Catfish', 'Crab', 'Eel', 'Lobster', 'Mackerel', 'Mussel', 'Oyster', 'Prawn', 'Salmon', 'Sardine', 'Scallop', 'Shrimp', 'Squid', 'Trout', 'Tuna', 'Almond', 'Cashew', 'Macadamia', 'Peanut', 'Peanut Butter', 'Walnut', 'Bacon', 'Beef', 'Chicken', 'Ham', 'Lamb', 'Pork', 'Salami', 'Sausage', 'Turkey'
      ],
      newList: this.props.navigation.state.params.lists
    }
  }

  componentWillMount() {

      var config = {
      apiKey: "AIzaSyDFWqjtMRl0V4g89dOsiIgCT7MawcSotj0",
      authDomain: "super-cook-a1e5d.firebaseapp.com",
      databaseURL: "https://super-cook-a1e5d.firebaseio.com",
      projectId: "super-cook-a1e5d",
      storageBucket: "super-cook-a1e5d.appspot.com",
      messagingSenderId: "782295271364"
    };
    firebase.initializeApp(config);
  }

  componentDidMount(props){

    for(var i = 0; i < this.state.completelist.length; i++) {
      for (var j = 0; j < this.state.newList.length; j++){
        if (this.state.newList[j] === this.state.completelist[i]){
          var array = this.state.completelist;
          array.splice(i, 1);
          this.setState({
            secondlist: array
          })
        }
      }
    }

    var samples = [];
    firebase.database().ref('recipes').orderByChild('size').on('child_added', (snapshot) => {

        if (this.state.recipes.length < 10){
          var variable = snapshot.val();
          var first = "variable.";
          var last = " === 0";
          var joined = this.state.secondlist.join(' === 0 && variable.');
          var before = first.concat(joined);
          var final = before.concat(last).toLowerCase().replace(/ /g,'');
          console.log(final)
          if (eval(final)){
              this.setState({
                recipes: this.state.recipes.concat(
                  variable
                )
              })
          }
        }
      });
    //this.props.navigation.state.params.lists
  }

  componentWillUnmount(){
    firebase.app().delete().then(function() {
    });
  }

  static navigationOptions = ({ navigation }) => ({
      headerTitle: <CustomHeader/> ,
      headerTintColor: 'white',
      headerStyle: {height: 55,backgroundColor: '#075e54', marginTop: -20},
  });

  render() {
    return (
      <View>

      {this.state.recipes[0] === undefined ?
        <View>
        <LoadScreen/>
        </View>: null
      }

      {this.state.recipes[0] !== undefined ?
      <ScrollView>
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
                 k.base
               }
               subtitle = 'allrecipes.com'
               onPress={() => Linking.openURL(k.link)}

             />
             </TouchableOpacity>
           ))
         }
         </List>
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
  }
})

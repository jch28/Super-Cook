import React from 'react';
import {
    Text,
    View
} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import MainMenu from '../MainMenu/MainMenu';
import LoadScreen from '../LoadScreen/LoadScreen';
import Dairy from '../Dairy/Dairy';
import IngredientList from '../IngredientList/IngredientList';
import Vegetables from '../Vegetables/Vegetables';
import CheckOut from '../CheckOut/CheckOut';
import Search from '../Search/Search';
import App from '../../../App';

const TabBar = createBottomTabNavigator({
  IngredientList: {
     screen: IngredientList,
     navigationOptions: () => ({
         tabBarLabel: 'Add',
         tabBarIcon: ({tintColor}) => (
             <Icon
                 name="cart-plus"
                 color={tintColor}
                 size={24}
             />
         )
     })
 },
 CheckOut: {
     screen: CheckOut,
     navigationOptions: () => ({
         tabBarLabel: 'Ingredients',
         tabBarIcon: ({tintColor}) => (
             <Icon
                 name="shopping-basket"
                 color={tintColor}
                 size={24}
             />
         )
     })
 },
 Search: {
     screen: Search,
     navigationOptions: () => ({
         tabBarLabel: 'Search',
         tabBarIcon: ({tintColor}) => (
             <Icon
                 name="search"
                 color={tintColor}
                 size={24}
             />
         )
     })
 },
 LoadScreen: {
     screen: LoadScreen,
     navigationOptions: () => ({
         tabBarLabel: 'Bookmarks',
         tabBarIcon: ({tintColor}) => (
             <Icon
                 name="bookmark"
                 color={tintColor}
                 size={24}
             />
         )
     })
 },
 Vegetables: {
     screen: Vegetables,
     navigationOptions: () => ({
         tabBarLabel: 'Support',
         tabBarIcon: ({tintColor}) => (
             <Icon
                 name="heart"
                 color={tintColor}
                 size={24}
             />
         )
     })
 }
}, {
 tabBarOptions: {
     showLabel: true,
     activeTintColor: '#F8F8F8',
     inactiveTintColor: '#7181ae',
     style: {
         backgroundColor: '#171F33'
     },
     tabStyle: {
       //onPress={() => this.props.navigation.navigate('Dairy')}
     }
 }
});

export default TabBar

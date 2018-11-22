import {
  createStackNavigator,
} from 'react-navigation';

import React  from 'react';
import {
} from 'react-native';

import MainMenu from './src/components/MainMenu/MainMenu';
import Search from './src/components/Search/Search';
import LoadScreen from './src/components/LoadScreen/LoadScreen';
import Dairy from './src/components/Dairy/Dairy';
import Fruits from './src/components/Fruits/Fruits';
import Baking from './src/components/Baking/Baking';
import Meats from './src/components/Meats/Meats';
import Sweeteners from './src/components/Sweeteners/Sweeteners';
import Vegetables from './src/components/Vegetables/Vegetables';
import TabBar from './src/components/TabBar/TabBar';
import CheckOut from './src/components/CheckOut/CheckOut';
import Results from './src/components/Results/Results';
import Seafoods from './src/components/Seafoods/Seafoods';
import Liquids from './src/components/Liquids/Liquids';
import Nuts from './src/components/Nuts/Nuts';

const App = createStackNavigator({

  MainMenu: { screen: MainMenu },
  Search: { screen: Search },
  Meats: { screen: Meats },
  Liquids: { screen: Liquids },
  Seafoods: { screen: Seafoods },
  LoadScreen: { screen: LoadScreen },
  Sweeteners: { screen: Sweeteners },
  Dairy: { screen: Dairy },
  Baking: { screen: Baking },
  Fruits: { screen: Fruits },
  Vegetables: { screen: Vegetables },
  CheckOut: { screen: CheckOut },
  Nuts: { screen: Nuts },
  Results: { screen: Results }
},
  {
    initialRouteName: 'MainMenu', //TODO
    cardStyle: { backgroundColor: '#FFFFFF' },
  }
);

export default App;

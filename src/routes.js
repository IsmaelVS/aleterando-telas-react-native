import { createAppContainer, createStackNavigator } from 'react-navigation';
import App from './App';
import Page2 from './Page2';
import Page3 from './Page3';

export default createAppContainer(
  createStackNavigator(
    {
      App,
      Page2,
      Page3,
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#000',
        headerBackTitle: null
      },
      mode: 'modal'
    }
  )
);

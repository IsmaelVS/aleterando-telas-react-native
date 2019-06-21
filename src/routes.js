import { createAppContainer, createStackNavigator } from 'react-navigation';
import App from './App';
import Page2 from './Page2';

export default createAppContainer(
  createStackNavigator(
    {
      App,
      Page2,
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

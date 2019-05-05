import {createStackNavigator,createAppContainer} from 'react-navigation';
import Home from '../MainPages/Home';
import Details from '../MainPages/Detail';

// import StackViewStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";

const AppStackNavigator = createStackNavigator({
  Details: {
    screen: Details,
    navigationOptions: {
      header: null,
    }
  }, 
    Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  }, 

  }, {
    // transitionConfig: () => {
    //   return {
    //     screenInterpolator: StackViewStyleInterpolator.forHorizontal
    //   }
    // }
  }

)

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
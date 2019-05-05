import {createStackNavigator,createAppContainer} from 'react-navigation';
import Home from '../MainPages/Home';
import Detail from '../MainPages/Detail';
import Navi from '../MainPages/Navi';
// import StackViewStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";

const AppStackNavigator = createStackNavigator({
  Navi: {
    screen: Navi,
    navigationOptions: {
      header: null,
    }
  }, 
  Detail: {
    screen: Detail,
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
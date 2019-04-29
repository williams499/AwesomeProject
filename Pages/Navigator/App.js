import {createStackNavigator,createAppContainer} from 'react-navigation';
import DrawerMenu from '../DrawerPages/DrawerMenu';
// import StackViewStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";

const AppStackNavigator = createStackNavigator({
    DrawerMenu: {
    screen: DrawerMenu,
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
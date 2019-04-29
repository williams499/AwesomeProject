import React from 'react';
import { createDrawerNavigator,createAppContainer } from 'react-navigation'
import { Container } from 'native-base';
import Home from '../MainPages/Home';
import Detail from '../MainPages/Detail';

const MyDrawerNavigator = createDrawerNavigator({
   Home:{ 
      screen: Home,
   },
   Detail: {
      screen: Detail,
   },
 });
 
const MyApp = createAppContainer(MyDrawerNavigator);

class App extends React.Component{
    render(){
      return(
        <Container>
          <MyApp >
          </MyApp >
        </Container>
      );
    }
}//End of App class

export default App;
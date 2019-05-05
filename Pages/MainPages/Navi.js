import React, { Component } from 'react';
import { View ,Text,TouchableOpacity,StatusBar,ScrollView,Image,StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/Feather";
import Icon4 from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/Entypo";


export default  class Home extends React.Component {
 render() {
    return (
      <View style={{ flex: 1,}}>
        <StatusBar barStyle="light-content" backgroundColor="#4fbc95" />
        <View style={[{justifyContent:'center',alignItems:'center',flex:0.5}]}>
              <TouchableOpacity  onPress={() => this.props.navigation.push('Detail')} style={[styles.shadowStyle,{backgroundColor:'#4fbc95',height:45,justifyContent:'center',alignItems:'center',borderRadius:30,overflow:'hidden',width:170}]}>
                <Text style={[styles.bold,{fontSize:18,letterSpacing:1,color:'white'}]}>Screen1</Text>
              </TouchableOpacity>
          </View>
          <View style={[{justifyContent:'center',alignItems:'center',flex:0.5}]}>
              <TouchableOpacity  onPress={() => this.props.navigation.push('Home')} style={[styles.shadowStyle,{backgroundColor:'#4fbc95',height:45,justifyContent:'center',alignItems:'center',borderRadius:30,overflow:'hidden',width:170}]}>
                <Text style={[styles.bold,{fontSize:18,letterSpacing:1,color:'white'}]}>Screen2</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    zIndex: 9999
  },
  marginHor:{marginHorizontal:20},
  bold:{fontWeight:'500'},
  shadowStyle: {
    shadowColor: "#dbdbdb",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  
});
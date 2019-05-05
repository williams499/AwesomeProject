import React from 'react';
import { View ,Text,TouchableOpacity,StatusBar,Image,StyleSheet} from 'react-native';

export default  class Home extends React.Component {
 render() {
    return (
      <View style={{ flex: 1,}}>
      
        <StatusBar barStyle="light-content" backgroundColor="#4fbc95" />
        <View style={[styles.sub_Header]}>
          <Text style={[styles.subHeaderText]}>Max's Recipes</Text>
        </View>

        <View style={[styles.body2,{alignItems:'center'}]}>
          <Text style={[styles.content1Text,styles.bold,{color:'#4fbc95',fontSize:22}]}>Tuesday</Text>
          <Text style={[styles.content1Text,styles.bold,{color:'#4fbc95',}]}>07/08/2018</Text>
        </View>

        <View style={[styles.body3,styles.shadowStyle]}>
          <View style={[{alignItems:'center'}]}>
          <Image resizeMode={'cover'} style={[{width:150,height:150,borderRadius:75,overflow:'hidden',top:-95,justifyContent:'center'}]} source={require('../../protein.png')} />
          </View>
          <Text style={[styles.textCenter,styles.white,{top:-70,fontSize:22}]}>Protein Bomb</Text>
          <Text style={[styles.textCenter,styles.white,{top:-60,opacity:0.5,lineHeight:20}]}>A healthy homemade balanced recipe with a variety of meat and brocolli, design for Max's needs. You can serve it raw, cook itor feez it for later.</Text>

          <View style={[styles.content1,styles.marginHor,{top:-70,height:150}]}>
            <View style={[{flexDirection:'column'}]}>
              <Text style={[styles.Body1Text,styles.bold,styles.white,styles.textCenter,{marginLeft:0}]}>Time</Text>
              <Text style={[styles.Body1Text,styles.bold,styles.textCenter,{marginLeft:0,fontSize:30,color:'#85DDC7'}]}>4</Text>
              <Text style={[styles.Body1Text,styles.bold,styles.white,styles.textCenter,{marginLeft:0,color:'#85DDC7'}]}>Minutes</Text>
            </View>
            <View style={[{flexDirection:'column'}]}>
              <Text style={[styles.Body1Text,styles.bold,styles.white,styles.textCenter,{marginLeft:0}]}>Calories</Text>
              <Text style={[styles.Body1Text,styles.bold,styles.textCenter,styles.white,{marginLeft:0,fontSize:30,color:'#85DDC7'}]}>815</Text>
              <Text style={[styles.Body1Text,styles.bold,styles.white,styles.textCenter,{marginLeft:0,color:'#85DDC7'}]}>grams</Text>
            </View>
            <View style={[{flexDirection:'column'}]}>
              <Text style={[styles.Body1Text,styles.bold,styles.white,styles.textCenter,{marginLeft:0}]}>Price</Text>
              <Text style={[styles.Body1Text,styles.bold,styles.textCenter,styles.white,,{marginLeft:0,fontSize:30,color:'#85DDC7'}]}>9</Text>
              <Text style={[styles.Body1Text,styles.bold,styles.white,styles.textCenter,{marginLeft:0,color:'#85DDC7'}]}>Dollars</Text>
            </View>

            
          </View>

          <View style={[{top:-90,alignItems:'center'}]}>
              <TouchableOpacity style={[styles.shadowStyle,{backgroundColor:'white',height:45,justifyContent:'center',alignItems:'center',borderRadius:30,overflow:'hidden',width:170}]}>
                <Text style={[styles.bold,{fontSize:18,letterSpacing:1,color:'#4fbc95'}]}>VIEW RECIPE</Text>
              </TouchableOpacity>
          </View>
          

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
  sub_Header:{
    height:50,
    backgroundColor:'#4FBC95',
    justifyContent:'center',
    alignItems:'center',
    flex:0.1,
  },
  subHeaderText:{
    fontSize:20,
    fontWeight:'500',
    color:'white'
  },
  body2:{
    flex:0.3,
    alignItems:'center',
    paddingTop:25,
    // justifyContent:'center'
  },
  body3:{
    flex:0.5,
    backgroundColor:'#4FBC95',
    marginHorizontal:40,
    borderRadius:10,
    padding:20
  },
  textCenter:{
    textAlign:'center'
  },
  white:{
    color:'white',
  },
  content1:{
    // flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    height:50,
    alignItems:'center'
  },
  content1Text:{
    color:'#4fbc95',
    // fontSize:16,
  },
  Body1Text:{
    color:'black',
  },
  content2Text:{
    color:'#4fbc95',
    fontSize:16,
    marginRight:35
  },
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
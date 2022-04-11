import React, {Component} from "react";
import{View,Text,StyleSheet} from "react-native";
// export default class App extends Component{
//   render(){
//     return(
//       <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
//         <Text>Hello react native 05</Text>
//       </View>
//     );
//   }
// }

export default function App(){
  return(
    <View style={{flex:1, marginTop:30}}>
      <View style={styles.boxStyle}>
        <Text style={styles.textStyle}>Pruple: #C9C9FF</Text>
      </View>
      <View style={[styles.boxStyle, styles.boxStyleBlue]}>
        <Text style={styles.textStyle}>Blue: #3D85C6</Text>
      </View>
      <View style={[styles.boxStyle, styles.boxStyleGreen]}>
        <Text style={styles.textStyle}>Green: #96CC96</Text>
      </View>
      <View style={[styles.boxStyle, styles.boxStyleYellow]}>
        <Text style={styles.textStyle}>Yellow: #F4B940</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxStyle:{
    flex: 1,
    backgroundColor:'#C9C9FF',
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal: 20,
    marginBottom: 20,
    
  },
  boxStyleBlue:{
    backgroundColor:'#3D85C6'
  },
  boxStyleGreen:{
    backgroundColor:'#96CC96'
  },
  boxStyleYellow:{
    backgroundColor:'#F4B940'
  },
  textStyle:{
    fontWeight:'900',
    
  }
})
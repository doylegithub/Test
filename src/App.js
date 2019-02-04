import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text}>hellow world</Text>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex:0,
    height:500,
    flexDirection: 'row',
    backgroundColor: 'purple',
  },

  box: {
    flex: 1,
    alignSelf: "center",
    

  },

  text: {
    fontSize: 32,
    alignSelf: 'center',
    color: 'white',
  }


})
export default App;

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
    flex: 1,
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    position: 'fixed'
  },

  box: {
    flex: 1,
    position: 'absolute',
    alignSelf: "center",
    
    

  },

  text: {
    fontSize: 32,
    alignSelf: 'center',
    color: 'white',
  }


})
export default App;

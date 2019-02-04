import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>hellow world</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500 ,
    backgroundColor: 'purple',
  },

  text: {
    fontSize: 32,
    alignSelf: 'center',
    color: 'white',
  }


})
export default App;

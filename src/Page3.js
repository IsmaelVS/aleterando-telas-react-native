import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, ScrollView} from 'react-native';

export default class App extends Component{

  static navigationOptions = {
    headerTitle: 'page2'
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        vertical={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.input}>Deu bom!</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    backgroundColor: '#F5FCFF',
  },
  input: {
    padding: 20,
    fontSize: 20,
    marginBottom: 20
  },
});

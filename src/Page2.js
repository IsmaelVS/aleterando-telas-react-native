import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';

export default class App extends Component{

  static navigationOptions = {
    headerTitle: 'page2'
  };

  state = {
    Text1: '',
  };

  signIn = async () => {
    if (this.state.Text1) {
      console.log(this.state.Text1)
      this.props.navigation.navigate('Page3')
    }
  }

  render() {
    return (
      <ScrollView
        style={{flex: 1}}
        scrollEnabled={true}
      >
        <TextInput
          style={styles.input}
          placeholder="Teste"
          placeholderTextColor="#ddd"
          value={this.state.Text1}
          onChangeText={Text1 => this.setState({ Text1 })}
        />
        <TextInput
          style={styles.input}
          placeholder="Teste"
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={styles.input}
          placeholder="Teste"
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={styles.input}
          placeholder="Teste"
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={styles.input}
          placeholder="Teste"
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={styles.input}
          placeholder="Teste"
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={styles.input}
          placeholder="Teste"
          placeholderTextColor="#ddd"
        />
        <Text style={styles.input}>Ismael!</Text>
        <TouchableOpacity
          style={{ marginRight: 20, textAlign: 'center' }}
          onPress={this.teste}
        >
        <Text>Entre aqui!</Text>
        </TouchableOpacity>
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

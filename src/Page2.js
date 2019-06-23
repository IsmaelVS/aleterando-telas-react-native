import React, {Component} from 'react';
import {Platform, StyleSheet, Text, AsyncStorage, TextInput, ScrollView, TouchableOpacity, Alert, Button} from 'react-native';

export default class App extends Component{

  static navigationOptions = {
    headerTitle: 'page2'
  };

  state = {
    usuario: '',
    result: '',
    email: 'teste@teste.com',
  };

  saveData () {
    const usuario = {
      'User': Date.now(),
      'email': this.state.email,
    };
    AsyncStorage.setItem('usuario', JSON.stringify(usuario));
    Alert.alert(JSON.stringify(usuario));
  }

  pegarData () {
    AsyncStorage.getItem('usuario', (err, result) => {
      console.log(result);
    });
  }

  displayData = async () => {
    try {
      const usuario = await AsyncStorage.getItem('usuario');
      this.setState({ usuario });
    } catch (error) {
      Alert.alert(error);
    }
  }

  teste = async () => {
    if (this.state.usuario) {
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
        <Text style={styles.paragraph}>{this.state.usuario}</Text>
        <Button onPress={() => this.saveData()} title="Save" />
        <Button onPress={() => this.displayData()} title="Display" />
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

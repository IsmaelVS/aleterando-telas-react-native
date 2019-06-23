import React, {Component} from 'react';
import api_cep from './services/cep';
import {Platform, StyleSheet, Text, AsyncStorage, TextInput, ScrollView, Button} from 'react-native';

export default class App extends Component{

  static navigationOptions = {
    headerTitle: 'page3'
  };

  state = {
    usuario: '',
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    cidade: '',
    estado: '',
    bairro: '',
  }

  displayData = async () => {
    try {
      const usuario = await AsyncStorage.getItem('usuario');
      this.setState({ usuario });
    } catch (error) {
      Alert.alert(error);
    }
  }

  preencher = async () => {

    api_cep.get(parseInt(this.state.cep) + '/json/'
    )
    .then(function (response) {
      console.log(response.data);

      const { bairro, cep, complemento, gia, ibge, localidade, logradouro, uf, unidade } = response.data;


      this.setState({ rua: logradouro });
      this.setState({ complemento: complemento });
      this.setState({ cidade: localidade });
      this.setState({ bairro: bairro });
      this.setState({ estado: uf });

    })
    .catch(function (err) {
      console.log(err.response.data);
    //
    //   Alert.alert(err.response.data);
    });

  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        vertical={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.input}>Deu bom!</Text>
        <Button onPress={() => this.displayData()} title="Display" />
        <Text style={styles.paragraph}>{this.state.usuario}</Text>
        <TextInput
          style={styles.input}
          placeholder="cep"
          placeholderTextColor="#000000"
          value={this.state.cep}
          onChangeText={cep => this.setState({ cep })}
        />
        <TextInput
          style={styles.input}
          placeholder="rua"
          placeholderTextColor="#000000"
          value={this.state.rua}
          onChangeText={rua => this.setState({ rua })}
        />
        <TextInput
          style={styles.input}
          placeholder="numero"
          placeholderTextColor="#000000"
          value={this.state.numero}
          onChangeText={numero => this.setState({ numero })}
        />
        <TextInput
          style={styles.input}
          placeholder="complemento"
          placeholderTextColor="#000000"
          value={this.state.complemento}
          onChangeText={complemento => this.setState({ complemento })}
        />
        <TextInput
          style={styles.input}
          placeholder="cidade"
          placeholderTextColor="#000000"
          value={this.state.cidade}
          onChangeText={cidade => this.setState({ cidade })}
        />
        <TextInput
          style={styles.input}
          placeholder="estado"
          placeholderTextColor="#000000"
          value={this.state.estado}
          onChangeText={estado => this.setState({ estado })}
        />
        <TextInput
          style={styles.input}
          placeholder="bairro"
          placeholderTextColor="#000000"
          value={this.state.bairro}
          onChangeText={bairro => this.setState({ bairro })}
        />
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

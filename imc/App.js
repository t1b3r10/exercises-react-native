import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    if (imc < 18.6) {
      alert('Voce esta abaixo do peso! ' + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      alert('Peso ideal! ' + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      alert('Levemente acima do peso! ' + imc.toFixed(2));
    } else {
      alert('Voce esta obeso! ' + imc.toFixed(2));
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Calcule seu IMC</Text>

        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={(peso) => setPeso(peso)}
          placeholder="Peso (Kg)"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={(altura) => setAltura(altura)}
          placeholder="Altura (cm)"
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >

          <Text style={styles.buttonText}>Calcular</Text>

        </TouchableOpacity>

        {/*<Text style={styles.signin}>Sign In</Text>*/}

        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9400D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#FFF'
  },
  input: {
    backgroundColor: '#00FFFF',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000000',
    fontSize: 25
  },
  button: {
    backgroundColor: '#4B0082',
    borderRadius: 10,
    margin: 15,
    padding: 10
  },
  buttonText: {
    color: '#FFF',
    fontSize: 25
  },
  signin: {
    fontSize: 30,
    color: '#FFF'
  }
});

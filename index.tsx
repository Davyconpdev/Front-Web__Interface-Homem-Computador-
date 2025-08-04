import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularMedia = () => {
    const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
    const freq = parseFloat(frequencia);

    if (media >= 7 && freq >= 75) {
      setResultado(`O(A) Aluno(a) ${nome} está Aprovado(a)!`);
    } else if (media < 7 && freq >= 75) {
      setResultado(`O(A) Aluno(a) ${nome} está Reprovado(a) por Nota.`);
    } else if (freq < 75) {
      setResultado(`O(A) Aluno(a) ${nome} está Reprovado(a) por Frequência.`);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Resultado do Aluno</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome do Aluno"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Nota 1ª unidade"
          keyboardType="numeric"
          value={nota1}
          onChangeText={setNota1}
        />

        <TextInput
          style={styles.input}
          placeholder="Nota 2ª unidade"
          keyboardType="numeric"
          value={nota2}
          onChangeText={setNota2}
        />

        <TextInput
          style={styles.input}
          placeholder="Nota 3ª unidade"
          keyboardType="numeric"
          value={nota3}
          onChangeText={setNota3}
        />

        <TextInput
          style={styles.input}
          placeholder="Frequência (%)"
          keyboardType="numeric"
          value={frequencia}
          onChangeText={setFrequencia}
        />

        <Button
          title="Verificar"
          onPress={calcularMedia}
          color="#4CAF50"
        />
        
        {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f9',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  resultado: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#007AFF',
  }
});
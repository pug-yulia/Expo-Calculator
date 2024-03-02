import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Keyboard } from 'react-native';

const CalculatorPage = ({ navigation, history, setHistory }) => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleSum = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    const expression = `${number1} + ${number2} = ${sum}`;
    setResult(sum.toString());
    setHistory([...history, expression]);
    Keyboard.dismiss(); 
  };

  const handleSubtraction = () => {
    const subtraction = parseFloat(number1) - parseFloat(number2);
    const expression = `${number1} - ${number2} = ${subtraction}`;
    setResult(subtraction.toString());
    setHistory([...history, expression]);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Result: {result}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number 1"
        keyboardType="numeric"
        value={number1}
        onChangeText={(text) => setNumber1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 2"
        keyboardType="numeric"
        value={number2}
        onChangeText={(text) => setNumber2(text)}
      />
      <View style={styles.buttonsContainer}>
        <Button title="+" onPress={handleSum} />
        <Button title="-" onPress={handleSubtraction} />
      </View>
      <Button title="View History" onPress={() => navigation.navigate('History')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -60,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginBottom: 10,
  },
});

export default CalculatorPage;

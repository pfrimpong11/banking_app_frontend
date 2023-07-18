import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const CurrencyConverter = ({navigation}) => {
  const [currency, setCurrency] = useState('USD');
  const [value, setValue] = useState('');
  const [convertedValues, setConvertedValues] = useState({
    USD: '',
    Euros: '',
    Pounds: '',
    Cedi: ''
  });

  const convertCurrency = (currency, value) => {
    setCurrency(currency);
    setValue(value);
    
    const conversionRates = {
      USD: {
        Euros: 0.89,
        Pounds: 0.76,
        Cedi: 11.37
      },
      Euros: {
        USD: 1.12,
        Pounds: 0.86,
        Cedi: 12.78
      },
      Pounds: {
        USD: 1.31,
        Euros: 1.16,
        Cedi: 14.88
      },
      Cedi: {
        USD: 0.058,
        Euros: 0.078,
        Pounds: 0.067
      }
    };

    const convertedValues = {};
    Object.keys(conversionRates[currency]).forEach((targetCurrency) => {
      const rate = conversionRates[currency][targetCurrency];
      convertedValues[targetCurrency] = (value * rate).toFixed(2);
    });

    setConvertedValues(convertedValues);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.pickerBox}
            selectedValue={currency}
            onValueChange={(itemValue) => convertCurrency(itemValue, value)}
          >
            <Picker.Item label="USD" value="USD"  style={styles.pickerItem} />
            <Picker.Item label="Euros" value="Euros" />
            <Picker.Item label="Pounds" value="Pounds" />
            <Picker.Item label="Cedi" value="Cedi" />
          </Picker>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            value={value}
            onChangeText={(newValue) => convertCurrency(currency, newValue)}
            placeholder="Enter value"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.outputContainer}>
          {Object.keys(convertedValues).map((targetCurrency) => (
            <Text
              style={styles.outputText}
              key={targetCurrency}>
              {targetCurrency}: {convertedValues[targetCurrency]}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  inputContainer: {
    backgroundColor: '#66B5E1',
    height: 50,
    width: 300,
    borderRadius: 50,
    padding: 10,
    marginTop: 5,
    marginBottom: 30,
  },
  inputText: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 20,
  },
  outputContainer: {
    backgroundColor: '#66B5E1',
    height: 170,
    width: 300,
    borderRadius: 10,
    padding: 10,
  },
  outputText: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 3,
  },
});

export default CurrencyConverter;

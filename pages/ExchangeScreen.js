import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExchangeScreen = () => {
    const navigation = useNavigation();
    const [usdValue, setUSDValue] = useState('');
    const [ghcValue, setGHCValue] = useState('');

    const handleVerifyPress = () => {
        // Handle Verify button press
    };

    const handleSendPress = () => {
        navigation.navigate('TransactionCompleteScreen'); // Navigate to TransactionCompleteScreen
    };

    const handleConvertPress = () => {
        if (usdValue && ghcValue) {
            Alert.alert('Fill out only one field');
            return;
        }

        if (!usdValue && !ghcValue) {
            Alert.alert('Fill out one field');
            return;
        }

        if (usdValue) {
            const ghcResult = parseFloat(usdValue) * 11.29;
            setGHCValue(ghcResult.toFixed(2));
        } else if (ghcValue) {
            const usdResult = parseFloat(ghcValue) / 11.29;
            setUSDValue(usdResult.toFixed(2));
        }
    };

    const handleUSDInputChange = (text) => {
        setUSDValue(text);
        setGHCValue('');
    };

    const handleGHCInputChange = (text) => {
        setGHCValue(text);
        setUSDValue('');
    };

    const handleClearPress = () => {
        setUSDValue('');
        setGHCValue('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.formElement}>
                    <Text style={styles.label}>USD</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter USD value"
                            value={usdValue}
                            onChangeText={handleUSDInputChange}
                            keyboardType="numeric"
                            editable={!ghcValue}
                        />
                        <Text style={styles.currencyText}>USD</Text>
                    </View>
                </View>
                <View style={styles.formElement}>
                    <Text style={styles.label}>GHC</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter GHC value"
                            value={ghcValue}
                            onChangeText={handleGHCInputChange}
                            keyboardType="numeric"
                            editable={!usdValue}
                        />
                        <Text style={styles.currencyText}>GHC</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.sendButton} onPress={handleConvertPress}>
                    <Text style={styles.sendButtonText}>Convert</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.clearButton} onPress={handleClearPress}>
                <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        padding: 20,
    },
    formElement: {
        marginBottom: 20,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 10,
        marginBottom: 5,
        backgroundColor: 'lightgray',
    },
    currencyText: {
        backgroundColor: '#66B5E1',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginLeft: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    sendButton: {
        backgroundColor: '#66B5E1',
        borderRadius: 25,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: -10,
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    clearButton: {
        backgroundColor: 'palevioletred',
        borderRadius: 25,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 20,
    },
    clearButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ExchangeScreen;

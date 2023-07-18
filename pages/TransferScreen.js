import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TransferScreen = () => {
    const navigation = useNavigation();

    const accountData = {
        //data should be fetched from database
        name: "John Doe",
    };

    const handleVerifyPress = () => {
        //verify the account number and input the name related to the account number in the name box
    };

    const handleSendPress = () => {
        //perform transaction and navigate to the transaction complete screen

        navigation.navigate('TransactionCompleteScreen'); // Navigate to TransactionCompleteScreen
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.formElement}>
                    <Text style={styles.label}>Account Number</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Enter account number" keyboardType="number-pad" />
                        <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyPress}>
                            <Text style={styles.verifyButtonText}>Verify</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.formElement}>
                    <Text style={styles.label}>Account Name</Text>
                    <View style={styles.input}>
                    <Text style={styles.outputText} >
                        {accountData.name}
                    </Text>
                    </View>
                </View>
                <View style={styles.formElement}>
                    <Text style={styles.label}>Reference</Text>
                    <TextInput style={styles.input} placeholder="Enter reference" />
                </View>
                <View style={styles.formElement}>
                    <Text style={styles.label}>Amount</Text>
                    <TextInput style={styles.input} placeholder="Enter amount" keyboardType="numeric" />
                </View>
                <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        padding: 20,
        marginTop: 50,
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
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 10,
        marginBottom: 5,
        backgroundColor: 'lightgray',
    },
    outputText: {
        padding: 10,
    },
    verifyButton: {
        backgroundColor: '#66B5E1',
        borderRadius: 10,
        padding: 7,
        marginLeft: 10,
    },
    verifyButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    sendButton: {
        backgroundColor: '#66B5E1',
        borderRadius: 25,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default TransferScreen;

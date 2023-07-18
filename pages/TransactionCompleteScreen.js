import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TransactionCompleteScreen = ({ navigation }) => {

    const transactionData = {
        //data should be fetched from database of the transaction performed
        amount: "100.00",
        recipient: "[account number / wallet number / name]",
        reference: "[reference]",
    };

    const handleDonePress = () => { //navigate to the main screen to perfornm other transactions
        navigation.navigate('MainScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Transaction Complete</Text>
                <Text style={styles.details}>
                    You have sent ${transactionData.amount} to {transactionData.recipient} with reference {transactionData.reference}.
                </Text>
                <TouchableOpacity style={styles.doneButton} onPress={handleDonePress}>
                    <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    details: {
        fontSize: 18,
        textAlign: 'center',
    },
    doneButton: {
        backgroundColor: '#66B5E1',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 60,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    doneButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default TransactionCompleteScreen;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryScreen = () => {
    const transactionData = {
        amount: "100.00",
        recipient: "[account number / wallet number / name]",
        reference: "[reference]",
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.details}>
                    {/* transaction history of the user fetched from the database and displayed here */}
                    Past transactions made
                </Text>
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
});

export default HistoryScreen;

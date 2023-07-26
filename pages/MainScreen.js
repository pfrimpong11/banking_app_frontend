import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Image } from 'react-native';

const MainScreen = ({ navigation }) => {

    const accountBalanceDetails = {
        accountBalance: "1000.64",
    };

    const handleTransferPress = () => { //navigate to transfer screen
        navigation.navigate('TransferScreen')
    };       

    const handleMomoPress = () => { //navigate to momo screen
        navigation.navigate('MomoScreen')

    };

    const handleBillsPress = () => {    // Handle Bills button press
        navigation.navigate('BillsScreen')
    };

    const handleHistoryPress = () => {   // Handle History button press
        navigation.navigate('HistoryScreen')
    };

    const handleExchangePress = () => { //navigate to converter screen
        navigation.navigate('CurrencyConverter')
    };

    const handleProfilePress = () => {  //navigate to profile screen
        navigation.navigate('ProfileScreen')
    };

    const handleHelpPress = () => { //navigate to help screen
        navigation.navigate('HelpScreen')
    };

    const handleAboutPress = () => {    //navigate to about screen
        navigation.navigate('AboutScreen')
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceLabel}>Balance (GHS)</Text>
                <Text style={styles.balanceAmount}> {accountBalanceDetails.accountBalance} </Text>
            </View>

            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.iconButton} onPress={handleTransferPress}>
                    <Image source={require('./assets/transfer.png')} style={styles.iconImage} />
                    <Text style={styles.iconText}>Transfer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={handleMomoPress}>
                    <Image source={require('./assets/momo.png')} style={styles.iconImage} />
                    <Text style={styles.iconText}>Momo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={handleBillsPress}>
                    <Image source={require('./assets/bills.png')} style={styles.iconImage} />
                    <Text style={styles.iconText}>Bills</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={handleHistoryPress}>
                    <Image source={require('./assets/transaction_history.png')} style={styles.iconImage} />
                    <Text style={styles.iconText}>History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={handleExchangePress}>
                    <Image source={require('./assets/currency-converter.jpg')} style={styles.iconImage} />
                    <Text style={styles.iconText}>Converter</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.additionalContainer}>
                <TouchableOpacity style={styles.additionalButton} onPress={handleProfilePress}>
                    <Image source={require('./assets/profile.png')} style={styles.additionalIcon} />
                    <Text style={styles.additionalText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.additionalButton} onPress={handleHelpPress}>
                    <Image source={require('./assets/help.png')} style={styles.additionalIcon} />
                    <Text style={styles.additionalText}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.additionalButton} onPress={handleAboutPress}>
                    <Image source={require('./assets/about.png')} style={styles.additionalIcon} />
                    <Text style={styles.additionalText}>About</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    balanceContainer: {
        backgroundColor: '#66B5E1',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        marginTop: 0,
        alignItems: 'center',
    },
    balanceLabel: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    balanceAmount: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    iconsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 5,
        flex: 1,
    },
    iconButton: {
        alignItems: 'center',
        marginBottom: 40,
        width: '48%', // Adjust the width to fit two icons on each line with some spacing
    },
    iconImage: {
        width: 80, // Adjust the desired width
        height: 80, // Adjust the desired height
        marginBottom: 10,
    },
    iconText: {
        color: '#222',
        fontSize: 16,
        fontWeight: 'bold',
    },
    additionalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        backgroundColor: '#66B5E1',
        borderRadius: 10,
        padding: 40,
        height: 100,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    additionalButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    additionalIcon: {
        width: 30,
        height: 30,
        marginBottom: 10,
    },
    additionalText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default MainScreen;

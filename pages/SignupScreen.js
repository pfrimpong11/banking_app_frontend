import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';

const SignupScreen = ({ navigation }) => {

    //setting text iput to null
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [ghanaCardNumber, setGhanaCardNumber] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    //change the text iput value to that of the user
    const handleFirstNameChange = (text) => { setFirstName(text) };
    const handleLastNameChange = (text) => { setLastName(text) };
    const handleDateOfBirthChange = (text) => { setDateOfBirth(text) };
    const handlePhoneNumberChange = (text) => { setPhoneNumber(text) };
    const handleEmailChange = (text) => { setEmail(text) };
    const handleGhanaCardNumberChange = (text) => { setGhanaCardNumber(text) };
    const handleAddressChange = (text) => { setAddress(text) };
    const handlePasswordChange = (text) => { setPassword(text) }; 

    const handleSignUpPress = () => {
        //save the detals of the user in the database and navigate to the login screen
        
        navigation.navigate('HomeScreen');

        setFirstName('');
        setLastName('');
        setDateOfBirth('');
        setPhoneNumber('');
        setEmail('');
        setGhanaCardNumber('');
        setAddress('');
        setPassword('');
    };

    const handleSignInPress = () => {   //navigate to the sign in screen
        navigation.navigate('HomeScreen');
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <ScrollView style={styles.scrollViewContent}>
                <View style={styles.bottomHalf}>
                    <TextInput style={styles.input}
                        placeholder="First Name"
                        value={firstName}
                        onChangeText={handleFirstNameChange}
                    />
                    <TextInput style={styles.input}
                        placeholder="Last Name"
                        value={lastName}
                        onChangeText={handleLastNameChange}
                    />
                    <TextInput style={styles.input}
                        placeholder="Date of Birth  (dd-mm-yy)"
                        value={dateOfBirth}
                        onChangeText={handleDateOfBirthChange}
                        keyboardType="numbers-and-punctuation"
                    />
                    <TextInput style={styles.input}
                        value={phoneNumber}
                        onChangeText={handlePhoneNumberChange}
                        placeholder="Phone Number   (233XXXXXXX)"
                        keyboardType="number-pad"
                    />
                    <TextInput style={styles.input} placeholder="Email" 
                        keyboardType='email-address'
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={handleEmailChange}
                    />
                    <TextInput style={styles.input}
                        placeholder="Gh Card Number"
                        value={ghanaCardNumber}
                        onChangeText={handleGhanaCardNumberChange}
                    />
                    <TextInput style={styles.input}
                        placeholder="Address    (GA-xxx-xxxx)"
                        value={address}
                        onChangeText={handleAddressChange}
                    />
                    <TextInput style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={handlePasswordChange}
                    />
                    <TouchableOpacity style={styles.signupButton} onPress={handleSignUpPress}>
                        <Text style={styles.signupButtonText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signInButton} onPress={handleSignInPress}>
                        <Text style={styles.signInText}>Already have an account? Sign in</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66B5E1',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    registerBox: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    bottomHalf: {
        flex: 1,
        backgroundColor: '#66B5E1',
        padding: 20,
    },
    input: {
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        marginTop: 20,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
    },
    signupButton: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginTop: 20,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        alignSelf: 'center',
    },
    signupButtonText: {
        color: '#222',
        fontWeight: 'bold',
    },
    signInButton: {
        marginTop: 20,
        alignSelf: 'center',
    },
    signInText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SignupScreen;

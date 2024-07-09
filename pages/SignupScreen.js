import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

const SignupScreen = ({ navigation }) => {

    //setting text input to null
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [ghanaCardNumber, setGhanaCardNumber] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');


    const handleSignUpPress = async () => {
        //save the detals of the user in the database and navigate to the login screen
        const userData = {
            firstName,
            lastName,
            dateOfBirth,
            phoneNumber,
            email,
            ghanaCardNumber,
            address,
            password,
        };

        try {
            const response = await axios.post('http://localhost:3000/api/users/register', userData);
            console.log(response.data);
            Alert.alert('Success', 'User registered successfully');
            navigation.navigate('HomeScreen');
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to register user');
        }


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
        // <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView style={styles.scrollViewContent}>
                <View style={styles.bottomHalf}>
                    <TextInput style={styles.input}
                        placeholder="First Name"
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                    <TextInput style={styles.input}
                        placeholder="Last Name"
                        value={lastName}
                        onChangeText={setLastName}
                    />
                    <TextInput style={styles.input}
                        placeholder="Date of Birth  (dd-mm-yy)"
                        value={dateOfBirth}
                        onChangeText={setDateOfBirth}
                        keyboardType="numbers-and-punctuation"
                    />
                    <TextInput style={styles.input}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        placeholder="Phone Number   (233XXXXXXX)"
                        keyboardType="number-pad"
                    />
                    <TextInput style={styles.input} placeholder="Email" 
                        keyboardType='email-address'
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput style={styles.input}
                        placeholder="Gh Card Number"
                        value={ghanaCardNumber}
                        onChangeText={setGhanaCardNumber}
                    />
                    <TextInput style={styles.input}
                        placeholder="Address    (GA-xxx-xxxx)"
                        value={address}
                        onChangeText={setAddress}
                    />
                    <TextInput style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity style={styles.signupButton} onPress={handleSignUpPress}>
                        <Text style={styles.signupButtonText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signInButton} onPress={handleSignInPress}>
                        <Text style={styles.signInText}>Already have an account? Sign in</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        // </KeyboardAvoidingView>
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

import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Image, SafeAreaView, KeyboardAvoidingView, StatusBar } from 'react-native';
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {
    
    //set the iput to null
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //changes input text to that of the user
    const handleEmailChange = (text) => { setEmail(text) };
    const handlePasswordChange = (text) => { setPassword(text) };

    const handleSignupPress = () => {
        navigation.navigate('SignupScreen'); //navigate to the sign up page to create account for new users
    };

    const handleLoginPress = () => {
        //save login details of the user and grant them access to the app's features

        navigation.navigate('MainScreen');
        setEmail('');
        setPassword('');
    };

    const handleForgotPasswordPress = () =>{
        //what happens after pressing forgot password
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <ScrollView contentContainerStyle={styles.container}>
                <StatusBar
                backgroundColor={'white'} barStyle={'dark-content'}/>
                <View style={styles.topHalf}>
                    <Image source={require('./assets/hq-bank-logo.png')} style={styles.bankImage} />
                </View>
                <View style={styles.bottomHalf}>
                    <TextInput style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={handleEmailChange}
                        keyboardType='email-address'
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TextInput style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={handlePasswordChange}
                    />
                    <TouchableOpacity onPress={handleForgotPasswordPress}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupButton} onPress={handleSignupPress}>
                        <Text style={styles.signupButtonText}>Don't have an account? Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
    topHalf: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bankImage: {
        width: 250, // Adjust the desired width
        height: 250, // Adjust the desired height
    },
    bottomHalf: {
        flex: 1,
        backgroundColor: '#66B5E1',
        borderTopLeftRadius: 120,
        padding: 20,
    },
    appName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        marginTop: 40,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        backgroundColor: '#ffffff',
    },
    forgotPassword: {
        marginTop: 10,
        marginHorizontal: 30,
        textAlign: 'left',
        color: 'white',
    },
    loginButton: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginTop: 20,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        alignSelf: 'center',
    },
    loginButtonText: {
        color: '#222',
        fontWeight: 'bold',
    },
    signupButton: {
        marginTop: 20,
        alignSelf: 'center',
    },
    signupButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default HomeScreen;

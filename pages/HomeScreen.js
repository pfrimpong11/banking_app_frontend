import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Image, SafeAreaView, KeyboardAvoidingView, StatusBar, Modal, Platform, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
    
    //set the input to null and modal to false
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

    
    const handleSignupPress = () => {
        navigation.navigate('SignupScreen'); //navigate to the sign up page to create account for new users
    };

    const handleLoginPress = async () => {
        //save login details of the user and grant them access to the app's features

        const userData = {
            email,
            password,
        };

        try {
            const response = await axios.post('http://localhost:3000/api/users/login', userData);
            console.log(response.data);
            Alert.alert('Success', 'User login successfully');
            navigation.navigate('MainScreen');
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to login user');
        }

        setEmail('');
        setPassword('');
    };

    const handleResetPasswordPress = () =>{
        // Implement your password reset logic here
        // You can use the 'email' state variable to retrieve the entered email address
        // and send a reset password link to the user's email.
        // This is just a placeholder function, replace it with your actual logic.
        alert(`Reset password link sent to: ${forgotPasswordEmail}`);
        setModalVisible(false);
        // navigation.navigate('ForgotPasswordModal');
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
                        onChangeText={setEmail}
                        keyboardType='email-address'
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TextInput style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    />

                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                        >

                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <View style={styles.modalTitleBox}>
                                    <Text style={styles.modalTitle}>Forgot Password</Text>
                                </View>
                                <View style={styles.emailAddressTextBox}>
                                    <Text style={styles.emailAddressText}>Enter email address</Text>
                                </View>
                                <View style={styles.modalEmailbox}>
                                    <TextInput
                                    style={styles.forgotpasswordemailInput}
                                    keyboardType="email-address"
                                    onChangeText={(text) => setForgotPasswordEmail(text)}
                                    />
                                </View>
                                <View style={styles.modalResetButtonBox}>
                                <TouchableOpacity style={styles.resetButton} onPress={handleResetPasswordPress}>
                                    <Text style={styles.resetButtonText}>Reset Password</Text>
                                </TouchableOpacity>
                                </View>
                                <View style={styles.modalCloseButtonBox}>
                                <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                                    <Text style={styles.closeButtonText}>Close</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>

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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        width: '80%',
    },
    modalTitleBox: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    emailAddressTextBox: {
        marginLeft: 20,
        marginBottom: 5,
    },
    modalEmailbox: {
        marginHorizontal: 10,
        marginBottom: 20,
    },
    forgotpasswordemailInput: {
        height: 40,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#66B5E1',
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#fff',
        color: '#000',
        fontSize: 15,
    },
    modalResetButtonBox: {
        marginHorizontal: 50,
    },
    resetButton: {
        backgroundColor: '#66B5E1',
        padding: 10,
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 10,
    },
    resetButtonText: {
        color: 'white',
    },
    modalCloseButtonBox: {
        marginHorizontal: 50,
    },
    closeButton: {
        backgroundColor: 'gray',
        padding: 10,
        alignItems: 'center',
        borderRadius: 50,
    },
    closeButtonText: {
        color: 'white',
    },
});

export default HomeScreen;

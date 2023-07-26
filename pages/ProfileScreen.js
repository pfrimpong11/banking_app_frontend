import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from "react-native";

const ProfileScreen = ({navigation}) => {

    const profileData = {
        //data should be fetched from database
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: "01-01-2000",
        phoneNumber: "233540734085",
        email: "group19@gmail.com",
        ghanaCardNumber: "GH-xxxxxxxxxxxx-x",
        address: "GA-123-4567",
        accountNumber: "1400005260509",
    };

    const handleLogoutPress = () => {
        //log the user out of the app and navigate to the login screen

        navigation.navigate('HomeScreen')
    };

    return(
        <ScrollView style={styles.container} >
            <View style={{flex: 1, padding: 16}}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={handleLogoutPress}>
                        <View style={styles.logoutContainer}>
                            <Text style={styles.logoutText}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.profileContainer} >
                        <Image source={require('./assets/profile.png')} style={styles.profileImage} />
                        <Text style={styles.profileText} >PROFILE</Text>
                    </View>
                    <View style={styles.detailsContainer}>
            {/* details of user fetched from database and displayed here */}
                        <View>
                            <Text>First Name</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.detailsText}> {profileData.firstName} </Text>
                        </View>
                    </View>
                    <View style={styles.detailsContainer}>
                        <View>
                            <Text>Last Name</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.detailsText}> {profileData.lastName} </Text>
                        </View>
                    </View>
                    <View style={styles.detailsContainer}>
                        <View>
                            <Text>DoB</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.detailsText}> {profileData.dateOfBirth} </Text>
                        </View>
                    </View>
                    <View style={styles.detailsContainer}>
                        <View>
                            <Text>Phone Number</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.detailsText}> {profileData.phoneNumber} </Text>
                        </View>
                    </View>
                    <View style={styles.detailsContainer}>
                        <View>
                            <Text>Email</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.detailsText}> {profileData.email} </Text>
                        </View>
                    </View>
                    <View style={styles.detailsContainer}>
                        <View>
                            <Text>GH Card Number</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.detailsText}> {profileData.ghanaCardNumber} </Text>
                        </View>
                    </View>
                    <View style={styles.detailsContainer}>
                        <View>
                            <Text>Address</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.detailsText}> {profileData.address} </Text>
                        </View>
                    </View>
                    <View style={styles.detailsContainer}>
                        <View>
                            <Text>Account Number</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.detailsText}> {profileData.accountNumber} </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoutContainer: {
        backgroundColor: '#66B5E1',
        width: 120,
        paddingVertical: 15,
        borderRadius: 50,
        alignItems: 'center',
        left: 10,
        top: 5,
    },
    logoutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    profileContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    profileImage: {
        alignItems: 'center',
        width: 100,
        height: 100,
    },
    profileText: {
        color: '#66B5E1',
        fontWeight: 'bold',
        fontSize: 18,
    },
    detailsContainer: {
        marginHorizontal: 15,
    },
    details: {
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        marginTop: 1,
        marginBottom: 6,
        paddingHorizontal: 10,
        backgroundColor: '#66B5E1',
    },
    detailsText: {
        color: '#fff',
        margin: 15,
    },
});

export default ProfileScreen;
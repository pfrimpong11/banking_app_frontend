import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Linking, ScrollView,} from "react-native";

const HelpScreen = ({navigation}) => {

    const handleEmailUsPress = () =>{   //opens email with a predefined subject and recipient
        const mailToLink = 'mailto:thehqbank@gmail.com?subject=HQBankCustomerService&body=';
        Linking.openURL(mailToLink);
        
    };

    const handleWhatsAppPress = () =>{  //opens whatsapp chat of recipient
        const WhatsAppLink = 'whatsapp://send?text=&phone=+233540734085';
        Linking.openURL(WhatsAppLink);
    };

    const handleCallUsPress = () =>{    //triggers a phone call to the number of recipient
        const callLink = 'tel:233540734085';
        Linking.openURL(callLink);
    };

    return(
        <ScrollView style={styles.container}>
            <View style={{flex: 1, padding: 16}}>
                <View style={styles.container}>
                    <View style={styles.helpContainer} >
                        <Image source={require('./assets/help.png')} style={styles.helpImage} />
                        <Text style={styles.helpText} >Help</Text>
                    </View>
                        <TouchableOpacity style={styles.contactContainer} onPress={handleEmailUsPress} >
                            <View style={styles.contactImageBox}>
                                <Image source={require('./assets/email.png')} style={styles.contactImage} />
                            </View>
                            <View style={styles.contactTextBox}>
                                <Text style={styles.contactText}>Email Us</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contactContainer} onPress={handleWhatsAppPress} >
                            <View style={styles.contactImageBox}>
                                <Image source={require('./assets/WhatsApp.png')} style={styles.contactImage} />
                            </View>
                            <View style={styles.contactTextBox}>
                                <Text style={styles.contactText}>WhatsApp Us</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contactContainer} onPress={handleCallUsPress} >
                            <View style={styles.contactImageBox}>
                                <Image source={require('./assets/call.jpg')} style={styles.contactImage} />
                            </View>
                            <View style={styles.contactTextBox}>
                                <Text style={styles.contactText}>Call Us</Text>
                            </View>
                        </TouchableOpacity>
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
    helpContainer: {
        alignItems: 'center',
        marginVertical: 50,
        marginBottom: 70,
    },
    helpImage: {
        alignItems: 'center',
        width: 100,
        height: 100,
    },
    helpText: {
        color: '#66B5E1',
        fontWeight: 'bold',
        fontSize: 18,
    },
    contactContainer: {
        marginHorizontal: 15,
        marginVertical: 5,
        flexDirection: 'row',
    },
    contactImageBox: {
        marginVertical: 5,
    },
    contactImage: {
        width: 40,
        height: 40,
    },
    contactTextBox: {
        marginVertical: 5,
        padding: 10,
    },
    contactText: {
        fontWeight: '400',
    },
});

export default HelpScreen;
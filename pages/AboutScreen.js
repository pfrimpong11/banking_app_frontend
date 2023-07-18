import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking} from "react-native";

const AboutScreen = ({navigation}) => {

    const handleTwitterPress = () =>{
        const twitterPageLink = 'https://twitter.com/_kojo_prince?s=21'; //external link to twitter profile
        Linking.openURL(twitterPageLink);
    };

    const handleInstagramPress = () =>{
        const instagramPageLink = 'https://instagram.com/kojo._prince?igshid=NTc4MTIwNjQ2YQ=='; //external link to instagram profile
        Linking.openURL(instagramPageLink);
    };

    const handleFacebookPress = () =>{
        const facebookPageLink = 'https://www.facebook.com/profile.php?id=100030168541926'; //external link to facebook profile
        Linking.openURL(facebookPageLink);
    };

    const handleLinkedInPress = () =>{
        const linkedInPageLink = 'https://gh.linkedin.com/in/prince-frimpong-19075b219';    //external link to linkedIn profile
        Linking.openURL(linkedInPageLink);
    };

    return(
        <View style={styles.container}>
            <View style={{flex: 1, padding: 16}}>
                <View style={styles.container}>
                    <View style={styles.aboutContainer} >
                        <Image source={require('./assets/about.png')} style={styles.aboutImage} />
                        <Text style={styles.aboutText} >About</Text>
                    </View>
                    <View style={styles.aboutDetailsContainer}>
                        <Text style={styles.aboutDetailsText}>
                            This app was built by members of GROUP 19
                        </Text>
                    </View>
                    <View style={styles.socialMediaContainer}>
                        <TouchableOpacity style={styles.SocialMediaBox} onPress={handleTwitterPress}>
                            <Image source={require('./assets/twitter.png')} style={styles.socialMediaImage} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.SocialMediaBox} onPress={handleInstagramPress}>
                            <Image source={require('./assets/instagram.png')} style={styles.socialMediaImage} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.SocialMediaBox} onPress={handleFacebookPress}>
                            <Image source={require('./assets/facebook.png')} style={styles.socialMediaImage} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.SocialMediaBox} onPress={handleLinkedInPress}>
                            <Image source={require('./assets/linkedIn.png')} style={styles.socialMediaImage} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    aboutContainer: {
        alignItems: 'center',
        marginVertical: 50,
        marginBottom: 70,
    },
    aboutImage: {
        alignItems: 'center',
        width: 100,
        height: 100,
    },
    aboutText: {
        color: '#66B5E1',
        fontWeight: 'bold',
        fontSize: 18,
    },
    aboutDetailsContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    aboutDetailsText: {
        fontWeight: '500',
        fontSize: 15,
    },
    socialMediaContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    SocialMediaBox: {
        margin: 5,
    },
    socialMediaImage: {
        width: 50,
        height: 50,
    },
});

export default AboutScreen;
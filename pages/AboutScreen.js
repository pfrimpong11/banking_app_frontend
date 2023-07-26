import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView} from "react-native";

const AboutScreen = ({navigation}) => {

    const handleTwitterPress = () =>{
        const twitterPageLink = 'https://twitter.com/bank_hq'; //external link to twitter profile
        Linking.openURL(twitterPageLink);
    };

    const handleInstagramPress = () =>{
        const instagramPageLink = 'https://www.instagram.com/thehqbank/?next=%2Fj8xt%2F&hl=en-gb'; //external link to instagram profile
        Linking.openURL(instagramPageLink);
    };

    const handleFacebookPress = () =>{
        const facebookPageLink = 'https://www.facebook.com/profile.php?id=100095264677925'; //external link to facebook profile
        Linking.openURL(facebookPageLink);
    };

    const handleLinkedInPress = () =>{
        const linkedInPageLink = 'https://www.linkedin.com/in/hq-bank-750675285/';    //external link to linkedIn profile
        Linking.openURL(linkedInPageLink);
    };

    return(
        <ScrollView style={styles.container}>
            <View style={{flex: 1, padding: 16}}>
                <View style={styles.container}>
                    <View style={styles.aboutContainer} >
                        <Image source={require('./assets/about.png')} style={styles.aboutImage} />
                        <Text style={styles.aboutText} >About</Text>
                    </View>
                    <View style={styles.aboutDetailsContainer}>
                        <View style={styles.visionBox}>
                            <Text style={styles.visionTitle}>VISION:</Text>
                            <Text style={styles.visionText}>
                            To be the leading financial partner empowering individuals, businesses, and communities to achieve their dreams and aspirations through innovative banking solutions and exceptional customer experiences.
                            </Text>
                        </View>
                        <View style={styles.missionBox}>
                            <Text style={styles.missionTitle}>MISSION:</Text>
                            <Text style={styles.missionText}>
                            At HQ Banks, our mission is to provide trusted financial services that cater to the diverse needs of our customers. We are committed to fostering financial growth and stability by offering personalized, secure, and accessible banking solutions. Through a dedicated team of professionals, cutting-edge technology, and a strong community focus, we aim to deliver excellence in every interaction, helping our customers thrive and build a better future.
                            </Text>
                        </View>
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
        </ScrollView>
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
    visionBox: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    visionTitle: {
        marginBottom: 5,
        marginLeft: 10,
        fontWeight: '700',
        fontSize: 20,
        color: '#66B5E1',
    },
    visionText: {
        borderRadius: 20,
        borderColor: '#66B5E1',
        borderWidth: 2,
        padding: 10,
        lineHeight: 18,
        textAlign: 'justify',
    },
    missionBox: {
        marginHorizontal: 20,
    },
    missionTitle: {
        marginBottom: 5,
        marginLeft: 10,
        fontWeight: '700',
        fontSize: 20,
        color: '#66B5E1',
    },
    missionText: {
        borderRadius: 20,
        borderColor: '#66B5E1',
        borderWidth: 2,
        padding: 10,
        lineHeight: 18,
        textAlign: 'justify',
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
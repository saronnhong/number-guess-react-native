import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.titleText} >The Game is Over!</Text>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/original.png')}
                    // source={{uri: 'https://cdn.pixabay.com/photo/2017/12/22/11/09/schilthorn-3033448_1280.jpg'}}
                    resizeMode='cover' />
            </View>
            <View style={styles.textContainer} >
                <Text style={DefaultStyles.bodyText, styles.resultText} >
                    Your phone needed <Text style={styles.highlight} >{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight} >{props.userNumber}</Text>
                </Text>
            </View>

            {/* <Text style={DefaultStyles.bodyText} >Number of rounds: {props.roundsNumber}</Text>
            <Text style={DefaultStyles.bodyText} >Number was: {props.userNumber}</Text> */}
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    )

}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: "100%",
        height: "100%"
    },
    textContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    }
});

export default GameOverScreen;
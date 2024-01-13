import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Button, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export const LOTD_Button = (props) => {
    return (
        <>
            <TouchableOpacity style={styles.centered_gradient_button} onPress={props.onPress}>
            	<LinearGradient colors={['#FF5569', '#FF6634']} style={styles.linear_gradient} start={{x: 0, y: 1}} end={{x: 1, y: 1}}>
              	<Text style={{fontFamily: 'RedHatText-Bold', color: 'white', textTransform: 'uppercase'}}>{props.title}</Text>
            	</LinearGradient>
          	</TouchableOpacity>
        </>
    )
}

export const LOTD_EyeQRButton = (props) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={props.onPress}>
                <Image source={require('../assets/eye_qr_button.png')} style={{height: '18%', width: '60%', resizeMode: 'contain'}}/>
            </TouchableWithoutFeedback>
        </>
    )
}

export const LOTD_TopRightProfileButton = (props) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={props.onPress}>
                <Image source={require('../assets/home_profile_button.png')} style={{position: 'absolute', width: 100, height: 100, top: 25, right: 0}}/>
            </TouchableWithoutFeedback>
        </>
    )
}

export const LOTD_TopLeftLogoutButton = (props) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={props.onPress}>
                <Image source={require('../assets/home_logout_button.png')} style={{position: 'absolute', width: 100, height: 100, top: 25, left: 0}}/>
            </TouchableWithoutFeedback>
        </>
    )
}

export const LOTD_DoubleAltButton = (props) => {

    const [isClicked, setIsClicked] = useState(true);

    const handleTextClick = () => {
        setIsClicked(!isClicked);
        props.onClick(isClicked ? 1 : 0)
    };

    return (
        <>
            <View style={styles.double_alt_button_container}>
				<Text style={[{flex: 1, fontSize: props.fontSize, fontFamily: 'RedHatText-Bold'}, isClicked ? [{color: '#FF5F52', textDecorationLine: 'underline'}] : [{color: '#B1B1B1'}]]} disabled={isClicked} onPress={handleTextClick}>{props.option1}</Text>
				<Text style={[{flex: 2, fontSize: props.fontSize, fontFamily: 'RedHatText-Bold'}, !isClicked ? [{color: '#FF5F52', textDecorationLine: 'underline'}] : [{color: '#B1B1B1'}]]} disabled={!isClicked} onPress={handleTextClick}>{props.option2}</Text>
			</View>
        </>
    )
}

const styles = StyleSheet.create({
    double_alt_button_container: {
    	flexDirection: 'row',
    	width: '80%',
    	paddingBottom: 30
  	},
	linear_gradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    centered_gradient_button: {
    	alignItems: 'center',
    	backgroundColor: 'transparent',
    	height: 45,
    	borderRadius: 5,
    	width: '100%',
    	marginTop: 20,
    	justifyContent: 'center',
  	}
});
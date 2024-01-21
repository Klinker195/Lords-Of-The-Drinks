import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Button, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

// Linear Gradient missing props? start={{x: 0, y: 1}} end={{x: 1, y: 1}}
export const LOTD_Button = (props) => {
    return (
        <>
            <TouchableOpacity style={styles.centered_gradient_button} onPress={props.onPress}>
            	<LinearGradient colors={['#FF5569', '#FF6634']} style={styles.linear_gradient} >
              	    <Text style={{fontFamily: 'RedHatText-Bold', color: 'white', textTransform: 'uppercase'}}>{props.title}</Text>
            	</LinearGradient>
          	</TouchableOpacity>
        </>
    )
}

export const LOTD_AbsoluteTopLeftFloatingButton = (props) => {
    return (
        <>
            <TouchableOpacity style={styles.absolute_top_left_floating_button} onPress={props.onPress} >
                <LinearGradient colors={['#FF5569', '#FF6634']} style={styles.round_linear_gradient} >
                        <FontAwesome name={props.buttonType} size={24} color="white" />
                </LinearGradient>
            </TouchableOpacity>
        </>
    )
}

export const LOTD_AddDrinkFloatingButton = (props) => {
    return (
        <>
            <TouchableOpacity style={styles.floating_add_button} onPress={props.onPress} >
                <LinearGradient colors={['#FF5569', '#FF6634']} style={styles.round_linear_gradient} >
                    <FontAwesome name="plus" size={24} color="white" />
            	</LinearGradient>
            </TouchableOpacity>
        </>
    )
}

export const LOTD_PrimaryBottomFloatingButton = (props) => {
    return (
        <>
            <TouchableOpacity style={[styles.floating_button, styles.primary_bottom_floating_button]} onPress={props.onPress} >
                <LinearGradient colors={['#FF5569', '#FF6634']} style={styles.round_linear_gradient} >
                    <FontAwesome name={props.buttonType} size={24} color="white" />
            	</LinearGradient>
            </TouchableOpacity>
        </>
    )
}

export const LOTD_SecondaryBottomFloatingButton = (props) => {
    return (
        <>
            <TouchableOpacity style={[styles.floating_button, styles.secondary_bottom_floating_button]} onPress={props.onPress}>
                <LinearGradient colors={['#FF5569', '#FF6634']} style={styles.round_linear_gradient} >
                    <FontAwesome name={props.buttonType} size={24} color="white" />
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
    round_linear_gradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderRadius: 100
    },
    centered_gradient_button: {
    	alignItems: 'center',
    	backgroundColor: 'transparent',
    	height: 45,
    	borderRadius: 5,
    	width: '100%',
    	marginTop: 20,
    	justifyContent: 'center',
  	},
    secondary_bottom_floating_button: {
		bottom: 20,
		right: 80,
	},
	primary_bottom_floating_button: {
		bottom: 20,
		right: 20,
	},
    floating_button: {
		position: 'absolute',
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
		elevation: 3
	},
    floating_add_button: {
		width: 75,
		height: 75,
		borderRadius: 50,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
    absolute_top_left_floating_button: {
        position: 'absolute',
        top: 60,
        left: 20,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25, 
        backgroundColor: '#FF5569',
        elevation: 3
    }
});
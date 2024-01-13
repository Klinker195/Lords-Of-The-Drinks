import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';

export const LOTD_Input = (props) => {

	let isSecure = props.secureTextEntry

	let paddingRight = isSecure ? 45 : 10

	const [secureTextEntry, setSecureTextEntry] = useState(props.secureTextEntry)

	const switchSecureTextEntry = () => {
		setSecureTextEntry(!secureTextEntry)
	}

	return (
    	<>
        	<View style={{paddingBottom: 20}}>
            	<Text style={[styles.input_field_title, {fontSize: props.fontSize, fontFamily: 'RedHatText-Bold'}]}>{props.title}</Text>
				<View style={styles.input_container}>
					<TextInput style={[styles.white_input_grey_outline, {fontFamily: 'RedHatText-Medium', paddingRight: paddingRight}]} inputMode={props.inputMode} autoComplete={props.autoComplete} secureTextEntry={secureTextEntry} cursorColor='#FF5F52' value={props.value} onChangeText={props.onChangeText}/>
					{getSecureTextEntryViewer(isSecure, switchSecureTextEntry, secureTextEntry)}
				</View>

        	</View>
      	</>
    );
};

const getSecureTextEntryViewer = (isSecure, switchSecureTextEntry, secureTextEntry) => {
	if (isSecure) {
		let source = null
		if(secureTextEntry) {
			source = require('../assets/eye_blank_button.png')
		} else {
			source = require('../assets/closed_eye_blank_button.png')
		}
		return (
			<>
				<TouchableWithoutFeedback onPress={switchSecureTextEntry}>
					<Image source={source} style={{flex: 0.15, width: 20, height: 20, position: 'absolute', top: 12.5, right: 15}} resizeMode='contain'/>
				</TouchableWithoutFeedback>
			</>
		)
		
	}
}

// 

/*
export const LOTD_Input = (props) => {
	return (
    	<>
        	<View style={{paddingBottom: 20}}>
            	<Text style={[styles.input_field_title, {fontSize: props.fontSize, fontFamily: 'RedHatText-Bold'}]}>{props.title}</Text>
            	<TextInput style={[styles.white_input_grey_outline, {fontFamily: 'RedHatText-Medium'}]} inputMode={props.inputMode} autoComplete={props.autoComplete} secureTextEntry={props.secureTextEntry} cursorColor='#FF5F52'/>
        	</View>
      	</>
    );
};
*/

const styles = StyleSheet.create({
	input_field_title: {
        color: '#5A5A5A',
        fontSize: 16
    },
	/*
    white_input_grey_outline: {
        height: 45,
        borderRadius: 5,
        width: '100%',
        borderWidth: 2,
        borderColor: '#5A5A5A',
        padding: 10,
    }
	*/
	white_input_grey_outline: {
		flex: 1,
        height: 45,
        borderRadius: 5,
        width: '80%',
        borderWidth: 2,
        borderColor: '#5A5A5A',
        padding: 10
    },
	input_container: {
    	flexDirection: 'row'
	}
});
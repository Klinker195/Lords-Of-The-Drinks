import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Button, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { LOTD_Box } from './components/LOTD_Containers';
import { LOTD_Input } from './components/LOTD_Input';
import { LinearGradient } from 'expo-linear-gradient';
import { LOTD_Button, LOTD_DoubleAltButton } from './components/LOTD_Buttons';
import { useState, useEffect } from 'react';
import { save, getValueFor } from './utils/AsyncStorage'
import { apiLogin, apiSignUp } from './utils/LOTD_Api';

export const LOTD_AuthScreen = ({navigation}) => {

	useEffect(() => {
		getValueFor('userToken').then((token) => {
			if (token != "0" && token) {
				navigation.replace('Home')
			}
		})
	}, []);

	const [index, setIndex] = useState(0)
	const [email, setEmail] = useState('')
  	const [password, setPassword] = useState('')
  	const [confirmPassword, setConfirmPassword] = useState('')

  	const resetInputs = () => {
    	setEmail('');
    	setPassword('');
    	setConfirmPassword('');
  	};

	const validateEmail = (email) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};
	
	const validatePassword = (password) => {
		const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
		return regex.test(password);
	};

	const handleLoginButtonClick = (email, password) => {
		let errorMessage = '';

		if (!email) {
			errorMessage += 'Email field cannot be empty.\n';
		} else if (!validateEmail(email)) {
			errorMessage += 'Invalid email.\n';
		}

		if (!password) {
			errorMessage += 'Password field cannot be empty.\n';
		}

		if (errorMessage) {
			Alert.alert('Validation error', errorMessage);
		} else {
			apiLogin(email, password).then((token) => {
				if (token != "0" && token) {
					save('userToken', token).then(getValueFor('userToken').then((token) => console.log('storage = ' + token)))
					navigation.replace('Home')
				} else {
					Alert.alert('Login error', 'Incorrect credentials.\n');
				}
			})
		}
	}

	const handleSignUpButtonClick = (email, password, confirmPassword) => {
		let errorMessage = '';

		if (!email) {
			errorMessage += 'Email field cannot be empty.\n';
		} else if (!validateEmail(email)) {
			errorMessage += 'Invalid email.\n';
		}

		if (!password) {
			errorMessage += 'Password field cannot be empty.\n';
		} else if (!validatePassword(password)) {
			errorMessage += 'Password length must be at least 8 characters and must contain letters and numbers.\n';
		}

		if (confirmPassword != password) {
			errorMessage += 'Password confirmation field must be equal to password field.\n';
		}

		if (errorMessage) {
			Alert.alert('Validation error', errorMessage);
		} else {
			apiSignUp(email, password).then((token) => {
				if (token != "0" && token) {
					save('userToken', token).then(getValueFor('userToken').then((token) => console.log(token)))
					navigation.replace('Home')
				} else {
					Alert.alert('Signup error', 'Couldn\'t register user.\n');
				}
			})
		}
	}

	useEffect(() => {
		const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', Keyboard.dismiss);
	
		return () => {
			keyboardDidHideListener.remove();
		};
	}, []);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={[styles.centered_container, {paddingTop: '30%'}]}>
		  		<LOTD_AuthImageBackground/>
		  		<LOTD_Logo/> 
		  		<LOTD_Box>
			  		<LOTD_DoubleAltButton option1='Login' option2='Register' fontSize={24} onClick={(index) => { setIndex(index); resetInputs() }}/>
			  		{ 
						index === 0 ?
						<>
							<LOTD_Input key='login-email-input' title='Email' autoComplete='email' inputMode='email' fontSize={16} value={email} onChangeText={(text) => setEmail(text)}/>
							<LOTD_Input key='login-password-input' title='Password' autoComplete='current-password' secureTextEntry={true} securityCheck={true} fontSize={16} value={password}  onChangeText={(text) => setPassword(text)}/>
							<LOTD_Button key='login-button' title='LOGIN' onPress={() => handleLoginButtonClick(email, password)}/>
						</>
						:
						<>
							<LOTD_Input key='registration-email-input' title='Email' autoComplete='email' inputMode='email' fontSize={16} value={email}  onChangeText={(text) => setEmail(text)}/>
							<LOTD_Input key='registration-password-input' title='Password' autoComplete='current-password' secureTextEntry={true} securityCheck={true} fontSize={16} value={password} onChangeText={(text) => setPassword(text)}/>
							<LOTD_Input key='registration-confirmpassword-input' title='Confirm password' autoComplete='current-password' secureTextEntry={true} securityCheck={true} fontSize={16} value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)}/>
							<LOTD_Button key='register-button' title='REGISTER' onPress={() => handleSignUpButtonClick(email, password, confirmPassword)}/>
						</>
					}
					
		  		</LOTD_Box>
				<StatusBar style='light' backgroundColor='#FF5569'/>
			</View>
  		</TouchableWithoutFeedback>
	)
}

const LOTD_Logo = () => {
	return (
    	<>
      		<Image style={styles.logo} source={require('./assets/lord_of_the_drinks_logo.png')}/>
    	</>
	)
}

const LOTD_AuthImageBackground = () => {
	return (
		<>
			<ImageBackground source={require('./assets/blob1.png')} resizeMode='cover' style={[styles.absolute_image, {width: 120, height: 135, top: 0, right: 0}]}/>
			<ImageBackground source={require('./assets/blob2.png')} resizeMode='cover' style={[styles.absolute_image, {width: 200, height: 280, top: 0, left: 0}]}/>
			<ImageBackground source={require('./assets/blob3.png')} resizeMode='cover' style={[styles.absolute_image, {width: 385, height: 550, bottom: 0, right: 0}]}/>
		</>
	)
}

const styles = StyleSheet.create({
	logo: {
    	position: 'absolute',
    	width: 200,
    	height: 200,
    	top: 75
  	},
  	absolute_image: {
    	position: 'absolute',
    	resizeMode: 'contain',
  	},
  	login_register_container: {
    	flexDirection: 'row',
    	width: '80%',
    	paddingBottom: 30
  	},
  	button: {
    	alignItems: 'center',
    	backgroundColor: 'transparent',
    	height: 45,
    	borderRadius: 5,
    	width: '100%',
    	marginTop: 20,
    	justifyContent: 'center',
  	},
  	centered_container: {
    	flex: 1,
    	backgroundColor: '#fff',
    	flexDirection: 'column',
    	alignItems: 'center',
    	justifyContent: 'center'
  	},
});

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

export const LOTD_NotificationScreen = ({route, navigation}) => {

	const { notificationImagePath, notificationText, nextRoute } = route.params

	return (
		<View style={[styles.centered_container, {paddingTop: '10%'}]}>
			<View style={{flex: 1.4, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: '20%'}}>
				<Text style={{fontFamily: 'RedHatText-Bold', fontSize: 48, color: '#FF5F52', textAlign: 'center'}}>{notificationText}</Text>
			</View>
			<View style={{flex: 3, alignItems: 'center', justifyContent: 'flex-start'}}>
				<Image style={{width: '75%'}} source={notificationImagePath} resizeMode='contain'/>
			</View>
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: '5%', paddingRight: '5%'}}>
				<LOTD_Button key='ok-button' title='NEXT' onPress={() => navigation.replace(nextRoute)}/>
			</View>
			<StatusBar style='light' backgroundColor='#FF5569'/>
		</View>
	)
}

const styles = StyleSheet.create({
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
		flex: 1
  	},
});

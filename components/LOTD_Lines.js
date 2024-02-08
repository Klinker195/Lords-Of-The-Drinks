import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Button, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export const LOTD_DividerLine = () => {
	return (
		<>
			<View style={styles.divider_line} />
		</>
	)
}

const styles = StyleSheet.create({
	divider_line: {
		borderBottomColor: '#A8A8A8',
		borderBottomWidth: 1,
		marginTop: 20,
		marginBottom: 20
	}
});
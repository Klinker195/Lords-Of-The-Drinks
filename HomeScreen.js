import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LOTD_TopRightProfileButton, LOTD_TopLeftLogoutButton, LOTD_EyeQRButton } from './components/LOTD_Buttons';

export const LOTD_HomeScreen = ({navigation}) => {
	return (
		<View style={[styles.centered_container, {paddingBottom: '30%'}]}>
			<LOTD_TopRightProfileButton />
			<LOTD_TopLeftLogoutButton onPress={() => navigation.replace('Auth')}/>
			<Text style={{fontFamily: 'RedHatText-Bold', fontSize: 24, color: '#FF5F52'}}>Tap to scan QR code!</Text>
			<Image source={require('./assets/arrow_downward.png')} style={styles.arrow_icon_image}/>
			<LOTD_EyeQRButton onPress={() => {
				navigation.replace('Notification', {
					notificationImagePath: require('./assets/eye_ok_icon.png'),
					notificationText: 'Done!',
					nextRoute: 'Venue'
				});
			}}/>
			<Image source={require('./assets/home_background.png')} style={styles.background_image}/>
			<Image source={require('./assets/home_qr_scan_tower.png')} style={styles.background_image}/>
			<StatusBar style='light' backgroundColor='#FF5569'/>
		</View>
	)
}

const styles = StyleSheet.create({
  	centered_container: {
    	flex: 1,
    	backgroundColor: '#fff',
    	flexDirection: 'column',
    	alignItems: 'center',
    	justifyContent: 'center'
  	},
	arrow_icon_image: {
		flex: 0.1,
		height: '20%',
		width: '20%',
		resizeMode: 'contain'
	},
	background_image: {
		position: 'absolute',
		bottom: 0,
		zIndex: -1
	}
});

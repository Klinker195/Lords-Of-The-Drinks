import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { LOTD_AuthScreen } from './AuthScreen';
import { LOTD_HomeScreen } from './HomeScreen';
import { LOTD_NotificationScreen } from './NotificationScreen';
import { LOTD_VenueScreen } from './VenueScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
    	'RedHatText-Bold': require('./fonts/RedHatText-Bold.ttf'),
    	'RedHatText-Medium': require('./fonts/RedHatText-Medium.ttf'),
  	});

  	if (!fontsLoaded) {
    	return null;
  	}

  	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Auth" component={LOTD_AuthScreen} options={{headerShown: false}}/>
				<Stack.Screen name="Home" component={LOTD_HomeScreen} options={{headerShown: false}}/>
				<Stack.Screen name="Notification" component={LOTD_NotificationScreen} options={{headerShown: false}} initialParams={{notificationImagePath: require('./assets/eye_ok_icon.png'), notificationText: '[Notification text]'}} />
				<Stack.Screen name="Venue" component={LOTD_VenueScreen} options={{headerShown: false}}/>
			</Stack.Navigator>
		</NavigationContainer>
  	)
}

const styles = StyleSheet.create({

});

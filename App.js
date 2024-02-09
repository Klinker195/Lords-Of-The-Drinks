import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { LOTD_AuthScreen } from './AuthScreen';
import { LOTD_HomeScreen } from './HomeScreen';
import { LOTD_NotificationScreen } from './NotificationScreen';
import { LOTD_VenueScreen } from './VenueScreen';
import { LOTD_OrderSummaryScreen } from './OrderSummaryScreen';
import { LOTD_CheckoutScreen } from './CheckoutScreen';
import { getValueFor } from './utils/AsyncStorage'
import { DrinksProvider } from './utils/DrinksContext';

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
		<DrinksProvider>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Auth">
					<Stack.Screen name="Auth" component={LOTD_AuthScreen} options={{headerShown: false}}/>
					<Stack.Screen name="Home" component={LOTD_HomeScreen} options={{headerShown: false}}/>
					<Stack.Screen name="Notification" component={LOTD_NotificationScreen} options={{headerShown: false}} initialParams={{notificationImagePath: require('./assets/eye_ok_icon.png'), notificationText: '[Notification text]'}} />
					<Stack.Screen name="Venue" component={LOTD_VenueScreen} options={{headerShown: false}}/>
					<Stack.Screen name="OrderSummary" component={LOTD_OrderSummaryScreen} options={{
						title: 'Order summary',
						headerShown: true,
						headerStyle: {
							backgroundColor: '#FF5569',
						},
						headerTintColor: '#FFFFFF',
						headerTitleStyle: {
							fontFamily: 'RedHatText-Bold',
						}
						}}/>
					<Stack.Screen name="Checkout" component={LOTD_CheckoutScreen} options={{
						title: 'Checkout',
						headerShown: true,
						headerStyle: {
							backgroundColor: '#FF5569',
						},
						headerTintColor: '#FFFFFF',
						headerTitleStyle: {
							fontFamily: 'RedHatText-Bold',
						}
						}}/>
				</Stack.Navigator>
			</NavigationContainer>
		</DrinksProvider>
  	)
}

const styles = StyleSheet.create({

});

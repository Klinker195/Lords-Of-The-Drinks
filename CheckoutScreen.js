import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Button, TouchableOpacity, Alert, ScrollView, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { LOTD_Box, LOTD_GradientBox } from './components/LOTD_Containers';
import { LOTD_Input } from './components/LOTD_Input';
import { LinearGradient } from 'expo-linear-gradient';
import { LOTD_Button, LOTD_DoubleAltButton } from './components/LOTD_Buttons';
import { useState, useEffect, useMemo } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { LOTD_AbsoluteTopLeftFloatingButton, LOTD_AddDrinkFloatingButton, LOTD_PrimaryBottomFloatingButton, LOTD_SecondaryBottomFloatingButton } from './components/LOTD_Buttons';
import { LOTD_DividerLine } from './components/LOTD_Lines'
import { apiGetOrderDetails, apiPayOrder } from './utils/LOTD_Api';
import { getValueFor } from './utils/AsyncStorage';

export const LOTD_CheckoutScreen = ({navigation}) => {

    const [drinks, setDrinks] = useState([]);
    const [total, setTotal] = useState(0.0);

	useEffect(() => {
		getValueFor('userToken').then((token) => {
			apiGetOrderDetails(token, 1).then((orderDetails) => {
				if(orderDetails && orderDetails.drinks) {
					setDrinks(orderDetails.drinks)
					setTotal(orderDetails.total_price)
				}
			})
		})
    }, []);

	const handlePayOrderClick = () => {
		
		if (total === 0.0) {
			Alert.alert("Empty checkout", "There are no drinks to pay.");
			return; 
		}

		getValueFor('userToken').then((token) => {
			apiPayOrder(token, 1).then((token) => {
				if (token != "0") {
					console.log("Payment successful.")

					navigation.replace('Notification', {
						notificationImagePath: require('./assets/eye_heart_icon.png'),
						notificationText: 'Payment successful!',
						nextRoute: 'Home',
						replace: true
					});
				} else {
					console.log("Payment failed.")

					navigation.replace('Notification', {
						notificationImagePath: require('./assets/eye_error_icon.png'),
						notificationText: 'Payment failed!',
						nextRoute: 'Venue',
						replace: false
					});
				}
			})
		})
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Pressable>
				<ScrollView style={[styles.scroll_view, {height: '65%', backgroundColor: '#FFFFFF'}]} contentContainerStyle={{ flexGrow: 1 }}>
					<Pressable>
						{drinks.map(drink => (
                            <LOTD_CartItem
                                key={drink.id}
                                productId={drink.id}
                                productName={drink.name}
                                quantity={drink.quantity}
                                price={drink.price}
                            />
                        ))}
					</Pressable>
				</ScrollView>
				<View style={{backgroundColor: '#FFFFFF', height: '25%'}}>
					<View style={{backgroundColor: '#FFFFFF', flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignContent: 'flex-end'}}>
						<View style={{paddingLeft: 20, paddingRight: 20, flex: 0.8}}>
							<LOTD_DividerLine />
							<View style={{alignContent: 'center', alignItems: 'center'}}>
								<Text style={{fontSize: 32, fontFamily: 'RedHatText-Bold'}}>Totale</Text>
								<Text style={{fontSize: 32, fontFamily: 'RedHatText-Bold'}}>{`${total.toFixed(2)}€`}</Text>
							</View>
						</View>
						
						<View style={{paddingLeft: 20, paddingRight: 20, backgroundColor: '#FFFFFF', flex: 0.25}}>
							<LOTD_Button title="Pay order" onPress={handlePayOrderClick}/>
						</View>
					</View>
				</View>
			</Pressable>
		</TouchableWithoutFeedback>
	);
};

const LOTD_CartItem = (props) => {
	return (
		<>
			<View style={styles.item_container}>
				<Text style={{fontSize: 16, fontFamily: 'RedHatText-Medium'}}>
					<Text style={{fontFamily: 'RedHatText-Bold'}}>{`${props.quantity}x`}</Text><Text>{` ${props.productName}`}</Text>
					<Text style={{fontFamily: 'RedHatText-Bold'}}>{` ${(props.price).toFixed(2)} €`}</Text>
				</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	item_container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#e2e2e2',
	},
	header: {
		padding: 20,
		// Aggiungi altri stili per il header se necessario
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		// Aggiungi altri stili per il titolo se necessario
	},
	description: {
		fontSize: 16,
		// Aggiungi altri stili per la descrizione se necessario
	},
	search_bar: {
		padding: 10,
		marginBottom: 20,
		borderRadius: 45,
		height: 46,
		width: '100%',
		backgroundColor: '#E8E8E8'
		// Aggiungi altri stili per la barra di ricerca se necessario
	},
	scroll_view: {
		backgroundColor: '#FFFFFF'
		// Aggiungi altri stili per la scrollView se necessario
	},
	item_title: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontFamily: 'RedHatText-Bold',
		fontSize: 20,
		color: 'white'
		// Aggiungi altri stili per gli item consigliati se necessario
	},
	item_name: {
		// Aggiungi stili per il nome dell'item
	},
	item_price: {
		// Aggiungi stili per il prezzo dell'item
	},
	add_button_text: {
		color: 'white',
		// Aggiungi altri stili per il testo dentro il bottone di aggiunta
	},
	floating_button: {
		position: 'absolute',
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
		backgroundColor: '#FF5569',
		elevation: 3
	},
	floating_button_left: {
		bottom: 20,
		right: 80,
	},
	floating_button_right: {
		bottom: 20,
		right: 20,
	},
	centered_container: {
		flex: 1,
		backgroundColor: '#fff',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1
	},
	absolute_image: {
		position: 'absolute',
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center'
	},
	white_wide_rounded_box: {
		elevation: 3,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		width: '100%',
		height: '100%',
		padding: 20,
		backgroundColor: '#fff',
		alignContent: 'center',
	},
	venue_name: {
		fontFamily: 'RedHatText-Bold',
		color: 'white',
		fontSize: 32,
		alignSelf: 'center'
	},
	venue_description: {
		fontFamily: 'RedHatText-Medium',
		fontSize: 14,
		color: 'black',
		textAlign: 'justify'
	},
	divider_line: {
		borderBottomColor: '#A8A8A8',
		borderBottomWidth: 1,
		marginTop: 20,
		marginBottom: 20
	},
	card_container: {
		flexDirection: 'row',
		backgroundColor: 'white',
		borderRadius: 15,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 8,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 15,
	},
	info_container: {
		flex: 1,
		paddingHorizontal: 10,
		justifyContent: 'center',
	},
	drink_name: {
		fontFamily: 'RedHatText-Bold',
		fontSize: 16
	},
	drink_price: {
		fontFamily: 'RedHatText-Bold',
		fontSize: 16,
		color: 'black',
		marginBottom: 5,
	},
	drink_ingredients: {
		fontFamily: 'RedHatText-Medium',
		fontSize: 12,
		color: '#808080',
	},
	add_button: {
		width: 50,
		height: 50,
		backgroundColor: '#FF5569',
		borderRadius: 50,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center'
	}
	// Aggiungi qui altri stili se necessario
});
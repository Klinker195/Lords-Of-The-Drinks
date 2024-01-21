import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Button, TouchableOpacity, Alert, ScrollView, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { LOTD_Box, LOTD_GradientBox } from './components/LOTD_Containers';
import { LOTD_Input } from './components/LOTD_Input';
import { LinearGradient } from 'expo-linear-gradient';
import { LOTD_Button, LOTD_DoubleAltButton } from './components/LOTD_Buttons';
import { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { LOTD_AbsoluteTopLeftFloatingButton, LOTD_AddDrinkFloatingButton, LOTD_PrimaryBottomFloatingButton, LOTD_SecondaryBottomFloatingButton } from './components/LOTD_Buttons';

export const LOTD_VenueScreen = ({navigation}) => {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Pressable>
				<ScrollView style={styles.scroll_view} contentContainerStyle={{ flexGrow: 1 }}>
					<Pressable>
						<View style={[styles.centered_container, { paddingTop: '70%' }]}>
							<LOTD_VenueImageBackground />
							<LOTD_AbsoluteTopLeftFloatingButton buttonType="sign-out" onPress={() => navigation.replace("Home")}/>
							<View style={styles.white_wide_rounded_box}>
								<View style={{paddingBottom: 50}}>
									<LOTD_GradientBox text="The Prancing Pony" mode="header" />
									<Text style={styles.venue_description}>
										The Prancing Pony, Bree's hottest spot, is not just an inn – it's a vibe. Catering to both locals and wanderlust-driven travelers, this iconic hangout offers a fusion of craft beers, mouthwatering bites, and cozy accommodations. Positioned at the bustling crossroads of the Great East Road and the Greenway in Eriador, it's the epicenter of cool at the base of the Bree-hill.
									</Text>
									<LOTD_DividerLine />
									<TextInput style={styles.search_bar} placeholder="Search" />
									<LOTD_GradientBox text="✌ Recommended by us" mode="subtitle" />
									<LOTD_DrinkCard name="Stardust Elixir" price="8,50 €" ingredients="Gin, elderflower liqueur, edible sugar glitter"/>
									<LOTD_DrinkCard name="Stardust Elixir" price="8,50 €" ingredients="Gin, elderflower liqueur, edible sugar glitter"/>
									<LOTD_DrinkCard name="Stardust Elixir" price="8,50 €" ingredients="Gin, elderflower liqueur, edible sugar glitter"/>
									<LOTD_GradientBox text="⭐ Your favorites" mode="subtitle" />
									<LOTD_DrinkCard name="Stardust Elixir" price="8,50 €" ingredients="Gin, elderflower liqueur, edible sugar glitter"/>
									<LOTD_DrinkCard name="Stardust Elixir" price="8,50 €" ingredients="Gin, elderflower liqueur, edible sugar glitter"/>
									<LOTD_DrinkCard name="Stardust Elixir" price="8,50 €" ingredients="Gin, elderflower liqueur, edible sugar glitter"/>
									<LOTD_GradientBox text="🍸 Drinks" mode="subtitle" />
									<LOTD_DrinkCard name="Stardust Elixir" price="8,50 €" ingredients="Gin, elderflower liqueur, edible sugar glitter"/>
									<LOTD_DrinkCard name="Stardust Elixir" price="8,50 €" ingredients="Gin, elderflower liqueur, edible sugar glitter"/>
									<LOTD_DrinkCard name="Stardust Elixir" price="8,50 €" ingredients="Gin, elderflower liqueur, edible sugar glitter"/>
									<LOTD_GradientBox text="🍹 Shakes" mode="subtitle" />
									<LOTD_DrinkCard name="Stardust Elixir" price="8,50 €" ingredients="Gin, elderflower liqueur, edible sugar glitter"/>
									<LOTD_DrinkCard name="Stardust Elixir" price="8,50 €" ingredients="Gin, elderflower liqueur, edible sugar glitter"/>
									<LOTD_DrinkCard name="Stardust Elixir" price="8,50 €" ingredients="Gin, elderflower liqueur, edible sugar glitter"/>
								</View>
							</View>
							<StatusBar style='light' backgroundColor='#FF5569' />
						</View>
					</Pressable>
				</ScrollView>
				<LOTD_PrimaryBottomFloatingButton buttonType="euro"/>
				<LOTD_SecondaryBottomFloatingButton buttonType="shopping-cart"/>
			</Pressable>
		</TouchableWithoutFeedback>
	);
};

const LOTD_VenueImageBackground = (props) => {

	const defaultImage = require('./assets/venue_default_background.png')

	const imageSrc = props.imageSrc ? { uri: props.imageSrc } : defaultImage

	return (
		<>
			<ImageBackground source={imageSrc} resizeMode='cover' style={[styles.absolute_image, { width: '100%', height: 300, top: 0, right: 0, left: 0 }]} />
		</>
	)
}

const LOTD_DividerLine = () => {
	return (
		<>
			<View style={styles.divider_line} />
		</>
	)
}

const LOTD_DrinkCard = (props) => {
	return (
		<>
			<View style={styles.card_container}>
				<Image
					source={require('./assets/drink_default_image.png')}
					style={styles.image}
				/>
				<View style={styles.info_container}>
					<Text style={styles.drink_name}>{ props.name }</Text>
					<Text style={styles.drink_price}>{ props.price }</Text>
					<Text style={styles.drink_ingredients}>{ props.ingredients }</Text>
				</View>
				<LOTD_AddDrinkFloatingButton />
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
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
		marginTop: 0,
		bottom: 0
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
		justifyContent: 'center'
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
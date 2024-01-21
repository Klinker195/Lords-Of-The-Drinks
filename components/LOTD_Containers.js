import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const LOTD_Box = ({ children }) => {
	return (
		<>
			<View style={styles.white_rounded_box}>
				{children}
			</View>
		</>
	);
};

export const LOTD_GradientBox = (props) => {

	let style = null

	let marginBottom = 0

	if (props.mode == "header") {
		style = styles.linear_gradient_box_title
		marginBottom = 20
	} else if (props.mode == "subtitle") {
		style = styles.linear_gradient_box_subtitle
	} else {
		style = styles.linear_gradient_box_title
		marginBottom = 20
	}

	return (
		<>
			<LinearGradient colors={['#FF5569', '#FF6634']} style={[styles.linear_gradient_box, { marginBottom: marginBottom }]} >
				<Text style={style}>
					{props.text}
				</Text>
			</LinearGradient>
		</>
	)
}

const styles = StyleSheet.create({
	white_rounded_box: {
		elevation: 3,
		marginTop: 30,
		borderRadius: 20,
		width: '80%',
		height: 'auto',
		padding: 20,
		backgroundColor: '#fff',
		alignContent: 'center',
	},
	linear_gradient_box_title: {
		fontFamily: 'RedHatText-Bold',
		color: 'white',
		fontSize: 32,
		alignSelf: 'center'
	},
	linear_gradient_box_subtitle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontFamily: 'RedHatText-Bold',
		fontSize: 20,
		color: 'white'
	},
	linear_gradient_box: {
		backgroundColor: '#FF5569',
		padding: 10,
		borderRadius: 45,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
	}
});
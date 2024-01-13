import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export const LOTD_Box = ({children}) => {
	return (
    	<>
      		<View style={styles.white_rounded_box}>
        		{children}
      		</View>
    	</>
  	);
};

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
});
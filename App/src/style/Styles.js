import { StyleSheet } from "react-native"

export default StyleSheet.create({
	container: {
		height: '100%',
	},

	//Button

	buttonContent: {
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#008E51',
		width: 200,
		height: 45,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	buttonPosition: {
		padding: 10,
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#005F80',
		textTransform: 'uppercase',
	},

	//Help Button

	helpButtonPosition: {
		alignItems: 'center',
	},
	helpButtonContent: {
		bottom: '5%',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	helpButtonText: {
		fontSize: 12,
		color: '#005F80',
	},

	//Image

	imageSize: {
		width: 200,
		height: 200,
	},
	imagePosition: {
		justifyContent: 'space-around',
		alignItems: 'center',
		justifyContent: 'center',
	},

	//Position

	center: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	bottom: {
		flex: 2,
		justifyContent: 'space-around',
	},
	top: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'space-around',
	}
})
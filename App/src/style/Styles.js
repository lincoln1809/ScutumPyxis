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
		fontSize: 14,
		color: '#005F80',
	},

	//Enter Button

	enterButtonPosition: {
		alignItems: 'center',
	},
	enterButtonContent: {
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#008E51',
		width: 160,
		height: 45,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	enterButtonText: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 14,
		color: '#008E51',
	},

	//Cancel Button EA3D2F

	cancelButtonPosition: {
		alignItems: 'center',
	},
	cancelButtonContent: {
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#EA3D2F',
		width: 160,
		height: 45,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	cancelButtonText: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 14,
		color: '#EA3D2F',
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
	imageSizeLogin: {
		width: 131,
		height: 122,
	},
	imagePositionLogin: {
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
	},
	centerReverse: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	bottomReverse: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'space-around',

	},
	topReverse: {
		flex: 2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},

	//Input

	input: {
		flex: 4,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 20,
		flexDirection: 'column',
	},
	inputField: {
		color: '#005F80',
		paddingBottom: 50,
	}
})
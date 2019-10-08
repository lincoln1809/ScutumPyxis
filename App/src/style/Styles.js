import { StyleSheet } from 'react-native'

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
		fontSize: 17,
		fontWeight: 'bold',
		color: '#005F80',
		textTransform: 'uppercase',
	},
	bigButtonContent: {
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#008E51',
		width: 250,
		height: 70,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	bigButtonContainer: {
		flex: 2,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	bigButton: {
		alignItems: 'center',
		padding: 20,
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
		fontSize: 16,
		color: '#005F80',
	},

	//Enter Button

	enterButtonPosition: {
		alignItems: 'center',
	},
	enterButtonContent: {
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#7DCD52',
		backgroundColor: '#7DCD52',
		width: 160,
		height: 45,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	enterButtonText: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 17,
		color: '#FEFEFE',
	},

	//Cancel Button EA3D2F

	cancelButtonPosition: {
		alignItems: 'center',
	},
	cancelButtonContent: {
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#EA3D2F',
		backgroundColor: '#EA3D2F',
		width: 160,
		height: 45,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	cancelButtonText: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 17,
		color: '#FEFEFE',
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
	},
	inputFieldFirst: {
		color: '#005F80',
		paddingBottom: 50,
		paddingTop: 25,
	},

	//Avatar

	avatarContainer: {
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingBottom: 60,
		paddingTop: 60,
	},
})
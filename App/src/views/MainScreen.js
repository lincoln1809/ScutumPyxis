import React, { Component } from 'react'
import { View, Image } from 'react-native'
import Styles from '../style/Styles'
import { Button } from '../components/button'

export default class MainScreen extends Component {
	render() {
		const { navigate } = this.props.navigation
		return(
			<View style={ Styles.container }>
				<View style={ Styles.top }>
					<Image style={ Styles.imageSize }
						source={ require( '../img/splogo.png' ) }
						resizeMode="contain" />
				</View>
				<View style={ Styles.center }>
					<Button
						style={ Styles.buttonContent }
						textStyle={ Styles.buttonText }
						underlayColor={ '#005F80' }
						title="Crie sua conta"
						onPress={ () => navigate('Logon') }
					/>
					<Button
						style={ Styles.buttonContent }
						textStyle={ Styles.buttonText }
						underlayColor={ '#005F80' }
						title="Entre"
						onPress={ () => navigate('Login') }
					/>
				</View>
				<View style={ Styles.bottom }>
					<Button
						style={ Styles.helpButtonContent }
						textStyle={ Styles.helpButtonText }
						title="Precisa de ajuda? Toque aqui!"
						onPress={ () => navigate('Logon') }
					/>
				</View>
			</View>
		)
	}
}
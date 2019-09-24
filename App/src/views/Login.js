import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import Styles from '../style/Styles'
import { Button } from "../components/button"
import { TextInput } from 'react-native-paper';

const theme = {
    roundness: 5,
    colors: {
      primary: '#005F80',
      accent: '#008E51',
    }
  };
export default class Login extends Component {
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={Styles.container}>
				<View style={Styles.top}>
					<Image style={Styles.imageSizeLogin}
						source={require('../img/splogo.png')}
						resizeMode="contain" />
				</View>
				<View style={Styles.input}>
                    <View style={Styles.inputField}>
                        <TextInput
                            theme={theme}
                            label='Email/CPF'
                            mode='outlined'/>
                    </View>
                    <View style={ Styles.inputField }>
                        <TextInput
                            theme={theme}
                            label='Senha'
                            mode='outlined'/>
                    </View>
                    <View style={ Styles.bottomReverse }>
                        <Button
                        style={ Styles.cancelButtonContent }
                        textStyle={ Styles.cancelButtonText }
                        underlayColor={ '#EA3D2F' }
						title="Cancelar"
						onPress={() => goBack()}/>
                        <Button
                        style={ Styles.enterButtonContent }
                        textStyle={ Styles.enterButtonText }
                        underlayColor={ '#7DCD52' }
						title="Entrar"
						onPress={() => navigate('Logon')}/>
                    </View>
                    <View style = {Styles.bottom}>
                        <Button
                            style={ Styles.helpButtonContent }
                            textStyle={ Styles.helpButtonText }
                            title="Esqueci minha senha"
                            onPress={() => navigate('Logon')}
                        />
				    </View>
                </View>
			</View>
        )
    }
}
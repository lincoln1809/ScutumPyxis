import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import Styles from '../style/Styles'
import { Button } from  '../components/button'
import { TextInput } from 'react-native-paper'
import axios from 'axios'
import { server, showError } from './common'

const theme = {
  roundness: 5,
  colors: {
    primary: '#005F80',
    accent: '#008E51',
  }
}

export default class Login extends Component {

  handleSubmit = async () => {
    try {
      const res = await axios.post(`${server}/signin`, {
        email: this.state.email,
        password: this.state.password
      })

      axios.defaults.headers.common['Autorization'] = `bearer ${res.data.token}`

      let name = res.data.name

      this.props.navigation.navigate('UserScreen', { name })
    } catch (err) {
      alert.alert('Erro', 'Falha no Login!')
    }
  }

  state = {
    email: '',
    password: '',
  };

  render() {
    const { navigate, goBack } = this.props.navigation
    return(
      <View style={ Styles.container }>
        <View style={ Styles.top }>
          <Image style={ Styles.imageSizeLogin }
            source={ require( '../img/splogo.png' ) }
            resizeMode="contain" />
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#005F80', textTransform: 'uppercase', }}>Scutum Pyxies</Text>
        </View>
        <View style={ Styles.input }>
          {/* <View style={ Styles.inputField }>
            <TextInput
              label='Nome Completo'
              value={ this.state.name }
              onChangeText={ name => this.setState( { name } ) }
              theme={ theme }
              mode='outlined'/>
          </View> */}
          <View style={ Styles.inputField }>
            <TextInput
              label='Email ou CPF'
              value={ this.state.email }
              onChangeText={ email => this.setState( { email } ) }
              theme={theme}
              mode='outlined'
              autoCapitalize="none"
              autoCorrect={false} />
          </View>
          <View style={ Styles.inputField }>
            <TextInput
              label='Senha'
              value={this.state.password }
              onChangeText={ password => this.setState( { password } ) }
              theme={ theme }
              mode='outlined'
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry />
          </View>
          <View style={ Styles.bottomReverse }>
            <Button
              style={ Styles.cancelButtonContent }
              textStyle={ Styles.cancelButtonText }
              underlayColor={ '#EA3D2F' }
              title="Cancelar"
              onPress={ () => goBack() }/>
            <Button
              style={ Styles.enterButtonContent }
              textStyle={ Styles.enterButtonText }
              underlayColor={ '#7DCD52' }
              title="Entrar"
              onPress={ this.handleSubmit }/>
            </View>
            {/* <View style = { Styles.bottom }>
              <Button
                style={ Styles.helpButtonContent }
                textStyle={ Styles.helpButtonText }
                title="Esqueci minha senha"
                onPress={ () => navigate( 'Logon' ) }
              />
            </View> */}
          </View>
        </View>
    )
  }
}
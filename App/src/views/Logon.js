import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import Styles from '../style/Styles'
import { Button } from "../components/button"
import { TextInput } from 'react-native-paper'

const theme = {
  roundness: 5,
  colors: {
    primary: '#005F80',
    accent: '#008E51',
  }
}

export default class Logon extends Component {

  handleSubmit = () => {
    const personalDataLogon = this.state;
    console.log('value: ', personalDataLogon);
    this.props.navigation.navigate('Login');
  }

  state = {
    name: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
  };

  render() {
    const { navigate, goBack } = this.props.navigation
    return (
      <View style={Styles.container}>
        <View style={Styles.input}>
          <View style={Styles.inputField}>
            <TextInput
              label='Nome Completo'
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              theme={theme}
              mode='outlined'/>
          </View>
          <View style={Styles.inputField}>
            <TextInput
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              theme={theme}
              label='E-mail'
              mode='outlined' />
          </View>
          <View style={Styles.inputField}>
            <TextInput
              value={this.state.cpf}
              onChangeText={cpf => this.setState({ cpf })}
              theme={theme}
              label='CPF'
              mode='outlined' />
          </View>
          <View style={Styles.inputField}>
            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              theme={theme}
              label='Senha'
              mode='outlined' />
          </View>
          <View style={Styles.inputField}>
            <TextInput
              value={this.state.confirmPassword}
              onChangeText={confirmPassword => this.setState({ confirmPassword })}
              theme={theme}
              label='Confirmar Senha'
              mode='outlined' />
          </View>
          <View style={Styles.bottomReverse}>
            <Button
              style={Styles.cancelButtonContent}
              textStyle={Styles.cancelButtonText}
              underlayColor={'#EA3D2F'}
              title="Cancelar"
              onPress={() => goBack()} />
            <Button
              style={Styles.enterButtonContent}
              textStyle={Styles.enterButtonText}
              underlayColor={'#7DCD52'}
              title="Entrar"
              onPress={this.handleSubmit} />
          </View>
          <View style={Styles.bottom}>
            <Button
              style={Styles.helpButtonContent}
              textStyle={Styles.helpButtonText}
              title="Esqueci minha senha"
              onPress={() => navigate('Logon')}
            />
          </View>
        </View>
      </View>
    )
  }
}
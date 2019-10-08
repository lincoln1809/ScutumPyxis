import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from '../components/button'
import Styles from '../style/Styles'
import { Avatar } from 'react-native-paper'

export default class UserScreen extends Component {
  render() {
    const { name, email, senha } = this.props.navigation.state.params.personalDataLogin
    const { navigate } = this.props.navigation
    return(
      <View style={ Styles.container }>
        <View style={ Styles.avatarContainer }>
          <View style={{ padding: 10 }}>
            <Avatar.Text size={80} label="FT" />
          </View>
          <View>
            <Text style={ Styles.buttonText }> { name } </Text>
          </View>
        </View>
        <View style={ Styles.bigButtonContainer }>
          <View style={ Styles.bigButton }>
            <Button
              style={ Styles.bigButtonContent }
              textStyle={ Styles.buttonText }
              underlayColor={ '#005F80' }
              title="Sensoriamento" />
          </View>
          <View style={ Styles.bigButton }>
            <Button
              style={ Styles.bigButtonContent }
              textStyle={ Styles.buttonText }
              underlayColor={ '#005F80' }
              title="Reporte de erros" />
          </View>
          <View style={ Styles.bigButton }>
            <Button
              style={ Styles.bigButtonContent }
              textStyle={ Styles.buttonText }
              underlayColor={ '#005F80' }
              title="configurações"/>
          </View>
        </View>
      </View>
    )
  }
}
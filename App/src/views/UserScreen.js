import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { Button } from '../components/button'
import Styles from '../style/Styles'
import { Avatar } from 'react-native-paper'


export default class UserScreen extends Component {
  render() {
    const score = this.props.navigation.state.params.score
    const { navigate } = this.props.navigation
    return (
      <View style={Styles.container}>
        <View style={Styles.avatarContainer}>
          <View style={{ padding: 10 }}>
            <Avatar.Image size={80} source={require('../img/splogo.png')} />
          </View>
          <View>
            <Text style={Styles.buttonText}> {this.props.navigation.state.params.name} </Text>
          </View>
          <View style={{
            borderRadius: 5,
            borderWidth: 2,
            borderColor: '#008E51',
            width: 100,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <View style={{ flex: 1 }}>
              <Text style={{
                color: '#008E51',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: 15,
              }}>Pontos</Text>
            </View>
            <View style={{ justifyContent: 'flex-start' }}>
              <Text style={{
                color: '#008E51',
                fontWeight: 'bold',
                fontSize: 18,
              }}>{this.props.navigation.state.params.score}</Text>
            </View>
          </View>
        </View>
        <View style={Styles.bigButtonContainer}>
          <View style={Styles.bigButton}>
            <Button
              style={Styles.bigButtonContent}
              textStyle={Styles.buttonText}
              underlayColor={'#005F80'}
              title="Sensoriamento"
              onPress={() => navigate('SensorRoutes', { score })} />
          </View>
          <View style={Styles.bigButton}>
            <Button
              style={Styles.bigButtonContent}
              textStyle={Styles.buttonText}
              underlayColor={'#005F80'}
              title="Reporte de erros" />
          </View>
          <View style={Styles.bigButton}>
            <Button
              style={Styles.bigButtonContent}
              textStyle={Styles.buttonText}
              underlayColor={'#005F80'}
              title="configurações" />
          </View>
        </View>
      </View>
    )
  }
}
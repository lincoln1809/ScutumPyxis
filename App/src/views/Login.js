import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Styles from '../style/Styles'

export default class Login extends Component {
    render() {
        return (
            <View style={ Styles.container }>
                <Text>Essa é a tela de login</Text>
            </View>
        )
    }
}
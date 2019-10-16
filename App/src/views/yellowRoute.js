import React, { Component } from 'react'
import { View, Image, Text,  ScrollView, Alert } from 'react-native'
import Styles from '../style/Styles'
import { Button } from '../components/button'
import { TextInput } from 'react-native-paper'

const theme = {
    roundness: 5,
    colors: {
        primary: '#005F80',
        accent: '#008E51',
    }
}

export default class Yellow extends Component {

    handleSubmit = () => {
        Alert.alert("Parabéns você ganhou 7 pontos. Continue assim!!!!")
        this.props.navigation.navigate('UserScreen1')
    }

    state = {
        sensor1: '',
        sensor2: '',
        sensor3: '',
        sensor4: '',
        sensor5: '',
        sensor6: '',
        sensor7: '',
};

    render() {
        const { navigate, goBack } = this.props.navigation
        return (
            <ScrollView>
                <View style={Styles.container}>
                <View style={Styles.input}>
                    <View style={Styles.inputField}>
                        <TextInput
                            label='Sensor 1'
                            value={this.state.sensor1}
                            onChangeText={sensor1 => this.setState({ sensor1 })}
                            theme={theme}
                            mode='outlined'
                            autoCapitalize="none"
                            autoCorrect={false} />
                    </View>
                    <View style={Styles.inputField}>
                        <TextInput
                            label='Sensor 2'
                            value={this.state.sensor2}
                            onChangeText={sensor2 => this.setState({ sensor2 })}
                            theme={theme}
                            mode='outlined'
                            autoCapitalize="none"
                            autoCorrect={false} />
                    </View>
                    <View style={Styles.inputField}>
                        <TextInput
                            label='Sensor 3'
                            value={this.state.sensor3}
                            onChangeText={sensor3 => this.setState({ sensor3 })}
                            theme={theme}
                            mode='outlined'
                            autoCapitalize="none"
                            autoCorrect={false} />
                    </View>
                    <View style={Styles.inputField}>
                        <TextInput
                            label='Sensor 4'
                            value={this.state.sensor4}
                            onChangeText={sensor4 => this.setState({ sensor4 })}
                            theme={theme}
                            mode='outlined'
                            autoCapitalize="none"
                            autoCorrect={false} />
                    </View>
                    <View style={Styles.inputField}>
                        <TextInput
                            label='Sensor 5'
                            value={this.state.sensor5}
                            onChangeText={sensor5 => this.setState({ sensor5 })}
                            theme={theme}
                            mode='outlined'
                            autoCapitalize="none"
                            autoCorrect={false} />
                    </View>
                    <View style={Styles.inputField}>
                        <TextInput
                            label='Sensor 6'
                            value={this.state.sensor6}
                            onChangeText={sensor6 => this.setState({ sensor6 })}
                            theme={theme}
                            mode='outlined'
                            autoCapitalize="none"
                            autoCorrect={false} />
                    </View>
                    <View style={Styles.inputField}>
                        <TextInput
                            label='Sensor 7'
                            value={this.state.sensor7}
                            onChangeText={sensor7 => this.setState({ sensor7 })}
                            theme={theme}
                            mode='outlined'
                            autoCapitalize="none"
                            autoCorrect={false} />
                    </View>
                    <View style={Styles.bottomReverse}>
                        <Button
                            style={Styles.buttonContent}
                            textStyle={Styles.buttonText}
                            underlayColor={'#7DCD52'}
                            title="Concluído"
                            onPress={this.handleSubmit} />
                    </View>
                </View>
            </View>
            </ScrollView>
        )
    }
}
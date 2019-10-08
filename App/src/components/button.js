import React from 'react'
import {Text, TouchableHighlight} from 'react-native'

export const Button = (props) => {
	const { title= 'Enter', style = {}, textStyle = {}, onPress, underlayColor = {} } = props;

    return (
		<TouchableHighlight
			onPress={ onPress }
			underlayColor = { props.underlayColor }
			style={ props.style }>
			<Text style={ props.textStyle }>{ props.title }</Text>
		</TouchableHighlight>
	)
}
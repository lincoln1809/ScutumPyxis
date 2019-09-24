import React, { Component } from 'react'
import {Text, TouchableHighlight} from 'react-native'
import Styles from "../style/Styles"
import PropTypes  from 'prop-types'

export const Button = (props) => {
	const { title= 'Enter', style = {}, textStyle = {}, onPress, underlayColor = {} } = props;

    return (
		<TouchableHighlight
			onPress={onPress}
			underlayColor = {props.underlayColor}
			style={props.style}>
			<Text style={props.textStyle}>{props.title}</Text>
		</TouchableHighlight>
	)
}
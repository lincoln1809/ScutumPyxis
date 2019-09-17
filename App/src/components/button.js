import React, { Component } from 'react'
import {Text, TouchableHighlight} from 'react-native'
import Styles from "../style/Styles"
import PropTypes  from 'prop-types'

export const Button = (props) => {
	const { title= 'Enter', style = {}, textStyle = {}, onPress } = props;

    return (
		<TouchableHighlight
			onPress={onPress}
			underlayColor = {'#008E51'}
			style={props.style}>
			<Text style={props.textStyle}>{props.title}</Text>
		</TouchableHighlight>
	)
}
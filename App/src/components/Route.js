import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import Styles from '../style/Styles';

export const Route = (props) => {
  const { name = 'Route', color = {}, desc = 'Desc', onPress } = props;
  return (
      <View style={{ paddingBottom: 10 }}>
        <TouchableHighlight style={Styles.routeButtonContent}
          underlayColor = { 'transparent' }
          onPress={ onPress }>
          <View style={Styles.routeView}>
            <View style={Styles.routeImage}>
              <View style={ props.color  }></View>
            </View>
            <View style={Styles.routeDesc}>
              <Text style={Styles.title}>{ props.name }</Text>
              <Text style={Styles.desc}>
                { props.desc }
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
  )
}
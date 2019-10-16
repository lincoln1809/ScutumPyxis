import React, { Component } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Image,
  FlatList
} from 'react-native';
import { Button } from '../components/button';
import Styles from '../style/Styles';
import { Route } from '../components/Route'

export default class Sensoring extends Component {
  state = {
    modalVisible: false,
    route: [
      { id: Math.random(), name: 'Rota Lilás', desc: 'Fugiat ad cillum exercitation laborum et. Consectetur consectetur mollit minim est. Aliqua officia minim ea consequat proident consectetur excepteur cupidatat et non aute.',
        color: Styles.routeImageSizeLilac, rota: 'lilas' },
      { id: Math.random(), name: 'Rota Laranja', desc: 'Fugiat ad cillum exercitation laborum et. Consectetur consectetur mollit minim est. Aliqua officia minim ea consequat proident consectetur excepteur cupidatat et non aute.',
        color: Styles.routeImageSizeOrange, rota: 'laranja' },
      { id: Math.random(), name: 'Rota Amarela', desc: 'Fugiat ad cillum exercitation laborum et. Consectetur consectetur mollit minim est. Aliqua officia minim ea consequat proident consectetur excepteur cupidatat et non aute.',
        color: Styles.routeImageSizeYellow, rota: 'amarela' },
      { id: Math.random(), name: 'Rota Vermelha', desc: 'Fugiat ad cillum exercitation laborum et. Consectetur consectetur mollit minim est. Aliqua officia minim ea consequat proident consectetur excepteur cupidatat et non aute.',
        color: Styles.routeImageSizeRed, rota: 'vermelha' },
      { id: Math.random(), name: 'Rota Verde', desc: 'Fugiat ad cillum exercitation laborum et. Consectetur consectetur mollit minim est. Aliqua officia minim ea consequat proident consectetur excepteur cupidatat et non aute.',
        color: Styles.routeImageSizeGreen, rota: 'verde' },
    ]
  };
  

  render() {
    let score = this.props.navigation.state.params.score
    const { navigate } = this.props.navigation
    return (
      <View style={Styles.container}>
        <View style={Styles.routesCenter}>
          <FlatList data={ this.state.route }
            keyExtractor={item => `${item.name}` }
            renderItem={({ item }) => <Route {...item}
            onPress= {() => navigate( item.rota, { score }) } /> } />
        </View>
      </View>
    );
  }
}

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Header from './src/Header';
import Footer from './src/Footer';
import NamaKelasScreen from './src/home';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <NamaKelasScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#E8EAF6'
  }
});

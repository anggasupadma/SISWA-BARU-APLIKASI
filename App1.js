import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import flatlish from './src/contohflatlish';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <Header headerText="Header"/>
        <flatlish/>
        <Footer footerText="Footer"/>
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

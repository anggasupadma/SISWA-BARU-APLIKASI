import React from 'react';
import { Button, View, Text, Image, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Lihatsiswa from './src/Lihatsiswa';
import Inputdatasiswa from './src/Inputdatasiswa';
const logo = require('./src/images/logo.png');

class Header extends React.Component{
  render(){
    return(
      <View style={{ margin: 10, flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor:'#FF1493' }}>
      <Text> SISWA BARU APLIKASI </Text>
      </View>
    );
  }
}


class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />
  };
  render() {
    return (
      <ImageBackground source={require('./src/images/th.jpg')} style={{ flex: 1, alignItems: 'center',
      justifyContent: 'center' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={logo} style={{ height: 200, width: 200 }}/>
        <Button
          title="MASUK"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
      </ImageBackground>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./src/images/foto2.jpg')} style={{ flex: 1, alignItems: 'center',
      justifyContent: 'center' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Siswa Baru"
          color="#FF1493"
          onPress={() => this.props.navigation.navigate('kelas1')}
        />
        <Button
          title="Tambah Nama"
          color="#9400D3"
          onPress={() => this.props.navigation.navigate('tambah')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
        </ImageBackground>
    );
  }
}
class add1 extends React.Component {
  render() {
    return (
      < Lihatsiswa/>
    );
  }
}
class add2 extends React.Component {
  render() {
    return (
      < Inputdatasiswa/>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    kelas1: {
      screen: add1,
    },
    tambah: {
      screen: add2,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

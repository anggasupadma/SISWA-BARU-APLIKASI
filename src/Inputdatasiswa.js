
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class Inputdatasiswa extends Component {
  constructor(props){
    super(props)
    this.state = {
      nama:'',
      jenis_kelamin:'',
      kelas:'',
    };
  }
  Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://gusnando.com/mobile/angga/tambahsiswa.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nama : this.state.nama,
                  jenis_kelamin : this.state.jenis_kelamin,
                  kelas : this.state.kelas
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }
  render() {
    return (
      <View style = {{flex:1, backgroundColor:'#FAFAFA'}}>
        <View style={{backgroundColor:'#E91E63'}}>
           <Text style = {{marginTop: 20, padding: 15, fontSize: 20, color: 'white', textAlign:'center'}} >
            TAMBAH SISWA
          </Text>
         </View>
        <View style={{margin:20, padding: 10, backgroundColor:'#FF1493', borderRadius:3}}>
            <TextInput style = {{height: 50, color:'white'}}
              placeholder="Masukkan Nama"
              placeholderTextColor="white"
              underlineColorAndroid= "#757575"
              selectionColor="#E91E63"
              onChangeText={(TextInputText)=>this.setState({nama: TextInputText })}
            />

            <TextInput style = {{height: 50, color:'white'}}
              placeholder="Masukkan Jenis Kelamin"
              placeholderTextColor="white"
              underlineColorAndroid= "#757575"
              selectionColor="#E91E63"
              onChangeText={(TextInputText)=>this.setState({jenis_kelamin: TextInputText })}
            />
            <TextInput style = {{height: 50, color:'white'}}
              placeholder="Masukkan Kelas"
              placeholderTextColor="white"
              underlineColorAndroid= "#757575"
              selectionColor="#E91E63"
              onChangeText={(TextInputText)=>this.setState({kelas: TextInputText })}
            />

        <Button title="TAMBAH SISWA" onPress={this.Insert_Data_Into_MySQL} />
        </View>

   </View>
    );
  }
}

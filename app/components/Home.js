import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import Camera from 'react-native-camera';
import CryptoJS from 'crypto-js';
import { setBarcode, showCamera, closeCamera } from '../actions';

class Home extends Component {

  static navigationOptions = ({navigation}) => ({
        title: 'Scan Barcode',
        titleStyle: {fontSize: 25},
        headerStyle: {backgroundColor: '#2c3e50'},
        headerTitleStyle: { left: 100 },
        headerTintColor: '#fff',
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{marginRight:5}}><Image source={require('./img/cart.png')} style={{width: 24, height: 24}}/></TouchableOpacity>,
        headerLeft: null
    });

  componentWillMount() {
    this.props.showCamera();
  }

  render() {
    if(this.props.cameraOpen) {
      return (
        <View style={styles.container}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            type={Camera.constants.Type.back}
            onBarCodeRead={(e) => this._onBarCodeRead(e)}
            aspect={Camera.constants.Aspect.fill}>
          </Camera>
        </View>
      );
    } else {
      return (
        <View></View>
      );
    }
  }

  _onBarCodeRead(e) {
    console.log('Event: ', e);
    this.props.closeCamera();
    this.props.setBarcode(e.data);
    if(!this.props.cameraOpen)
      this.props.navigation.navigate('ProductDetails');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

const mapStateToProps = ({ auth, camera }) => {
  const { user } = auth;
  const { cameraOpen } = camera;
  return { user, cameraOpen };
};

export default connect(mapStateToProps, { setBarcode, showCamera, closeCamera })(Home);

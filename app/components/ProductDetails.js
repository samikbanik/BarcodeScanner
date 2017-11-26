import React, {Component} from 'react';
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import Card from './Card';
import { connect } from 'react-redux';
import { getProduct, showCamera, addToCart } from '../actions';

class ProductDetails extends Component {

  static navigationOptions = ({navigation}) => ({
        title: 'Product Details',
        titleStyle: {fontSize: 25},
        headerStyle: {backgroundColor: '#2c3e50'},
        headerTitleStyle: { left: 40 },
        headerTintColor: '#fff',
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{marginRight:5}}><Image source={require('./img/cart.png')} style={{width: 24, height: 24}}/></TouchableOpacity>
    });

  componentWillMount() {
    this.props.getProduct(this.props.barcode);
  }

  componentDidMount() {
    this.props.showCamera();
  }

  addToCart(product) {
    this.props.addToCart(product);
    this.props.navigation.navigate('Cart');
  }

  render() {
    console.log('Props: ', this.props);
    if(this.props.loading) {
      return (
        <View style={styles.spinnerStyle}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    } else if(this.props.productDetails.description) {
      return (
        <View style={styles.container}>
          <Card>
            <Text style={styles.descriptionStyle}>{this.props.productDetails.description}</Text>
            <Image style={styles.imageStyle} source={{uri: this.props.productDetails.image}}/>
            <Text style={styles.priceStyle}>Rs{this.props.productDetails.price}</Text>
            <TouchableOpacity onPress={() => this.addToCart(this.props.productDetails)} style={styles.addToCart}>
              <Text style={{color: '#fff', fontSize: 15}}>Add to cart</Text>
            </TouchableOpacity>
          </Card>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={{alignSelf: 'center'}}>No data available</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  descriptionStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#1E88E5',
    marginTop: 10
  },
  imageStyle: {
    width: 150,
    height: 250,
    alignSelf: 'center',
    margin: 10
  },
  priceStyle: {
    color: '#EF9A9A',
    fontSize: 15,
    margin: 15
  },
  addToCart: {
    backgroundColor: '#FF6D00',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45
  }
});

const mapStateToProps = ({product}) => {
  const { barcode, productDetails } = product;
  return { barcode, productDetails };
};

export default connect(mapStateToProps, { getProduct, showCamera, addToCart })(ProductDetails);

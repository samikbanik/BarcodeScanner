import React, {Component} from 'react';
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import Card from './Card';
import { connect } from 'react-redux';
import { remove } from '../actions';

class Cart extends Component {

  static navigationOptions = ({navigation}) => ({
        title: 'Cart',
        titleStyle: {fontSize: 25},
        headerStyle: {backgroundColor: '#2c3e50'},
        headerTitleStyle: { left: 80 },
        headerTintColor: '#fff',
        headerRight:
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{marginRight:5}}
        >
          <Image source={require('./img/home.png')} style={{width: 24, height: 24}}/>
        </TouchableOpacity>
    });

  remove(product) {
    this.props.remove(product);
  }

  getUniqueKey() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  render() {
    if(this.props.cart.length==0) {
      return (
        <View style={styles.emptyContainer}>
          <Image style={styles.emptyCartStyle} source={require('./img/empty_cart.png')}/>
          <Text style={{color: '#BDBDBD', margin: 10}}>No items in the cart</Text>
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          {this.props.cart.map((product) => (
            <Card key={this.getUniqueKey()}>
              <Text style={styles.descriptionStyle}>{product.description}</Text>
              <Image style={styles.imageStyle} source={{uri: product.image}}/>
              <Text style={styles.priceStyle}>Rs{product.price}</Text>
              <TouchableOpacity onPress={() => this.remove(product)} style={styles.remove}>
                <Text style={{color: '#fff', fontSize: 15}}>Remove</Text>
              </TouchableOpacity>
            </Card>
          ))}
        </ScrollView>
      );
    }
  }
}
 const styles = StyleSheet.create({
   emptyContainer: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },
   emptyCartStyle: {
     width: 48,
     height: 48,
     tintColor: '#BDBDBD'
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
   remove: {
     backgroundColor: '#FF6D00',
     alignSelf: 'stretch',
     justifyContent: 'center',
     alignItems: 'center',
     height: 45
   }
 });

 mapStateToProps = ({productCart}) => {
   const {cart} = productCart;
   return {cart};
 };

 export default connect(mapStateToProps, {remove})(Cart);

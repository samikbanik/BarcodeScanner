import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button, Header } from 'react-native-elements';
import { usernameChanged, passwordChanged, login } from '../actions';
import { StackNavigator, NavigationActions } from "react-navigation";

class LoginForm extends Component {

  static navigationOptions = ({navigation}) => ({
        title: 'Login',
        titleStyle: {fontSize: 25},
        headerStyle: {backgroundColor: '#2c3e50'},
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: '#fff'
    });

  onUsernameChange(username) {
    this.props.usernameChanged(username);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  onLogin() {
    const { username, password } = this.props;
    if(username=='User' && password=='password') {
      this.props.login(username);
      this.props.navigation.navigate('Home');
    } else {
      alert('Incorrect username or password.');
    }
  }

  renderLoginButton(){
    if(this.props.loading) {
      return <Spinner size='small'/>;
    }
    return(
      <Button
        title='Login'
        fontSize={20}
        backgroundColor='#1abc9c'
        buttonStyle={{borderRadius: 5}}
        containerViewStyle={{borderRadius: 5}}
        onPress={this.onLogin.bind(this)}>
      </Button>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.list}>
          <FormLabel labelStyle={styles.labelStyle}>Username</FormLabel>
          <FormInput
            onChangeText={this.onUsernameChange.bind(this)}
            value={this.props.username}
            placeholder='username'
            inputStyle={{color: '#000'}}
          />
          <FormLabel labelStyle={styles.labelStyle}>Password</FormLabel>
          <FormInput
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            placeholder='password'
            inputStyle={{color: '#000'}}
          />
        </View>
        {this.renderLoginButton()}
        <Text style={styles.errorStyle}>{this.props.error}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  list: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 30
  },
  labelStyle: {
    fontSize: 20
  },
  errorStyle: {
    color: '#f00',
    fontSize: 20,
    alignSelf: 'center'
  }
});

const mapStateToProps = ({ auth }) => {
  const { username, password, error } = auth;
  return { username, password, error };
};

export default connect(mapStateToProps, { usernameChanged, passwordChanged, login })(LoginForm);

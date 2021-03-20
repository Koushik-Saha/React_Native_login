import React from 'react';
import {Label, Container, Header, Title, Form, Item, Input, Button, Text} from 'native-base'
import { StyleSheet, View, Image,  } from 'react-native';

const App = () => {
  return (
      <Container>
        <Header style={styles.header}>
          <Title>MoveOn</Title>
        </Header>

        <View style={styles.view}>
          <Image style={styles.image} source={require('./assets/login-account.png')} />
        </View>


        <Form style={styles.formEmail}>
          <Item floatingLabel style={styles.emailItem}>
            <Label>Email/Phone number</Label>
            <Input />
          </Item>

          <Item style={styles.emailItem} floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>

          <Item style={styles.emailItem}>
            <Button block style={styles.loginButton}>
                <Text style={styles.buttonText}>
                    SIGN IN
                </Text>
            </Button>
          </Item>
        </Form>
      </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#88B34C',
    textAlign: 'center',
    alignItems: 'center'
  },
  view:{
    alignItems: 'center',
    marginTop: 20
  },
  image: {
    width:330,
    height: 220,
  },
  formEmail:{
    paddingLeft: 20,
    paddingRight: 20,
  },
  emailItem:{
    marginTop:20
  },
  loginButton:{
    backgroundColor: '#88B34C',
    width: '100%',
  },
  buttonText:{
    color: '#ffffff',
    fontSize:20,
    fontWeight: 'bold'
  }
});

export default App

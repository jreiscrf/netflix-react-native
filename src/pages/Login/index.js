import React, { useState } from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles';
import { TextInput, Button } from 'react-native-paper';

const Login = ({ navigation }) => {

  const [credenciais, setCredenciais] = useState({
    email: '',
    senha: '',
  });

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/logo.jpg')} />
          <View>
            <TextInput
              mode='flat'
              style={styles.inputs}
              label="Email ou número de telefone"
              value={credenciais.email}
              onChangeText={(text) => setCredenciais({ ...credenciais, email: text})}
            />
            <TextInput
              mode='flat'
              style={styles.inputs}
              label="Senha"
              secureTextEntry
              value={credenciais.senha}
              onChangeText={(text) => setCredenciais({ ...credenciais, senha: text})}
            />

            <Button
              style={styles.inputs}
              mode='contained'
              onPress={() => {
                navigation.navigate('Home');
              }}
            >
              Entrar
            </Button>

            <Button
              style={styles.inputs}
              onPress={() => console.log('Aqui fdp')}
              theme={{colors: {primary: '#fff'}}}
            >
              Recuperar Senha
            </Button>

            <Text style={styles.textBottom}>
              O acesso está protegido pelo Google reCAPTCHA
              para garantir que você não é um robo. Saiba mais.
            </Text>
          </View>
      </View>
    </>
  );
};

export default Login;

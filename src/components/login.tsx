import React from 'react';
import { View, Text, Button } from 'react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function login(): JSX.Element {
  return (
    <View>
        <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#49708A" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.loginBox}>
          <Text style={styles.loginTitle}>Iniciar Sesión</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario/Correo electrónico"
          />
          <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
          <Text style={styles.signupText}>
            ¿No tienes cuenta? <Text style={styles.signupLink}>Regístrate</Text>
          </Text>
          <Text style={styles.forgotPassword}>¿Has olvidado la contraseña?</Text>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#49708A',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  loginBox: {
    backgroundColor: '#EBF7F8',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  loginTitle: {
    fontFamily: 'Inter', // Establece la fuente a "Inter"
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', // Centra el título
  },
  input: {
    backgroundColor: '#D0E0EB',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  signupText: {
    textAlign: 'center',
    color: '#49708A',
  },
  signupLink: {
    color: '#CAFF42',
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#49708A',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#CAFF42',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#49708A',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default login;

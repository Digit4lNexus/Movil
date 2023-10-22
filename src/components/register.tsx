import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function register(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#49708A" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.loginBox}>
          <Text style={styles.loginTitle}>Registro</Text>
          <TextInput style={styles.input} placeholder="Nombre" />
          <TextInput style={styles.input} placeholder="Apellidos" />
          <TextInput style={styles.input} placeholder="RUT" />
          <TextInput style={styles.input} placeholder="Correo electrónico" />
          <TextInput style={styles.input} placeholder="Nombre de usuario" />
          <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
          <TextInput style={styles.input} placeholder="Confirmar contraseña" secureTextEntry={true} />
          <Text style={styles.signupText}>
            ¿Ya tienes una cuenta? <Text style={styles.signupLink}>Inicia sesión</Text>
          </Text>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  signupText: {
    color: '#49708A',
  },
  signupLink: {
    color: '#CAFF42',
  },
  registerButton: {
    backgroundColor: '#CAFF42',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  registerButtonText: {
    color: '#49708A',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default register;

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

function Register(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#49708A" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.loginBox}>
          <Text style={styles.loginTitle}>Registro</Text>
          <View style={styles.inputRow}>
            <TextInput style={styles.inputRow2} placeholder="Nombre" />
            <TextInput style={styles.inputRow2} placeholder="Apellidos" />
          </View>
          <TextInput style={styles.input} placeholder="RUT" />
          <TextInput style={styles.input} placeholder="Correo electrónico" />
          <TextInput style={styles.input} placeholder="Nombre de usuario" />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar contraseña"
            secureTextEntry={true}
          />
          <Text style={styles.signupText}>
            ¿Ya tienes una cuenta?{' '}
            <Text style={styles.signupLink}>Inicia sesión</Text>
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
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row', // Para alinear los campos de nombre y apellidos en la misma fila
    justifyContent: 'space-between', // Para separarlos horizontalmente
  },
  inputRow2: {
    backgroundColor: '#D0E0EB',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: '48%', // Para que cada campo ocupe el 48% del ancho del contenedor
  },
  input: {
    backgroundColor: '#D0E0EB',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  signupText: {
    marginTop: 20,
    textAlign: 'center',
  },
  signupLink: {
    color: '#CAFF42',
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#CAFF42',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  registerButtonText: {
    color: '#49708A',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Register;

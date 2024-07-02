import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Curso = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Curso</Text>

      <Image
        source={require('../../assets/photo-curso.jpeg')}
        style={styles.courseImage}
      />

      <Text style={styles.info}>Engenharia de Software</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF00',
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  courseImage: {
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    marginBottom: 20,
    borderColor: '#007bff',
    borderWidth: 3, 
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.4, 
    shadowRadius: 6, 
    elevation: 5, 
  },
  info: {
    fontSize: 18, 
    color: '#333',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000000',
    padding: 12,
    width: '20%',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Curso

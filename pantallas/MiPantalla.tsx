import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MiPantalla: React.FC = () => {
  return (
    <View style={styles.container}>ge
      <Image
        source={require('../imagenes/cesar.jpg')}
        style={styles.imagen}
      />
      <Text style={styles.titulo}>Mi nombre es Cesar Ponce</Text>
      <Text style={styles.texto}>Fecha de nacimiento: 27/07/1999</Text>
      <Text style={styles.texto}>Pasatiempos: Jugar videojuegos y la música</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  texto: {
    fontSize: 18,
    marginTop: 5,
  },
});

export default MiPantalla;
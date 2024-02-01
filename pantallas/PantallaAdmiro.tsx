import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PantallaAdmiro: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../imagenes/messi.jpg')}
        style={styles.imagen}
      />
      <Text style={styles.titulo}>Lionel Messi</Text>
      <Text style={styles.texto}>Posición: Delantero</Text>
      <Text style={styles.texto}>Equipo: Inter Miami</Text>
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

export default PantallaAdmiro;
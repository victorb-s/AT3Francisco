import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const ImageComponent = ({ source }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const ButtonComponent = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Música do BK</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const handleButtonPress = () => {
    alert('Escuta "É só me ligar"');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Victor Barbosa 3A - BK</Text>
      <View style={styles.imagesContainer}>
        <ImageComponent source={require('./assets/bk1.jpeg')} />
        <ImageComponent source={require('./assets/bk2.jpg')} />
      </View>
      <ButtonComponent onPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474A51',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#E8E5DE',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: '#A82223',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

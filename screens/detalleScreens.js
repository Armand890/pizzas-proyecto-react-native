import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";

const detall = ({ navigation }) => {
    const handhome = () => {
  
      navigation.navigate('home');
    }
  return (


      
      <View style={styles.container}>
      <Text style={styles.bigGray}>Ingredientes:</Text>
      <br></br>
      <Text style={styles.bigBlack}>-Salsa de tomate</Text>
      <Text style={styles.bigBlack}>-Queso mozzarella</Text>
      <Text style={styles.bigBlack}>-Hojas de albahaca fresca</Text>
      <Text style={styles.bigBlack}>-Sal y pimienta negra</Text>

      
    <TouchableOpacity style={styles.loginButton} onPress={handhome}>
        <Text style={styles.loginButtonText}>Regresar</Text>
      </TouchableOpacity> 
    </View>

  );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 40,
      alignItems:'center',
    },
    bigGray: {
      color: 'Gray',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        },
        loginButton: {
          backgroundColor: '#2979FF',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        },
        loginButtonText: {
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
        },
      });
  


export default detall;

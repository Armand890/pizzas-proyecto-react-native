import React from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity} from "react-native";




  const loggin = ({ navigation }) => {
    const handhome = () => {
  
      navigation.navigate('home');
    }
  return (


      
      <View style={styles.container}>
      <Text style={styles.bigBlue}>Este es un loggin</Text>
      <Text style={styles.bigBlue}> Ejemplo</Text>

      
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/20/20079.png',
          }}
          style={{width: 190, height: 190}}
        />
       
    
    <br></br>
    <View>
    <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="usuario"
      />
    
    
    
<TextInput
        style={{
          height: 40,
          borderColor: 'green',
          borderWidth: 1,
        }}
        placeholder="contraseña"


      />
 
    </View>
    <TouchableOpacity style={styles.loginButton} onPress={handhome}>
        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
      </TouchableOpacity> 
    </View>

  );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 40,
      alignItems:'center',
    },
    bigBlue: {
      color: 'blue',
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
  


export default loggin;

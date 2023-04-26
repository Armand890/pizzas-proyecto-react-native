import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";



const home = ({ navigation }) => {
  const handleLogin = () => navigation.navigate('loggin');
  const handDetallPress = () => navigation.navigate('detalles');
  
        return (
          <ScrollView>
            <View>    
              <center>      
              <Text>PIZZAS</Text>
              </center>  

              <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>ir a loggin</Text>
      </TouchableOpacity>
            </View>
            <View style={styles.container}>
           
            <View>
            <TouchableOpacity onPress={handDetallPress} > <Image style={styles.tinyLogo} source={{uri:"https://imag.bonviveur.com/primer-plano-de-pizza-margarita.jpg"}} />  
            <Text>PIZZA HOJITAS $100</Text>   </TouchableOpacity>
              <Image style={styles.tinyLogo} source={{uri:"https://www.bareinternational.cl/wp-content/uploads/sites/4/2022/04/Untitled-design-4-300x217.png"}} />
              <Text>PIZZA QUESILLO $90</Text>
              <Image style={styles.tinyLogo} source={{uri:"https://www.pizzaiolo.mx/img/blog/pizza-hecha-de-varios-tipos-de-pizza-02%20(1).png"}}/>
              <Text>PIZZA COMBINACION $110</Text>
        
              <Image style={styles.tinyLogo} source={{uri:"http://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2021/10/pizzer%C3%ADas.jpeg"}} />
              <Text>PIZZA VEGETARIANA $100</Text>
              <Image style={styles.tinyLogo} source={{uri:"https://www.pedidosya.cl/blog/wp-content/uploads/sites/2/2018/05/pizza-espanola.jpg"}} />
              <Text>PIZZA PUNTITOS $130</Text>
            </View>
            </View>
            </ScrollView>
          )
        
}
        const styles = StyleSheet.create({
          container: {
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            paddingTop: 50,
          },
          tinyLogo: {
            width: 200,
            height: 150,
            marginTop: 16,
            paddingVertical: 8,
            borderWidth: 3,
            marginLeft: 8,
          },

            button: {
              backgroundColor: '#FF0000',
              padding: 4,
              margin: 4,
              borderRadius: 2,
              width: 100,
            },
            buttonText: {
              color: '#FFFFFF',
              fontSize: 12,
              fontWeight: 'bold',
              textAlign: 'left',
            }, 
          },
        );

export default home;
      

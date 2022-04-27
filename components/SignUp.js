import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import pic from './assets/g.png'


export default function signUp() {
  return (
    <View style={styles.container}>
        <View>
            <Image source={{
                uri: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }} style={styles.bg}/>
        </View>
      <Text>signUp</Text>
      <TextInput placeholder="Text" style={styles.text}/>
      <TouchableOpacity style={styles.btnstyle}>
        <Image source={pic} style={styles.img}/>
        <Text style={styles.sign}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center'
    },
    text:{
        margin: 10,
        width: 350,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'green',
        padding: 10
    },
    btnstyle:{
        justifyContent: "center",
        alignItems: 'center',
        width: 350,
        height: 50,
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 4,
        borderColor: "red",
        flexDirection: "row"
    },
    img:{
        width: 30,
        height: 30,
        marginRight: 10
    },
    sign:{
        fontSize: 15,
        fontWeight: "bold"
    },
    bg:{
        width: 330,
        height: 250,
        borderRadius: 8,
        shadowOffset: {width: 3, height: 32},
        shadowColor: "black",
        shadowOpacity: 1
    }
})
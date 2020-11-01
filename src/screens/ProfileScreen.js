import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Input, Button, Card, Tile, Text, Header, Avatar } from 'react-native-elements';
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { AuthContext } from "../providers/AuthProvider";

const ProfileScreen = (props) => {
  console.log(props);
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.rootViewStyle}>
          <Header
            backgroundColor='#29435c'
            leftComponent={{
              icon: "menu",
              color: "#fff",
              onPress: function () {
                props.navigation.toggleDrawer();
              },
            }}
            centerComponent={{ text: "The Office", style: { color: "#fff" } }}
            rightComponent={{
              icon: "lock-outline",
              color: "#fff",
              onPress: function () {
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
              },
            }}
          />


          <View>
                      <Image source={require('../../assets/profile_pic.jpg')} style={styles.logoStyle} />
                      <Text style={styles.textViewStyle2}>{auth.CurrentUser.name}</Text>
          </View>

          <View style={styles.textViewStyle}>
            <Text style={styles.textStyle}>Born on: </Text>
            <Text style={styles.textStyle}>Address: </Text>
            <Text style={styles.lastTextStyle}>Works at: </Text>
                  </View>
                  <Button buttonStyle={{ backgroundColor: '#F4F6F7', marginTop: 40, width: 200, borderRadius: 10 }}
                      icon={<FontAwesome name="edit" size={24} color="black" />}
                      title=' Edit profile'
                      titleStyle={{ color: '#B03A2E' }}
                      type='solid'
                  />
                  <Button buttonStyle={{ backgroundColor: '#F4F6F7', marginTop: 40, width: 200, borderRadius: 10 }}
                      icon={<MaterialIcons name="delete" size={24} color="black" />}
            title=' Delete profile'
                      titleStyle={{ color: '#B03A2E' }}
            type='solid'
          />
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  rootViewStyle: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
        backgroundColor: '#BDC3C7',
  },
  cardLogoStyle: {
    marginVertical: 20,
    backgroundColor: '#556e53',
    height: 400,
    width: 242,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  logoStyle: {
    alignItems: "center",
    alignSelf: "center",
    height: 310,
    width: 200,
    marginBottom: -20,
    resizeMode: "contain",
    borderRadius: 100,
  },
  textStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
      color: '#17202A',
    borderBottomColor: "#17202A",
    borderBottomWidth: 2,
    width: 300,
  },
  lastTextStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
      color: '#17202A',
    width: 300,
  },
  textViewStyle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
      backgroundColor: "#5DADE2",
    borderRadius: 15,
    },
    textViewStyle2: {
        fontSize: 40,
        alignSelf: "center",
        marginTop: 2,
    },

});

export default ProfileScreen;
import React, { useState } from "react";
import {Text, StyleSheet,View} from 'react-native';
import { Input, Button } from "react-native-elements";
import { Feather, AntDesign ,Ionicons ,Fontisto,Entypo } from "@expo/vector-icons";
import {AuthContext} from "../provider/AuthProvider"
import {AuthCard} from '../shareable/customCard'
import { storeDataJSON } from "../Function/AsyncStorageFunction";


const SignUpScreenActivity=(props) =>{
    const [Name, setName] = useState("");
    const [SID, setSID] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    return(
        
                <View style={styles.viewStyle}>
                   
                    <AuthCard  >
                   

                <Text style={styles.titleView}>    Welcome to Office!</Text>
                        <Input
                             inputStyle={styles.themeColor}
                            leftIcon={<Ionicons name="ios-person" size={24} color="black"/>}
                            placeholder="Name"
                    placeholderTextColor="black"
                            onChangeText={function (currentInput) {
                                setName(currentInput);
                            }}
                            />

                        <Input
                                inputStyle={styles.themeColor}
                    placeholderTextColor="black"
                    leftIcon={<Ionicons name="ios-school" size={24} color="black" />}
                                placeholder="ID"
                                onChangeText={function (currentInput) {
                                    setSID(currentInput);
                                }}
                                /> 
                       
                        <Input

                            inputStyle={styles.themeColor}
                    leftIcon={<Fontisto name="email" size={24} color="black" />}
                            placeholder="E-mail Address"
                    placeholderTextColor="black"
                            onChangeText={function (currentInput) {
                                setEmail(currentInput);
                          }}
                        />

                        <Input
                            inputStyle={styles.themeColor}
                            placeholder="Password"
                    placeholderTextColor="black"
                    leftIcon={<Feather name="key" size={24} color="black" />}
                            secureTextEntry={true}
                            onChangeText={function (currentInput) {
                                setPassword(currentInput);
                            }}
                        />

                        <View style={styles.buttonView}>
                        <Button
                                    color="#fc6a03"
                        icon={<AntDesign name="user" size={24} color='black' />}
                                    title="  Sign Up!"
                                    buttonStyle={styles.buttonView}
                                    onPress={function(){
                                        let currentUser={
                                            name:Name,
                                            sid:SID,
                                            email:Email,
                                            password:Password,
                                        }
                                        console.log(currentUser)
                                        storeDataJSON(Email,currentUser);
                                        props.navigation.navigate("SignIn");
                                    }}
                                   
                                    
                                    />
                        </View>
                        <Button
                                    type="clear"
                    icon={<Entypo name="login" size={24} color="black" />}
                                    
                                    title=" Already have an account"
                                    titleStyle={styles.themeColor}
                                    onPress={function(){
                                        props.navigation.navigate("SignIn");
                                    }}
                                   
                                    />

                                

                    </AuthCard>
                    
                    
                </View>
            
    );
};

const styles = StyleSheet.create({
    viewStyle: {
      flex: 1,
        justifyContent: "center",
        backgroundColor:"#99eba0"
     
    },
    buttonView:{
        marginLeft:5,
        marginRight:5,
        backgroundColor: "#00D084",
        color:"black",
    },
    themeColor:{

        color:"black"
    },
    titleView:{

        color:"black",
        fontSize:23,
        marginLeft:60,
        marginVertical:15,
        justifyContent:"center",
        fontFamily:'sans-serif-medium',
    }
    
   
  });

export default SignUpScreenActivity;
import React, { useState } from "react";
import {Text, StyleSheet,View} from 'react-native';
import { Input, Button } from "react-native-elements";
import { Feather, AntDesign ,Fontisto,Entypo } from "@expo/vector-icons";
import {AuthContext} from "../provider/AuthProvider"
import {AuthCard} from '../shareable/customCard'
import { getDataJSON } from "../Function/AsyncStorageFunction";
import { AsyncStorage } from 'react-native';




const SignInScreenActivity=(props) =>{
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    return(
        <AuthContext.Consumer>
            {(auth) => (
                <View style={styles.viewStyle}>
                   
                    <AuthCard  >
                   

                        <Text style={styles.titleView}>    Welcome to Office!</Text>

                       
                        
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
                                color="black"
                                icon={<Entypo name="login" size={24} color='black' />}
                                    title="  Sign In!"
                                    buttonStyle={styles.buttonView}
                                    onPress={async function(){
                                        let UserData=await getDataJSON(Email);
                                        console.log(UserData)
                                        console.log(Email)
                                        if(UserData.password==Password){
                                            auth.setIsLoggedIn(true)
                                            auth.setCurrentUser(UserData);
                                        }
                                        else{
                                            alert("LogIn Failed")
                                        }
                                    }}
                                   
                                    
                                    />
                        </View>
                        <Button
                                    type="clear"
                            icon={<AntDesign name="user" size={24} color="black" />}
                                    title="Don't Have An Account?"
                                    titleStyle={styles.themeColor}
                                    onPress={function(){
                                        props.navigation.navigate("SignUp");
                                    }}
                                   
                                    />

                                

                    </AuthCard>
                    
                    
                </View>
            )}
        </AuthContext.Consumer>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor:"#99eba0",
        justifyContent: "center",
        borderWidth:1,
    },
    buttonView:{
        marginLeft:5,
        marginRight:5,
        backgroundColor:"#00D084",
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

export default SignInScreenActivity;
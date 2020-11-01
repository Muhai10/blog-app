import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Button, Text, Avatar, Input, Header } from "react-native-elements";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";

const PostComponent = (props) => {
    
    return (

        <View>
            <Card containerStyle={{ backgroundColor: '#d1d4c9' }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        containerStyle={{ backgroundColor: "#ffab91" }}
                        rounded
                        icon={{ name: "user", type: "font-awesome", color: "black" }}
                        activeOpacity={1}
                    />
                    <Text h4Style={{ padding: 10 }} h4>
                        {props.name}
                    </Text>
                </View>
                <Text style={{ fontStyle: "italic" }}> Posted on {props.date}</Text>
                <Text
                    style={{
                        paddingVertical: 10,
                    }}
                >
                    {props.post}
                </Text>
                <Card.Divider />
                <View
                    style={{ flexDirection: "row", justifyContent: "space-between" }}
                >
                    <Button buttonStyle={{ borderColor: 'black', borderWidth: 1 }}
                        type="outline"
                        title="  Like (0)"
                        titleStyle={{ color: '#556e53' }}
                        icon={<AntDesign name="like2" size={24} color='blue' />}
                    />


                    <Button buttonStyle={{ borderColor: 'black', backgroundColor: '#d1d4c9', borderWidth: 1 }}
                        type="outline"
                        title="Comment (0)"
                        titleStyle={{ color: '#556e53' }} />


                    <Button buttonStyle={{ borderColor: 'black', backgroundColor: '#d1d4c9', borderWidth: 1 }}
                        title="Delete Post"
                        titleStyle={{ color: '#29435c' }}
                        type="outline"
                        onPress={async function () {
                            await removeData("Post");
                        }}
                    />
                </View>
            </Card>

        </View>
    )

}
export default PostComponent;


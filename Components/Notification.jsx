import React from "react";
import NotificationStyles from "./componentStyles.js/NotificationStyles";
import { Text, View,TouchableOpacity } from "react-native";
import { Surface } from "react-native-paper";
function Notification(props) {
    /**
     * Displays the notification of the user based on the props passed in
     * --------------------------------------------------------------------
     * Usage:
     * <Notification ...props/>
     */
    const {text, linkText, link} = props

    return (
        <TouchableOpacity onPress={()=>{}}>
            <Surface elevation={2} style={NotificationStyles.card}>
                <View style={NotificationStyles.textContainer}>
                    <Text style={NotificationStyles.lines}>
                        <Text style={NotificationStyles.text}>{text} </Text>
                        <Text style={NotificationStyles.linkText}>{linkText}</Text>
                    </Text>
                </View>
            </Surface>
        </TouchableOpacity>
    )
}

export default Notification;
import React from "react";
import NotificationStyles from "./componentStyles.js/NotificationStyles";
import { Text, View } from "react-native";

function Notification(props) {
    const {text, linkText, link} = props

    return (
        <>
            <View style={NotificationStyles.card}>
                <View style={NotificationStyles.textContainer}>
                    <Text style={NotificationStyles.lines}>
                        <Text style={NotificationStyles.text}>{text} </Text>
                        <Text style={NotificationStyles.linkText}>{linkText}</Text>
                    </Text>
                </View>
            </View>
        </>
    )
}

export default Notification;
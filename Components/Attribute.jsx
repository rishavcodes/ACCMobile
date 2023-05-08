import React from "react";
import { Text, View } from "react-native";
import AttributeStyle from "./componentStyles.js/AttributeStyle";

function Attribute(props) {
    const {item, color} = props

    let containerStyles = [AttributeStyle.container]
    let circleStyles = [AttributeStyle.circle]

    if (color === 'pink') {
        containerStyles.push(AttributeStyle.pink)
        circleStyles.push(AttributeStyle.pinkCircle)
    } else {
        containerStyles.push(AttributeStyle.blue)
        circleStyles.push(AttributeStyle.blueCircle)
    }

    return (
        <>
            <View style={containerStyles}>
                <View style={circleStyles}/>
                <Text style={AttributeStyle.text}>{item}</Text>
            </View>
        </>
    )
}

export default Attribute;
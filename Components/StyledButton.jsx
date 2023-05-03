import React from "react";
import { Button, Text, } from "react-native-paper";
import ArrowForwardIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import SButtonStyle from "../Styles/Components/SButtonStyle";
function StyledButton(props) {
  const { variant, link, text, onPress, outerStyle, labelStyle } = props;
  const navigation = link?useNavigation():null 

  const pressed = () => {
    if(link)navigation.navigate(link)
    if(onPress) onPress()
  };

  return (
    <>
      {variant === "contained" && (
        <Button mode="elevated" style={{...SButtonStyle.contained,...outerStyle}} 
          labelStyle={{...SButtonStyle.containedText,...labelStyle}} onPress={pressed}>
          {text}
        </Button>
      )}
      {variant === "text" && (
        <Button mode="text" style={{...outerStyle}} 
          labelStyle={{...SButtonStyle.plainText,...labelStyle}} onPress={pressed}>
          {text}
        </Button>
      )}
       {variant === "outlined" && (
       <Button mode="outlined" style={{...SButtonStyle.outlined,...outerStyle}} 
       labelStyle={{...SButtonStyle.plainText,...labelStyle}} onPress={pressed}>
       {text}
     </Button>
      )}
    </>
  );
}



export default StyledButton;

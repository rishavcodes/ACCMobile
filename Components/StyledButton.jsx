import React from "react";
import { Button, Text, } from "react-native-paper";
import ArrowForwardIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";


function StyledButton(props) {
  const navigation = useNavigation();
  const { variant, link, text, content, textColor, onClick, noArrow, width, bgcolor, type, onPress } = props;

  const styles = StyleSheet.create({
    signupStyle: {
      minWidth: 200,
      padding: 10,
      borderRadius: 100,
    },
    btnText: {
      color: textColor ? textColor : "#fff", 
      fontSize: 18,
      fontFamily: "msBold",
    }
  });

  return (
    <>
      {variant === "pinkBtn" && (
        <Button mode="contained" buttonColor="#F83E7D" style={styles.signupStyle} onPress={() => navigation.navigate(link ? link : "")}>
          <Text style={styles.btnText}>{text}</Text>
        </Button>
      )}
    </>
  );
}



export default StyledButton;

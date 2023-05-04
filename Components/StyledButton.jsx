import React from "react";
import { Button, Text, } from "react-native-paper";
import ArrowForwardIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";


function StyledButton(props) {
  /**
   * Main custom StyledButton component that is similar to the Website, 
   * allows the creation of buttons quickly through prop based development.
   * ---------------------------------------------------------------------------------------
   * Note:
   * Using native buttons and styling them also works
   * If choosing to go the styled button route, 
   * please import all website styled buttons to the mobile one
   * Usage:
   * <StyledButton variant(required) ...props/>
   */
  const navigation = useNavigation();
  const { variant, link, text, content, textColor, onClick, noArrow, width, bgcolor, type, onPress } = props;

  const styles = StyleSheet.create({
    signupStyle: {
      minWidth: 200,
      padding: 10,
      borderRadius: 100,
      backgroundColor: bgcolor ? bgcolor : '#F83E7D'
    },
    btnText: {
      color: textColor ? textColor : "#fff", 
      fontSize: 18,
      fontFamily: "msSemiBold",
      
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

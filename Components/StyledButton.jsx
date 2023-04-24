import React from "react";
import { Button, Text, } from "react-native-paper";
import ArrowForwardIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";



function StyledButton(props) {
  const navigation = useNavigation();
  const { variant, link, text, content, textColor, onClick, noArrow, width, bgcolor, type, onPress } = props;

  const signupStyle = {
    minWidth: width ? width : "",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 100,
    textTransform: "none",
    backgroundColor: bgcolor ? bgcolor : "#F83E7D",
    color: textColor ? textColor : "white",
  };

  const emptyStyle = {
    width: width ? width : "12vw",
    height: "6vh",
    borderRadius: 100,
    textTransform: "none",
    backgroundColor: "transparent",
    textColor: { textColor },
  };

  const leftRoleStyle = {
    width: "10vw",
    height: "10vw",
    borderRadius: 50,
    backgroundColor: "transparent",
    textTransform: "none",
    color: textColor,
  };

  const rightRoleStyle = {
    width: "10vw",
    height: "10vw",
    borderRadius: 50,
    backgroundColor: "transparent",
    textTransform: "none",
    color: textColor,
  };

  const middleRoleStyle = {
    width: "10vw",
    height: "10vw",
    backgroundColor: "transparent",
    textTransform: "none",
    color: textColor,
  };

  return (
    <>
      {/* Not SAFE AND NEEDS REFACTORING, Crashed my EXPO
      {variant === "signup" ? (
        <Button
          mode="contained"
          onPress={onClick ? onClick : null}
          style={signupStyle}
          icon={noArrow ? null : () => <ArrowForwardIcon name="arrow-forward-ios" size={20} color="#FFF" />}
          href={link}
          {...props}>
          <Text style={{ fontWeight: "bold", fontSize: 20, lineHeight: 24 }}>
            {text}
            {props.children}
          </Text>
        </Button>
      ) : null}

      {variant === "empty" && (
        <Button
          mode="contained"
          style={emptyStyle}
          icon={() => <ArrowForwardIcon name="arrow-forward-ios" size={20} color="#000" />}
          href={link}
          {...props}>
          <Text style={{ color: textColor, fontWeight: "bold", fontSize: 20, lineHeight: 24 }}>
            {text}
            {props.children}
          </Text>
        </Button>
      )}

      {variant === "leftRole" && (
        <Button mode="contained" style={leftRoleStyle} {...props}>
          {content}
          {props.children}
        </Button>
      )}

      {variant === "middleRole" && (
        <Button mode="contained" style={middleRoleStyle} {...props}>
          {content}
          {props.children}
        </Button>
      )}

      {variant === "rightRole" && (
        <Button mode="contained" style={rightRoleStyle} {...props}>
          {content}
          {props.children}
        </Button>
      )} 
 */}
      {variant === "pinkBtn" && (
        <Button mode="contained" buttonColor="#F83E7D" style={styles.signupStyle} onPress={() => navigation.navigate(link ? link : "login")}>
          <Text style={{color: "#fff", fontSize: 18}}>{text}</Text>
        </Button>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  signupStyle: {
    minWidth: 200,
    padding: 10,
    borderRadius: 100,
  },
});

export default StyledButton;

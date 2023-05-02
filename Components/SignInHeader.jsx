import React from "react";
import { Button, Text } from "react-native-paper";
import ArrowForwardIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Image } from "react-native";
import { TextInput, IconButton, Checkbox } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import theme from "../Styles/theme";
import SIHeaderStyle from "../Styles/Components/SIHeaderStyle";
function SignInHeader(props) {
  const navigation = useNavigation();
  const {
    image,
    bkgColor,
    fgColor,
    title,
    titleStyle,
    subtitle,
    subtitleStyle,
  } = props;

  const style = StyleSheet.create({
    background: {
      backgroundColor: bkgColor ? bkgColor : "white",
    },
    foreground: {
      color: fgColor ? fgColor : "black",
    },
   
  });

  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View>
      <View style={{ flexDirection: "row", ...style.background }}>
        <View style={{ ...SIHeaderStyle.iconContainer, ...style.background }}>
          <IconButton
            icon={() => (<Ionicons name="arrow-back" size={24} color={fgColor ? fgColor : "black"}/>)}
            onPress={handleBackPress}
          />
        </View>
        {image && (
          <View style={{ flex: 2, paddingTop: 60, flexDirection: "row" }}>
            <Image source={image} />
          </View>
        )}
        {title && !image && <Text style={{...SIHeaderStyle.title, ...style.foreground, ...titleStyle}}>{title}</Text>}
      </View>
      <View
        style={{alignItems: "center", ...style.background}}>
        {title && image && (
          <Text style={{ ...SIHeaderStyle.title2, ...style.foreground, ...titleStyle }}>
            {title}
          </Text>
        )}
        {subtitle && (
          <Text style={{...SIHeaderStyle.subtitle,...subtitleStyle}}>
            {subtitle}
          </Text>
        )}
      </View>
    </View>
  );
}

export default SignInHeader;

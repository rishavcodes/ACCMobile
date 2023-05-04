import React from "react";
import ArrowForwardIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet } from "react-native";
import { IconButton, Checkbox, Card, Text } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import theme from "../Styles/theme";
import RBoxStyle from "../Styles/Components/RBoxStyle";
function RoleBox(props) {
  const { color, text, icon, value, onPress } = props;
  checkIcon = value == color && value ? "checkmark-circle" : "checkmark-circle-outline";
  cardStyle = value == color && value ? {...RBoxStyle.selected, borderColor: color} : RBoxStyle.unselected;
  return (
    <Card
      style={cardStyle}
      onPress={() => {onPress ? onPress() : null;}}
    >
      <Card.Content>
        <View style={{ alignItems: "flex-end" }}>
          <IconButton
            size={20}
            icon={() => <Ionicons name={checkIcon} size={36} color={color} />}
          />
        </View>
        <View style={RBoxStyle.iconContainer}>
          <IconButton
            size={36}
            icon={() => <Ionicons name={icon} size={48} color={color} />}
          />
        </View>
        <Text style={{...RBoxStyle.text,color: color}}>{text}</Text>
      </Card.Content>
    </Card>
  );
}

export default RoleBox;

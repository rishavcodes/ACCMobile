import React, { useState } from "react";
import {Checkbox,Text,IconButton,Dialog,Portal,Divider} from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import StyledButton from "./StyledButton";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import PickerStyle from "../Styles/Components/PickerStyle";
function Picker(props) {
  const { placeholder, selected, onSelect, itemList, multiselect } = props;
  const [dialogOpen, setDialogOpen] = useState(false);

  icon = dialogOpen ? "chevron-up" : "chevron-down";
  borderColor = dialogOpen ? "#F83E7D" : "#D8D8D8";
 
  const closeAndUpdate= (item)=>{
    onSelect(item);
    setDialogOpen(false);
  }

  return (
    <>
      <TouchableOpacity style={{...PickerStyle.accordionButton, borderColor: borderColor}} onPress={() => setDialogOpen(true)}>
        <Text
          numberOfLines={1}
          style={PickerStyle.accordionText}
          onPress={() => setDialogOpen(true)}
        >
          {selected.length != 0 ? selected.toString() : placeholder}
        </Text>
        <IconButton
          style={PickerStyle.accordionBtnIcon}
          icon={() => <Ionicons name={icon} size={24} color={"black"} />}
          onPress={() => setDialogOpen(true)}
        />
      </TouchableOpacity>
      <Portal>
        <Dialog
          style={{ backgroundColor: "white" }}
          visible={dialogOpen}
          onDismiss={() => setDialogOpen(false)}
        >
          <Dialog.Title>{placeholder}</Dialog.Title>
          <Dialog.Content>
            {itemList.map((item, index) => (
              <View key={index}>
                <Divider />
                {!multiselect && (
                  <StyledButton
                    variant="text"
                    labelStyle={PickerStyle.text}
                    text={item}
                    onPress={() =>closeAndUpdate(item)}
                  />
                )}
                {multiselect && (
                  <Checkbox.Item
                    label={item}
                    position="leading"
                    labelStyle={{ textAlign: "center" }}
                    status={selected.includes(item) ? "checked" : "unchecked"}
                    onPress={() =>closeAndUpdate(item)}
                  />
                )}
              </View>
            ))}
          </Dialog.Content>
        </Dialog>
      </Portal>
    </>
  );
}

export default Picker;

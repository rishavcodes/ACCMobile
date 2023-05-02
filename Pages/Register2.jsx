import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { IconButton } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import theme from "../Styles/theme.js";
import loginStyles from "../Styles/Pages/loginStyles";
import { ToggleButton } from "react-native-paper";
import SignInHeader from "../Components/SignInHeader";
import RoleBox from "../Components/RoleBox";
import signStyles from "../Styles/Pages/signStyles";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

export default function Register2({ route }) {
  const reg1Data = route.params;
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: "#F83E7D",
    },
  });

  const onSubmit = (data) => {
    reg2Data = Object.assign(data, reg1Data);
    navigation.navigate("register3", reg2Data);
  };

  return (
    <>
      <SignInHeader title={"Register"} />

      <View style={theme.page}>
        <View style={{ backgroundColor: theme.white }}>
          <Text style={signStyles.subheader}>Select Role</Text>
        </View>

        <View style={loginStyles.container}>
          <Controller
            control={control}
            name="role"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <View style={{ flexDirection: "row" }}>
                  <RoleBox
                    text="Tenant"
                    color="#F83E7D"
                    icon="person-circle-outline"
                    value={value}
                    onPress={() => {
                      onChange("#F83E7D");
                    }}
                  />
                  <RoleBox
                    text="Woman Homeowner"
                    color="#0045F1"
                    icon="people-outline"
                    value={value}
                    onPress={() => {
                      onChange("#0045F1");
                    }}
                  />
                </View>
                <View style={{ flexDirection: "row", marginBottom: 15 }}>
                  <RoleBox
                    text="Property Owner"
                    color="#113170"
                    icon="home-outline"
                    value={value}
                    onPress={() => {
                      onChange("#113170");
                    }}
                  />
                  <RoleBox
                    text="Others"
                    color="#C5265C"
                    icon="ellipsis-horizontal"
                    value={value}
                    onPress={() => {
                      onChange("#C5265C");
                    }}
                  />
                </View>
              </>
            )}
          />
          <Text style={{ color: watch("role"), textAlign: "center", height: 30 }}>
            {watch("role") == "#F83E7D" && "I am looking to rent a shared accomodation"}
            {watch("role") == "#0045F1" &&  "I’m a woman homeowner looking for a woman tenant to share my accommodation with me."}
            {watch("role") == "#113170" && "Property owner description"}
            {watch("role") == "#C5265C" && "Other description"}
          </Text>
          <View style={{ paddingVertical: 20 }}>
            <StyledButton
              variant="contained"
              outerStyle={{ backgroundColor: watch("role") }}
              text="Confirm"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </View>
    </>
  );
}

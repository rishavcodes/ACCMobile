import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import { Provider as PaperProvider, RadioButton } from "react-native-paper";
import { Button } from "react-native-paper";
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import {
  TextInput,
  IconButton,
  Checkbox,
  HelperText,
} from "react-native-paper";
import icon from "../assets/images/primary-icon.png";
import theme from "../Styles/theme.js";
import loginStyles from "../Styles/Pages/loginStyles";
import SignInHeader from "../Components/SignInHeader";
import signStyles from "../Styles/Pages/signStyles";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

export default function Register() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      cemail: "",
      cpassword: "",
      newsletter: "",
    },
  });

  const onSubmit = (data) => {
    delete data.cemail;
    delete data.cpassword;
    navigation.navigate("register2", data);
  };

  return (
    <>
      <SignInHeader
        image={icon}
        title={"Welcome to the Aisha Comfortable Coliving"}
        subtitle={"We are so glad you’re here!"}
      />

      <View style={theme.page}>
        <View style={loginStyles.container}>
          <Controller
            control={control}
            name="email"
            rules={{ required: { value: true, message: "Field is required" } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  label="Email*"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  style={theme.textField}
                />
                <HelperText style={{ height: 25 }} type="error">
                  {errors.email?.message}
                </HelperText>
              </>
            )}
          />
          <Controller
            control={control}
            name="cemail"
            rules={{
              required: { value: true, message: "Field is required" },
              validate: (val) => {
                if (watch("email") != val) {
                  return "Your emails do not match";
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  label="Confirm Email*"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  style={theme.textField}
                />
                <HelperText style={{ height: 25 }} type="error">
                  {errors.cemail?.message}
                </HelperText>
              </>
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              required: { value: true, message: "Field is required" },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/,
                message:
                  "One special character, digit, lower and uppercase character, and length of 6 to 16 characters required.",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  label="Password*"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  style={theme.textField}
                />
                <HelperText style={{ height: 45 }} type="error">
                  {errors.password?.message}
                </HelperText>
              </>
            )}
          />
          <Controller
            control={control}
            name="cpassword"
            rules={{
              required: { value: true, message: "Field is required" },
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do not match";
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  label="Confirm Password*"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  style={theme.textField}
                />
                <HelperText style={{ height: 25 }} type="error">
                  {errors.cpassword?.message}
                </HelperText>
              </>
            )}
          />
          <Controller
            control={control}
            name="newsletter"
            render={({ field: { onChange, onBlur, value } }) => (
              <Checkbox.Item
                status={value ? "checked" : "unchecked"}
                onPress={() => {
                  onChange(!value);
                }}
                label="I agree to receive news and updates"
                position="leading"
                color="#F83E7D"
              />
            )}
          />
          <View style={{ paddingVertical: 10 }}>
            <StyledButton
              variant="contained"
              text="Next"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </View>
    </>
  );
}

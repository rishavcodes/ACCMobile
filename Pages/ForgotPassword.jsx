import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View,TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView, ImageBackground } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Button,HelperText } from "react-native-paper";
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { IconButton } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import loginStyles from "../Styles/Pages/loginStyles.js";
import theme from "../Styles/theme.js";
import SignInHeader from "../Components/SignInHeader";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ForgetPassword() {
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
    },
  });

  const onSubmit = (data) => {
    delete data.cemail;
    delete data.cpassword;
    console.log(data)
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleOnClick = (e) => {
    if (text !== "hi") {
      setText("hi");
    } else {
      setText("bye");
    }
  };

  return (
    <>
      <SignInHeader title={"Forgot Password"}/>
      <KeyboardAwareScrollView style={theme.page}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{...loginStyles.container,marginVertical:20}}>
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
          <View style={{ paddingVertical: 10 }}>
            <StyledButton outerStyle={{backgroundColor:"#0045F1"}}
              variant="contained"
              text="Reset Password"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </>
  );
}

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback, ImageBackground,Image } from "react-native";
import { HelperText, Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { IconButton } from "react-native-paper";
import theme from "../Styles/theme.js";
import icon from "../assets/images/white-icon.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import themeStyles from "../Styles/theme.js";
import loginStyles from "../Styles/Pages/loginStyles";
import SignInHeader from "../Components/SignInHeader";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Login() {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = data => {
    console.log(data);
    navigation.navigate("drawermanager")
  }

  return (
     <>
      <SignInHeader bkgColor={"#0045F1"} fgColor="white" image={icon} title={"Welcome back to \nAisha\n Comfortable Coliving"}/>
      <KeyboardAwareScrollView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={themeStyles.page}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
        <View style={{ backgroundColor: themeStyles.white, paddingTop: 30 }}>
          <Text style={loginStyles.subheader}>
            Sign in
          </Text>
        </View>

        <View style={loginStyles.container}>

          <Controller
            control={control}
            name="email"
            rules={{ required: {value:true ,message: "Field is required"}}}
            render={({field: { onChange, onBlur, value }}) => (
              <>
              <TextInput
                label="Email*"
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                style={theme.textField}
              />
              <HelperText style={{height:25}} type="error">{errors.email?.message}</HelperText>
            </>
            )}
          />
          <Controller
             control={control}
             name="password"
             rules={{ required: {value:true ,message: "Field is required"}, 
             pattern: {value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/,
             message:"One special character, digit, lower and uppercase character, and length of 6 to 16 characters required."} }}
            render={({field: { onChange, onBlur, value }}) => (
            <>
              <TextInput
              label="Password*"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              style={theme.textField}
            />
            <HelperText style={{height:45}} type="error">{errors.password?.message}</HelperText>
          </>
            )}
          />
          <View style={{ paddingVertical: 10 }}>
            <StyledButton variant="contained" outerStyle={{backgroundColor:"#0045F1"}} text="Login" onPress={handleSubmit(onSubmit)}/>  
            {/* link="drawermanager" */}
          </View>
          
          <View>
          <StyledButton variant="text" 
          labelStyle={loginStyles.textButton} text="Forgot password?" link="forgotpassword"/>
      
            <View style={{flexDirection:"row"}}>
            <Text style={{ ...themeStyles.header2 }}>Not registered?</Text>
            <StyledButton variant="text" labelStyle={{...loginStyles.textButton,marginTop:25}} text="Create Account" link="register"/>
            </View>
          </View>
        </View>
        </>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </>
  );
}

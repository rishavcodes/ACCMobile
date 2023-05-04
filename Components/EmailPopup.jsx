import React, { useState,useEffect } from "react";
import {TextInput,Text,IconButton,Dialog,Portal,HelperText} from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import StyledButton from "./StyledButton";
import { StyleSheet, View } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import loginStyles from "../Styles/Pages/loginStyles";
import themeStyles from "../Styles/theme.js";
import theme from "../Styles/theme.js";
function EmailPopup(props) {
  const { visible,onDismiss,color,email,success } = props;
  const { control, handleSubmit,setValue, formState: { errors } } = useForm({
    defaultValues: {
      email: ''
    }
  });
  useEffect(()=>{
    setValue('email',email)
  },[])
  const onSubmit = data => {
    console.log(data);
  }
  title = success?"Welcome":"Congratulations!"
  return (
    <Portal>
      <Dialog
        style={{ backgroundColor: "white" }}
        visible={visible}
        onDismiss={() => onDismiss()}
      >
        <Dialog.Title style={{textAlign:"center"}} >{title}</Dialog.Title>
        <Dialog.Content>
          <View style={{alignItems:"center"}}>
            {!success&&<Text>Your account has been created!</Text>}
            <IconButton
            size={64}
            icon={() => <Ionicons name={"checkmark-circle-outline"} size={64} color={color} />}
            />
            {success&&<Text>Your account has been created!</Text>}
            {!success&&<>
            <Text style={{fontWeight:"bold"}}>To activate account, please confirm and verify your email by checking your inbox.</Text>
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
            /></>}
            <View style={{ paddingVertical: 10 }}>
              {!success&&<StyledButton
                labelStyle={{color:color}}
                outerStyle={{borderColor:color}}
                variant="outlined"
                text="Resend Email"
                onPress={handleSubmit(onSubmit)}
              />}
               {success&&<StyledButton
                outerStyle={{backgroundColor:color}}
                variant="contained"
                text="List Property"
              />}
            </View>
            {!success&&<View >
            <Text style={{ ...themeStyles.header2 }}>Need help? Email us at</Text>
            <StyledButton variant="text" labelStyle={{...loginStyles.textButton,width:"100%",marginTop:25}} text="info@comfortablecoliving.com"/>
            </View>}
            {success&& <Text onPress={()=>onDismiss()} style={{ ...themeStyles.header2,textAlign:"right" }}>Go to homepage</Text>}
          </View>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}

export default EmailPopup;

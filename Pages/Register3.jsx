import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import { TextInput, IconButton, Button,HelperText } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import theme from "../Styles/theme.js";
import loginStyles from "../Styles/Pages/loginStyles";
import StyledDialog from "../Components/StyledDialogs";
import SignInHeader from "../Components/SignInHeader";
import Picker from "../Components/Picker";
import signStyles from "../Styles/Pages/signStyles";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

export default function Register3({ route }) {
  const reg2Data = route.params;
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      loc: "",
      job: "",
      dob: "",
      age: [],
      traits: [],
      interests: [],
    },
  });

  const onSubmit = (data) => {
    reg3Data = Object.assign(data, reg2Data);
    console.log(reg3Data);
    navigation.navigate("drawermanager");
  };

  const updateList = (value, arr, set) => {
    if (arr.includes(value)) arr.splice(value, 1);
    else arr.push(value);
  };

  return (
    <>
      <SignInHeader title={"Register"} />

      <View style={theme.page}>
        <View style={{ backgroundColor: theme.white }}>
          <Text style={signStyles.subheader}>Select up Profile</Text>
        </View>

        <View style={loginStyles.container}>
          <Controller
            control={control}
            name="loc"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Location"
                value={value}
                onChangeText={(value) => onChange(value)}
                style={theme.textField}
              />
            )}
          />
          <Controller
            control={control}
            name="age"
            rules={{ required: { value: true, message: "Field is required" } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Picker
                  placeholder="Age Range*"
                  itemList={["18-29", "30-39", "40-49"]}
                  selected={value}
                  onSelect={(value) => onChange(value)}
                />
                <HelperText style={{ height: 25 }} type="error">
                  {errors.age?.message}
                </HelperText>
              </>
            )}
          />

          <Controller
            control={control}
            name="job"
            rules={{ required: { value: true, message: "Field is required" } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  label="Occupation*"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  style={theme.textField}
                />
                <HelperText style={{ height: 25 }} type="error">
                  {errors.job?.message}
                </HelperText>
              </>
            )}
          />
          <Controller
            control={control}
            name="dob"
            rules={{ required: { value: true, message: "Field is required" } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  label="Date of birth*"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  style={theme.textField}
                />
                <HelperText style={{ height: 25 }} type="error">
                  {errors.dob?.message}
                </HelperText>
              </>
            )}
          />
          <Controller
            control={control}
            name="traits"
            render={({ field: { onChange, onBlur, value } }) => (
              <Picker
                placeholder="Personality Traits"
                itemList={["A", "B", "C"]}
                selected={value}
                multiselect={true}
                onSelect={(item) => updateList(item, value, onChange)}
              />
            )}
          />
          <Controller
            control={control}
            name="interests"
            render={({ field: { onChange, onBlur, value } }) => (
              <Picker
                placeholder="Interests"
                itemList={["A", "B", "C"]}
                selected={value}
                multiselect={true}
                onSelect={(item) => updateList(item, value, onChange)}
              />
            )}
          />
          <View style={{ paddingVertical: 20 }}>
            <StyledButton
              variant="contained"
              outerStyle={{ backgroundColor: reg2Data.role }}
              text="Finish"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </View>
    </>
  );
}

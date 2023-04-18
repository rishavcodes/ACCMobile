import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper/src";
import { Image } from "react-native";
import homepage from "../assets/onboarding1.svg";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import StyledButton from "../Components/StyledButton";
import onBoardingStyles from "./pageStyles/onBoardingStyles.js";

export default function OnBoarding() {
  const navigation = useNavigation();

  return (
    <Swiper style={onBoardingStyles.wrapper} showsButtons={false} loop={false} activeDot={<View style={onBoardingStyles.activeDot} />}>
      {/* onBoarding Page 1 */}
      <View style={onBoardingStyles.slide1}>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end", paddingTop: 40, paddingRight: 20 }}>
          <Button onPress={() => navigation.navigate("landing")}>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                textDecorationLine: "underline",
              }}>
              Create Account
            </Text>
          </Button>
        </View>

        <View style={onBoardingStyles.center}>
          <Image source={homepage} style={{ width: 200, height: 200 }} />

          <Text style={{ fontSize: 48, fontWeight: "bold", color: "#F83E7D", paddingTop: 30 }}>Match.</Text>
          <Text style={{ fontSize: 18, color: "#323232", textAlign: "center", paddingTop: 20 }}>
            Aisha Comfortable Co-living provides the utmost safety and connection to all women.
          </Text>
        </View>
      </View>
      {/* onBoarding Page 2 */}
      <View style={onBoardingStyles.slide2}>
        <Text style={onBoardingStyles.text}>Page 2</Text>
        <View style={onBoardingStyles.center}>
          <Image source={homepage} style={{ width: 200, height: 200 }} />

          <Text style={{ fontSize: 48, fontWeight: "bold", color: "#F83E7D", paddingTop: 30 }}>Match.</Text>
          <Text style={{ fontSize: 18, color: "#323232", textAlign: "center", paddingTop: 20 }}>
            Aisha Comfortable Co-living provides the utmost safety and connection to all women.
          </Text>
        </View>
      </View>
      {/* onBoarding Page 3 */}
      <View style={onBoardingStyles.slide3}>
        <Text style={onBoardingStyles.text}>Page 3</Text>
        <View style={onBoardingStyles.center}>
          <Image source={homepage} style={{ width: 200, height: 200 }} />

          <Text style={{ fontSize: 48, fontWeight: "bold", color: "#F83E7D", paddingTop: 30 }}>Match.</Text>
          <Text style={{ fontSize: 18, color: "#323232", textAlign: "center", paddingTop: 20 }}>
            Aisha Comfortable Co-living provides the utmost safety and connection to all women.
          </Text>
          <StyledButton variant="pinkBtn" text="" link="signin"/>
        </View>
      </View>
    </Swiper>
  );
}


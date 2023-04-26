import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper/src";
import { Image } from "react-native";
import homepage from "../assets/onboarding1.svg";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import StyledButton from "../Components/StyledButton";
import { Checkbox } from "react-native-paper";
import { IconButton } from "react-native-paper";
import { Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import onBoardingStyles from "./pageStyles/onBoardingStyles.js";
import theme from "./pageStyles/theme";

export default function OnBoarding(props) {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);

  return (
    <Swiper
      style={onBoardingStyles.wrapper}
      showsButtons={false}
      loop={false}
      activeDot={<View style={onBoardingStyles.activeDot} />}>
      {/* onBoarding Page 1 */}
      <View style={onBoardingStyles.slide1}>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end", paddingTop: 40, paddingRight: 20 }}>
          <Button onPress={() => navigation.navigate("signin")}>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 16,
                textAlign: "center",
              }}>
              Skip
            </Text>
          </Button>
        </View>

        <View style={onBoardingStyles.center}>
          <Image source={homepage} style={{ width: 200, height: 200 }} />

          <Text style={{ fontSize: 48, fontWeight: "bold", color: colors.primary, paddingTop: 30 }}>Match</Text>
          <Text style={{ fontSize: 18, color: "#323232", textAlign: "center", paddingTop: 20 }}>
            Coliving is the newest form of wellness living, where two or more people share housing accommodations.
          </Text>
        </View>
      </View>

      {/* onBoarding Page 2 */}
      <View style={onBoardingStyles.slide2}>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end", paddingTop: 40, paddingRight: 20 }}>
          <Button onPress={() => navigation.navigate("signin")}>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 16,
                textAlign: "center",
              }}>
              Skip
            </Text>
          </Button>
        </View>
        <View style={onBoardingStyles.center}>
          <Image source={homepage} style={{ width: 200, height: 200 }} />
          <Text style={{ fontSize: 48, fontWeight: "bold", color: "#F83E7D", paddingTop: 30 }}>Match.</Text>
          <Text style={onBoardingStyles.regTxt}>
            Aisha Comfortable Co-living provides the utmost safety and connection to all women.
          </Text>
        </View>
      </View>

      {/* onBoarding Page 3 */}
      <View style={onBoardingStyles.slide3}>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end", paddingTop: 40, paddingRight: 20 }}>
          <Button onPress={() => navigation.navigate("signin")}>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 16,
                textAlign: "center",
              }}>
              Skip
            </Text>
          </Button>
        </View>
        <View style={onBoardingStyles.center}>
          <Image source={homepage} style={{ width: 200, height: 200 }} />

          <Text style={{ fontSize: 48, fontWeight: "bold", color: colors.primary, paddingTop: 30 }}>Community</Text>
          <Text style={theme.boldTxt}>
            The Aisha Community is a place where women can connect, network, and build friendships through our online
            and in-person events.
          </Text>
          <View style={{ marginTop: 40 }}>
            <IconButton
              icon={() => <Ionicons name="md-checkmark-circle" size={60} color={colors.primary} />}
              size={50}
              onPress={() => navigation.navigate("signin")}
            />
          </View>
        </View>
      </View>
    </Swiper>
  );
}

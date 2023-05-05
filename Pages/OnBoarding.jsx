import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Swiper from "react-native-swiper/src";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import StyledButton from "../Components/StyledButton";
import { Checkbox } from "react-native-paper";
import { IconButton } from "react-native-paper";
import { Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import onBoardingStyles from "./pageStyles/onBoardingStyles.js";
import ob1 from "../assets/images/onboardingImg1.png";
import ob2 from "../assets/images/onboardingImg2.png";
import ob3 from "../assets/images/onboardingImg3.png";
import ThemeContext from "../Components/ThemeContext";
import baseTheme from "./pageStyles/baseTheme";

export default function OnBoarding(props) {
  const theme = useTheme();
  const navigation = useNavigation();
 
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDotColors = [ "#F83E7D", "#0045F1", "#F83E7D",];
  
  return (
    <Swiper
      style={onBoardingStyles.wrapper}
      showsButtons={false}
      loop={false}
      activeDotColor={activeDotColors[activeIndex]}
      onIndexChanged={(index) => setActiveIndex(index)}
    >
      {/* onBoarding Page 1 */}
      <View style={onBoardingStyles.slide1}>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            paddingTop: 40,
            paddingRight: 20,
          }}
        >
          <Button onPress={() => navigation.navigate("signin")}>
            <Text style={onBoardingStyles.text}>Skip</Text>
          </Button>
        </View>

        <View style={onBoardingStyles.center}>
          <View style={onBoardingStyles.imgWrap}>
            <Image source={ob1} style={{ width: 315, height: 300, marginTop: 20, }} />
          </View>
          <Text style={{...onBoardingStyles.onboardingHeader, color:theme.colors.tenant}}>
            Coliving 
          </Text>
          <Text style={onBoardingStyles.onboardingText}>
            Coliving is the newest form of wellness living, where two or more
            people share housing accommodations.
          </Text>
          <IconButton size={50} />
        </View>
      </View>

      {/* onBoarding Page 2 */}
      <View style={onBoardingStyles.slide2}>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            paddingTop: 40,
            paddingRight: 20,
          }}
        >
          <Button onPress={() => navigation.navigate("signin")}>
            <Text style={onBoardingStyles.text}>Skip</Text>
          </Button>
        </View>
        <View style={onBoardingStyles.center}>
          <View style={onBoardingStyles.imgWrap}>
            <Image source={ob2} style={{ width: 275, height: 290, marginTop: 20, }} />
          </View>
          <Text style={{...onBoardingStyles.onboardingHeader, color:theme.colors.ho}}>
            Women 
          </Text>
          <Text style={onBoardingStyles.onboardingText}>
            We support women throughout their entire Coliving experience through
            out personalized housing services.
          </Text>
          <IconButton size={50} />
        </View>
      </View>

      {/* onBoarding Page 3 */}
      <View style={onBoardingStyles.slide3}>
        <View style={onBoardingStyles.slide3}>
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "flex-end",
              paddingTop: 40,
              paddingRight: 20,
            }}
          >
            <Button onPress={() => navigation.navigate("signin")}>
              <Text style={onBoardingStyles.text}>Skip</Text>
            </Button>
          </View>
          <View style={onBoardingStyles.center}>
            <View style={onBoardingStyles.imgWrap}>
              <Image source={ob3} style={{ width: 290, height: 290, marginTop: 20, }} />
            </View>
            <Text style={{...onBoardingStyles.onboardingHeader, color:theme.colors.tenant, marginBottom: 30,}}>
              Community
            </Text>
            <View style={{justifyContent: "center", alignItems: "center", flex: 0.5,}}>
              <Text style={[onBoardingStyles.onboardingText, {marginBottom: 10,}]}>
                The Aisha Community is a place where women can connect, network,
                and build friendships through our online and in-person events.
              {/* </Text> */}
              </Text>
              {/* Skip Icon Button */}
              <IconButton
                icon={() => (
                  <Ionicons
                    name="md-checkmark-circle"
                    size={50}
                    color={theme.role}
                  />
                )}
                style={onBoardingStyles.checkmark}
                size={50}
                onPress={() => navigation.navigate("signin")}
              />
            </View>
          </View>
        </View>
      </View>
    </Swiper>
  );
}

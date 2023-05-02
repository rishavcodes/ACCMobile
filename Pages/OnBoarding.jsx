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
import onBoardingStyles from "../Styles/Pages/onBoardingStyles.js";
import theme from "../Styles/theme";
import ob1 from "../assets/images/onboardingImg1.png";
import ob2 from "../assets/images/onboardingImg2.png";
import ob3 from "../assets/images/onboardingImg3.png";


export default function OnBoarding(props) {
  const { colors } = useTheme();
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
        <View style={onBoardingStyles.skip}>
          <Button onPress={() => navigation.navigate("signin")}>
            <Text style={onBoardingStyles.text}>Skip</Text>
          </Button>
        </View>

        <View style={onBoardingStyles.center}>
          <View style={onBoardingStyles.imgWrap}>
            <Image source={ob1} />
          </View>
          <Text style={{...onBoardingStyles.headerTxt, ...onBoardingStyles.pink}}>
            Coliving 
          </Text>
          <Text style={onBoardingStyles.text}>
            Coliving is the newest form of wellness living, where two or more
            people share housing accommodations.
          </Text>
          <IconButton size={50} />
        </View>
      </View>

      {/* onBoarding Page 2 */}
      <View style={onBoardingStyles.slide2}>
      <View style={onBoardingStyles.skip}>
          <Button onPress={() => navigation.navigate("signin")}>
            <Text style={onBoardingStyles.text}>Skip</Text>
          </Button>
        </View>
        <View style={onBoardingStyles.center}>
          <View style={onBoardingStyles.imgWrap}>
            <Image source={ob2} />
          </View>
          <Text style={{...onBoardingStyles.headerTxt, ...onBoardingStyles.blue}}>
            Women 
          </Text>
          <Text style={onBoardingStyles.text}>
            We support women throughout their entire Coliving experience through
            out personalized housing services.
          </Text>
          <IconButton size={50} />
        </View>
      </View>

      {/* onBoarding Page 3 */}
      <View style={onBoardingStyles.slide3}>
        <View style={onBoardingStyles.skip}>
            <Button onPress={() => navigation.navigate("signin")}>
              <Text style={onBoardingStyles.text}>Skip</Text>
            </Button>
          </View>
          <View style={onBoardingStyles.center}>
            <View style={onBoardingStyles.imgWrap}>
              <Image source={ob3} />
            </View>
            <Text style={{...onBoardingStyles.headerTxt, ...onBoardingStyles.pink}}>
              Community
            </Text>
            <Text style={onBoardingStyles.text}>
              The Aisha Community is a place where women can connect, network,
              and build friendships through our online and in-person events.
            </Text>
            {/* Skip Icon Button */}
            <IconButton
              icon={() => (
                <Ionicons
                  name="md-checkmark-circle"
                  size={40}
                  color={colors.primary}
                />
              )}
              size={30}
              onPress={() => navigation.navigate("signin")}
            />
          </View>
        </View>
    </Swiper>
  );
}

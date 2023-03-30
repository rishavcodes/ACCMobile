import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper/src";
import { Image } from "react-native";
import homepage from "../assets/onboarding1.svg";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function OnBoarding() {
  const navigation = useNavigation();

  return (
    <Swiper style={styles.wrapper} showsButtons={false} loop={false} activeDot={<View style={styles.activeDot} />}>
      {/* onBoarding Page 1 */}
      <View style={styles.slide1}>
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

        <View style={styles.center}>
          <Image source={homepage} style={{ width: 200, height: 200 }} />

          <Text style={{ fontSize: 48, fontWeight: "bold", color: "#F83E7D", paddingTop: 30 }}>Match.</Text>
          <Text style={{ fontSize: 18, color: "#323232", textAlign: "center", paddingTop: 20 }}>
            Aisha Comfortable Co-living provides the utmost safety and connection to all women.
          </Text>
        </View>
      </View>
      {/* onBoarding Page 2 */}
      <View style={styles.slide2}>
        <Text style={styles.text}>Page 2</Text>
      </View>
      {/* onBoarding Page 3 */}
      <View style={styles.slide3}>
        <Text style={styles.text}>Page 3</Text>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: "#F83E7D",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  slide1: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide2: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide3: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    textAlign: "right",
    paddingTop: 40,
    paddingRight: 40,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
});

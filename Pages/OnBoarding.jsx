import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper/src";
import { Image } from "react-native";
import homepage from "../assets/onboarding1.svg";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import StyledButton from "../Components/StyledButton";
import { Checkbox } from "react-native-paper";
import { IconButton } from "react-native-paper";
import { useTheme } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function OnBoarding(props) {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);

  return (
    <Swiper
      index={0}
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      activeDot={<View style={styles.activeDot} />}>
      {/* onBoarding Page 1 */}
      <View style={styles.slide1}>
        <View style={{ alignItems: "flex-end", paddingTop: 100, paddingRight: 40 }}>
          <Button onPress={() => navigation.navigate('signin')}>
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

        <View style={styles.center}>
          <Image source={homepage} style={{ width: 200, height: 200 }} />

          <Text style={{ fontSize: 48, fontWeight: "bold", color: colors.primary, paddingTop: 30 }}>Match</Text>
          <Text style={{ fontSize: 18, color: "#323232", textAlign: "center", paddingTop: 20 }}>
            Coliving is the newest form of wellness living, where two or more people share housing accommodations.
          </Text>
        </View>
      </View>
      {/* onBoarding Page 2 */}
      <View style={styles.slide2}>
        <View style={{ alignItems: "flex-end", paddingTop: 100, paddingRight: 40 }}>
          <Button onPress={() => navigation.navigate('signin')}>
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
        <View style={styles.center}>
          <Image source={homepage} style={{ width: 200, height: 200 }} />

          <Text style={{ fontSize: 48, fontWeight: "bold", color: "#0045F1", paddingTop: 30 }}>Women</Text>
          <Text style={{ fontSize: 18, color: "#323232", textAlign: "center", paddingTop: 20 }}>
            We support women throughout their entire Coliving experience through out personalized housing services.
          </Text>
        </View>
      </View>
      {/* onBoarding Page 3 */}
      <View style={styles.slide3}>
        <View style={{ alignItems: "flex-end", paddingTop: 100, paddingRight: 40 }}>
          <Button onPress={() => navigation.navigate('signin')}>
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
        <View style={styles.center}>
          <Image source={homepage} style={{ width: 200, height: 200 }} />

          <Text style={{ fontSize: 48, fontWeight: "bold", color: colors.primary, paddingTop: 30 }}>Community</Text>
          <Text style={{ fontSize: 18, color: "#323232", textAlign: "center", paddingTop: 20 }}>
            The Aisha Community is a place where women can connect, network, and build friendships through our online
            and in-person events.
          </Text>
          <View style={{ marginTop: 40 }}>
            <IconButton
              icon={() => <Ionicons name="md-checkmark-circle" size={60} color={colors.primary} />}
              size={50}
              onPress={() => navigation.navigate('signin')}
            />
          </View>
        </View>
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

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import BottomBar from "../Components/BottomBar";
import TopBar from "../Components/TopBar";
import StyledButton from "../Components/StyledButton";
import { TextInput } from "react-native-paper";
import accountPageStyles from "./pageStyles/accountPageStyles";
import Attribute from "../Components/Attribute";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";
import RangeSlider from "../Components/RangeSlider";

export default function MyAccount() {
  const Personality = ["Introverted", "Creative"];
  const Interests = ["Hiking", "Cars", "Sports"];

  const navigate = useNavigation();

  return (
    <>
      <View style={accountPageStyles.container}>

        <View style={accountPageStyles.banner}>
          <Ionicons style={accountPageStyles.icon1} name="arrow-back-circle" size={40} color="white"/>
          <Ionicons style={accountPageStyles.icon2} name="create" size={40} color="white" onPress={() => navigate.navigate("myaccountform")}/>
          <View style={accountPageStyles.profilePosition}>
            <Image
              style={accountPageStyles.profilePic}
            />
          </View>
          <View style={accountPageStyles.info}>
            <Text style={accountPageStyles.name}>Jim Baldwin</Text>
            <Text style={accountPageStyles.occupation}>Nurse</Text>
          </View>
        </View>


        <ScrollView style={accountPageStyles.scrollBody}>
          <View style={accountPageStyles.section}>
            <View style={accountPageStyles.imageHeader}>
              <Text style={accountPageStyles.imageHeaderText}>Toronto</Text>
              <Text style={accountPageStyles.imageHeaderText}>18-25 Age Group</Text>
            </View>

            <Image
            style={accountPageStyles.mainImage}
            />

            <View style={accountPageStyles.tripleImage}>
              <Image
              style={accountPageStyles.image}
              />
              <Image
              style={accountPageStyles.image}
              />
              <Image
              style={accountPageStyles.image}
              />
            </View>

            <Button textColor='#FFFFFF' style={accountPageStyles.matchButton}><Text style={accountPageStyles.match}>Match Now</Text></Button>

          </View>

          <View style={accountPageStyles.section}> 
            <Text style={accountPageStyles.header}>About Me</Text>
            <Text style={accountPageStyles.text}>
              Lectus a, mi, vulputate cursus. At faucibus vulputate lacus ultricies sit quisque. Condimentum amet euismod dapibus eros, arcu. Porttitor aliquam, etiam eu, felis quis nibh convallis. Elementum, placerat donec eros, sit.
              
              Nunc cras dignissim nibh nunc facilisis curabitur eget tellus. Diam quis scelerisque eget pretium, morbi tincidunt. Amet bibendum vulputate sollicitudin vel quis ac arcu quam eu. Tortor, venenatis accumsan ornare adipiscing mauris viverra etiam eget. Lectus duis nulla nibh varius eget velit egestas. Tellus cras sit natoque suspendisse sed ultrices sit.
              Morbi odio semper eget pellentesque elit odio at pharetra tellus. Diam sit at est purus a nisl. Quam luctus at sapien tempor vitae. Condimentum nunc nisl erat ipsum. Sodales turpis diam at sit lacus elementum massa tempus aenean. Elementum aliquet nisi lacus, gravida porttitor purus mi. 
            </Text>
          </View>

          <View style={accountPageStyles.section}> 
            <Text style={accountPageStyles.header}>What I'm Looking For</Text>
            <Text style={accountPageStyles.text}>
              Lectus a, mi, vulputate cursus. At faucibus vulputate lacus ultricies sit quisque. Condimentum amet euismod dapibus eros, arcu. Porttitor aliquam, etiam eu, felis quis nibh convallis. Elementum, placerat donec eros, sit.
              
              Nunc cras dignissim nibh nunc facilisis curabitur eget tellus. Diam quis scelerisque eget pretium, morbi tincidunt. Amet bibendum vulputate sollicitudin vel quis ac arcu quam eu. Tortor, venenatis accumsan ornare adipiscing mauris viverra etiam eget. Lectus duis nulla nibh varius eget velit egestas. Tellus cras sit natoque suspendisse sed ultrices sit.
              Morbi odio semper eget pellentesque elit odio at pharetra tellus. Diam sit at est purus a nisl. Quam luctus at sapien tempor vitae. Condimentum nunc nisl erat ipsum. Sodales turpis diam at sit lacus elementum massa tempus aenean. Elementum aliquet nisi lacus, gravida porttitor purus mi. 
            </Text>
          </View>

          <View style={accountPageStyles.section}> 
            <Text style={accountPageStyles.header2}>Price Range Preference</Text>
            <View style={accountPageStyles.priceRange}>
              <RangeSlider minAmount={400} maxAmount={4000} start={700} end={1500} edit={false}/>
            </View>
          </View>

          <View style={accountPageStyles.section}> 
            <Text style={accountPageStyles.header2}>Personality</Text>
            <View style={accountPageStyles.attributes}>
              {Personality.map(item => 
                <Attribute item={item} color="pink"/>
              )}
            </View>
          </View>

          <View style={accountPageStyles.section}> 
            <Text style={accountPageStyles.header2}>Interests</Text>
            <View style={accountPageStyles.attributes}>
              {Interests.map(item => 
                <Attribute item={item} color="blue"/>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

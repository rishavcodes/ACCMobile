import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, IconButton, Title, Paragraph, Checkbox, Avatar, Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ECardHouseMateStyle from "./componentStyles.js/ECardHouseMateStyle";
import ECardListingStyle from "./componentStyles.js/ECardListingStyle";
import ECardEventStyle from "./componentStyles.js/ECardEventStyle";
import StyledButton from "./StyledButton";
import theme from "../Pages/pageStyles/theme";

function capitalizeFirstLetter(str) {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

function ECard(props) {
  /**
   * ECard component is a custom card component that allows the user to pass in props, in which it displays
   * the details regarding events, listings, etc... The styling is refered from the figma. 
   * --------------------------------------------------------------------------------------------------------------
   * Usage: 
   * To call on ECard components use <ECard ...props/>
   * list of avilable props below (add props if required) ->
   */
  const {
    variant,
    blog,
    themeColor,
    date,
    time,
    eventType = "Online",
    title = "N/A",
    name = "N/A",
    role = "N/A",
    occupation = "N/A",
    age = "N/A",
    location = "N/A",
    interested = 0,
    going = 0,
    spotsAvilable = 0,
    image,
    bedrooms = "N/A",
    bathrooms = "N/A",
    roomsAvailable = "N/A",
    price = "N/A",
    commentCount = 0,
    author,
    category = "LIFESTYLE & WELLNESS",
  } = props;

  return (
    <>
      {variant === "housemate" && (
        <Card style={ECardHouseMateStyle.card} elevation={5}>
          <Card.Content>
            <View style={ECardHouseMateStyle.iconContainer}>
              <MaterialCommunityIcons name="check-circle" color="#F83E7D" size={40} />
            </View>
            <View style={ECardHouseMateStyle.avatarContainer}>
              <Avatar.Image size={140} />
            </View>
            <Title style={ECardHouseMateStyle.title}>{name}</Title>
            <Title style={ECardHouseMateStyle.accTitle}>account type</Title>
            <View style={ECardHouseMateStyle.grid}>
              <Paragraph style={ECardHouseMateStyle.gridItem}>{capitalizeFirstLetter(role)}</Paragraph>
              <Paragraph style={ECardHouseMateStyle.separator}>|</Paragraph>
              <Paragraph style={ECardHouseMateStyle.gridItem}>{capitalizeFirstLetter(occupation)}</Paragraph>
            </View>
            <View style={ECardHouseMateStyle.buttonContainer}>
              <StyledButton variant="pinkBtn" text="See Profile" />
            </View>
          </Card.Content>
        </Card>
      )}
      {variant === "listing" && (
        <Card style={ECardListingStyle.card} elevation={5}>
          <Card.Cover style={ECardListingStyle.cardCover} source={image} />
          <View style={ECardListingStyle.buttonContainer}>
            <Button
              mode="contained"
              onPress={() => console.log("Price button pressed")}
              style={ECardListingStyle.pinkButton}>
              ${price}
            </Button>
          </View>
          <Card.Content>
            <View style={ECardListingStyle.locationContainer}>
              <MaterialCommunityIcons name="map-marker" color="#0045F1" size={24} />
              <Title style={ECardListingStyle.location}>{location}</Title>
            </View>
            <Title style={ECardListingStyle.boldText}>{title}</Title>
            <View style={ECardListingStyle.grid}>
              <Paragraph style={ECardListingStyle.gridItem}>{bedrooms} Bedroom</Paragraph>
              <Paragraph style={ECardListingStyle.gridItem}>{bathrooms} Bathroom</Paragraph>
              <Paragraph style={ECardListingStyle.gridItem}>{roomsAvailable} Rooms Available</Paragraph>
            </View>
            <View style={ECardListingStyle.row}>
              <View style={ECardListingStyle.verified}>
                <MaterialCommunityIcons name="check-circle" color="#0045F1" size={24} />
                <Paragraph style={ECardListingStyle.verifiedText}>Verified</Paragraph>
              </View>
              <IconButton
                icon="arrow-right"
                color="black"
                size={30}
                onPress={() => console.log("Arrow pressed")}
                style={ECardListingStyle.iconButton}
              />
            </View>
          </Card.Content>
        </Card>
      )}
      {variant === "event" && (
        <Card style={ECardEventStyle.card} elevation={5}>
          <Card.Cover style={ECardEventStyle.cardCover} source={image} />
          <View style={ECardEventStyle.buttonContainer}>
            <StyledButton variant="pinkBtn" text={price} />
          </View>
          <Card.Content>
            <View style={ECardEventStyle.cardContent}>
              <View style={ECardEventStyle.locationContainer}>
                <MaterialCommunityIcons name="map-marker" color="#F83E7D" size={24} />
                <Title style={ECardEventStyle.location}>{location}</Title>
              </View>
              <Title style={ECardEventStyle.boldText}>{title}</Title>
              <View style={ECardEventStyle.grid}>
                <Paragraph style={ECardEventStyle.gridItem}>{bedrooms} Interested</Paragraph>
                <Paragraph style={ECardEventStyle.gridItem}>{bathrooms} Going</Paragraph>
                <Paragraph style={ECardEventStyle.gridItem}>{roomsAvailable} Spots Available</Paragraph>
              </View>
              <View style={ECardEventStyle.row}>
                <View style={ECardEventStyle.verified}>
                  <MaterialCommunityIcons name="check-circle" color="#F83E7D" size={24} />
                  <Paragraph style={ECardEventStyle.verifiedText}>Verified</Paragraph>
                </View>
                <IconButton
                  icon="arrow-right"
                  color="black"
                  size={30}
                  onPress={() => console.log("Arrow pressed")}
                  style={ECardEventStyle.iconButton}
                />
              </View>
            </View>
          </Card.Content>
        </Card>
      )}
      {variant === "eventMini" && (
        <Card style={ECardEventStyle.cardMini} elevation={5}>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
            <View style={{ backgroundColor: "gray", height: 140, width: "35%" }}></View>

            <View style={ECardEventStyle.cardContent}>
              <Title style={{ fontFamily: "msBold" }}>{title}</Title>
              <View style={ECardEventStyle.locationContainer}>
                <MaterialCommunityIcons name="map-marker" color="#F83E7D" size={15} />
                <Title style={ECardEventStyle.location}>{location}</Title>
              </View>
              <View style={{ borderRadius: 15, backgroundColor: "#F83E7D", width: "40%", alignItems: "center" }}>
                <Title style={{ ...ECardEventStyle.location, color: "white" }}>{eventType}</Title>
              </View>

              <View style={ECardEventStyle.grid}>
                <Paragraph style={ECardEventStyle.gridItem}>{interested} Interested</Paragraph>
                <Paragraph style={ECardEventStyle.gridItem}>{going} Going</Paragraph>
                <Paragraph style={ECardEventStyle.gridItem}>{spotsAvilable} Spots Available</Paragraph>
              </View>
            </View>
          </View>
        </Card>
      )}
    </>
  );
}

export default ECard;

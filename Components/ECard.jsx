import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, IconButton, Title, Paragraph, Checkbox, Avatar, Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ECardHouseMateStyle from "./componentStyles.js/ECardHouseMateStyle";
import ECardListingStyle from "./componentStyles.js/ECardListingStyle";
import ECardEventStyle from "./componentStyles.js/ECardEventStyle";
import StyledButton from "./StyledButton";

function capitalizeFirstLetter(str) {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

function ECard(props) {
  const {
    variant,
    blog,
    themeColor,
    date,
    time,
    name = "N/A",
    role = "N/A",
    occupation = "N/A",
    age = "N/A",
    location = "N/A",
    interested,
    going,
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
            <Title style={ECardListingStyle.boldText}>Brand new house. Two rooms available for students.</Title>
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
          <Card.Content >
            <View style={ECardEventStyle.cardContent}>
              <View style={ECardEventStyle.locationContainer}>
                <MaterialCommunityIcons name="map-marker" color="#F83E7D" size={24} />
                <Title style={ECardEventStyle.location}>{location}</Title>
              </View>
              <Title style={ECardEventStyle.boldText}>Trivia Night IRL</Title>
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
    </>
  );
}

export default ECard;

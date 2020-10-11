import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Color from "../constants/Color";

let iconColor = Color.primaryColor;

if (Platform.OS === "android") {
  iconColor = "white";
}

export default function FavouriteButton(props) {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={iconColor}
    />
  );
}

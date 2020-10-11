import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from "react-native";

import Color from "../constants/Color";

export default function RecipeCard({
  title,
  affordability,
  navigation,
  complexity,
  duration,
  image,
  steps,
  ingredients,
  isGlutenFree,
  isVegan,
  isLactoseFree,
  isVegetarian
}) {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.container}>
      <TouchableComponent
        onPress={() => {
          navigation.navigate({
            name: "RecipeDetails",
            params: {
              title,
              affordability,
              complexity,
              duration,
              image,
              steps,
              ingredients,
              isGlutenFree,
              isVegan,
              isLactoseFree,
              isVegetarian
            },
          });
        }}
      >
        <View style={styles.column}>
          <View style={{ ...styles.row, ...styles.header }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
                {/* Wrapped text to avoid visual bug on iOS */}
              <View style={styles.titleContainer}> 
                  <Text style={styles.title} numberOfLines={1}>{title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.detail }}>
            <Text style={styles.detailText}>{affordability}</Text>
            <Text style={styles.detailText}>{complexity}</Text>
            <Text style={styles.detailText}>{duration} mins</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: Color.primaryLight,
    overflow: "hidden",
    borderRadius: 10,
    marginVertical: 5,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  title: {
    textAlign: "center",
    fontWeight: "200",
    width: "100%",
    fontSize: 25,
    color: "white",
  },
  header: {
    height: "85%",
  },
  detail: {
    justifyContent: "space-between",
    marginHorizontal: 30,
    padding: 5
  },
  detailText: {
    fontStyle: "italic",
    fontWeight: "bold",
    color: Color.secondaryColor
  }
});

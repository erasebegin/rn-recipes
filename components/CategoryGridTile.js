import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

export default function CategoryGridTile({ id, color, title, navigation }) {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version>=21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    //   added this extra view wrapper to fix styles from TouchableNativeFeedback
    <View style={styles.gridItem}> 
        <TouchableComponent
          onPress={() => {
            navigation.navigate({
              name: "CategoryRecipes",
              params: {
                catId: id,
                catColor: color,
                catTitle: title,
              },
            });
          }}
        >
          {/* merges inline style with style in styles object to allow use of color prop */}
          <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
            <Text style={styles.text} numberOfLines={2}>
              {title}
            </Text>
          </View>
        </TouchableComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 15,
    textAlign: "center",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3
  },
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    borderRadius: 10
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

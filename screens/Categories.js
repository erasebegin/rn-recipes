import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
} from "react-native";

import { CATEGORIES } from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function Categories({ navigation }) {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        id={itemData.item.id}
        color={itemData.item.color}
        title={itemData.item.title}
        navigation={navigation} 
      />
    );
  };
  return (
    <View>
      <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    </View>
  );
}

Categories.navigationOptions = {
  title: "Recipe Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

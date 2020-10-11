import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

export default function RecipeList({component, data}) {
    return (
        <View style={styles.screen}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.id}
          renderItem={component}
          style={{ width: "100%" }}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    screen: {
      alignItems: "center",
      justifyContent: "center",
      padding: 15
    },
  });
import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { DrawerActions } from '@react-navigation/native';

import FavouriteButton from "../components/FavouriteButton";
import Categories from "../screens/Categories";
import Filters from "../screens/Filters";
import CategoryRecipes from "../screens/CategoryRecipes";
import RecipeDetails from "../screens/RecipeDetails";
import FavouritesNavigator from "../navigation/FavouritesNavigator";
import Color from "../constants/Color";

const Stack = createStackNavigator();

function RecipeNavigator({navigation}) {
  console.log(navigation)
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: false,
        headerTintColor:
          Platform.OS === "android" ? "white" : Color.primaryColor,
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
        },
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={FavouriteButton}>
            <Item
              title="hamburger"
              iconName="ios-menu"
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer())
              }}
              style={{marginLeft:10}}
            />
          </HeaderButtons>
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={Categories}
        options={{
          title: "Categories",
        }}
      />
      <Stack.Screen
        name="CategoryRecipes"
        component={CategoryRecipes}
        options={({ route }) => ({
          title: route.params.catTitle,
        })}
      />
      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetails}
        options={({ route }) => ({
          title: route.params.title,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={FavouriteButton}>
              <Item
                title="favourite"
                iconName="ios-star-outline"
                onPress={() => {
                  console.log("hep");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

export default function RecipeTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Color.secondaryColor,
        inactiveTintColor: Color.primaryColor,
      }}
      barStyle={{
        backgroundColor: Color.primaryColor,
      }}
    >
      <Tab.Screen
        name="Home"
        component={RecipeNavigator}
        options={{
          activeTintColor: "red",
          tabBarIcon: () => {
            return <Ionicons name="ios-restaurant" size={25} color={"white"} />;
          },
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesNavigator}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="ios-star" size={25} color={"white"} />;
          },
          activeTintColor: Color.secondaryColor,
        }}
      />
    </Tab.Navigator>
  );
}

function FiltersNavigator() {
  <Stack.Navigator>
    <Stack.Screen component={Filters} />
  </Stack.Navigator>;
}

const Drawer = createDrawerNavigator();

function MainNavigator() {
  <Drawer.Navigator>
    <Drawer.Screen component={FiltersNavigator} />
  </Drawer.Navigator>;
}

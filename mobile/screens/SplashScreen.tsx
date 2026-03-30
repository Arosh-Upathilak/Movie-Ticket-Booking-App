import { Animated, Dimensions, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { Colors } from "@/constants/Colors";
import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        opacity: fadeAnim,
        alignItems: "center",
        justifyContent: "center",
        gap: windowHeight(5),
      }}
    >
      <MaterialIcons name="movie" size={windowWidth(100)} color="white" />

      <Text
        style={{
          color: Colors.textColor,
          fontSize: fontSizes.FONT32,
          fontFamily: "Poppins_600SemiBold",
        }}
      >
        Movie Ticket Booking
      </Text>
    </Animated.View>
  );
};

export default SplashScreen;
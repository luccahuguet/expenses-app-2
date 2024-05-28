import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function LoadingOverlay() {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
}

export default LoadingOverlay;

styles = StyleSheet.create({
  overlay: {
    // ...StyleSheet.absoluteFill,
    backgroundColor: GlobalStyles.colors.primary700,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 24,
  },
});

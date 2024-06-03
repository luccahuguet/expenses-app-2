import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.overlay}>
      <Text style={[styles.text, styles.title]}>Error</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
}

export default ErrorOverlay;

styles = StyleSheet.create({
  overlay: {
    // ...StyleSheet.absoluteFill,
    backgroundColor: GlobalStyles.colors.primary700,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 24,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

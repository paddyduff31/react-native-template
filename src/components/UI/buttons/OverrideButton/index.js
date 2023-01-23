import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const OverrideButton = ({ title, onPress, overrideStyles }) => {
  return (
    <TouchableOpacity style={[styles.button, overrideStyles]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default OverrideButton;

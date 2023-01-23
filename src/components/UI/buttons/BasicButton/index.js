import { Pressable, Text } from "react-native";
import styles from "./styles";

const BasicButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default BasicButton;

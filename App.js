import { StyleSheet, Text, View } from "react-native";
import BasicButton from "./src/components/UI/buttons/BasicButton";
import OverrideButton from "./src/components/UI/buttons/OverrideButton";
import AnimatedButton from "./src/components/UI/buttons/AnimatedButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Button example</Text>
      <BasicButton
        title="Basic Button"
        onPress={() => console.log("I'm a basic button")}
      />
      <OverrideButton
        title="Override Button"
        onPress={() => console.log("I'm a override button")}
        overrideStyles={{
          backgroundColor: "blue",
          width: 200,
          height: 50,
          borderRadius: 10,
        }}
      />
      <AnimatedButton
        title="Animated Button"
        onPress={() => console.log("I'm a animated button")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

import { Pressable, Text, Animated, View } from "react-native";
import { useState } from "react";
import styles from "./styles";

const AnimatedButton = ({ onPress, title }) => {
  const [animation] = useState(new Animated.Value(0));

  const handlePressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      duration: 50,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      duration: 50,
      useNativeDriver: false,
    }).start();
    onPress();
  };

  const heightStyle = {
    marginTop: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-10, 0],
    }),
    paddingBottom: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 1],
    }),
  };

  const inner = {
    borderRadius: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [12, 10],
    }),
    borderBottomWidth: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <View style={styles.button}>
        <View style={styles.outer}>
          <Animated.View style={[styles.height, heightStyle]}>
            <Animated.View style={[styles.inner, inner]}>
              <Text style={styles.white}>{title}</Text>
            </Animated.View>
          </Animated.View>
        </View>
      </View>
    </Pressable>
  );
};

export default AnimatedButton;

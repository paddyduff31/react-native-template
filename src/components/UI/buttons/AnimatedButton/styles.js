import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    height: 50,
    margin: 10,
  },
  outer: {
    backgroundColor: "grey",
    borderRadius: 10,
  },
  height: {
    backgroundColor: "rgba(246,121,75,0.5)",
    borderRadius: 10,
  },
  inner: {
    height: "100%",
    backgroundColor: "rgb(255, 127, 80)",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.5)",
  },
  white: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;

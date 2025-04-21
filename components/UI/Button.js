import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

function Button({ onPress, children }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 8,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 21 },
    shadowRadius: 2,
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: Colors.primary800,
    textAlign: "center",
    fontSize: 16,
  },
});

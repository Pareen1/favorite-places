import { Image, View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

function PlaceItem({ place, onSelect }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      onPress={onSelect.bind(this, place.id)}
    >
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 8,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  pressed: {
    opacity: 0.75,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.gray700,
  },
  address: {
    fontSize: 12,
    color: Colors.gray700,
  },
});

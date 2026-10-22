import { Text } from "expo-router/build/react-navigation";
import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  name: string;
  quantity: number;
};

const ItemInFound: React.FC<Props> = ({ name, quantity }) => {
  return (
    // {/* Right side: Action icons */}
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Text style={styles.name}>Item name: {name}</Text>
        <Text style={styles.qty}>Quantity: {quantity}</Text>
      </View>
    </View>
  );
};

export default ItemInFound;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  info: { flexShrink: 1 },
  name: { fontSize: 16, fontWeight: "600", textAlign: "left" },
  qty: { fontSize: 14, color: "#666", marginTop: 2, textAlign: "left" },
  actions: { flexDirection: "row", gap: 8 },
  iconButton: {
    padding: 4,
    alignItems: "flex-start",
  },
});

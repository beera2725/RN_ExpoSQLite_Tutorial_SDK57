import { MaterialIcons } from "@react-native-vector-icons/material-icons";
import { Text } from "expo-router/build/react-navigation";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type Props = {
  name: string;
  quantity: number;
  onEdit: () => void;
  onDelete: () => void;
};

const ItemRow: React.FC<Props> = ({ name, quantity, onEdit, onDelete }) => {
  return (
    // {/* Right side: Action icons */}
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          width: 225,
        }}
      >
        <Text style={styles.name}>Item name: {name}</Text>
        <Text style={styles.qty}>Quantity: {quantity}</Text>
      </View>
      <TouchableOpacity
        onPress={onEdit}
        accessibilityRole="button"
        accessibilityLabel={`Edit ${name}`}
        style={styles.iconButton}
      >
        <MaterialIcons name="edit" size={24} color="#007BFF" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onDelete}
        accessibilityRole="button"
        accessibilityLabel={`Delete ${name}`}
        style={styles.iconButton}
      >
        <MaterialIcons name="delete" size={24} color="#D32F2F" />
      </TouchableOpacity>
    </View>
  );
};

export default ItemRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "space-between",
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

import { Text, View, StyleSheet } from "react-native";
import{ Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
     <Text className="text-xl font-bold text-blue-500">
        Welcome to Home!
      </Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

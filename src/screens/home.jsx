import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import ConToMongoDB from "../components/contomangodb";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="orange" />
      <Text
        style={{
          fontSize: 30,
          color: "orange",
          fontWeight: "700",
          marginBottom: 20,
        }}
      >
        Welcome to Home
      </Text>
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 180, height: 160, marginBottom: 10 }}
      />
      <TouchableOpacity
        style={{
          width: "80%",
          backgroundColor: "orange",
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.replace("login");
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
          Logout
        </Text>
      </TouchableOpacity>
      <ConToMongoDB />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#7A871E",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="orange" />
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 122, height: 100, marginBottom: 10 }}
      />
      <Text
        style={{
          fontSize: 30,
          color: "orange",
          fontWeight: "700",
          marginBottom: 20,
        }}
      >
        Welcome
      </Text>

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
          navigation.navigate("home");
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "80%",
          backgroundColor: "darkorange",
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate("register");
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
          Register
        </Text>
      </TouchableOpacity>
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

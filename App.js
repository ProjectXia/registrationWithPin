import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { InputField, InputPIN } from "./src/components/inputfield";
import { KeycodeInput } from "react-native-keycode";
import PinView from "react-native-pin-view";
import { AppNav } from "./src/navigations/appnav";

export default function App() {
  return (
    <View style={styles.container}>
      <AppNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import { StyleSheet, View } from "react-native";
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

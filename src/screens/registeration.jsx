import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { InputField, InputPIN } from "../components/inputfield";
import { KeycodeInput } from "react-native-keycode";

export default function Registration() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="orange" />
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 122, height: 100, marginBottom: 10 }}
      />
      <Text style={{ fontSize: 30, color: "orange", fontWeight: "700" }}>
        Registration Form
      </Text>
      <InputField placeholder={"First Name"} />
      <InputField placeholder={"Last Name"} />
      <InputField placeholder={"Mobile Number"} />
      <InputField
        placeholder={"Email Address"}
        keyboardType={"email-address"}
      />
      <View
        style={{
          borderWidth: 1,
          width: "80%",
          marginTop: 25,
          borderColor: "#104210",
          borderRadius: 10,
          alignItems: "center",
          paddingBottom: 15,
        }}
      >
        <Text
          style={{
            color: "gray",
            position: "absolute",
            top: -20,
            left: 10,
            color: "orange",
            fontWeight: "700",
          }}
        >
          Enter 4 digit pin
        </Text>

        <KeycodeInput
          onComplete={(value) => {
            alert(value);
          }}
          numeric={true}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          width: "80%",
          marginTop: 20,
          borderColor: "#104210",
          borderRadius: 10,
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        <Text
          style={{
            color: "gray",
            position: "absolute",
            top: -18,
            left: 10,
            color: "orange",
            fontWeight: "700",
          }}
        >
          Address
        </Text>
        <InputField placeholder={"House No"} />
        <InputField placeholder={"Street No"} />
      </View>
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
      >
        <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
          Submit
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

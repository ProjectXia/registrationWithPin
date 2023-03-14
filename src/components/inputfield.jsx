import { StyleSheet, Text, View, TextInput } from "react-native";

function InputField({ placeholder, keyboardType }) {
  return (
    <View style={{ width: "80%" }}>
      <TextInput
        placeholder={placeholder}
        style={{
          borderColor: "orange",
          borderWidth: 1,
          paddingHorizontal: 20,
          paddingVertical: 5,
          fontSize: 16,
          color: "white",
          borderRadius: 5,
          marginTop: 15,
        }}
        keyboardType={keyboardType}
      />
    </View>
  );
}
function InputPIN({ placeholder }) {
  return (
    <View style={{ width: "10%", marginHorizontal: 15 }}>
      <TextInput
        placeholder={placeholder}
        style={{
          borderColor: "orange",
          borderWidth: 1,
          width: 40,
          paddingVertical: 5,
          textAlign: "center",
          fontSize: 30,
          color: "orange",
          borderRadius: 5,
          marginTop: 20,
        }}
        maxLength={1}
        keyboardType="number-pad"
      />
    </View>
  );
}
export { InputField, InputPIN };

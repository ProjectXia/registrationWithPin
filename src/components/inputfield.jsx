import { StyleSheet, Text, View, TextInput } from "react-native";

function InputField({
  placeholder,
  keyboardType,
  onChangeText,
  value,
  secureTextEntry = false,
  maxlength = 50,
}) {
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
        onChangeText={onChangeText}
        value={value}
        maxLength={maxlength}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
function InputPIN({ placeholder, onChangeText, value }) {
  return (
    <View style={{ width: "50%", marginHorizontal: 15 }}>
      <TextInput
        placeholder={placeholder}
        style={{
          borderColor: "orange",
          borderWidth: 1,
          width: "100%",
          paddingVertical: 5,
          textAlign: "center",
          alignContent: "center",
          fontSize: 30,
          color: "orange",
          borderRadius: 5,
          marginTop: 20,
        }}
        maxLength={4}
        keyboardType="number-pad"
        secureTextEntry={true}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}
export { InputField, InputPIN };

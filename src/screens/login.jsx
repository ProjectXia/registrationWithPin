import Icon from "react-native-vector-icons/Ionicons";
import React, { useEffect, useRef, useState } from "react";
import { Image, SafeAreaView, StatusBar, Text } from "react-native";
import ReactNativePinView from "react-native-pin-view";
const Login = () => {
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const [showCompletedButton, setShowCompletedButton] = useState(false);

  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 4) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);
  return (
    <>
      <StatusBar backgroundColor={"orange"} />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "orange",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 122, height: 100, marginBottom: 10 }}
        />
        <Text
          style={{
            paddingTop: 24,
            paddingBottom: 20,
            color: "rgba(255,255,255,0.7)",
            fontSize: 32,
          }}
        >
          Enter Passcode
        </Text>
        <ReactNativePinView
          inputSize={32}
          ref={pinView}
          pinLength={4}
          buttonSize={80}
          onValueChange={(value) => setEnteredPin(value)}
          buttonAreaStyle={{
            marginTop: 24,
          }}
          inputAreaStyle={{
            marginBottom: 24,
          }}
          inputViewEmptyStyle={{
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "#FFF",
          }}
          inputViewFilledStyle={{
            backgroundColor: "#FFF",
          }}
          buttonViewStyle={{
            borderWidth: 1,
            borderColor: "#FFF",
          }}
          buttonTextStyle={{
            color: "#FFF",
          }}
          onButtonPress={(key) => {
            if (key === "custom_left") {
              pinView.current.clear();
            }
            // if (key === "three") {
            //   alert("You just click to 3");
            // }
          }}
          customLeftButton={
            showRemoveButton ? (
              <Icon name={"ios-backspace"} size={50} color={"#FFF"} />
            ) : undefined
          }
        />
      </SafeAreaView>
    </>
  );
};
export default Login;

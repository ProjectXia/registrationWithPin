import axios from "axios";

import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  ActivityIndicator,
} from "react-native";

import { InputPIN } from "../components/inputfield";

const Login = ({ navigation }) => {
  const [enteredPin, setEnteredPin] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (enteredPin.length === 4) {
      console.log(enteredPin);
      setLoading(true);
      fetchDataAndVerify();
    } else {
      setLoading(false);
    }
  }, [enteredPin]);

  //////////////////////////////////////////////fetch data///////////////////////

  const fetchDataAndVerify = async () => {
    const config = {
      method: "post",
      url: "https://ap-south-1.aws.data.mongodb-api.com/app/data-ecnwv/endpoint/data/v1/action/find",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key":
          "hnUndUAilcoSZPS22zu1p5GyfOKaEs09ke3raWDym10IQWJ7PNRhcIIuoKg2ZyoZ",
      },
      data: JSON.stringify({
        collection: "user",
        database: "whyyoucooktoday",
        dataSource: "testingApi1",
        filter: {
          pin: enteredPin,
        },
      }),
    };

    try {
      const response = await axios(config);
      /////////////////////////////////////////
      console.log(response.data.documents);
      //verify the user is approved user
      const doc = response.data.documents;
      if (response.data.documents.length === 0) {
        console.log("no doument found");
        setLoading(false);
        setEnteredPin("");
        alert("please re try");
      }
      doc.forEach((element) => {
        if (element.status !== "PENDING") {
          console.log("APPROVED USER");
          navigation.replace("home", { email: element.email });
          setLoading(false);
        } else {
          console.log("PENDING FOR ADMIN APPROVAL");
          alert("PENDING FOR ADMIN APPROVAL");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  ///////////////////////////////////////////end fetch data//////////////////////

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#7A871E",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
      }}
    >
      <StatusBar backgroundColor={"orange"} />

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
      {loading === true ? (
        <ActivityIndicator animating={loading} color={"darkornage"} size={60} />
      ) : (
        <View></View>
      )}
      <InputPIN
        placeholder={"PIN"}
        onChangeText={setEnteredPin}
        value={enteredPin}
      />
    </SafeAreaView>
  );
};
export default Login;

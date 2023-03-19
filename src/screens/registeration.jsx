import axios from "axios";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { InputField, InputPIN } from "../components/inputfield";

export default function Registration() {
  ////////////////////////////////////////////////////////////////////////////////
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [streetno, setStreetno] = useState("");
  const [houseno, setHouseno] = useState("");
  //////////////////////////////////////////////fetch data ///////////////////////

  const fetchData = async () => {
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
        // filter: {
        //   status: "PENDING",
        // },
      }),
    };

    try {
      const response = await axios(config);
      setData(response.data.documents);
      setId(data.length);
      // console.log(data.length);
    } catch (error) {
      console.log(error);
    }
  };
  ///////////////////////////////////////////end fetch data//////////////////////
  // ////////////////////////////////////////// Insert Documnet////////////////////
  const insertData = async (datapostt) => {
    const apiKey =
      "hnUndUAilcoSZPS22zu1p5GyfOKaEs09ke3raWDym10IQWJ7PNRhcIIuoKg2ZyoZ";
    const config = {
      method: "post",
      url: "https://ap-south-1.aws.data.mongodb-api.com/app/data-ecnwv/endpoint/data/v1/action/insertOne",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": apiKey,
      },
      data: datapostt,
    };
    try {
      const response = await axios(config);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Example usage
  const datapost = JSON.stringify({
    collection: "user",
    database: "whyyoucooktoday",
    dataSource: "testingApi1",
    document: {
      firstname: "firstname",
      lastname: "lastname",
      mobilenumber: "mobilenumber",
      email: "projectmail81@gmail.com",
      pin: "1122",
      streetno: "streetno",
      houseno: "houseno",
      status: "PENDING",
      id: "3",
    },
  });

  /////////////////////////////////////////end Insert Documnet//////////////////
  useEffect(() => {
    fetchData();
  }, []);
  ///////////////////////////////////////////////////////////////////////////////
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
      <InputField
        placeholder={"First Name"}
        value={firstname}
        onChangeText={setFirstname}
      />
      <InputField
        placeholder={"Last Name"}
        value={lastname}
        onChangeText={setLastname}
      />
      <InputField
        placeholder={"Mobile Number"}
        maxlength={11}
        value={mobilenumber}
        onChangeText={setMobilenumber}
        keyboardType={"phone-pad"}
      />
      <InputField
        placeholder={"Email Address"}
        keyboardType={"email-address"}
        value={email}
        onChangeText={setEmail}
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
        <InputPIN placeholder={"PIN"} value={pin} onChangeText={setPin} />
        {/* <KeycodeInput
          onComplete={(value) => {
            setPin(value);
          }}
          numeric={true}
        /> */}
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
        <InputField
          placeholder={"House No"}
          value={houseno}
          onChangeText={setHouseno}
        />
        <InputField
          placeholder={"Street No"}
          value={streetno}
          onChangeText={setStreetno}
        />
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
        onPress={() => {
          console.log(`Your PIN : ${pin}`);
          console.log(`data length: ${id + 1}`);
          // insertData(datapost);
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

import axios from "axios";

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Home from "../screens/home";

const ConToMongoDB = () => {
  const [data, setData] = useState([]);
  const [DOCUMENT_ID, setDOCUMENT_ID] = useState();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [streetno, setStreetno] = useState("");
  const [houseno, setHouseno] = useState("");
  const [mystatus, setMystatus] = useState("PENDING");
  const [updateStatus, setUpdataStatus] = useState("APPROVED");

  /////////////////////////////////////////////////////////////////////////////////////////////Fetch ALL Documents////////////////////////////////////////////
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
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////Inser New Documents////////////////////////////////////////////
  const insertData = async () => {
    const config = {
      method: "post",
      url: "https://ap-south-1.aws.data.mongodb-api.com/app/data-ecnwv/endpoint/data/v1/action/find",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key":
          "hnUndUAilcoSZPS22zu1p5GyfOKaEs09ke3raWDym10IQWJ7PNRhcIIuoKg2ZyoZ",
      },
      data: {
        collection: "user",
        database: "whyyoucooktoday",
        dataSource: "testingApi1",
        documents: {
          firstname: "",
          lastname: "",
          mobilenumber: "",
          email: "",
          pin: "",
          streetno: "",
          houseno: "",
          status: "PENDING",
        },
      },
    };
    try {
      const response = await axios(config);
      setData(response.data.documents);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////Update Only Status////////////////////////////////////////////
  const updateStatusDB = async () => {
    const config = {
      method: "post",
      url: "https://ap-south-1.aws.data.mongodb-api.com/app/data-ecnwv/endpoint/data/v1/action/update",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key":
          "hnUndUAilcoSZPS22zu1p5GyfOKaEs09ke3raWDym10IQWJ7PNRhcIIuoKg2ZyoZ",
      },
      data: {
        collection: "user",
        database: "whyyoucooktoday",
        dataSource: "testingApi1",
        filter: {
          _id: DOCUMENT_ID, // replace with the actual document ID
        },
        update: {
          $set: {
            status: updateStatus,
          },
        },
      },
    };
    try {
      const response = await axios(config);
      setData(response.data.documents);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////Update Only Status////////////////////////////////////////////

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text
        style={{
          marginVertical: 10,
          fontSize: 16,
          fontWeight: "800",
          color: "white",
        }}
      >
        LIST OF USERS:
      </Text>
      {data.map((item) => (
        <View
          style={{
            flexDirection: "row",
            width: 300,
            height: 50,
            backgroundColor: "#F9F5EB",
            alignItems: "center",
            alignContent: "center",
            alignSelf: "center",
            marginVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
        >
          <View style={{ flexDirection: "column" }} key={item.firstname}>
            <Text>
              {item.firstname} {item.lastname}
            </Text>
            <Text>{item.email}</Text>
          </View>

          <TouchableOpacity
            key={item._id}
            style={{
              backgroundColor: "red",
              borderRadius: 15,
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 2,
              position: "absolute",
              right: 10,
            }}
          >
            <Text style={{ color: "white" }}>{item.status}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ConToMongoDB;

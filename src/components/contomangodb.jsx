import axios from "axios";

import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Linking,
} from "react-native";

const ConToMongoDB = () => {
  ///////////////////////////////////////////////////////////////////////
  const [data, setData] = useState([]);
  const [DOCUMENT_ID, setDOCUMENT_ID] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  //////////////////////////////////////////////////////////////////////////
  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  };
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
  /////////////////////////////////////////////////////////////////////////////////////////////End fetch data////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////Update Only Status////////////////////////////////////////////
  const updateStatusDB = async () => {
    const config = {
      method: "post",
      url: "https://ap-south-1.aws.data.mongodb-api.com/app/data-ecnwv/endpoint/data/v1/action/updateOne",
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
          id: DOCUMENT_ID, // replace with the actual document ID
        },
        update: {
          $set: {
            status: "APPROVED",
          },
        },
      },
    };
    try {
      const response = await axios(config);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////Update Only Status////////////////////////////////////////////
  useEffect(() => {
    fetchData();
  }, []);
  ///////////////////////////////////////////////////////////////////////////////////////////////
  const renderMessage = () => {
    if (data.length === 0) {
      return <Text>No items to display</Text>;
    }
    return null;
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////Send Email////////////////////////////////////////////////
  const sendEmail = (toEmail) => {
    const recipientEmail = toEmail;
    const subject = "Approval Request";
    const body = "THANKS FOR REGISTRATION";

    Linking.openURL(`mailto:${recipientEmail}?subject=${subject}&body=${body}`);
  };
  //////////////////////////////////////End Send Emai////////////////////////////////////////////
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
      {renderMessage()}
      {/* //////////////////////////////////////////FlatList//////////////////////////////////////////////////////////// */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              width: 300,
              height: 75,
              backgroundColor: "#F9F5EB",
              alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
              marginVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text>
                Name# {item.firstname} {item.lastname}
              </Text>
              <Text>{item.email}</Text>
              <Text>Phone# {item.mobilenumber}</Text>
              <Text>
                Address# {item.streetno} | {item.houseno}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "red",
                borderRadius: 15,
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 2,
                position: "absolute",
                right: 10,
              }}
              onPress={() => {
                setDOCUMENT_ID(item.id);
                updateStatusDB();
                fetchData();
                sendEmail(item.email);
              }}
            >
              <Text style={{ color: "white" }}>{item.status}</Text>
            </TouchableOpacity>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
      {/* /////////////////////////////////////////FlatList End///////////////////////////////////////////////////////// */}
    </View>
  );
};

export default ConToMongoDB;

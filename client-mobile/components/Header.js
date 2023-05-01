import React from "react";
import { StyleSheet, View, Linking, Image, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.headerstyle}>
        <View>
          <Image
            source={{
              uri: "https://img.icons8.com/?size=512&id=6ozUksPEPg6G&format=png",
            }}
            style={{
              tintColor: "white",
              width: 25,
              height: 25,
              marginLeft: 20,
            }}
          />
        </View>
        <View>
          <Image
            source={{
              uri: "https://i.ibb.co/HYc19Vv/unnamed-removebg-preview-1.png",
            }}
            style={{
              width: 160,
              height: 27,
              alignSelf: "center",
              resizeMode: "stretch"
            }}
          />
        </View>
        <View>
          <Image
            source={{
              uri: "https://img.icons8.com/?size=512&id=49347&format=png",
            }}
            style={{
              tintColor: "white",
              width: 25,
              height: 25,
              marginRight: 20,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404040",
    marginTop: 50,
  },
  headerstyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

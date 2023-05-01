import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../query";

export default function Card() {


  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity style={styles.marginCard}>
        <Text style={styles.textCard}>AHMAD DAHLAN</Text>
        <Image
          source={{
            uri: "https://mytanamera.logix1.com/mytanamera/api/view_storedetail_photos/3690444000001850913/1?t=1644304524",
          }}
          style={styles.cardStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textCard}>KEMANG</Text>
        <Image
          source={{
            uri: "https://mytanamera.logix1.com/mytanamera/api/view_storedetail_photos/3690444000004360259/1?t=1628495223",
          }}
          style={styles.cardStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404040",
  },
  cardStyle: {
    width: 150,
    height: 150,
  },
  marginCard: {
    marginHorizontal: 15,
  },
  textCard: {
    position: "absolute",
    left: 10,
    bottom: 10,
    zIndex: 50,
    fontSize: 20,
    color: "white",
    fontWeight: "700",
    letterSpacing: 2,
    fontFamily: "AbolitionTest-Regular",
  },
});

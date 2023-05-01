import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../query";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

export default function Home() {
  const { loading, data } = useQuery(GET_PRODUCTS);
  const [fontsLoaded] = useFonts({
    "AbolitionTest-Regular": require("../assets/fonts/AbolitionTest-Regular.otf"),
    "AbolitionTest-Soft": require("../assets/fonts/AbolitionTest-Soft.otf"),
  });

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#808080",
        }}
      >
        <Text
          style={{
            color: "red",
            fontSize: 30,
            letterSpacing: 1,
          }}
        >
          loading...
        </Text>
      </View>
    );
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.contentHead}>
        <Text style={styles.textStyle}>HELLO</Text>
        <Text style={styles.textStyleName}>Fitra</Text>
        <Text style={styles.textStyle}>WELCOME BACK TO MYTANAMERA</Text>
      </View>
      <View style={styles.mainContent}>
        <Carousel products={data.products} />
      </View>
      <View style={styles.bottomContent}>
        <Text
          style={{
            marginLeft: 55,
            marginBottom: 18,
            letterSpacing: 1,
            fontWeight: "600",
            fontSize: 14,
            color: "white",
          }}
        >
          NEARBY OUTLETS
        </Text>
        <Card />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404040",
  },
  mainContent: {
    marginLeft: 35,
    marginVertical: 20,
  },
  contentHead: {
    marginTop: 50,
    alignSelf: "center",
    alignItems: "center",
    gap: 20,
  },
  bottomContent: {
    marginLeft: -10,
  },
  textStyle: {
    top: -10,
    color: "white",
    letterSpacing: 2,
    fontWeight: "bold",
    marginBottom: -5,
    fontSize: 14,
  },
  textStyleName: {
    top: -20,
    color: "white",
    fontSize: 65,
    letterSpacing: 5,
    fontFamily: "AbolitionTest-Regular",
  },
});

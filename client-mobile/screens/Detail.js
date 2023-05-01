import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { GET_DETAIL } from "../query";
import { useQuery } from "@apollo/client";

export default function Detail({ route }) {
  const { detailId } = route.params;

  const { loading, data } = useQuery(GET_DETAIL, {
    variables: {
      detailProductId: detailId,
    },
  });

  const [fontsLoaded] = useFonts({
    "AbolitionTest-Regular": require("../assets/fonts/AbolitionTest-Regular.otf"),
    "AbolitionTest-Lines": require("../assets/fonts/AbolitionTest-Lines.otf"),
  });

  if (loading) {
    return <Text>loading...</Text>;
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{ marginVertical: 100 }}>
        <ScrollView horizontal={true} style={styles.carouselStyle}>
          {data.detailProduct.Images.map((el) => {
            return (
              <Image
                key={el.id}
                source={{
                  uri: el.imgUrl,
                }}
                style={styles.carouselStyle}
              />
            );
          })}
        </ScrollView>

        <View style={styles.description}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontFamily: "AbolitionTest-Regular",
              marginTop: 5,
              letterSpacing: 1,
              fontSize: 25,
            }}
          >
            {data.detailProduct.name}
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "AbolitionTest-Regular",
              marginTop: 5,
              letterSpacing: 1,
              fontSize: 25,
            }}
          >
            {data.detailProduct.price}
          </Text>
        </View>
        <View
          style={{
            marginLeft: 40,
            display: "flex",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <View>
            <Text style={{ color: "white" }}>Process</Text>
          </View>
          <View>
            <Text style={{ color: "red", fontWeight: "bold" }}>:</Text>
          </View>
          <View>
            <Text style={{ color: "white" }}>{data.detailProduct.Category.name}</Text>
          </View>
        </View>
        <View style={styles.testingDescription}>
          <View>
            <Text
              style={{
                color: "red",
                marginBottom: 5,
                fontFamily: "AbolitionTest-Regular",
                fontSize: 25,
                letterSpacing: 1,
              }}
            >
              TASTING NOTED
            </Text>
          </View>
          <View>
            <Text style={{ color: "white", letterSpacing: -1 }}>
              APPLE JUICE, TAMARIND, ALMOND CHOCO BALL, SILKY BODY AND SMOOTH
              ACIDITY
            </Text>
          </View>
        </View>
        <View style={styles.detailDescription}>
          <Text
            style={{
              fontSize: 25,
              color: "white",
              fontWeight: "800",
              fontFamily: "AbolitionTest-Regular",
              letterSpacing: 1,
            }}
          >
            Description
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "400",
              marginTop: 5,
              textAlign: "justify",
            }}
          >
            {data.detailProduct.description}
          </Text>
        </View>
        <View style={{ alignSelf: "flex-end", right: 40 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "AbolitionTest-Lines",
              letterSpacing: 2,
              color: "white",
            }}
          >
            Posted by: {data.detailProduct.Author.username}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404040",
    justifyContent: "center",
  },
  mainContent: {
    marginLeft: 35,
  },
  carouselStyle: {
    width: 350,
    height: 350,
    alignSelf: "center",
  },
  description: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 40,
    justifyContent: "space-between",
  },
  testingDescription: {
    marginHorizontal: 40,
    marginVertical: 5,
  },
  detailDescription: {
    marginHorizontal: 40,
    marginVertical: 5,
  },
  coffeeType: {
    width: 110,
    height: 100,
    alignSelf: "center",
  },
});

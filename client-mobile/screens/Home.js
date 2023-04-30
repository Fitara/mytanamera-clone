import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";



export default function Home() {

  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({
    "AbolitionTest-Regular": require("../assets/fonts/AbolitionTest-Regular.otf"),
    "AbolitionTest-Soft": require("../assets/fonts/AbolitionTest-Soft.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.contentText}>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "600",
              letterSpacing: 2,
            }}
          >
            HELLO
          </Text>

          <Text
            style={{
              top: -5,
              color: "white",
              fontSize: 65,
              fontWeight: "600",
              fontFamily: "AbolitionTest-Regular",
              letterSpacing: 4,
            }}
          >
            FITRA
          </Text>
          <Text
            style={{
              top: 10,
              color: "white",
              fontSize: 20,
              fontWeight: 400,
              fontFamily: "AbolitionTest-Soft",
              letterSpacing: 2,
            }}
          >
            Welcome Back to MyTanamera
          </Text>
        </View>
      </View>
      <View style={{ flex: 4, top: 30 }}>
        <View>
          <ScrollView
            horizontal={true}
            style={{ height: 20, marginLeft: 30, marginRight: 30 }}
          >
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <View style={{ marginHorizontal: 10 }}>
                <Image
                  source={{
                    uri: "https://tanameracoffee.com/wp-content/uploads/2021/03/TC_KintamaniWashedFilter250g_210226-copy-3.jpg",
                  }}
                  style={{
                    width: 300,
                    height: 335,
                  }}
                />
                <Text
                  style={{
                    position: "absolute",
                    fontFamily: "AbolitionTest-Regular",
                    fontSize: 18,
                    letterSpacing: 2,
                    color: "black",
                    top: 20,
                    left: 20,
                  }}
                >
                  Bali Kintamani
                </Text>
                <Text
                  style={{
                    position: "absolute",
                    fontFamily: "AbolitionTest-Regular",
                    fontSize: 14,
                    letterSpacing: 2,
                    color: "black",
                    top: 45,
                    left: 20,
                  }}
                >
                  FROM IDR 150 K
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ marginHorizontal: 10 }}>
              <Image
                source={{
                  uri: "https://tanameracoffee.com/wp-content/uploads/2021/03/TC_AcehGayoNaturalFilter250g_210226-copy-1.jpg",
                }}
                style={{
                  width: 300,
                  height: 335,
                }}
              />
              <Text
                style={{
                  position: "absolute",
                  fontFamily: "AbolitionTest-Regular",
                  fontSize: 18,
                  letterSpacing: 2,
                  color: "black",
                  top: 20,
                  left: 20,
                }}
              >
                Aceh Gayo Natural
              </Text>
              <Text
                style={{
                  position: "absolute",
                  fontFamily: "AbolitionTest-Regular",
                  fontSize: 14,
                  letterSpacing: 2,
                  color: "black",
                  top: 45,
                  left: 20,
                }}
              >
                FROM IDR 200 K
              </Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Image
                source={{
                  uri: "https://tanameracoffee.com/wp-content/uploads/2021/03/TC_KintamaniWashedFilter250g_210226-copy-3.jpg",
                }}
                style={{
                  width: 300,
                  height: 335,
                }}
              />
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Image
                source={{
                  uri: "https://tanameracoffee.com/wp-content/uploads/2021/03/The_Archipelago_Pack_100gr.jpg",
                }}
                style={{
                  width: 300,
                  height: 335,
                }}
              />
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Image
                source={{
                  uri: "https://tanameracoffee.com/wp-content/uploads/2021/03/TC_AcehGayoNaturalFilter250g_210226-copy-1.jpg",
                }}
                style={{
                  width: 300,
                  height: 335,
                }}
              />
            </View>
          </ScrollView>
          <View>
            <Card />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#404040",
  },
  contentText: {
    top: -10,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "AbolitionTest-Regular",
  },
  contentContainer: {
    top: 20,
    flex: 5,
  },
});

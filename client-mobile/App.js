import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import MyTabs from "./navigations/BottomTabs";
import Header from "./components/Header";
import Home from "./screens/Home";
import { Ionicons } from "@expo/vector-icons";
import MyTabs from "./navigations/MyTabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./components/Profile";
import Test from "./screens/Test";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header />
      <View style={{ flex: 5, top: -20 }}>
        <Home />
      </View>
      <View style={{ flex: 1, bottom: 0 }}></View>
      <View
        style={{ bottom: 20, display: "flex", flexDirection: "row", gap: 50 }}
      >
        <Ionicons name="home" size={40} />
        <Ionicons name="search" size={40} />
        <Ionicons name="search" size={40} />
        <Ionicons name="search" size={40} />
      </View> */}

      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="test" component={Test} /> */}
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#404040",
  },
});

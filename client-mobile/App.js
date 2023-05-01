import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import { Ionicons } from "@expo/vector-icons";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";
import Profile from "./screens/Profile";
import Outlets from "./screens/Outlets";
import Detail from "./screens/Detail";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainPage() {
  const navOption = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      size = 25;
      color = focused ? "#404040" : "#303030";

      let iconName;

      if (route.name === "Home") {
        iconName = focused ? "home" : "home-outline";
      } else if (route.name === "Profile") {
        iconName = focused ? "person-circle" : "person-circle-outline";
      } else if (route.name === "Outlets") {
        iconName = focused ? "cafe" : "cafe-outline";
      }
      return (
        <View>
          <Ionicons
            name={iconName}
            size={size}
            color={color}
            style={{ position: "relative", top: 5, alignSelf: "center" }}
          />
        </View>
      );
    },
    tabBarActiveTintColor: "#404040",
    tabBarInactiveTintColor: "#303030",
    tabBarStyle: styles.tabBarStyle,
    tabBarLabelStyle: {
      position: "absolute",
      bottom: -15,
      fontSize: 10,
      fontWeight: "bold",
    },
    headerShown: false,
  });

  return (
    <Tab.Navigator screenOptions={navOption}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Outlets" component={Outlets} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="mainPage"
              component={MainPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="detail"
              component={Detail}
              options={{
                headerTransparent: true,
                title: "DETAIL",
                headerTitleStyle: {
                  color: "white",
                  fontFamily: "AbolitionTest-Regular",
                  fontSize: 25,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: "#darkgray",
    marginBottom: 0,
    flex: 1,
  },
  tabBarStyle: {
    height: 60,
    backgroundColor: "#909090",
  },
});

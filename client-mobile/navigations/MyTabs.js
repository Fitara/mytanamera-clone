import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../components/Profile";
import Outlets from "../screens/Outlets";
import Home from "../screens/Home";
import { StyleSheet, View } from "react-native";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    bottom: 0,
    height: 15,
    marginBottom: 15,
    marginHorizontal: 10,
    elevation: 10,
    shadowColor: "#000",
    backgroundColor: "red",
  }
})
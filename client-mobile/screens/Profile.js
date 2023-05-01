import { useFonts } from "expo-font";
import { Text, View } from "react-native";

export default function Profile() {
  const [fontsLoaded] = useFonts({
    "AbolitionTest-Regular": require("../assets/fonts/AbolitionTest-Regular.otf"),
    "AbolitionTest-Lines": require("../assets/fonts/AbolitionTest-Lines.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#404040",
      }}
    >
      <Text
        style={{
          color: "red",
          fontSize: 30,
          fontFamily: "AbolitionTest-Regular",
          letterSpacing: 2,
        }}
      >
        Profile
      </Text>
    </View>
  );
}

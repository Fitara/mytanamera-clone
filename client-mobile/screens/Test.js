import { StyleSheet, Text, View } from "react-native";

export default function Test() {
    return (
        <View style={styles.container}>
            <Text>
                wassap
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#404040",
  },
});

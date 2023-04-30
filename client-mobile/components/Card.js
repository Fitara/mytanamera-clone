import { color } from "@rneui/base";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Card() {
  return (
    <View>
      <Text
        style={{
          top: 5,
          color: "white",
          marginLeft: 40,
          fontWeight: "600",
          letterSpacing: 1,
        }}
      >
        NEARBY OUTLETS
      </Text>
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri: "https://mytanamera.logix1.com/mytanamera/api/view_storedetail_photos/3690444000001850913/1?t=1644304524",
            }}
            style={styles.boxImage}
          />
          <Text
            style={{
              position: "absolute",
              fontFamily: "AbolitionTest-Regular",
              fontSize: 18,
              letterSpacing: 2,
              color: "white",
              bottom: 10,
              left: 10,
            }}
          >
            AHMAD DAHLAN
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: "https://mytanamera.logix1.com/mytanamera/api/view_storedetail_photos/3690444000004360259/1?t=1628495223",
            }}
            style={styles.boxImage}
          />
          <Text
            style={{
              position: "absolute",
              fontFamily: "AbolitionTest-Regular",
              fontSize: 18,
              letterSpacing: 2,
              color: "white",
              bottom: 10,
              left: 10,
            }}
          >
            KEMANG
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 20,
    gap: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  boxImage: {
    alignItems: "center",
    justifyContent: "center",
    width: 155,
    height: 155,
  },
});

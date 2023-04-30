import React from "react";
import {
  StyleSheet,
  View,
  Linking,
  Image
} from "react-native";
import { Header as HeaderRNE, HeaderProps, Icon } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Header = (props) => {
  const docsNavigate = () => {
    Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`);
  };

  return (
    <SafeAreaProvider>
      <HeaderRNE
        containerStyle={{
          top: -8,
          backgroundColor: "transparent",
          borderBottomWidth: 0
        }}
        leftComponent={
          <View>
            <Image
              source={{
                uri: "https://img.icons8.com/?size=512&id=6ozUksPEPg6G&format=png",
              }}
              style={{ tintColor: "white", width: 25, height: 25, marginLeft: 20 }}
            />
          </View>
        }
        rightComponent={
          <View style={styles.headerRight}>
            <Image
              source={{
                uri: "https://img.icons8.com/?size=512&id=49347&format=png",
              }}
              style={{ tintColor: "white", width: 25, height: 25, marginRight: 20 }}
            />
          </View>
        }
        centerComponent={{ text: "MYTANAMERA", style: styles.heading }}
      />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "black",
  },
  heading: {
    // top: -8,
    color: "#df2000",
    fontSize: 29,
    fontWeight: "900",
    letterSpacing: -2.5,
    lineHeight: 30,
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Header;

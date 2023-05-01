import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CarouselCard({ products }) {
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView horizontal={true} style={styles.boxCarousel}>
        {products?.map((el) => {
          return (
            <TouchableOpacity
              key={el.id}
              onPress={() => navigation.navigate("detail", { detailId: el.id})}
            >
              <Image
                source={{
                  uri: el.mainImg,
                }}
                style={styles.carouselStyle}
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
                {el.name}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  fontFamily: "AbolitionTest-Regular",
                  fontSize: 14,
                  letterSpacing: 2,
                  color: "red",
                  top: 45,
                  left: 20,
                }}
              >
               Rp. {el.price} K
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404040",
  },
  boxCarousel: {
    gap: 10,
  },
  carouselStyle: {
    width: 330,
    height: 335,
    marginHorizontal: 10,
  },
});

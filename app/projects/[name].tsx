import { useLocalSearchParams } from "expo-router";

import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default function Page() {
  const { id, title } = useLocalSearchParams();

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Image source={{uri:`../assets/images/${title}.imageset/${id}.png`}} style={styles.image} />
    </View>
  );
}

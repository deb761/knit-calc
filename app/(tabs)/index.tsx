import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";

const DATA = [
  {
    id: 'sweater',
    title: "Sweater",
    thumb: require("@/assets/images/Sweater-thumb/sweater-thb.png"),
  },
  {
    id: 'gloves',
    title: "Gloves",
    thumb: require("@/assets/images/Gloves-thumb.imageset/gloves-thb.png"),
  },
  {
    id: "mittens",
    title: "Mittens",
    thumb: require("@/assets/images/Mittens-thumb.imageset/mittens-thb.png"),
  },
  {
    id: 'socks',
    title: "Socks",
    thumb: require("@/assets/images/Socks-thumb.imageset/socks-thb.png"),
  },
  {
    id: 'tam',
    title: "Tam/Beret",
    thumb: require("@/assets/images/Tam-thumb.imageset/tam thb.png"),
  },
  {
    id: 'scarf',
    title: "Scarf",
    thumb: require("@/assets/images/Scarf-thumb/scarf-thb.png"),
  },
  {
    id: 'vest',
    title: "Vest",
    thumb: require("@/assets/images/Vest-thumb.imageset/vest thb.png"),
  },
  {
    id: 'blanket',
    title: "Blanket",
    thumb: require("@/assets/images/Blanket-thumb.imageset/blanket-thb.png"),
  },
  {
    id: 'toque',
    title: "Toque",
    thumb: require("@/assets/images/Toque-thumb.imageset/toque thb.png"),
  },
];

const fallBack = require("@/assets/images/AppIcon-free.appiconset/Icon-41.png")
type ItemProps = { title: string; thumb?: NodeRequire };

const Item = ({ title, thumb }: ItemProps) => {
  return (
    <View style={styles.item}>
      <Image source={thumb ?? fallBack} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={({ item }) => (
          <Item title={item.title} thumb={item.thumb} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "parchment",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;

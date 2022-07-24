import { Button, Divider, Text, View } from "native-base";
import React from "react";

export const DetailsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Divider h={3} className="bg-transparent" />
      <Button onPress={() => navigation.navigate("Home")}>Go to Home</Button>
    </View>
  );
};

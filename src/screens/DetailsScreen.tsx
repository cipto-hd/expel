import { Button, Divider, Text, View } from "native-base";
import React from "react";
import { useTopTabContext } from "../providers";

export const DetailsScreen = ({ navigation }: { navigation: any }) => {
  const { setTopTabValues } = useTopTabContext();

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      className="bg-gray-200"
    >
      <Text>Details Screen</Text>
      <Divider h={3} className="bg-transparent" />
      <Button
        onPress={() => {
          setTopTabValues({ index: 0 }); // set index of HomeScreen for TopTab Navigation
          navigation.navigate("Home");
        }}
      >
        Go to Home
      </Button>
    </View>
  );
};

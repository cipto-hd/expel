import { Link } from "@react-navigation/native";
import { Box, Button, Divider, Text, View } from "native-base";
import React from "react";
import { useTopTabContext } from "../providers";

export const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { setTopTabValues } = useTopTabContext();
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      className="bg-gray-200"
    >
      <Text>Home Screen</Text>

      <Divider h={3} className="bg-transparent" />

      <Button
        onPress={() => {
          setTopTabValues({ index: 1 }); //set index of DetailsScreen for TopTab Navigation
          navigation.navigate("Details");
        }}
      >
        Go to Details
      </Button>

      <Divider h={3} className="bg-transparent" />

      <Link
        to={{ screen: "Details" }}
        onPress={() => setTopTabValues({ index: 1 })}
      >
        <Box className="px-2 py-1 text-white rounded-lg shadow-lg cursor-pointer bg-cyan-500">
          Link to path '/details'
        </Box>
      </Link>
    </View>
  );
};

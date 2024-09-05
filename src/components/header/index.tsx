import { View, Text } from "react-native";
import { Pressable } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Header() {
  return (
    <View className=" w-full flex-row items-center justify-between">
      <Pressable className="w-10 h-10 bg-white rounded-full justify-center items-center flex">
        <Ionicons name="menu" size={20} color="black" />
      </Pressable>

      <View className="items-center flex-col justify-center">
        <Text className="text-sm font-normal">Localização</Text>

        <View className="flex-row items-center gap-2">
          <Feather name="map-pin" size={14} color="FF0000" />
          <Text className="text-lg font-bold">São Paulo, SP</Text>
        </View>
      </View>
      <Pressable className="w-10 h-10 bg-white rounded-full justify-center items-center flex">
        <Feather name="bell" size={20} color="black" />
      </Pressable>
    </View>
  );
}

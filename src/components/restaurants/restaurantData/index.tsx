import { Pressable, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IRestaurant } from "..";

export default function RestaurantData({
  restaurant,
  horizontal,
}: {
  restaurant: IRestaurant;
  horizontal?: boolean;
}) {
  return (
    <Pressable
      className={`flex gap-2 items-center ${
        horizontal ? "flex-row mt-1" : "flex-col"
      }`}
    >
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />
      <View className={`${horizontal ? "flex-col" : "flex-row"} flex`}>
        <Text className="text-base font-medium text-zinc-800">
          {restaurant.name}
        </Text>
        {horizontal ? (
          <View className="flex flex-row gap-1 items-center">
            <Ionicons name="star" size={20} color="#ca8a04" />
            <Text className="text-sm font-semibold text-zinc-900">5.0</Text>
          </View>
        ) : null}
      </View>
    </Pressable>
  );
}

import { Pressable, Image, Text, View, TextComponent } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Food } from "..";

export default function CardHorizontalFood({ food }: { food: Food }) {
  return (
    <Pressable className="flex flex-col rounded-xl ">
      <Image
        source={{ uri: food.image }}
        className="w-44 h-36 rounded-xl"
      ></Image>
      <View className="flex flex-row bg-neutral-900/80 w-fit gap-1 rounded-full absolute top-2 right-2 px-2 pr-3 py-1 items-center justify-center">
        <Ionicons name="star" size={14} color="#ca8a04" />
        <Text className="text-white text-sm font-medium">{food.rating}</Text>
      </View>
      <Text className="text-base text-green-700 font-semibold">
        R$ {food.price}
      </Text>
      <Text className="text-base font-medium mt-1">{food.name}</Text>
      <Text className="text-sm font-medium text-neutral-600">
        {food.time} - R${food.delivery}
      </Text>
    </Pressable>
  );
}

import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import RestaurantData from "./restaurantData";

export interface IRestaurant {
  id: string;
  name: string;
  image: string;
}

export default function Restaurants({ horizontal }: { horizontal: boolean }) {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  useEffect(() => {
    async function fetchTrending() {
      const response = await fetch("http://192.168.100.39:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    }
    fetchTrending();
  }, []);

  return (
    <View>
      {horizontal ? (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => <RestaurantData restaurant={item} />}
          horizontal={true}
          contentContainerStyle={{
            gap: 12,
            paddingHorizontal: 18,
          }}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View className="flex-1 w-full px-6 mb-8">
          {restaurants.map((restaurant) => (
            <RestaurantData
              key={restaurant.id}
              restaurant={restaurant}
              horizontal={true}
            />
          ))}
        </View>
      )}
    </View>
  );
}

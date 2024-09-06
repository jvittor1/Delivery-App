import { View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import CardHorizontalFood from "./food";

export interface Food {
  id: string;
  name: string;
  price: number;
  image: string;
  time: string;
  delivery: number;
  rating: number;
  restaurant_id: string;
}

export default function Trending() {
  const [trending, setTrending] = useState<Food[]>([]);

  useEffect(() => {
    async function fetchTrending() {
      const response = await fetch("http://192.168.100.39:3000/foods");
      const data = await response.json();
      setTrending(data);
    }
    fetchTrending();
  }, []);

  return (
    <FlatList
      data={trending}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 12, paddingHorizontal: 18 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}

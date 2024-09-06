import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import Section from "../section";

export default function Input() {
  return (
    <View className="w-full bg-transparent flex-row border border-slate-500 h-14 rounded-full items-center gap-2 px-4 pb-2">
      <Feather name="search" size={24} color="64748b" />
      <TextInput
        placeholder="Procurar comida..."
        className="w-full h-full bg-transparent flex-1 text-lg"
      />
    </View>
  );
}

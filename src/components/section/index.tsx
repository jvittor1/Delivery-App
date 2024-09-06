import { View, Text, Pressable } from "react-native";

interface SectionProps {
  name: string;
  size: "text-lg" | "text-xl" | "text-2xl";
  label: string;
  action: () => void;
}

export default function Section({ name, size, label, action }: SectionProps) {
  return (
    <View className="w-full flex-row items-center justify-between px-6 mt-4">
      <Text className={`${size} font-semibold my-2 self-start`}>{name}</Text>
      <Pressable onPress={action}>
        <Text className="text-sm text-zinc-800">{label}</Text>
      </Pressable>
    </View>
  );
}

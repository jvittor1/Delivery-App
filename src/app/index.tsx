import { Text, View, ScrollView } from "react-native";
import Header from "../components/header";
import Constants from "expo-constants";
import { Banner } from "../components/banner";
import Input from "../components/input";
import Section from "../components/section";
import Trending from "../components/trending";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      className="bg-slate-200"
    >
      <View
        className="w-full px-4 flex items-center"
        style={{ marginTop: statusBarHeight + 8 }}
      >
        <Header />
        <Banner />
        <Input />
      </View>

      <Section
        name="Comidas em Alta"
        label="Veja mais"
        size="text-lg"
        action={() => console.log("foi")}
      />

      <Trending />
    </ScrollView>
  );
}

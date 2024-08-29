import Login from "@/components/Login";
import { View } from "react-native";
import { auth } from './../config/FirebaseConfig'
import { Redirect } from "expo-router";
export default function Index() {
  const user = auth.currentUser;
  return (
    <View className="min-h-full max-w-full ">
      {
        user ? <Redirect href={"/mytrip"} /> : <Login />
      }
    </View>
  );
}

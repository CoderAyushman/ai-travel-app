import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { auth } from "./../../../config/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSignIn = () => {
    if (!email && !password) {
      ToastAndroid.show("please enter email and password", ToastAndroid.LONG);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        router.replace("/mytrip");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        if (errorCode == "auth/invalid-email") {
          ToastAndroid.show("Invalid Email", ToastAndroid.LONG);
        } else if (errorCode == "auth/invalid-credential") {
          ToastAndroid.show("Invalid Credential", ToastAndroid.LONG);
        }
      });
  };
  return (
    <View className="h-full  pt-10 px-5 bg-white">
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
      >
        <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "outfit-bold" }} className=" text-2xl my-5 ">
        Let's Sign You In
      </Text>
      <Text
        style={{ fontFamily: "outfit-bold" }}
        className="text-2xl mb-5 text-gray-400"
      >
        Welcome Back
      </Text>
      <Text
        style={{ fontFamily: "outfit-bold" }}
        className="text-2xl mb-5 text-gray-400"
      >
        You've been missed!
      </Text>
      <View className="mt-5">
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput
          style={{ fontFamily: "outfit" }}
          type="email"
          placeholder="Enter Email"
          onChangeText={(value) => setEmail(value)}
          className="border border-gray-400 p-3 rounded-xl"
        />
      </View>
      <View className="mt-5">
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput
          style={{ fontFamily: "outfit" }}
          secureTextEntry={true}
          placeholder="Enter Password"
          onChangeText={(value) => setPassword(value)}
          className="border border-gray-400 p-3 rounded-xl "
        />
      </View>
      <TouchableOpacity
        onPress={onSignIn}
        className="bg-black rounded-xl p-2 mt-10"
      >
        <Text
          style={{ fontFamily: "outfit" }}
          className="text-white text-center text-base"
        >
          Sign in
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="border rounded-xl p-2 mt-5 "
        onPress={() => {
          router.push("auth/sign-up");
        }}
      >
        <Text
          style={{ fontFamily: "outfit" }}
          className="text-black text-center text-base"
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

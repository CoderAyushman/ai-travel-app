import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/FirebaseConfig";
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState < any > (null);
  const [fullName, setFullName] = useState < any > (null);

  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onCreateAccount = () => {
    console.log("clicked");
    if (!email && !fullName && !password) {
      ToastAndroid.show("please enter all details", ToastAndroid.LONG);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
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
        }
        if (errorCode == "auth/email-already-in-use") {
          ToastAndroid.show("email-already-in-use ", ToastAndroid.LONG);
        }
        if (errorCode == "auth/weak-password") {
          ToastAndroid.show(
            "Password should be at least 6 characters",
            ToastAndroid.LONG
          );
        }
      });
  };
  return (
    <View className=" h-full  pt-10 px-5 bg-white">
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
      >
        <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "outfit-bold" }} className=" text-2xl my-5">
        Create New Account
      </Text>

      <View className="mt-5">
        <Text style={{ fontFamily: "outfit" }}>Full Name</Text>
        <TextInput
          style={{ fontFamily: "outfit" }}
          type="text"
          placeholder="Enter Your Full Name"
          className=" border border-gray-400 p-3 rounded-xl"
          onChangeText={(value) => setFullName(value)}
        />
      </View>
      <View className="mt-5">
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput
          style={{ fontFamily: "outfit" }}
          type="email"
          placeholder="Enter Email"
          className=" border border-gray-400 p-3 rounded-xl"
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      <View className="mt-5">
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput
          style={{ fontFamily: "outfit" }}
          secureTextEntry={true}
          placeholder="Enter Password"
          className=" border border-gray-400 p-3 rounded-xl "
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <TouchableOpacity
        onPress={onCreateAccount}
        className="bg-black rounded-xl p-2 mt-10"
      >
        <Text
          style={{ fontFamily: "outfit" }}
          className="text-white text-center text-base"
        >
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="border rounded-xl p-2 mt-5 "
        onPress={() => {
          router.push("auth/sign-in");
        }}
      >
        <Text
          style={{ fontFamily: "outfit" }}
          className="text-black text-center text-base"
        >
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
}

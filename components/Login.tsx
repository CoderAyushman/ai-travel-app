import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";


export default function Login() {
    const router = useRouter()
    return (
        <View>
            <Image
                className="w-full h-[470px]"
                source={require("@/assets/images/starter.png")}
            />
            <View className="bg-white mt-[-20px] text-center rounded-l-3xl rounded-r-3xl h-full items-center font-semibold p-5">
                <Text style={{ fontFamily: "outfit-bold" }} className="text-2xl my-3">
                    AI Travel Planner
                </Text>
                <Text style={{ fontFamily: 'outfit' }} className="text-center text-base text-gray-500 ">
                    Discover your next adventure effortlessly. Personalized itineraries at
                    your fingertips. Travel smarter with AI-driven insights.
                </Text>
                <TouchableOpacity onPress={() => { router.push('/auth/sign-in') }} className="bg-black py-3 px-20 mt-[20%] rounded-full">
                    <Text style={{ fontFamily: 'outfit' }} className="text-white ">Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({ focused, title, icon }: any) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full min-w-[112px] flex-1 min-h-16 mt-4 justify-center items-center overflow-hidden rounded-full"
            >
                <Image source={icon} tintColor="#151312" className="size-5" />
                <Text className="text-secondary text-base font-semibold ml-3">{title}</Text>
            </ImageBackground>
        );
    }

    return (
        <View className="size-4 justify-center items-center rounded-full mt-2">
            <Image source={icon} tintColor="#A8B5DB" className="size-5" />
        </View>
    );
};

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    backgroundColor: "#0F0D23",
                    borderRadius: 50,
                    borderColor: "#0F0D23",
                    marginHorizontal: 20,
                    marginBottom: 24,
                    height: 52,
                    position: "absolute",
                    overflow: "hidden",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} title="Home" icon={icons.home} />,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} title="Search" icon={icons.search} />,
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: "Saved",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} title="Saved" icon={icons.save} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} title="Profile" icon={icons.person} />,
                }}
            />
        </Tabs>
    );
};

export default _layout;

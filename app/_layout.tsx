import { Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import "./globals.css";

export default function RootLayout() {
    useEffect(() => {
        StatusBar.setHidden(true);
    }, []);
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="movies/[id]"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
        </>
    );
}

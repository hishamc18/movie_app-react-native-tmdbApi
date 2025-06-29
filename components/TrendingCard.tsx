import { images } from "@/constants/images";
import MaskedView from "@react-native-masked-view/masked-view";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TrendingCard = ({ movie: { movie_id, poster_url, title }, index }: TrendingCardProps) => {
    return (
        <Link href={`/movies/${movie_id}`} asChild>
            <TouchableOpacity className="w-32 relative pl-5">
                <Image source={{ uri: poster_url }} resizeMode="cover" className="w-32 h-48 rounded-lg" />
                <View className="absolute bottom-9  px-2 py-1 rounded-full">
                    <MaskedView
                        maskElement={<Text className="font-bold text-white text-6xl">{index + 1}</Text>}
                    >
                        <Image source={images.rankingGradient} className="size-14" resizeMode="cover"/>
                    </MaskedView>
                </View>
                <Text numberOfLines={2} className="text-light-200 text-sm font-bold mt-2">{title}</Text>
            </TouchableOpacity>
        </Link>
    );
};

export default TrendingCard;

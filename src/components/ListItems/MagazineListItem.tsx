import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Magazine } from "@/types/types";
import Entypo from '@expo/vector-icons/Entypo';

type MagazineListItemProps = {
    magazine: Magazine;
}

export default function MagazineListItem({ magazine }: MagazineListItemProps) {
    const [isFollowingPressed, setIsFollowingPressed] = useState<boolean>(false);

    const renderFolowButton = () => {
        if (isFollowingPressed) {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 2 }}>
                    <Entypo name="check" size={12} color="grey" />
                    <Text style={{ fontWeight: 'bold', fontSize: 10, color: 'grey' }}>FOLLOWING</Text>
                </View>
            )
        }

        return (
            <Text style={{ fontWeight: 'bold', fontSize: 10, borderWidth: 1.5, borderColor: '#FC3C44', paddingHorizontal: 10, paddingVertical: 1, borderRadius: 10, color: '#FC3C44', alignSelf: 'flex-start' }}>FOLLOW</Text>
        )
    };

    return (
        <View style={{ flex: 0.5, gap: 5, padding: 10 }}>
            <Image source={{ uri: magazine.image }} style={{ width: '100%', aspectRatio: 3 / 4, borderRadius: 5 }} />
            <Text style={{ fontWeight: 'bold' }}>{magazine.title}</Text>
            <Pressable onPress={() => setIsFollowingPressed((currentValue) => !currentValue)}>
                {renderFolowButton()}
            </Pressable>
        </View>
    )
}
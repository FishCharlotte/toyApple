import { Image, Text, View, Pressable } from "react-native";
import { News } from "@/types/types";
import { Link } from "expo-router";
import NewsListItemFooter from "../NewsListItemFooter";

type NewsListItemProps = {
    newsArticle: News;
}

export default function NewsListItem({ newsArticle }: NewsListItemProps) {
    return (
        <Link href={`newsArticle/${newsArticle.id}`} asChild>
            <Pressable style={{ backgroundColor: 'white', borderRadius: 10, marginBottom: 15, paddingHorizontal: 10, paddingTop: 10, paddingBottom: 5, gap: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexShrink: 1, marginRight: 15, gap: 5 }}>
                        <Image source={require('@assets/black-logo.png')} style={{ width: 50, height: 20 }} resizeMode="contain" />
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{newsArticle.title}</Text>
                    </View>
                    <Image source={{ uri: newsArticle.image }} style={{ width: 100, height: 100, borderRadius: 10, marginLeft: 'auto' }} />
                </View>
                <NewsListItemFooter publishedDate={newsArticle.created_at} author={newsArticle.author} />
            </Pressable>
        </Link>
    );
}
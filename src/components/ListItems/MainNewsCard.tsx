import { Image, Pressable, Text, View } from "react-native";
import { News } from "@/types/types";
import { Link } from "expo-router";
import NewsListItemFooter from "../NewsListItemFooter";

type MainNewsCardprops = {
    newsArticle: News;
}

export default function MainNewsCard({ newsArticle }: MainNewsCardprops) {
    return (
        <Link href={`newsArticle/${newsArticle.id}`} asChild>
            <Pressable style={{ backgroundColor: 'white', borderRadius: 10, marginBottom: 15 }}>
                <Image
                    source={{ uri: newsArticle.image }}
                    style={{ width: '100%', aspectRatio: 4 / 3, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                />
                <View style={{ padding: 10 }}>
                    <Image source={require('@assets/black-logo.png')} style={{ width: 60, height: 20, marginBottom: 5 }} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 25 }}>{newsArticle.title}</Text>
                    <NewsListItemFooter publishedDate={newsArticle.created_at} author={newsArticle.author} />
                </View>
            </Pressable>
        </Link>
    );
}
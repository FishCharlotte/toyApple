import { Pressable, Text, View, Image } from "react-native";
import { News } from "@/types/types";
import { Link } from "expo-router";
import NewsListItemFooter from "../NewsListItemFooter";

type NewsListItemProps = {
    newsArticle: News;
    index: number;
}

export default function TrendingListItem({ newsArticle, index }: NewsListItemProps) {
    return (
        <Link href={`newsArticle/${newsArticle.id}`} asChild>
            <Pressable style={{ flexDirection: 'row', marginBottom: 20, gap: 15 }}>
                <View style={{ backgroundColor: '#FA8128', width: 35, height: 35, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{index}</Text>
                </View>
                <View style={{ flex: 1, gap: 25, borderBottomWidth: 0.5, borderBottomColor: 'lightgrey', paddingBottom: 10 }}>
                    <View style={{ gap: 5 }}>
                        <Image source={require('@assets/black-logo.png')} style={{ width: 50, height: 20 }} resizeMode="contain" />
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{newsArticle.title}</Text>
                    </View>
                    <NewsListItemFooter publishedDate={newsArticle.created_at} author={newsArticle.author} />
                </View>
            </Pressable>
        </Link>
    )
};
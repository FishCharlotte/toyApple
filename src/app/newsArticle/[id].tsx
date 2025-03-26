import { useGlobalSearchParams } from "expo-router/build/hooks";
import { Text, View, Image, ScrollView } from "react-native";
import allNews from '@assets/data/allNews.json';
import { Stack } from "expo-router";
import { format } from 'date-fns';
import Markdown from 'react-native-markdown-display';


export default function DetailedArticle() {
    const { id } = useGlobalSearchParams()

    const newsArticle = allNews.find((article) => article.id === id)

    if (!newsArticle) {
        return <Text>Article Not Found!</Text>;
    }

    const { publisher, image, author, created_at, body } = newsArticle;

    return (
        <ScrollView>
            {/* HEADER TITLE */}
            <Stack.Screen name="newsArticle/[id]" options={{ title: publisher.name }} />
            <Image source={{ uri: image }} style={{ width: '100%', aspectRatio: 3 / 2 }} />

            <View style={{ padding: 25 }}>
                <View style={{ gap: 10, paddingBottom: 25 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{newsArticle.title}</Text>
                    <Text style={{ fontWeight: '300', color: 'grey', fontSize: 12 }}>{`by ${author.name} ${format(created_at, 'MMM dd, yyyy hh:mm a')}`}</Text>
                </View>
                <Markdown>
                    {body}
                </Markdown>
            </View>
        </ScrollView>
    )
}
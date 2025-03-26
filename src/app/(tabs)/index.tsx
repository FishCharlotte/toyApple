import { Text, View, SectionList } from "react-native";
import news from '@assets/data/homeNews.json';
import NewsListItem from "@/components/ListItems/NewsListItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import MainNewsCard from "@/components/ListItems/MainNewsCard";
import TrendingListItem from "@/components/ListItems/TrendingListItem";

const TITLES = {
    TOP_STORIES: 'Top Stories',
    TRENDING: 'Trending',
    FOR_YOU: 'For You',
}

export default function HomeScreen() {
    const date = new Date();
    const insets = useSafeAreaInsets()

    const renderSectionHeader = (title: string) => {
        if (title === TITLES.TOP_STORIES) {
            return (
                <View style={{ gap: 5, marginBottom: 10, marginTop: 40 }}>
                    <Text style={{ color: '#FC3C44', fontSize: 25, fontWeight: '800' }}>Top Stories</Text>
                    <Text style={{ color: '#AAAAAA' }}>Chosen by the Apple News editors.</Text>
                </View>
            )
        }

        if (title === TITLES.TRENDING) {
            return (
                <View style={{ marginBottom: 10, marginTop: 40 }}>
                    <Text style={{ color: '#EC9706', fontSize: 25, fontWeight: '800' }}>Trending Stories</Text>
                </View>
            )
        }

        if (title === TITLES.FOR_YOU) {
            return (
                <View style={{ gap: 5, marginBottom: 10, marginTop: 20 }}>
                    <Text style={{ color: '#3CB043', fontSize: 25, fontWeight: '800' }}>For You</Text>
                    <Text style={{ color: '#AAAAAA' }}>Recommendations based on topics & channels you read.</Text>
                </View>
            )
        }

        return null;
    };

    return (
        <View style={{ paddingHorizontal: 15, paddingTop: insets.top }}>
            <SectionList
                sections={news}
                renderItem={({ item, index, section }) => {
                    switch (section.title) {
                        case TITLES.TOP_STORIES:
                            return index === 0 ? <MainNewsCard newsArticle={item} /> : <NewsListItem newsArticle={item} />;
                        case TITLES.TRENDING:
                            return <TrendingListItem newsArticle={item} index={index + 1} />;
                        case TITLES.FOR_YOU:
                            return <NewsListItem newsArticle={item} />;
                        default:
                            return null;
                    }
                }}
                showsVerticalScrollIndicator={false}
                stickySectionHeadersEnabled={false}
                renderSectionHeader={({ section }) => renderSectionHeader(section?.title)}
                ListHeaderComponent={
                    <View>
                        {/* APPLE LOGO HEADER */}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign name="apple1" size={24} color="black" />
                            <Text style={{ fontSize: 27, fontWeight: '800' }}>News</Text>
                        </View>
                        <Text style={{ fontSize: 27, fontWeight: '800', color: 'grey' }}>{date.toLocaleString('default', { month: 'long', day: 'numeric' })}</Text>
                    </View>
                }
            />
        </View>
    )
}
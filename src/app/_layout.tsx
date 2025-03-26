import { Stack } from "expo-router";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { View } from "react-native";
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
    return (
        <PaperProvider>
            <Stack
                screenOptions={{
                    animation: 'slide_from_right',
                    headerTitleAlign: 'center'
                }}
            >
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen
                    name="newsArticle/[id]"
                    options={{
                        title: '',
                        headerLeft: () => (
                            <Ionicons
                                name="chevron-back"
                                size={25}
                                color="black"
                                onPress={() => router.back()}
                            />
                        ),
                        headerRight: () => (
                            <View style={{ gap: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons
                                    name="share-outline"
                                    size={20}
                                    color="black"
                                    style={{ backgroundColor: '#EEEEEE', borderRadius: 15, padding: 5 }}
                                />
                                <MaterialCommunityIcons
                                    name="dots-horizontal"
                                    size={24}
                                    color="black"
                                    style={{ backgroundColor: '#EEEEEE', borderRadius: 15, padding: 2 }}
                                />
                            </View>
                        )
                    }}
                />
            </Stack>
        </PaperProvider>
    )
}
import { FlatList, Pressable, Text, View } from "react-native";
import featuredMagazines from '@assets/data/featuredMagazines.json'
import newestMagazines from '@assets/data/newestMagazines.json'
import popularMagazines from '@assets/data/popularMagazines.json'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MagazineListItem from "@/components/ListItems/MagazineListItem";
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Menu } from 'react-native-paper';
import { useEffect, useState } from "react";
import { Magazine } from "@/types/types";

const FILTERS = {
    FEATURED: 'Featured',
    POPULAR: 'Popular',
    NEWEST: 'Newest',
}

type FilterKey = keyof typeof FILTERS;

export default function NewsPlusScreen() {
    const insets = useSafeAreaInsets()

    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>(FILTERS.NEWEST);
    const [magazinesData, setMagazinesData] = useState<Magazine[]>([]);

    const handleSelectOption = (option: string) => {
        setSelectedOption(option);
        setMenuVisible(false);
    };

    useEffect(() => {
        console.log('redered')
        switch (selectedOption) {
            case FILTERS.FEATURED:
                return setMagazinesData(featuredMagazines);
            case FILTERS.NEWEST:
                return setMagazinesData(newestMagazines);
            case FILTERS.POPULAR:
                return setMagazinesData(popularMagazines);
        }
    }, [selectedOption])

    return (
        <View style={{ padding: 15, paddingTop: insets.top }}>
            <FlatList
                data={magazinesData}
                renderItem={({ item }) => <MagazineListItem magazine={item} />}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View style={{ paddingBottom: 10 }}>
                        <View style={{ marginBottom: 40 }}>
                            {/* APPLE LOGO HEADER */}
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <AntDesign name="apple1" size={24} color="black" />
                                <Text style={{ fontSize: 27, fontWeight: '800' }}>News+</Text>
                            </View>
                            <Text style={{ fontSize: 27, fontWeight: '800', color: 'grey' }}>Discover</Text>
                        </View>

                        {/* Menu Wrapper */}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 19, marginRight: 5 }}>Showing:</Text>
                            <Menu
                                visible={menuVisible}
                                onDismiss={() => setMenuVisible(false)}
                                anchorPosition="bottom"
                                contentStyle={{ backgroundColor: 'white' }}
                                anchor={
                                    <Pressable
                                        onPress={() => setMenuVisible(true)}
                                        style={{ flexDirection: 'row', alignItems: 'center' }}
                                    >
                                        <Text style={{ fontWeight: 'bold', fontSize: 19, color: '#FC3C44' }}>{selectedOption}</Text>
                                        <Entypo name="chevron-down" size={26} color="#FC3C44" />
                                    </Pressable>
                                }
                            >
                                {(Object.keys(FILTERS) as FilterKey[]).map((key) => (
                                    <Menu.Item key={key} onPress={() => handleSelectOption(FILTERS[key])} title={FILTERS[key]} titleStyle={{ fontWeight: 'bold', fontSize: 19, color: '#FC3C44' }} />
                                ))}
                            </Menu>
                        </View>
                    </View>
                }
            />
        </View>
    )
}
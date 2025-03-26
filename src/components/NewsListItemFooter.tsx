import { Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Author } from '@/types/types'
import { formatDistanceToNow } from 'date-fns';

type NewsListItemFooterProps = {
    publishedDate: string;
    author: Author;
}

export default function NewsListItemFooter({ publishedDate, author }: NewsListItemFooterProps) {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Text style={{ color: 'grey', fontSize: 12 }}>{formatDistanceToNow(publishedDate, { addSuffix: true })}</Text>
                <Text style={{ color: 'grey', fontSize: 12 }}>&#x2022;</Text>
                <Text style={{ color: 'grey', fontSize: 12 }}>{author.name}</Text>
                <MaterialCommunityIcons name="dots-horizontal" size={22} color="grey" style={{ marginLeft: 'auto' }} />
            </View>
        </View>
    )
}
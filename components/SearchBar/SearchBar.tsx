import { icons } from "@/constants/icons";
import { Image, TextInput, View } from "react-native";

type SearchBarProps = {
    onPress: () => void;
    placeholder: string;
}

const SearchBar = (props: SearchBarProps) => {
    return <View className="flex flex-row items-center bg-dark-200 rounded-full px-5 py-4">
        <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" />
        <TextInput 
            {...props}
            value=""
            onChange={() => { }} 
            placeholderTextColor="#a8b5db" className="flex-1 ml-2 text-white"
        />
    </View>
}

export default SearchBar;
import { Href, Link } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";



const MovieCard = ({ id, poster_path, title, vote_average }: Movie ) => {

    return (
        <Link href={`/movie/${id}` as Href} asChild>
            <TouchableOpacity className="w-[30%]">
                <Image 
                source={{
                    uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
                }} 
                className="w-full h-52 rounded-lg"
                resizeMode="cover"
                />
                <Text className="text-sm font-bold mt-2 text-white">{title}</Text>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard;
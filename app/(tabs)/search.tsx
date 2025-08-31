import {ActivityIndicator, FlatList, Image, Text, View} from "react-native";
import {images} from "@/constants/images";
import MovieCard from "@/components/MovieCard/MovieCard";
import {useFetch} from "@/services/useFetch";
import {fetchMovies} from "@/services/api";
import {icons} from "@/constants/icons";
import SearchBar from "@/components/SearchBar/SearchBar";
import {useEffect, useState} from "react";
import {updateSearchCount} from "@/services/appwrite";

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const { data: movies, loading, error, refetch } = useFetch(
        () => fetchMovies({ query: searchQuery})
    );

    useEffect(() => {
        const timeout = setTimeout(async () => {
                if (searchQuery.trim()) {
                    await refetch();
                }
            }
        , 500)

        return () => clearTimeout(timeout);
    }, [searchQuery]);

    useEffect(() => {
        if (movies?.length > 0 && movies?.[0]){
            updateSearchCount(searchQuery, movies?.[0]);
        }
    }, [movies]);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="flex-1 absolute w-full z-0" resizeMode="cover" />
        <FlatList
            data={movies}
            renderItem={({ item }) => <MovieCard {...item} />}
            keyExtractor={(item) => item.id.toString()}
            className="px-5"
            numColumns={3}
            columnWrapperStyle={{
                justifyContent: "center",
                gap: 16,
                marginVertical: 16
            }}
            contentContainerStyle={{ paddingBottom: 100 }}
            ListEmptyComponent={!loading && !error ? (
                <View className="mt-10 px-5">
                    <Text className="text-center text-gray-500">
                        {searchQuery.trim() ? 'No movies found' : 'Search for a movie'}
                    </Text>
                </View>
            ): null}
            ListHeaderComponent={<>
                <View className="w-full flex-row justify-center mt-20">
                    <Image source={icons.logo} className="w-12 h-10" />
                </View>
                <View className="my-5">
                    <SearchBar
                        value={searchQuery}
                        placeholder="Search movies..."
                        onChangeText={(text: string) => setSearchQuery(text)}
                    />
                </View>
                {loading && (
                    <ActivityIndicator size="large" color="#0000ff" />
                )}

                {error && (
                    <Text className="text-red-500 px-5 my-3">
                        Error: {error.message}
                    </Text>
                )}

                {!loading && !error && searchQuery.trim() && movies?.length > 0  && (
                    <Text className="text-xl text-white font-bold ">
                        Search results for {' '}
                        <Text className="text-accent">{searchQuery}</Text>
                    </Text>
                )}
            </>}
        />
    </View>
  );
}

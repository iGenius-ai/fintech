import { useState } from "react";
import { FlatList, Image, RefreshControl, Text, TouchableOpacity, View } from "react-native";

import { images } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getAllPosts, getLatestPosts } from "../../lib/granularx";
import { EmptyState } from "../../components";
import { useGlobalContext } from "../../context/GlobalProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BuyFiatons from "../../components/fiatons/BuyFiatons";

const Buy = ({ setShowBuy }) => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestPosts } = useAppwrite(getLatestPosts);
  const { user, setUser, setIsLogged } = useGlobalContext();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const handleTransactions = async () => {
    setShowTransactions(true);
  }

  const handleReturn = async () => {
    setShowBuy(false);
  }

  return (
    <>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        // renderItem={({ item }) => (
        //   <VideoCard
        //     title={item.title}
        //     thumbnail={item.thumbnail}
        //     video={item.video}
        //     creator={item.creator.username}
        //     avatar={item.creator.avatar}
        //   />
        // )}
        ListHeaderComponent={() => (
          <View className="flex mb-6 space-y-6">
            <View className="bg-[#141f1f] border border-[#222c2c] flex justify-between">
              <View className="flex justify-between border border-[#222c2c] items-center flex-row p-4">
                <View>
                  <Image
                    source={{ uri: user?.avatar }}
                    className="w-8 h-8 rounded-full"
                    resizeMode="cover"
                  />
                </View>

                <Text className="text-white font-outfitBold text-2xl">Wallet</Text>

                <View className="mt-1.5">
                  <Image
                    source={images.notify}
                    className="w-9 h-9"
                    resizeMode="contain"
                  />
                </View>
              </View>

              <View className="bg-[#141f1f] p-4">
                <TouchableOpacity
                  onPress={handleReturn}
                  activeOpacity={0.7}
                  className={`rounded-xl flex flex-row my-4`}
                >
                  <MaterialCommunityIcons size={20} name="chevron-left" color={"#8a8b8b"} />
                  <Text className={`text-gray-400 font-outfitRegular text-lg`}>
                    Go back
                  </Text>
                </TouchableOpacity>

                <View className="ml-1 pb-2">
                  <Text className="mb-4 text-gray-100 font-outfitBold text-3xl">Buy Fiatons</Text>
                  <Text className="text-gray-500 font-outfitRegular text-xl">Buy fiatons and consume every energy service across Faraday</Text>
                </View>
              </View>
            </View>

            <BuyFiatons />
          </View>
        )}

        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </>
  );
};

export default Buy;
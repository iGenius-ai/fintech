import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, ImageBackground, RefreshControl, Text, TouchableOpacity, View } from "react-native";

import { images } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getAllPosts, getLatestPosts } from "../../lib/granularx";
import { CustomButton, EmptyState, SearchInput, Trending, VideoCard } from "../../components";
import { useGlobalContext } from "../../context/GlobalProvider";
import BuyBtn from "../../components/BuyBtn";
import WithdrawBtn from "../../components/WithdrawBtn";
import Transactions from "../../components/screen/Transactions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import BuyFiatons from "../../components/fiatons/BuyFiatons";
import WithdrawFiatons from "../../components/fiatons/WithdrawFiatons";

const Withdraw = ({ setShowWithdraw }) => {
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
    setShowWithdraw(false);
  }

  // one flatlist
  // with list header
  // and horizontal flatlist

  //  we cannot do that with just scrollview as there's both horizontal and vertical scroll (two flat lists, within trending)

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
                  <Text className="mb-4 text-gray-100 font-outfitBold text-3xl">Withdraw Fiatons</Text>
                  <Text className="text-gray-500 font-outfitRegular text-xl">
                    Withdraw your fiatons and spend it as real cash
                  </Text>
                </View>
              </View>
            </View>

            <WithdrawFiatons />
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

export default Withdraw;
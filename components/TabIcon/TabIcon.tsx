import { images } from "@/constants/images";
import React from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  View
} from "react-native";

export const TabIcon = (props: {
  icon: ImageSourcePropType;
  focused: boolean;
  title: string;
}) => {
  const { icon, focused, title } = props;

  if (!focused) {
    return (
      <View className="size-full justify-center item-center mt-4 rounded-full">
        <Image source={icon} tintColor="#A8B5DB" className="size-5" />
      </View>
    );
  }
  return (
    <>
      <ImageBackground
        source={images.highlight}
        className="w-full flex-1 items-center justify-center min-w-[112px] min-h-16 mt-4 rounded-full overflow-hidden flex-row"
      >
        <Image source={icon} tintColor="#151312" />
        <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
      </ImageBackground>
    </>
  );
};

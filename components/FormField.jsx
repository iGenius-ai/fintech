import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  smallerText,
  placeholder,
  handleChangeText,
  otherStyles,
  inputValue,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`mb-5 ${otherStyles}`}>
      <Text className="mb-1 font-circularMedium text-base text-gray-600">{title}</Text>
        <TextInput
          className="border border-[#D0D5DD] rounded-md p-2 px-3 text-base font-circularMedium"
          value={value} inputMode={inputValue}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
    </View>
  );
};

export default FormField;

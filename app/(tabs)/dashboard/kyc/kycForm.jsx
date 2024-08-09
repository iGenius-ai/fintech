import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Modal, FlatList } from 'react-native';
import { ArrowRight2 } from 'iconsax-react-native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

// Main selection screen
const KYCSelectionScreen = ({ navigation }) => {
  const sections = [
    { id: 'required', title: 'Required Information', small: 'Carefully input the required information before submitting', submitText: 'Update Changes' },
    { id: 'company', title: 'Company Details', small: 'Please fill up this form if you have a company, also note that it is okay for you to give us only the information you have access to currently.', submitText: 'Submit Details' },
    { id: 'mainContact', title: 'Main Contact', small: 'Please fill up this form, also note that it is okay for you to give us only the information you have access to currently.', submitText: 'Submit Details' },
    { id: 'secondaryContact', title: 'Secondary Contact', small: 'Please fill up this form, also note that it is okay for you to give us only the information you have access to currently.', submitText: 'Submit Details' },
    // Add more sections as needed
  ];

  return (
    <ScrollView className="flex-1 bg-[#F7F7F7]">
      <Text className="text-base font-circular text-[#667085] p-5">Kindly provide us with as much information as possible to help us do your accounting better</Text>
      <View className="bg-white p-5 pt-0">
        {sections.map((section) => (
          <TouchableOpacity
            key={section.id}
            className="py-4 flex-row items-center justify-between border-b border-[#EAECF0]"
            onPress={() => navigation.navigate('KYCForm', { sectionId: section.id, title: section.title, small: section.small, submitText: section.submitText })}
          >
            <View>
              <Text className="text-base font-circularBold mb-1">{section.title}</Text>
              <Text className="text-sm font-circular bg-[#E2FCF2] self-start text-[#1DC286] p-1 px-[6px] rounded-lg">Submitted</Text>
            </View>
            <ArrowRight2 size={18} color='#98A1B3' />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

// Dynamic form screen
const KYCFormScreen = ({ route }) => {
  const { sectionId, title, small, submitText } = route.params;
  const [formData, setFormData] = useState({});
  const [showAdvertModal, setShowAdvertModal] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState({ name: 'Select an option', id: null });

  const adverts = [
    { name: 'Private Limited Company', id: 'internet' },
    { name: 'Limited Liability Company', id: 'friend' },
    { name: 'Trademark License', id: 'ad' },
    // Add more advert sources as needed
  ];

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const selectAdvert = (item) => {
    setSelectedAdvert(item);
    setShowAdvertModal(false);
    handleInputChange('advertSource', item.id);
  };

  const fields = {
    required: [
      { name: 'Full Name', type: 'text' },
      { name: 'Client Type', type: 'dropdown' },
      { name: 'Partner', type: 'dropdown' },
      { name: 'Manager', type: 'dropdown' },
    ],
    company: [
      { name: 'Company Number', type: 'text' },
      { name: 'Incorporation Date', type: 'text' },
      { name: 'Registered Address', type: 'text' },
      { name: 'Company Postal Address', type: 'text' },
      { name: 'Invoice Address', type: 'text' },
      { name: 'Company Email', type: 'text' },
      { name: 'Company Telephone', type: 'text' },
      { name: 'Turnover', type: 'text' },
      { name: 'Date of Trading', type: 'text' },
      { name: 'SIC Code', type: 'text' },
      { name: 'Nature of Business', type: 'text' },
      { name: 'Corporation Tax Office', type: 'text' },
      { name: 'Company UTR', type: 'text' },
      { name: 'Companies House Authentication Code', type: 'text' },
    ],
    mainContact: [
      { name: 'Full Name', type: 'text' },
      { name: 'Incorporation Date', type: 'text' },
      { name: 'Date of Birth', type: 'text' },
      { name: 'Deceased', type: 'text' },
      { name: 'Postal Address', type: 'text' },
      { name: 'Previous Address', type: 'text' },
      { name: 'Telephone number', type: 'text' },
      { name: 'Mobile Number', type: 'text' },
      { name: 'NI Number', type: 'text' },
      { name: 'Personal UTR Number', type: 'text' },
      { name: 'Terms Signed', type: 'text' },
      { name: 'Marital Status', type: 'text' },
      { name: 'Nationality', type: 'text' },
      { name: 'Preferred Language', type: 'text' },
    ],
    secondaryContact: [
      { name: 'Full Name', type: 'text' },
      { name: 'Incorporation Date', type: 'text' },
      { name: 'Date of Birth', type: 'text' },
      { name: 'Deceased', type: 'text' },
      { name: 'Postal Address', type: 'text' },
      { name: 'Previous Address', type: 'text' },
      { name: 'Telephone number', type: 'text' },
      { name: 'Mobile Number', type: 'text' },
      { name: 'NI Number', type: 'text' },
      { name: 'Personal UTR Number', type: 'text' },
      { name: 'Terms Signed', type: 'text' },
      { name: 'Marital Status', type: 'text' },
      { name: 'Nationality', type: 'text' },
      { name: 'Preferred Language', type: 'text' },
    ],
  };

  return (
    <ScrollView className="flex-1 bg-[#F7F7F7] p-4">
      <Text className="text-2xl font-circularBold text-[#101828] mb-2">{title}</Text>
      <Text className="text-base font-circular text-[#667085] mb-6">{small}</Text>
      {fields[sectionId].map((field) => (
        <View key={field.name} className="mb-6">
          <Text className="mb-1 font-circularMedium text-base text-gray-600">{field.name}</Text>
          {field.type === 'text' ? (
            <TextInput 
              className="border border-[#D0D5DD] rounded-md p-2 px-3 text-base font-circular"
              value={formData[field.name] || ''}
              onChangeText={(value) => handleInputChange(field.name, value)}
            />
          ) : field.type === 'dropdown' ? (
            <TouchableOpacity
              className="border border-[#D0D5DD] rounded-md overflow-hidden flex-row items-center p-3"
              onPress={() => setShowAdvertModal(true)}
            >
              <Text className="font-circularMedium flex-1 text-base">{selectedAdvert.name}</Text>
              <Ionicons name="chevron-down-outline" size={16} color="#888" />
            </TouchableOpacity>
          ) : null}
        </View>
      ))}
      <TouchableOpacity
        className="text-center bg-[#4EB1B3] p-4 mt-8 rounded-full"
        onPress={() => console.log(formData)}
      >
        <Text className="font-circularMedium text-white text-center text-lg">{submitText}</Text>
      </TouchableOpacity>

      {/* Modal for dropdown */}
      <Modal
        visible={showAdvertModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowAdvertModal(false)}
      >
        <View className="flex-1 bg-[#00000099] justify-end">
          <View className="bg-white py-5 rounded-lg">
            <FlatList
              data={adverts}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="px-5 py-2"
                  onPress={() => selectAdvert(item)}
                >
                  <Text className="text-base font-circularMedium">{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

// Main app component with navigation
const KYCApp = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="KYCSelection" component={KYCSelectionScreen} options={{ headerShown: false }} />
        <Stack.Screen 
          name="KYCForm" 
          component={KYCFormScreen} 
          options={({ route }) => ({ title: route.params.title, headerShown: false })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default KYCApp;
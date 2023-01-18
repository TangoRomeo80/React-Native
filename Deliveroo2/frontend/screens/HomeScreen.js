import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])

  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2 px-4'>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-7 w-7 bg-gray-300 rounded-full'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
        <UserIcon size={35} color='#00CCBB' />
      </View>

      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
          <MagnifyingGlassIcon color='gray' size={20} />
          <TextInput
            placeholder='Restaurants and Cuisines'
            keyboardType='default'
          />
        </View>
        <AdjustmentsVerticalIcon color='#00CCBB' />
      </View>

      {/* Body */}
      <ScrollView className='bg-gray-100 overflow-auto'
        style={{ marginBottom: 110 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured*/}
        <FeaturedRow
          id='123'
          title='Featured'
          description='Paid placements from our partners'
        />
        {/* Tasty Discounts*/}
        <FeaturedRow
          id='456'
          title='Tasty Discounts'
          description='Everyone has been enjoying these deals'
        />
        {/* Offers near you*/}
        <FeaturedRow
          id='789'
          title='Offers near you'
          description='Why not support your local restaurants'
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { urlFor } from '../sanity'
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/solid'

const RestaurantScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute()
  return (
    <SafeAreaView className='bg-white'>
      <ScrollView>
        <View className='relative'>
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className='w-full h-56 bg-gray-300 p-4'
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className='absolute top-4 left-4 p-2 bg-gray-100 rounded-full'
          >
            <ArrowLeftIcon size={20} color='#00CCBB' />
          </TouchableOpacity>
        </View>
        <View className='bg-white'>
          <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>
            <View className='flex-row space-x-2 my-1'>
              <View className='flex-row items-center space-x-1'>
                <StarIcon size={22} color='green' opacity={0.5} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-green-500'>{rating}</Text> . {genre}
                </Text>
              </View>
              <View className='flex-row items-center space-x-1'>
                <MapPinIcon size={22} color='gray' opacity={0.5} />
                <Text className='text-xs text-gray-500'>
                  Nearby . {address}
                </Text>
              </View>
            </View>
            <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
          </View>
          <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
            <QuestionMarkCircleIcon size={20} color='gray' opacity={0.5} />
            <Text className='pl-2 flex-1 text-md font-bold'>
              Have a food allergy?
            </Text>
            <ChevronRightIcon color='#00CCBB' />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RestaurantScreen

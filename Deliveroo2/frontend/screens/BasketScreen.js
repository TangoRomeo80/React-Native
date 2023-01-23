import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import {
  selectBasketItems,
  removeFromBasket,
  selectBasketTotal,
} from '../features/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter'

const BasketScreen = () => {
  const navigaiton = useNavigation()
  const dispatch = useDispatch()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)

  const [groupedItemsBasket, setGroupedItemsBasket] = useState([])

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      ;(results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})
    setGroupedItemsBasket(groupedItems)
  }, [items])

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00ccbb] bg-white shadow-xs'>
          <View>
            <Text className='text-lg font-bold text-center'>Basket</Text>
            <Text className='text-center text-gray-400'>
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigaiton.goBack}
            className='rounded-full absolute bg-gray-100 top-3 right-5'
          >
            <XCircleIcon color='#00ccbb' height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image
            source={{
              uri: 'http://links.papareact.com/wru',
            }}
            className='w-7 h-7 bg-gray-300 p-4 rounded-full'
          />
          <Text className='flex-1'>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className='text-[#00ccbb]'>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className='divide-y divide-gray-200'>
          {Object.entries(groupedItemsBasket).map(([key, items]) => (
            <View
              key={key}
              className='flex-row items-center space-x-3 px-5 py-2 bg-white'
            >
              <Text className='text-[#00ccbb]'>{items.length} X </Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className='w-12 h-12 rounded-full'
              />
              <Text className='flex-1'>{items[0]?.name}</Text>
              <Text className='text-gray-600'>
                <Currency quantity={items[0]?.price} currency='BDT' />
              </Text>
              <TouchableOpacity>
                <Text
                  className='text-[#00ccbb] text-xs'
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className='p-5 bg-white mt-5 space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subtotoal</Text>
            <Text className='text-gray-400'>
              <Currency quantity={basketTotal} currency='BDT' />
            </Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>
              <Currency quantity={50} currency='BDT' />
            </Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-black'>Order Total</Text>
            <Text className='text-black font-extrabold'>
              <Currency quantity={basketTotal + 50} currency='BDT' />
            </Text>
          </View>
          <TouchableOpacity className='rounded-lg bg-[#00ccbb] p-4'>
            <Text className='text-center text-white text-lg font-bold'>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen

import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { selectBasketItems } from '../features/basketSlice'

const BasketScreen = () => {
  const navigaiton = useNavigation()
  const dispatch = useDispatch()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)

  return (
    <SafeAreaView>
      <Text>BasketScreen</Text>
    </SafeAreaView>
  )
}

export default BasketScreen

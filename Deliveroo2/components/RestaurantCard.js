import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const RestaurantCard = ({
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
}) => {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: imgUrl,
        }}
        className='h-36 w-64 rounded-sm'
      />
    </TouchableOpacity>
  )
}

export default RestaurantCard

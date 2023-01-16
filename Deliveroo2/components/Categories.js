import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCards */}
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='test 1' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='test 2' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='test 3' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='test 4' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='test 5' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='test 6' />
    </ScrollView>
  )
}

export default Categories

import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Theme } from '../Config'

const Card = ({ image, categories, title}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.imageBackground}
      />
      <View style={styles.content}>
        {
          categories.length > 0 
          &&
          <View style={{flexDirection: 'row', marginBottom: 10, flexWrap: 'wrap'}}>
            {
              categories.map((item, index) => {
                return (
                  <View key={index} style={styles.tagContainer}>
                    <Text style={styles.tagTitle}>
                      {item}
                    </Text>
                  </View>
                )
              })
            }
          </View>
        }
        <Text style={styles.title} numberOfLines={2}>
            {title}
        </Text>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.secondary,
    borderRadius: Theme.borderRadius.base,
    overflow: 'hidden',
    width: 300,
    flex: 1
  },
  content: {
    padding: 15
  },
  imageBackground: {
    width: 300,
    height: 250
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17
  },
  tagContainer: {
    height: 18,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: Theme.colors.primary,
    borderRadius: Theme.borderRadius.base,
    marginRight: 5,
    marginBottom: 5
  },
  tagTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: Theme.colors.light
  }
})
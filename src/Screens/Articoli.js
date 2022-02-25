import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Articoli = ({navigation}) => {
  return (
    <View>
      <Text>Articoli</Text>
      <Button
        title="Vai a singolo articolo"
        onPress={() => navigation.navigate('Articolo')}
      />
    </View>
  )
}

export default Articoli

const styles = StyleSheet.create({})
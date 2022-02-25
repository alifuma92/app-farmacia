import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Farmacie = ({navigation}) => {
  return (
    <View>
      <Text>Farmacie</Text>
      <Button
        title="Vai a Farmacia"
        onPress={() => navigation.navigate('Farmacia')}
      />
    </View>
  )
}

export default Farmacie

const styles = StyleSheet.create({})
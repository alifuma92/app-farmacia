import React from 'react'

import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

// import theme
import { Theme } from '../Config'

// import icons
import Icon from 'react-native-vector-icons/dist/Ionicons';

// import components
import { Box } from '../Components'

const Homepage = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>

      {/* PRIMA RIGA BOX */}
      <View style={{flexDirection: 'row', paddingHorizontal: 5, paddingTop: 5}}>
        <TouchableOpacity 
          style={{flex: 1, padding: 5}}
          onPress={() => navigation.navigate('Farmacie')}
        >
          <Box 
            title={"Le nostre\nfarmacie"}
            iconName="home"
            color={Theme.colors.light}
            backgroundColor={Theme.colors.primary}
            iconBackgroundColor={Theme.colors.light_50}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={{flex: 1, padding: 5}}
          onPress={() => alert('aprirò la screen dei turni')}
        >
          <Box 
            title={"Farmacie\ndi turno"}
            iconName="time"
            color={Theme.colors.base_text}
            backgroundColor={Theme.colors.secondary}
            iconBackgroundColor={Theme.colors.primary_50}
          />
        </TouchableOpacity>
      </View>

      {/* SECONDA RIGA BOX */}
      <View style={{flexDirection: 'row', paddingHorizontal: 5}}>
        <TouchableOpacity 
          style={{flex: 1, padding: 5}}
          onPress={() => navigation.navigate('Ordina')}
        >
          <Box 
            title={"Ordina\nprodotti"}
            iconName="cart"
            color={Theme.colors.light}
            backgroundColor={Theme.colors.primary}
            iconBackgroundColor={Theme.colors.light_50}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={{flex: 1, padding: 5}}
          onPress={() => navigation.navigate('Prenota')}
        >
          <Box 
            title={"Prenota\nappuntamenti"}
            iconName="calendar"
            color={Theme.colors.light}
            backgroundColor={Theme.colors.primary}
            iconBackgroundColor={Theme.colors.light_50}
          />
        </TouchableOpacity>
      </View>
      

    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({})
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// import theme
import { Theme } from '../Config'

// import react native vector icons
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Box = ({ backgroundColor, color, title, iconName, iconBackgroundColor}) => {
  return (
    <View style={{...styles.container, backgroundColor: backgroundColor}}>
      <Text style={{...styles.title, color: color}}>
        {title}
      </Text>
      <View style={{...styles.icon_container, backgroundColor: iconBackgroundColor }}>
        <Icon color={Theme.colors.base_text} size={24} name={iconName} />
      </View>
    </View>
  )
}

export default Box

const styles = StyleSheet.create({
  container: {
    height: 130,
    borderRadius: Theme.borderRadius.base,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center'
  },
  icon_container: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

// import Config
import { Theme } from '../Config'

const Button = ({title, color, backgroundColor, size = "medium", action, disabled = false}) => {

  const buttonHeight = (size) => {
    switch(size) {
      case 'large':
        return 48
      case 'medium':
        return 40
      case 'small':
        return 32
      default:
        return 40
    }
  }

  return (
    <TouchableOpacity
      style={{...styles.container, backgroundColor, height: buttonHeight(size)}}
      onPress={action}
      disabled={disabled}
    >
      <Text style={{...styles.text, color}}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    borderRadius: Theme.borderRadius.base,
    justifyContent: 'center'
  },
  text: {
    fontSize: 17,
    fontWeight: '600'
  }
})
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'

export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Dimensions.get('window').height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

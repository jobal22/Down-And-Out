import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomePage from './Components/HomePage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.navbarText}>Good News Helper</Text>
      <HomePage />
      <Text style={styles.footback} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Get the Gospel to Every Person</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: 45,
    position: 'absolute',
    zIndex: 1,
    left: 90,
  },
  navbarText: {
    fontSize: 20,
    width: '100%',
    height: 90,
    paddingLeft: 100,
    paddingRight: 102,
    paddingTop: 53,
    textAlign: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  footback: {
    backgroundColor: 'grey',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 61,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    paddingTop: 10,
    borderTopColor: 'black',
  },
  footerText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 10,
    fontWeight: 'bold',
  }
});

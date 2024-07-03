import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Product from './Product';

const products = [
  { id: '1', name: 'Office Wear', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress1.png') },
  { id: '2', name: 'Black', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress2.png') },
  { id: '3', name: 'Church Wear', description: 'reversible Angora Cardigan', price: 120, image: require('../assets/dress3.png') },
  { id: '4', name: 'Lamerei', description:'reversible Angora Cardigan', price: 120, image: require('../assets/dress4.png') },
  { id: '5', name: '21WN', description:'reversible Angora Cardigan', price: 120, image: require('../assets/dress5.png') },
  { id: '6', name: 'Lopo', description:'reversible Angora Cardigan', price: 120, image: require('../assets/dress6.png') },
  { id: '7', name: '21WN', description:'reversible Angora Cardigan', price: 120, image: require('../assets/dress7.png') },
];

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  const [numColumns, setNumColumns] = useState(2);

  const addToCart = async (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../assets/Menu.png')} style={styles.icon} />
        </TouchableOpacity>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Image source={require('../assets/Search.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image source={require('../assets/shoppingBag.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.storyTitle}>OUR STORY</Text>
        <View style={styles.subHeaderRight}>
          <TouchableOpacity>
            <Image source={require('../assets/Listview.png')} style={styles.iconSmall} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/Filter.png')} style={styles.iconSmall} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        key={numColumns} 
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Product product={item} onAddToCart={addToCart} />
        )}
        numColumns={numColumns}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  headerRight: {
    flexDirection: 'row',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  storyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subHeaderRight: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  iconSmall: {
    width: 21,
    height: 20,
    marginHorizontal: 10,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;

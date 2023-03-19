import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Item } from '../Models/Item';

type MarketplaceProps = {
  items: Item[];
  onAddToCart: (item: Item) => void;
};

const Marketplace: React.FC<MarketplaceProps> = ({ items, onAddToCart }) => {
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.itemImage }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.itemName}</Text>
      <Text style={styles.itemManufacturer}>{item.itemManufacturer}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={() => onAddToCart(item)}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 8,
  },
  itemContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  itemManufacturer: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
  },
  addToCartButton: {
    backgroundColor: '#FF5555',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 16,
  },
  addToCartButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default Marketplace;
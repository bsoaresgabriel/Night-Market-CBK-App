import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { Item } from '../Models/Item';
import { useDispatch } from 'react-redux';
import { addItem } from '../Store/CartSlice';
import { generateMockItems } from '../Models/MockItems';

export type CatalogPageProps = {
  colorScheme: 'light' | 'dark';
};

const CatalogPage: React.FC<CatalogPageProps> = ({ colorScheme }) => {
  const dispatch = useDispatch();
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      // Still need to replace this with an actual API call (firebase maybe ?)
      const fetchedItems: Item[] = generateMockItems(10); // Generates 10 mock items
      setItems(fetchedItems);
    };

    fetchItems();
  }, []);

  const handleAddToCart = (item: Item) => {
    dispatch(addItem(item));
  };

  const styles = createStyles(colorScheme);

  const renderItem = ({ item }: { item: Item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.itemImage} source={{ uri: item.itemImage }} />
        <Text style={styles.itemName}>{item.itemName}</Text>
        <Text style={styles.itemManufacturer}>{item.itemManufacturer}</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(item)}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const createStyles = (colorScheme: 'light' | 'dark') =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#000' : '#FFF',
    },
    listContent: {
      padding: 16,
    },
    itemContainer: {
      marginBottom: 16,
      alignItems: 'center',
      borderColor: colorScheme === 'dark' ? '#FF5555' : '#FF0000',
      borderWidth: 1,
      borderRadius: 4,
      padding: 8,
    },
    itemImage: {
      width: 120,
      height: 120,
      marginBottom: 8,
    },
    itemName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? '#FFF' : '#000',
    },
    itemManufacturer: {
      fontSize: 14,
      color: colorScheme === 'dark' ? '#FFF' : '#000',
    },
    addButton: {
      backgroundColor: colorScheme === 'dark' ? '#FF5555' : '#FF0000',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 4,
      marginTop: 8,
    },
    addButtonText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FFF',
    },
  });

export default CatalogPage;
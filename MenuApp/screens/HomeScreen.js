// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MenuForm from '../components/MenuForm';

const HomeScreen = () => {
  const [menuItems, setMenuItems] = useState([]);

  const addMenuItem = (item) => {
    setMenuItems([...menuItems, item]);
  };

  return (
    <View style={styles.container}>
      <MenuForm addMenuItem={addMenuItem} />
      <Text style={styles.total}>Total Menu Items: {menuItems.length}</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>{item.course}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  total: {
    fontSize: 18,
    marginVertical: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default HomeScreen;

import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { IconButton } from "react-native-paper";  // Correctly importing the IconButton component

const dummyData = [
  { id: "01", title: "Wash Car" },
  { id: "02", title: "Read A Book" },
];

const TodoScreen = () => {
  const renderTodos = ({ item, index }) => {
    return (
      <View style={{ backgroundColor: "#1e90ff", borderRadius: 6, paddingHorizontal: 6, paddingVertical: 12, marginBottom: 12 }}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800" }}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a task"
      />
      
      {/* Add IconButton inside the return statement */}
      <IconButton
        icon="pencil"
        color="#000"
        size={30}
        onPress={() => {
          console.log('Icon button pressed');
        }}
      />
      
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>

      {/* Render todo list */}
      <FlatList
        data={dummyData}
        renderItem={renderTodos}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  input: {
    borderWidth: 2,
    borderColor: "#1e90ff",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: "#000",
    borderRadius: 6,
    paddingVertical: 8,
    marginVertical: 34,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  todoItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
  },
  todoText: {
    fontSize: 18,
    color: "#333",
  },
});

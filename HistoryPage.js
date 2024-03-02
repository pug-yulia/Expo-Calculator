import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const HistoryPage = ({ history }) => {
  const renderHistoryItem = ({ item }) => (
    <Text style={styles.historyItem}>{item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.history}>History: </Text>
      <FlatList
        data={history}
        renderItem={renderHistoryItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.historyList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  historyList: {
    marginTop: 20,
    width: '100%',
    marginLeft: 30,
  },
  historyItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  history: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default HistoryPage;

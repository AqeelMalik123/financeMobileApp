// src/components/TransactionList.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TransactionItem from './TransactionItem';

export default function TransactionList({ transactions = [] }) {
  return (
    <View style={styles.container}>
      {transactions.map(tx => (
        <TransactionItem
          key={tx.id}
          title={tx.title}
          time={tx.time}
          date={tx.date}
          category={tx.category}
          amount={tx.amount}
          type={tx.type}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingBottom: 20,
  },
});

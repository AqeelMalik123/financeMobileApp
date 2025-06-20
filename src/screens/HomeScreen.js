// src/screens/HomeScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import Header from '../components/Header';
import BalanceOverview from '../components/BalanceOverview';
import SavingsCard from '../components/SavingsCard';
import SegmentControl from '../components/SegmentControl';
import TransactionList from '../components/TransactionList';
import colors from '../theme/colors';

export default function HomeScreen() {
  const [selectedSegment, setSelectedSegment] = useState('Monthly');

  // Example transaction data
  const transactions = [
    {
      id: '1',
      title: 'Salary',
      time: '18:27',
      date: 'April 30',
      category: 'Monthly',
      amount: 4000.0,
      type: 'income',
    },
    {
      id: '2',
      title: 'Groceries',
      time: '17:00',
      date: 'April 24',
      category: 'Pantry',
      amount: -100.0,
      type: 'expense',
    },
    {
      id: '3',
      title: 'Rent',
      time: '8:30',
      date: 'April 15',
      category: 'Rent',
      amount: -674.4,
      type: 'expense',
    },
    // ...more if desired
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.greenPrimary}
      />
      <Header userName="Hi, Welcome Back" greeting="Good Morning" />
      <BalanceOverview
        totalBalance={7783.0}
        totalExpense={-1187.4}
        goal={20000}
        percent={30}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <SavingsCard
          percent={30}
          revenueLastWeek={4000.0}
          expenseLastWeek={-100.0}
        />
        <SegmentControl
          options={['Daily', 'Weekly', 'Monthly']}
          selected={selectedSegment}
          onSelect={setSelectedSegment}
        />
        <TransactionList transactions={transactions} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.greenPrimary,
  },
  balanceOverview: {
    backgroundColor: colors.greenPrimary,
  },
  scrollContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    paddingBottom: 100, // space for bottom tab
  },
});

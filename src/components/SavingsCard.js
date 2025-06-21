// src/components/SavingsCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import CircularProgress from './CircularProgress';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SavingsCard({ percent, revenueLastWeek, expenseLastWeek }) {
  const formatCurrency = num => {
    const abs = Math.abs(num).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const sign = num < 0 ? '-' : '';
    return `${sign}$${abs}`;
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.left}>
          <CircularProgress size={70} strokeWidth={4} percent={percent}>
            <Icon name="car" size={24} color={colors.black} />
          </CircularProgress>
          <Text style={styles.savingsText}>Savings{'\n'}On Goals</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.right}>
          <View style={styles.row}>
            <Icon name="cash-multiple" size={20} color={colors.black} />
            <View style={styles.textGroup}>
              <Text style={styles.smallLabel}>Revenue Last Week</Text>
              <Text style={styles.amount}>{formatCurrency(revenueLastWeek)}</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.row}>
            <Icon name="silverware-fork-knife" size={20} color={colors.black} />
            <View style={styles.textGroup}>
              <Text style={styles.smallLabel}>Food Last Week</Text>
              <Text style={[styles.amount, { color: expenseLastWeek < 0 ? colors.blueAccent : colors.black }]}>
                {formatCurrency(expenseLastWeek)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  innerContainer: {
    backgroundColor: colors.greenPrimary,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  left: {
    alignItems: 'center',
    // width: 90,
   
  },
  savingsText: {
    color: colors.black,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },
  divider: {
    width: 1,
    backgroundColor: colors.white,
    height: '80%',
    marginHorizontal: 16,
  },
  right: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textGroup: {
    marginLeft: 8,
  },
  smallLabel: {
    color: colors.black,
    fontSize: 12,
  },
  amount: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 2,
  },
  separator: {
    height: 1,
    backgroundColor: colors.white,
    marginVertical: 8,
  },
});

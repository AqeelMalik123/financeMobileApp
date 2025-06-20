import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

const ProgressBar = ({ percentage, amount }) => {
  return (
    <View style={styles.container}>
     
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressFill, { width: `${percentage}%` }]}>
          <Text style={styles.percentageText}>{percentage}%</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>${amount.toFixed(2)}</Text>
        </View>
      </View>

      
      <Text style={styles.description}>
         {percentage}% Of Your Expenses Looks Good
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  
  },
  progressBarContainer: {
    flexDirection: 'row',
    height: 25,
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
  },
  progressFill: {
    backgroundColor: '#002020',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  percentageText: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  amountContainer: {
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
  },
  amountText: {
    fontWeight: 'bold',
  },
  description: {
    marginTop: 8,
    color: colors.black,
   
  },
});

export default ProgressBar;

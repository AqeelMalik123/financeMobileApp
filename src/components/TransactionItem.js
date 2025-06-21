
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TransactionItem({ title, time, date, category, amount }) {
  
  const iconProps = {
    Salary: 'cash',
    Groceries: 'cart',
    Rent: 'home-outline',
   
  };
  const iconName = iconProps[title] || 'receipt';
  const isExpense = amount < 0;
  const formattedAmount = `${isExpense ? '-' : ''}$${Math.abs(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        
        <View style={styles.iconContainer}>
          <Icon name={iconName} size={22} color={colors.white} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{`${time} - ${date}`}</Text>
        </View>
         
      </View>
  <View style={styles.divider} />
      <View style={styles.middle}>
        
        <Text style={styles.category}>{category}</Text>
      </View>
      <View style={{...styles.divider,marginRight:1}} />
      <View style={styles.right}>
        <Text style={[styles.amount, isExpense ? styles.expense : styles.income]}>
          {formattedAmount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 12,
    
  },
  divider: {
      width: 1,
      backgroundColor: colors.greenPrimary,
      height: '77%',
      marginTop:5,
      
      
     
      // marginVertical: 10,
    },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 15,
backgroundColor:'#ADD8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.black,
  },
  time: {
    fontSize: 12,
    color: colors.blueAccent,
    marginTop: 2,
  },
  middle: {
    flex: 1,
    alignItems: 'center',
  },
  category: {
    fontSize: 14,
    color: colors.grayText,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: '500',
  },
  expense: {
    color: colors.blueAccent,
  },
  income: {
    color: colors.black,
  },
});


import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function SegmentControl({ options = [], selected, onSelect }) {
  return (
    <View style={styles.container}>
      {options.map(option => {
        const isActive = option === selected;
        return (
          <TouchableOpacity
            key={option}
            style={[
              styles.segment,
              isActive ? styles.activeSegment : null
            ]}
            onPress={() => onSelect(option)}
          >
            <Text style={[
              styles.segmentText,
              isActive ? styles.activeText : styles.inactiveText
            ]}>
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.toggleBg,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 20,
    overflow: 'hidden',
  },
  segment: {
    flex: 1,
    // paddingVertical: 10,
    padding:10,
      borderRadius: 15,
    margin:5,
    alignItems: 'center',
  },
  activeSegment: {
    backgroundColor: colors.greenPrimary,
  },
  segmentText: {
    fontSize: 14,
   
    fontWeight: '500',
  },
  activeText: {
    color: colors.white,
  },
  inactiveText: {
    color: colors.grayText,
  },
});

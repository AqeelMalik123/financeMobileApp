// src/components/CircularProgress.js
import React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import colors from '../theme/colors';

export default function CircularProgress({ size = 60, strokeWidth = 4, percent = 0, children }) {
 
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percent / 100);

  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
      <Svg width={size} height={size}>
        <Circle
          stroke={colors.white}
          fill="none"
          cx={size/2}
          cy={size/2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={colors.blueAccent} 
          fill="none"
          cx={size/2}
          cy={size/2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          originX={size/2}
          originY={size/2}
        />
      </Svg>
      
      <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
        {children}
      </View>
    </View>
  );
}


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, View, StyleSheet, Platform } from 'react-native';
import colors from '../theme/colors';
import BlankScreen from '../screens/blankScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => {
        const isHome = route.name === 'Home';
        
        let iconName = 'circle';
        if (route.name === 'Home') iconName = 'home-outline';
        else if (route.name === 'Analytics') iconName = 'chart-bar';
        else if (route.name === 'Transfer') iconName = 'swap-horizontal';
        else if (route.name === 'Layers') iconName = 'layers-outline';
        else if (route.name === 'Profile') iconName = 'account-outline';

        return {
          headerShown: false,
          tabBarShowLabel: false,
         
          tabBarButton: (props) => {
            if (isHome) {
              return <TouchableOpacity {...props} />;
            } else {
              
              return (
                <TouchableOpacity
                  {...props}
                  disabled
                  style={props.style}
                />
              );
            }
          },
          tabBarIcon: ({ focused }) => {
            const iconSize =28;
            if (isHome) {
              if (focused) {
               
                return (
                  <View style={styles.focusedIconContainer}>
                    <Icon name={iconName} size={iconSize} color={colors.black} />
                  </View>
                );
              } else {
               
                return <Icon name={iconName} size={iconSize} color={colors.black} />;
              }
            } else {
              
              return <Icon name={iconName} size={iconSize} color={colors.black} />;
            }
          },
          tabBarStyle: styles.tabBar,
        };
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Analytics" component={BlankScreen} />
      <Tab.Screen name="Transfer" component={BlankScreen} />
      <Tab.Screen name="Layers" component={() => null} />
      <Tab.Screen name="Profile" component={() => null} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: colors.lightGreenBg,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 0,
  paddingTop: 20,
  },
  focusedIconContainer: {
    backgroundColor: colors.greenPrimary,
    borderRadius: 30,
    padding: 1,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

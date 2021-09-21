import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import globalColors from '../../presentation/styles/globalColors';
import {
  makeWallet,
  makePortfolio,
  makeInvest,
  makeContent,
  makeProfile,
} from '../factories/app';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Feather from 'react-native-vector-icons/Feather';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const Router: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Content"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: globalColors.primaryColor,
          height: 80,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarInactiveTintColor: globalColors.gray,
        tabBarActiveTintColor: globalColors.white,
        headerStyle: {
          backgroundColor: globalColors.primaryColor,
          elevation: 0,
        },
        headerTintColor: globalColors.white,
        headerTitleAlign: 'center',
        headerRight: () => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <FontAwesome5
              name="shopping-cart"
              size={26}
              color={globalColors.white}
              style={{marginRight: 10}}
            />
            <MaterialIcons
              name="notifications"
              size={26}
              color={globalColors.white}
            />
          </View>
        ),
      }}>
      <Tab.Screen
        name="Wallet"
        component={makeWallet}
        options={{
          tabBarLabel: 'Carteira',
          tabBarIcon: ({color}) => (
            <Ionicons name="wallet-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={makePortfolio}
        options={{
          tabBarLabel: 'Portfólio',
          tabBarIcon: ({color}) => (
            <Entypo name="line-graph" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Invest"
        component={makeInvest}
        options={{
          tabBarLabel: 'Investir',
          tabBarIcon: () => (
            <FontAwesome
              name="dollar"
              color={globalColors.primaryColor}
              size={26}
            />
          ),
          tabBarIconStyle: {
            position: 'absolute',
            bottom: 35,
            borderRadius: 50,
            backgroundColor: globalColors.yellow,
            width: 70,
            height: 70,
          },
          tabBarItemStyle: {
            position: 'relative',
          },
        }}
      />
      <Tab.Screen
        name="Content"
        component={makeContent}
        options={{
          tabBarLabel: 'Conteúdos',
          tabBarIcon: ({color}) => (
            <Feather name="file-text" color={color} size={26} />
          ),
          headerTitle: 'Conteúdos',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={makeProfile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color}) => (
            <FontAwesome name="user-circle-o" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Router;

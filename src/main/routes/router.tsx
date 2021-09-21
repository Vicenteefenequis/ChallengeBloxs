import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import globalColors from '../../presentation/styles/globalColors';
import {
  makeWallet,
  makePortfolio,
  makeInvest,
  makeContent,
  makeProfile,
} from '../factories';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

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
        tabBarInactiveTintColor: globalColors.gray,
        tabBarActiveTintColor: globalColors.white,
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
          tabBarIcon: ({color}) => (
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
            backgroundColor: globalColors.yellow100,
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
          tabBarLabel: 'Conteúdo',
          tabBarIcon: ({color}) => (
            <Feather name="file-text" color={color} size={26} />
          ),
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

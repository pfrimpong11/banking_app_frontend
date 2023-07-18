import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import SignupScreen from './pages/SignupScreen';
import MainScreen from './pages/MainScreen';
import TransferScreen from './pages/TransferScreen';
import TransactionCompleteScreen from './pages/TransactionCompleteScreen';
import MomoScreen from './pages/MomoScreen';
import HistoryScreen from './pages/HistoryScreen';
import BillsScreen from './pages/BillsScreen';
import AboutScreen from './pages/AboutScreen';
import HelpScreen from './pages/HelpScreen';
import ProfileScreen from './pages/ProfileScreen';
import CurrencyConverter from './pages/CurrencyConverter';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} 
          options={{
            title: 'Login',
            headerStyle: {backgroundColor: '#fff',},
            headerTintColor: '#000',
            headerTitleStyle: {fontWeight: 'bold',},
          }} />

        <Stack.Screen name="SignupScreen" component={SignupScreen}
        options={{
          headerShown: true,
          title: 'Register',
          headerStyle: {backgroundColor: '#66B5E1',},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold',},
        }} />

        <Stack.Screen name="MainScreen" component={MainScreen}
        options={{
          headerShown: true,
          title: 'Home',
          headerStyle: {backgroundColor: '#fff',},
          headerTintColor: '#000',
          headerTitleStyle: {fontWeight: 'bold',},
        }} />

        <Stack.Screen name="TransferScreen" component={TransferScreen} 
        options={{
          headerShown: true,
          title: 'Transfer',
          headerStyle: {backgroundColor: '#66B5E1',},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold',},
        }}/>

        <Stack.Screen name="TransactionCompleteScreen" component={TransactionCompleteScreen}
        options={{
          headerShown: true,
          title: 'Status',
          headerStyle: {backgroundColor: '#66B5E1',},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold',},
        }} />

        <Stack.Screen name="MomoScreen" component={MomoScreen}
        options={{
          headerShown: true,
          title: 'MOMO',
          headerStyle: {backgroundColor: '#66B5E1',},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold',},
        }} />

        <Stack.Screen name="HistoryScreen" component={HistoryScreen}
        options={{
          headerShown: true,
          title: 'Transaction History',
          headerStyle: {backgroundColor: '#66B5E1',},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold',},
        }} />

        <Stack.Screen name="BillsScreen" component={BillsScreen}
        options={{
          headerShown: true,
          title: 'Bills',
          headerStyle: {backgroundColor: '#66B5E1',},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold',},
        }} />
        <Stack.Screen name="CurrencyConverter" component={CurrencyConverter}
        options={{
          headerShown: true,
          title: 'Converter',
          headerStyle: {backgroundColor: '#66B5E1',},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold',},
        }} />

        <Stack.Screen name="ProfileScreen" component={ProfileScreen}
        options={{
          headerShown: true,
          title: 'Profile',
          headerStyle: {backgroundColor: '#fff',},
          headerTintColor: '#000',
          headerTitleStyle: {fontWeight: 'bold',},
        }} />

        <Stack.Screen name="HelpScreen" component={HelpScreen}
        options={{
          headerShown: true,
          title: 'Help',
          headerStyle: {backgroundColor: '#fff',},
          headerTintColor: '#000',
          headerTitleStyle: {fontWeight: 'bold',},
        }} />

        <Stack.Screen name="AboutScreen" component={AboutScreen} 
        options={{
          headerShown: true,
          title: 'About',
          headerStyle: {backgroundColor: '#fff',},
          headerTintColor: '#000',
          headerTitleStyle: {fontWeight: 'bold',},
        }} />
        
      </Stack.Navigator>
    );
};

export default AppNavigator;

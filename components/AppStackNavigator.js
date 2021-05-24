import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';


import BookDonateScreen from '../screens/BookDonateScreen';
import RecieverDetailsScreen  from '../screens/RecieverDetailsScreen';

export const AppStackNavigator=createStackNavigtor({
    BookDonateList:{
        screen:BookDonateScreen,
        headerShown:false
    },

    RecieverDetails:{
screen:RecieverDetailsScreen,
headerShown:false
    },
},
    {
        initialRouteName:'BookDonateList'
    }
);
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StoryScreen from '../screens/StoryScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator =()=> {
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name = 'Home' component={TabNavigator}/>
            <Stack.Screen name = 'StoryScreen' component={StoryScreen}/>
            
        </Stack.Navigator>
    )
}

export default StackNavigator;
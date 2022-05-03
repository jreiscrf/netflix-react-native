import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Filme from './src/pages/Filme';
import PaginaFake from './src/pages/PaginaFake';


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return(
        <Tab.Navigator 
            shifting={false} 
            initialRouteName="Home" 
            activeColor={'#fff'} 
            barStyle={{backgroundColor: '#141414'}}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (
                        <Icon name="home" color={color} size={26} />
                    )
                }}
            />

            <Tab.Screen
                name="Buscar"
                component={PaginaFake}
                options={{
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({color}) => (
                        <Icon name="play-speed" color={color} size={26} />
                    )
                }}
            />

                <Tab.Screen
                name="Em Breve"
                component={PaginaFake}
                options={{
                    tabBarLabel: 'Em Breve',
                    tabBarIcon: ({color}) => (
                        <Icon name="home" color={color} size={26} />
                    )
                }}
            />

            <Tab.Screen
                name="Downloads"
                component={PaginaFake}
                options={{
                    tabBarLabel: 'Downloads',
                    tabBarIcon: ({color}) => (
                        <Icon name="download" color={color} size={26} />
                    )
                }}
            />


            <Tab.Screen
                name="Mais"
                component={PaginaFake}
                options={{
                    tabBarLabel: 'Mais',
                    tabBarIcon: ({color}) => (
                        <Icon name="menu" color={color} size={26} />
                    )
                }}
            />
        </ Tab.Navigator>
    );
};


const Routes = () => {
    return(
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen 
                        options={{headerShown: false}} 
                        name="Login" 
                        component={Login}
                    />
                    <Stack.Screen 
                        options={{headerShown: false}} 
                        name="Home" 
                        component={HomeTabs}
                    />               
                    <Stack.Screen 
                        options={{headerShown: false}} 
                        name="Filme" 
                        component={Filme}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Routes;
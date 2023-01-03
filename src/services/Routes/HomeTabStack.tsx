import React from "react";

import { View, Image } from "react-native-animatable";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { Search } from "../../pages/Search";
import { PageLivro } from "../../pages/Livro";
import { Friends } from "../../pages/Friends";
import { BemVindo } from "../../pages/BemVindo";
import { Cadastro } from "../../pages/Cadastro";
import { Settings } from "../../pages/Settings";
import { BookDetails } from "../../pages/BookDetails";
import { CadastroLivro } from "../../pages/CadastroLivro";
import { RecuperarSenha } from "../../pages/RecuperarSenha";
import { Usuario } from "../../pages/Usuario";

import { DataProvider } from "../../context/DataContext";

import AddButton from "../../components/Button";
import { ISBN } from "../../components/Isbn/ISBN";
import { AddButtonAnimated } from "../../components/Button";

function HomeTabStack() {
    const Stack = createStackNavigator();
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name="BemVindo"
                    component={BemVindo}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={MyTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RecuperarSenha"
                    component={RecuperarSenha}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ISBN"
                    component={ISBN}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Friends"
                    component={Friends}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PageLivro"
                    component={PageLivro}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CadastroLivro"
                    component={CadastroLivro}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BookDetails"
                    component={BookDetails}
                    options={{ headerShown: false }}
                />
                   <Stack.Screen
                    name="Usuario"
                    component={Usuario}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2a8894",
        tabBarInactiveTintColor: "#211F1F",
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingBottom: 2,
        },
      }}
    >
      <Tab.Screen
        name="HomeTabScreen"
        component={Home}
        options={{
          title: 'Home',
          tabBarAccessibilityLabel: "Clique para ir para a tela inicial.",
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/icons/casinha.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#2a8894" : "#211F1F",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Livros"
        component={Search}
        options={{
          tabBarAccessibilityLabel: "Clique para ir procurar um novo livro.",
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/icons/livrinho.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#2a8894" : "#211F1F",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ADD"
        component={AddButtonAnimated}
        options={{
          title: "",
          tabBarIcon: ({}) => <AddButton />,
        }}
      />
      <Tab.Screen
        name="Amigos"
        component={Friends}
        options={{
          tabBarAccessibilityLabel: "Clique para ir para a página cadastro amigos.",
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/icons/add-friend.png")}
                resizeMode="contain"
                style={{
                  width: 43,
                  height: 43,
                  tintColor: focused ? "#2a8894" : "#211F1F",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={Settings}
        options={{
          tabBarAccessibilityLabel: "Clique para ir para as configurações.",
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/icons/engrenagem.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#2a8894" : "#211F1F",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function Routes() {
  return (
    <>
      <DataProvider>
        <NavigationContainer>
          <HomeTabStack />
        </NavigationContainer>
      </DataProvider>
    </>
  );
}

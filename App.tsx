import React from "react";

import { Routes } from "./src/services/Routes/HomeTabStack";

import { StatusBar } from "expo-status-bar";

export default function App() {
    return (
        <>
            <StatusBar />
            <Routes />
        </>
    );
}

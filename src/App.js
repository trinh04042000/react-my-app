import React from 'react';
import Routes from "./routes/index";
import {AuthProvider} from "./contexts/authContext"
export default function App() {
  return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
  );
}
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MultiStepModelProvider from "./providers/multi-step-model-provider";
import MultiStepForm from './components/multi-step-form';
import UserDetails from './components/Home';
import LegalAgreements from './components/GenerateWallet';
import Dashboard from './components/Dashboard';

function App() {
  const navigate = useNavigate();

  const submit = (data) => {
    console.log('Form Submit');
    console.log('Data:', data);
    // Redirect to dashboard page
    navigate('/dashboard');
  }

  return (
    <div className="bg-zinc-900 w-[100vw] relative h-screen text-zinc-50 flex flex-col py-10">
      <Navbar />

      <MultiStepModelProvider>
        <MultiStepForm
          steps={[
            <UserDetails />,
            <LegalAgreements />,
          ]}
          submit={submit}
        />
      </MultiStepModelProvider>

      <Footer />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

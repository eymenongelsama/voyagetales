import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import TravelOptions from './components/home/TravelOptions';
import CriteriaSection from './components/criteria/CriteriaSection';
import AuthForm from './components/auth/AuthForm';
import { UserPreferences } from './types';
import { NavigationStep } from './types/navigation';

function App() {
  const [step, setStep] = useState<NavigationStep>('auth');
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);

  const handlePreferencesComplete = (prefs: UserPreferences) => {
    setPreferences(prefs);
    setStep('criteria');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar currentStep={step} onNavigate={setStep} />
      <main className="flex-1">
        {step === 'auth' && (
          <AuthForm />
        )}
        {step === 'options' && (
          <TravelOptions onComplete={handlePreferencesComplete} />
        )}
        {step === 'criteria' && (
          <CriteriaSection />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
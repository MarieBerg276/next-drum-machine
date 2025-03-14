'use client'
import React from 'react';

const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  function toggleEnableSound() {
    setSoundEnabled(!soundEnabled)
  }

  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, toggleEnableSound }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export function useSoundEnabled() {
  const data = React.useContext(
    SoundEnabledContext
  );

  if (!data) {
    throw new Error(
      'Cannot consume SoundEnabled context without a SoundEnabledProvider'
    );
  }

  return data;
}

export default SoundEnabledProvider;
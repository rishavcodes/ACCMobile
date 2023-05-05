import { createContext, useState } from 'react';

const ThemeContext = createContext({
    setRole: () => {},
    role: "#F83E7D",
  });

export default ThemeContext;
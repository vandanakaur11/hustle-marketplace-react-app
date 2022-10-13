import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [currentSteps, setCurrentSteps] = useState(0);
  const [registerSteps,setRegisterSteps]=useState(0);

  return (
    <CounterContext.Provider
      value={{ currentSteps, setCurrentSteps, registerSteps, setRegisterSteps }}
    >
      {children}
    </CounterContext.Provider>
  );
};

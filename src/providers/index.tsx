import { createContext, ReactNode, useContext, useState } from "react";

type TTopTabContext = {
  TopTabValues: { index: number };
  setTopTabValues: Function;
};
const TopTabContext = createContext({ TopTabValues: {} } as TTopTabContext);

const TopTabProvider = ({ children, ...props }: { children: ReactNode }) => {
  const [TopTabValues, setTopTabValues] = useState({ index: 0 });

  return (
    <TopTabContext.Provider
      value={{ TopTabValues, setTopTabValues }}
      {...props}
    >
      {children}
    </TopTabContext.Provider>
  );
};

export const useTopTabContext = () => {
  const { TopTabValues, setTopTabValues } = useContext(TopTabContext);

  return { TopTabValues, setTopTabValues, TopTabProvider };
};

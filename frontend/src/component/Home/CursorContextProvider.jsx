import React, { createContext, useState } from "react";
import Home from "./Home";

export const CursorContext = createContext();

const CursorContextProvider = () => {
  const [cursor, setCursor] = useState({ active: false });

  return (
    <CursorContext.Provider value={[cursor, setCursor]}>
      {Home}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
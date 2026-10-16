import { createContext } from "react";

export const UserContext = createContext({ state: null, dispatch: () => {}, authChecked: false });

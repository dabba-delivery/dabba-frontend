import React from "react";
import { IBinContext } from "./components/types";

export const BinContext = React.createContext<Partial<IBinContext>>({});

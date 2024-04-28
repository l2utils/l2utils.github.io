import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";
import { BreadcrumbItems } from "./types";

interface Context {
  items: BreadcrumbItems;
  setItems: Dispatch<SetStateAction<BreadcrumbItems>>;
}

export const BreadcrumbsContext = createContext<Context>({
  items: [],
  setItems: () => {},
});

export default function BreadcrumbsProvider({children}: PropsWithChildren) {
  const [items, setItems] = useState<BreadcrumbItems>([
    { text: 'Home', href: '/' },
  ]);

  return <BreadcrumbsContext.Provider value={{items, setItems}}>
    {children}
  </BreadcrumbsContext.Provider>
}

import { useContext, useLayoutEffect } from "react";
import { BreadcrumbsContext } from "./provider";
import { BreadcrumbItem } from "./types";

export default function Breadcrumb(item: BreadcrumbItem) {
  const {setItems} = useContext(BreadcrumbsContext);

  useLayoutEffect(() => {
    setItems((items) => [...items, item]);

    return () => {
      setItems((items) => items.slice(0, -1));
    }
  }, [item, setItems]);

  return null;
}

import { useContext } from "react";
import { BreadcrumbsContext } from "./provider";
import { BreadcrumbGroup } from "@cloudscape-design/components";
import { useRouter } from "next/navigation";

export default function Breadcrumbs() {
  const {items} = useContext(BreadcrumbsContext);
  const router = useRouter();

  return (
    <BreadcrumbGroup items={items} onFollow={(e) => {
      e.preventDefault();
      router.push(e.detail.href);
    }} />
  )
}

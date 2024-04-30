import Breadcrumb from "@/components/breadcrumbs/breadcrumb";
import { PropsWithChildren } from "react";

export default function DatabaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Breadcrumb text="Database" href="/database" />
      {children}
    </>
  );
}

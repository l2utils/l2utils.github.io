import Breadcrumb from "@/components/breadcrumbs/breadcrumb";
import { PropsWithChildren } from "react";

export default function CalculatorsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Breadcrumb text="Calculators" href="/calculators" />
      {children}
    </>
  );
}

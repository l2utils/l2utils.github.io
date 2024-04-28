'use client';
import Breadcrumb from "@/components/breadcrumbs/breadcrumb";
import CommonAppLayout from "@/components/common-app-layout";
import { PropsWithChildren } from "react";

export default function DatabaseLayout({children}: PropsWithChildren) {
  return (
    <CommonAppLayout>
      <Breadcrumb text='Database' href='/database' />
      {children}
    </CommonAppLayout>
  );
}

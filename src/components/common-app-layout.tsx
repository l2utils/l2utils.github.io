"use client";
import {
  AppLayout,
  ContentLayout,
  Header,
} from "@cloudscape-design/components";
import I18nProvider from "@cloudscape-design/components/i18n";
import messages from "@cloudscape-design/components/i18n/messages/all.all";
import { PropsWithChildren, useState } from "react";
import Navigation from "./navigation";
import BreadcrumbsProvider from "./breadcrumbs/provider";
import Breadcrumbs from "./breadcrumbs";

interface CommonAppLayoutProps {}

export default function CommonAppLayout({
  children,
}: PropsWithChildren<CommonAppLayoutProps>) {
  const [navigationOpen, setNavigationOpen] = useState(true);

  return (
    <I18nProvider locale="en" messages={[messages]}>
      <BreadcrumbsProvider>
        <AppLayout
          contentType="form"
          breadcrumbs={<Breadcrumbs />}
          navigation={<Navigation />}
          navigationOpen={navigationOpen}
          onNavigationChange={(e) => setNavigationOpen(e.detail.open)}
          toolsHide={true}
          content={children}
        />
      </BreadcrumbsProvider>
    </I18nProvider>
  );
}

import { AppLayout, ContentLayout, Header } from "@cloudscape-design/components";
import I18nProvider from "@cloudscape-design/components/i18n";
import messages from "@cloudscape-design/components/i18n/messages/all.all";
import { PropsWithChildren, useState } from "react";
import Navigation from "./navigation";
import BreadcrumbsProvider from "./breadcrumbs/provider";
import Breadcrumbs from "./breadcrumbs";

interface CommonAppLayoutProps {
  activeHref: string;
}

export default function CommonAppLayout({activeHref, children}: PropsWithChildren<CommonAppLayoutProps>) {
  const [navigationOpen, setNavigationOpen] = useState(true);

  return (
    <I18nProvider locale="en" messages={[messages]}>
      <BreadcrumbsProvider>
        <AppLayout
          breadcrumbs={<Breadcrumbs />}
          navigation={<Navigation activeHref={activeHref} />}
          navigationOpen={navigationOpen}
          onNavigationChange={(e) => setNavigationOpen(e.detail.open)}
          toolsHide={true}
          content={
            <ContentLayout header={
              <Header variant="h1" description="Welcome to L2Utils, home of all Lineage 2 related utilities.">L2Utils</Header>
            }>{children}</ContentLayout>
          }
        />
      </BreadcrumbsProvider>
    </I18nProvider>
  );
}

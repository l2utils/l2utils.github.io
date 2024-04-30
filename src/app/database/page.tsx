"use client";
import { ContentLayout } from "@cloudscape-design/components";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";

export default function Database() {
  return (
    <ContentLayout header={<Header variant="h1">Database</Header>}>
      <Container>Database of skills, items...etc., coming soon!</Container>
    </ContentLayout>
  );
}

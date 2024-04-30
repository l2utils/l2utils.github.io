'use client';
import { ContentLayout } from '@cloudscape-design/components';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';

export default function Home() {
  return (
    <ContentLayout header={
      <Header variant="h1" description="Welcome to L2Utils, home of all Lineage 2 related utilities.">L2Utils</Header>
    }>
      <Container header={<Header variant='h2'>Welcome</Header>}>
        Coming soon :)
      </Container>
    </ContentLayout>
  )
}

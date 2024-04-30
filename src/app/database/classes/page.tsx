'use client';
import Breadcrumb from '@/components/breadcrumbs/breadcrumb';
import { ContentLayout } from '@cloudscape-design/components';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';

export default function Classes() {
  return (
    <ContentLayout header={<Header variant="h1">Classes</Header>}>
      <Breadcrumb text='Classes' href='/database/classes' />
      <SpaceBetween size="m">
        <Container>
          Classes, coming soon!
        </Container>
      </SpaceBetween>
    </ContentLayout>
  )
}

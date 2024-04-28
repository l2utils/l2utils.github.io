'use client';
import Breadcrumb from '@/components/breadcrumbs/breadcrumb';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';

export default function Classes() {
  return (
    <>
      <Breadcrumb text='Classes' href='/database/classes' />
      <SpaceBetween size="m">
        <Container header={<Header variant="h2">Classes</Header>}>
          Classes, coming soon!
        </Container>
      </SpaceBetween>
    </>
  )
}

'use client';
import Breadcrumb from '@/components/breadcrumbs/breadcrumb';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';

export default function Calculators() {
  return (
    <>
      <Breadcrumb text='Calculators' href='/calculators' />
      <SpaceBetween size="m">
        <Container header={<Header variant="h2">Calculators!</Header>}>
            Calculators, coming soon!
        </Container>
      </SpaceBetween>
    </>
  )
}

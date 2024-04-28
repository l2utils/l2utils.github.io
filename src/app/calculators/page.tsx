'use client';
import CommonAppLayout from '@/components/common-app-layout';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';

export default function Home() {
  return (
    <CommonAppLayout activeHref='/calculators'>
      <SpaceBetween size="m">
        <Header variant="h2">Calculators!</Header>
        <Container>
            Calculators, coming soon!
        </Container>
      </SpaceBetween>
    </CommonAppLayout>
  )
}
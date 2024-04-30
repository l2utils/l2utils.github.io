'use client';
import Breadcrumb from '@/components/breadcrumbs/breadcrumb';
import { ContentLayout } from '@cloudscape-design/components';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';

export default function Calculators() {
  return (
    <ContentLayout header={<Header variant="h1">Calculators!</Header>}>
        <Container>
            Calculators, coming soon!
        </Container>
    </ContentLayout>
  )
}

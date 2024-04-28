'use client';
import CommonAppLayout from '@/components/common-app-layout';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState('');

  return (
    <CommonAppLayout>
      <SpaceBetween size="m">
        <Header variant="h2">Hello World!</Header>
        <Container>
          Coming soon :)
        </Container>
      </SpaceBetween>
    </CommonAppLayout>
  )
}

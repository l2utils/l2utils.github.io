'use client';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';

export default function Home() {
  return (
    <SpaceBetween size="m">
      <Header variant="h2">Hello World!</Header>
      <Container>
        Coming soon :)
      </Container>
    </SpaceBetween>
  )
}

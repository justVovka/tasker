import React, { Suspense } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Container } from './components/Blocks/Container';
import { Header } from './components/Blocks/Header/Header';
import { Footer } from './components/Blocks/Footer/Footer';

const Board = React.lazy(() => import('./components/Board/Board'));

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyles />
      <Container>
        <Header />
        <Board />
        <Footer />
      </Container>
    </Suspense>
  );
}

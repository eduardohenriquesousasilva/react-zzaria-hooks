import './App.css';

import React, { Suspense, useState } from 'react';

const Link = React.lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve(import('./components/Link'));
  }, 2000);
}));

const Image = React.lazy(() => import('./components/Image'));
const Content = React.lazy(() => import('./components/Content'));

function App() {
  const [products, setProducts] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setProducts({});
  }

  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <div className="App">
        <header className="App-header">
          <Image />
          <Content />
          <Suspense fallback={<h1> Carregando Link.. </h1>}>
            <Link callback={handleClick} />
          </Suspense>
        </header>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
}

export default App;

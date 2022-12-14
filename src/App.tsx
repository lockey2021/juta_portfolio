// App.tsx
import React from 'react'
import MyFirstComponent from './components/example/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent';
import ClickCount from './components/example/clickCount';
import Footer from './components/footer/footer';

const App: React.FC = () => {
  return (
    <div>
      <MyFirstComponent />
      <SomeExampleComponent />
      <ClickCount />
      <Footer />
    </div>
  )
}

export default App
import React from 'react';

function App() {
  const data = { name: 'Andres', message: 'Bienvenido' };
  const { name, message } = data;

  return(
    <div>
      <h1>{message} {name}</h1>
    </div>
  )
}

export default App;
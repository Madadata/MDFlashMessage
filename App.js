import React from 'react';
import MDFlashMessage from './src/MDFlashMessage.jsx';

const App = () => (
  <div>
    <MDFlashMessage
      message="This is a md-flash-message react component designed by Madadata."
      timeout={10000}
    />
  </div>
);

export default App;

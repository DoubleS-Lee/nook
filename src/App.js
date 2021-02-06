import React from 'react';
import UseClickApp from './UseClick';
import UseInputApp from './UseInput';
import UseTabsApp from './UseTabs';
import UseTitleApp from './UseTitle';

function App() {
  return (
    <>
      <UseInputApp />
      <div>------------------------------------------------------------</div>
      <UseTabsApp />
      <div>------------------------------------------------------------</div>
      <UseTitleApp />
      <div>------------------------------------------------------------</div>
      <UseClickApp />
      <div>------------------------------------------------------------</div>
    </>
  );
}

export default App;

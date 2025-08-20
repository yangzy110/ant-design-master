import React from 'react';
import { PortalLayout } from 'antd';

const App: React.FC = () => {
  return (
    <div style={{ minHeight: '400px', border: '1px solid #d9d9d9' }}>
      <PortalLayout type={'basic'}>12345</PortalLayout>
    </div>
  );
};

export default App;

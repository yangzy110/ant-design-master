import React, { useState } from 'react';
import { PortalLayout, Button, Space } from 'antd';


const App: React.FC = () => {
  const [type, setType] = useState<'basic' | 'stone' | 'tree'>('basic');

  return (
    <div style={{ minHeight: '400px', border: '1px solid #d9d9d9' }}>
      <PortalLayout type={type}>
        <Space>
          <Button
            type={type === 'basic' ? 'primary' : 'default'}
            onClick={() => setType('basic')}
          >
            Basic
          </Button>
          <Button
            type={type === 'stone' ? 'primary' : 'default'}
            onClick={() => setType('stone')}
          >
            Stone
          </Button>
          <Button
            type={type === 'tree' ? 'primary' : 'default'}
            onClick={() => setType('tree')}
          >
            Tree
          </Button>
        </Space>
      </PortalLayout>
    </div>
  );
};

export default App;

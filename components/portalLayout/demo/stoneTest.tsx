import React from 'react';
import { PortalLayout } from 'antd';

const App: React.FC = () => {
  // 顶部菜单内容
  const topMenuContent = (
    <div style={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
      <div style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '20px' }}>
        Stone 布局系统
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '500px', border: '1px solid #d9d9d9' }}>
      <PortalLayout
        type="stone"
        topMenu={topMenuContent}
        // left={leftMenuContent}
        leftWidth={250}
        collapsible={true}
        defaultCollapsed={false}
      >
        <div style={{ padding: '20px' }}>
          <h1 style={{ marginTop: 0, color: '#333' }}>Stone 布局示例</h1>
        </div>
      </PortalLayout>
    </div>
  );
};

export default App;

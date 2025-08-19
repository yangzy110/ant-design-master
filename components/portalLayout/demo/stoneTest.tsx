import React from 'react';
import { PortalLayout } from 'antd';


const App: React.FC = () => {


  return (
    <div style={{ minHeight: '500px', border: '1px solid #d9d9d9' }}>
      <PortalLayout
        type="stone"
        topMenu={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>顶部菜单栏</span>
          </div>
        }
        left={
          <div style={{ padding: '16px' }}>
            <h3>左侧菜单</h3>
            <p>菜单项1</p>
            <p>菜单项2</p>
            <p>菜单项3</p>
          </div>
        }
      >
        <div>
          <h2>主要内容区域</h2>
          <p>这是stone布局的主要内容区域</p>
          <p>顶部有50px的菜单栏</p>
          <p>左侧有250px的白色菜单栏（可收缩和拉伸）</p>
          <p>右侧是灰色的内容区域</p>
        </div>
      </PortalLayout>
    </div>
  );
};

export default App;

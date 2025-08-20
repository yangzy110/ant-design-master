import React from 'react';
import { PortalLayout } from 'antd';

const App: React.FC = () => {
  // 顶部菜单内容
  const topMenuContent = (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '20px' }}>
          Tree 布局工作台
        </span>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span style={{ cursor: 'pointer', color: '#1890ff' }}>概览</span>
          <span style={{ cursor: 'pointer' }}>分析</span>
          <span style={{ cursor: 'pointer' }}>报告</span>
        </div>
      </div>
      <div style={{ color: '#666' }}>欢迎使用 Tree 布局</div>
    </div>
  );

  // 第一菜单内容（左侧窄菜单）
  const firstMenuContent = (
    <div
      style={{
        padding: '16px 8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <div
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#1890ff',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        🏠
      </div>
      <div
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        📊
      </div>
      <div
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        ⚙️
      </div>
      <div
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        👤
      </div>
    </div>
  );

  // 第二菜单内容
  const secondMenuContent = (
    <div style={{ padding: '16px' }}>
      <h4 style={{ margin: '0 0 16px 0', color: '#333' }}>模块导航</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div
          style={{
            padding: '10px 12px',
            backgroundColor: '#e6f7ff',
            borderLeft: '3px solid #1890ff',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          仪表盘
        </div>
        <div
          style={{
            padding: '10px 12px',
            cursor: 'pointer',
            fontSize: '14px',
            borderRadius: '4px',
          }}
        >
          数据分析
        </div>
        <div
          style={{
            padding: '10px 12px',
            cursor: 'pointer',
            fontSize: '14px',
            borderRadius: '4px',
          }}
        >
          实时监控
        </div>
        <div
          style={{
            padding: '10px 12px',
            cursor: 'pointer',
            fontSize: '14px',
            borderRadius: '4px',
          }}
        >
          报表中心
        </div>
        <div
          style={{
            padding: '10px 12px',
            cursor: 'pointer',
            fontSize: '14px',
            borderRadius: '4px',
          }}
        >
          系统配置
        </div>
      </div>

      <div style={{ marginTop: '24px' }}>
        <h4 style={{ margin: '0 0 16px 0', color: '#333' }}>快捷操作</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button
            type="button"
            style={{
              padding: '8px 12px',
              border: '1px solid #d9d9d9',
              borderRadius: '4px',
              backgroundColor: '#fff',
              cursor: 'pointer',
              fontSize: '12px',
            }}
          >
            《》
          </button>
          <button
            type="button"
            style={{
              padding: '8px 12px',
              border: '1px solid #d9d9d9',
              borderRadius: '4px',
              backgroundColor: '#fff',
              cursor: 'pointer',
              fontSize: '12px',
            }}
          >
            数据导入
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '500px', border: '1px solid #d9d9d9' }}>
      <PortalLayout
        type="tree"
        left={firstMenuContent}
        secondMenu={secondMenuContent}
        topMenu={topMenuContent}
        firstCollapsible={true}
        secondCollapsible={true}
      >
        <div style={{ padding: '24px' }}>
          <h1 style={{ marginTop: 0, color: '#333' }}>Tree 布局仪表盘</h1>

          <div style={{ marginBottom: '24px' }}>
            <h2>布局特点：</h2>
            <ul>
              <li>左侧第一栏：深色窄菜单，通常放置图标导航</li>
              <li>左侧第二栏：白色宽菜单，显示详细的子菜单项</li>
              <li>顶部：白色导航栏，显示面包屑或操作按钮</li>
              <li>两个侧边栏都支持独立收缩</li>
              <li>适合复杂的多级导航场景</li>
            </ul>
          </div>

          {/* 数据统计卡片 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            {[
              { title: '总用户数', value: '1,234', color: '#52c41a' },
              { title: '今日访问', value: '5,678', color: '#1890ff' },
              { title: '订单数量', value: '890', color: '#fa541c' },
              { title: '收入金额', value: '¥12,345', color: '#722ed1' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: item.color,
                    marginBottom: '8px',
                  }}
                >
                  {item.value}
                </div>
                <div style={{ color: '#666', fontSize: '14px' }}>{item.title}</div>
              </div>
            ))}
          </div>

          {/* 图表区域 */}
          <div
            style={{
              backgroundColor: '#fff',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ marginTop: 0 }}>数据趋势</h3>
            <div
              style={{
                height: '200px',
                backgroundColor: '#fafafa',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
              }}
            >
              [图表占位区域]
            </div>
          </div>
        </div>
      </PortalLayout>
    </div>
  );
};

export default App;

import React, { useRef, useState, useCallback } from 'react';
import useStyle from './style/TreeLayout';

import { ResizableBox, ResizeCallbackData } from 'react-resizable';
import { Layout, theme } from 'antd';

import { createFromIconfontCN } from '@ant-design/icons';

const { Sider, Content, Header: LayoutHeader } = Layout;
const { useToken } = theme;

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_1168848_e4suvyrbjro.js',
});

// 类型定义
type ResizeHandler = (event: React.SyntheticEvent, data: ResizeCallbackData) => void;

interface TreeLayoutProps {
  secondMenu?: React.ReactNode;
  firstCollapsible?: boolean;
  secondCollapsible?: boolean;
  left?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  leftWidth?: string | number;
  topMenu?: React.ReactNode;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
}

const ProLayout: React.FC<TreeLayoutProps> = () => {
  const { token } = useToken();
  const { styles } = useStyle();
  const [boxWidth, setBoxWidth] = useState<number>(232);
  const [resizing, setResizing] = useState<boolean>(false);
  const originBoxWidthRef = useRef<number>(232);

  const handlerResize: ResizeHandler = (e, { size }) => {
    const { width } = size;
    originBoxWidthRef.current = width;
    setBoxWidth(width);
  };

  const handlerResizeStart = (): void => {
    setResizing(true);
  };

  const handlerResizeStop = (): void => {
    setResizing(false);
  };

  const handleRender = useCallback(
    (handleAxis: string, ref: React.Ref<HTMLDivElement>) => (
      <div
        ref={ref}
        className={`${styles.handleBtn} ${resizing ? styles.handleBtnResizing : ''}`}
        style={{
          left: boxWidth - 2,
          color: resizing ? token.colorText : token.colorTextSecondary,
          backgroundColor: resizing ? `${token.colorPrimary}99` : token.colorBgContainer,
        }}
      >
        <IconFont
          type="suid-font-drag-vertical"
          style={{
            fontSize: '22px',
            color: resizing ? '#fff' : 'inherit',
          }}
        />
      </div>
    ),
    [styles.handleBtn, styles.handleBtnResizing, boxWidth, resizing, token],
  );

  return (
    <section className={styles.portalLayout}>
      <Layout className={styles.app}>
        <Sider
          className={styles.appSider}
          collapsedWidth={44}
          collapsible
          trigger={null}
          width={140}
        >
          侧边栏
        </Sider>
        <Content className={styles.appMain}>
          <Layout className={styles.appLayout}>
            <Sider
              className={styles.menuSider}
              collapsedWidth={0}
              collapsible
              trigger={null}
              width={boxWidth}
              theme="light"
            >
              <ResizableBox
                axis="x"
                width={boxWidth}
                style={{ height: '100%' }}
                minConstraints={[232, Infinity]}
                maxConstraints={[420, Infinity]}
                onResize={handlerResize}
                onResizeStart={handlerResizeStart}
                onResizeStop={handlerResizeStop}
                resizeHandles={['e']}
                handle={handleRender}
              >
                内容侧边
              </ResizableBox>
            </Sider>
            <Content className="app-content-box full-height">
              <Layout className={styles.appLayout}>
                <LayoutHeader className={styles.appHeader}>顶部</LayoutHeader>
                <Content className={styles.mainContent}>内容</Content>
              </Layout>
            </Content>
          </Layout>
          {resizing ? (
            <div className={styles.mask}>
              <div
                className={`${styles.resizeBox} ${styles.resizeBoxResizing}`}
                style={{ left: boxWidth - 2 }}
              />
            </div>
          ) : null}
        </Content>
      </Layout>
    </section>
  );
};

export default ProLayout;

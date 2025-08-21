import React, { useRef, useState, useCallback } from 'react';
import { ResizableBox, ResizeCallbackData } from 'react-resizable';
import useStyle from './style/StoneLayout';

import { Layout, theme } from 'antd';

import { createFromIconfontCN } from '@ant-design/icons';

const { Sider, Content } = Layout;
const { useToken } = theme;

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_1168848_e4suvyrbjro.js',
});

export interface PortalLayoutProps {
  className?: string;
  headerTheme?: 'default' | 'dark' | 'cyan';
  children?: React.ReactNode;
  siderContent?: React.ReactNode;
}

export interface ResizeHandlerProps {
  width: number;
  resizing: boolean;
}

const LAYOUT_CONFIG = {
  MIN_SIDER_WIDTH: 232,
  MAX_SIDER_WIDTH: 420,
  COLLAPSED_WIDTH: 50,
  HEADER_HEIGHT: 56,
} as const;

const PortalLayout: React.FC<PortalLayoutProps> = ({
  className,
  // headerTheme = 'default',
  children,
  siderContent,
}) => {
  const { token } = useToken();
  const { styles } = useStyle();
  const [siderWidth, setSiderWidth] = useState<number>(LAYOUT_CONFIG.MIN_SIDER_WIDTH);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  const originalWidthRef = useRef<number>(LAYOUT_CONFIG.MIN_SIDER_WIDTH);

  const handleResize = useCallback((event: React.SyntheticEvent, data: ResizeCallbackData) => {
    const { width } = data.size;
    originalWidthRef.current = width;
    setSiderWidth(width);
  }, []);

  const handleResizeStart = useCallback(() => {
    setIsResizing(true);
  }, []);

  const handleResizeStop = useCallback(() => {
    setIsResizing(false);
  }, []);

  const renderResizeHandle = useCallback(
    (handleAxis: string, ref: React.Ref<HTMLDivElement>) => (
      <div
        ref={ref}
        className={styles.handle}
        style={{
          left: siderWidth - 2,
          color: isResizing ? token.colorText : token.colorTextSecondary,
          backgroundColor: isResizing ? `${token.colorPrimary}99` : token.colorBgContainer,
        }}
      >
        <IconFont
          type="suid-font-drag-vertical"
          style={{
            fontSize: '22px',
            color: isResizing ? '#fff' : 'inherit',
          }}
        />
      </div>
    ),
    [styles.handle, siderWidth, isResizing, token],
  );

  return (
    <section className={`${styles.container} ${className}`}>
      <header className={styles.header}>{/* Header content */}</header>

      <Layout className={styles.main}>
        <Sider
          className={styles.sider}
          collapsedWidth={LAYOUT_CONFIG.COLLAPSED_WIDTH}
          collapsible
          trigger={null}
          width={siderWidth}
          theme="light"
        >
          <ResizableBox
            axis="x"
            width={siderWidth}
            height={Infinity}
            minConstraints={[LAYOUT_CONFIG.MIN_SIDER_WIDTH, Infinity]}
            maxConstraints={[LAYOUT_CONFIG.MAX_SIDER_WIDTH, Infinity]}
            onResize={handleResize}
            onResizeStart={handleResizeStart}
            onResizeStop={handleResizeStop}
            resizeHandles={['e']}
            handle={renderResizeHandle}
          >
            {siderContent}
          </ResizableBox>
        </Sider>

        <Content className={styles.content}>
          {isResizing && (
            <div className={styles.mask}>
              <div className={styles.resizeBox} style={{ left: siderWidth - 2 }} />
            </div>
          )}
          {children}
        </Content>
      </Layout>
    </section>
  );
};

export default PortalLayout;

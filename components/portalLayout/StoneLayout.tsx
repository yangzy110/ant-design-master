import React, { useRef, useState, useCallback } from 'react';
import { ResizableBox, ResizeCallbackData } from 'react-resizable';
import { Layout, theme } from 'antd';
// import { DragOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;
const { useToken } = theme;

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
  headerTheme = 'default',
  children,
  siderContent,
}) => {
  const { token } = useToken();
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

  const getStyles = useCallback(() => {
    const headerThemes = {
      default: `linear-gradient(90deg, ${token.colorPrimary} 0%, ${token.blue4} 64%, ${token.blue4} 96%)`,
      dark: `linear-gradient(90deg, ${token.colorBgContainer} 0%, ${token.blue9} 100%)`,
      cyan: `linear-gradient(90deg, ${token.cyan6} 0%, ${token.cyan5} 100%)`,
    };

    return {
      container: {
        display: 'flex',
        flexDirection: 'column' as const,
        minWidth: 1200,
        height: '100vh',
        minHeight: 480,
        overflow: 'auto' as const,
      },
      header: {
        position: 'relative' as const,
        zIndex: token.zIndexPopupBase,
        width: '100%',
        height: LAYOUT_CONFIG.HEADER_HEIGHT,
        background: headerThemes[headerTheme],
        boxShadow: token.boxShadow,
      },
      main: {
        position: 'relative' as const,
        height: `calc(100% - ${LAYOUT_CONFIG.HEADER_HEIGHT}px)`,
      },
      sider: {
        zIndex: token.zIndexBase,
        boxShadow: token.boxShadow,
      },
      content: {
        padding: token.paddingXS,
      },
      mask: {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        userSelect: 'none' as const,
      },
      resizeBox: {
        position: 'absolute' as const,
        top: 0,
        zIndex: token.zIndexBase,
        width: 2,
        height: '100%',
        borderLeft: `2px solid ${isResizing ? `${token.colorPrimary}73` : 'transparent'}`,
        left: siderWidth - 2,
      },
      handle: {
        position: 'absolute' as const,
        top: 'calc(40% - 24px)',
        left: siderWidth - 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 12,
        height: 48,
        color: isResizing ? token.colorText : token.colorTextSecondary,
        fontSize: token.fontSizeXL,
        backgroundColor: isResizing ? `${token.colorPrimary}99` : token.colorBgContainer,
        borderRadius: `0 ${token.borderRadius}px ${token.borderRadius}px 0`,
        boxShadow: token.boxShadow,
        cursor: 'ew-resize',
        transition: `all ${token.motionDurationMid}`,
      },
    };
  }, [token, headerTheme, isResizing, siderWidth]);

  const styles = getStyles();

  const renderResizeHandle = useCallback(
    (handleAxis: string, ref: React.Ref<HTMLDivElement>) => (
      <div ref={ref} style={styles.handle}>
        {/* <DragOutlined /> */}
      </div>
    ),
    [styles.handle],
  );

  return (
    <section style={styles.container} className={className}>
      <header style={styles.header}>{/* Header content */}</header>

      <Layout style={styles.main}>
        <Sider
          style={styles.sider}
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

        <Content style={styles.content}>
          {isResizing && (
            <div style={styles.mask}>
              <div style={styles.resizeBox} />
            </div>
          )}
          {children}
        </Content>
      </Layout>
    </section>
  );
};

export default PortalLayout;

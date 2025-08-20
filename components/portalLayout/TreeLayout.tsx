import React, { useRef, useState, CSSProperties, ReactNode } from 'react';
import { ResizableBox, ResizeCallbackData } from 'react-resizable';
import { Layout } from 'antd';
// import { DragOutlined } from '@ant-design/icons';

const { Sider, Content, Header: LayoutHeader } = Layout;

// 类型定义
type ResizeHandler = (event: React.SyntheticEvent, data: ResizeCallbackData) => void;

type HandleRenderFunction = (
  handleAxis: string,
  ref: React.Ref<HTMLDivElement>,
) => React.ReactElement;

interface TreeLayoutProps {
  secondMenu?: ReactNode;
  firstCollapsible?: boolean;
  secondCollapsible?: boolean;
  left?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
  leftWidth?: string | number;
  topMenu?: ReactNode;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
}

// CSS-in-JS 样式
const styles: Record<string, CSSProperties> = {
  portalLayout: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 1200,
    height: 'calc(100vh)',
    minHeight: 480,
    overflow: 'auto',
  },
  app: {
    height: '100%',
  },
  appSider: {
    backgroundColor: 'rgb(var(--s-app-bg-color))',
    height: '100%',
  },
  appMain: {
    position: 'relative',
    height: '100%',
  },
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    userSelect: 'none',
  },
  resizeBox: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
    width: 2,
    height: '100%',
    borderLeft: '2px solid transparent',
  },
  resizeBoxResizing: {
    borderLeftColor: 'rgba(var(--s-primary-color), var(--s-apha45))',
  },
  appLayout: {
    position: 'relative',
    height: '100%',
  },
  appHeader: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    height: 48,
    padding: '0 8px',
    backgroundColor: 'rgb(var(--s-tab-header-bg-color))',
    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.12)',
  },
  menuSider: {
    zIndex: 1,
    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.12)',
    height: '100%',
  },
  handleBtn: {
    position: 'absolute',
    top: 'calc(40% - 24px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 12,
    height: 48,
    color: '#999',
    fontSize: 22,
    backgroundColor: '#fff',
    borderRadius: '0 4px 4px 0',
    boxShadow: '2px 0 8px rgba(0, 0, 0, 0.12)',
    cursor: 'ew-resize',
  },
  handleBtnResizing: {
    color: 'rgb(var(--s-app-text-color))',
    backgroundColor: 'rgba(var(--s-primary-color), var(--s-apha60))',
  },
  mainContent: {
    position: 'relative',
    height: 'calc(100% - 56px)',
    padding: 8,
  },
};

const ProLayout: React.FC<TreeLayoutProps> = () => {
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

  const handleRender: HandleRenderFunction = (handleAxis, ref) => {
    return (
      <div
        ref={ref}
        style={{
          ...styles.handleBtn,
          ...(resizing ? styles.handleBtnResizing : {}),
          left: boxWidth - 2,
        }}
      >
        {/* <DragOutlined /> */}
      </div>
    );
  };

  return (
    <section style={styles.portalLayout}>
      <Layout style={styles.app}>
        <Sider style={styles.appSider} collapsedWidth={44} collapsible trigger={null} width={140}>
          123
        </Sider>
        <Content style={styles.appMain}>
          <Layout style={styles.appLayout}>
            <Sider
              style={styles.menuSider}
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
                123
              </ResizableBox>
            </Sider>
            <Content className="app-content-box full-height">
              <Layout style={styles.appLayout}>
                <LayoutHeader style={styles.appHeader}>1</LayoutHeader>
                <Content style={styles.mainContent}>1</Content>
              </Layout>
            </Content>
          </Layout>
          {resizing ? (
            <div style={styles.mask}>
              <div
                style={{
                  ...styles.resizeBox,
                  ...styles.resizeBoxResizing,
                  left: boxWidth - 2,
                }}
              />
            </div>
          ) : null}
        </Content>
      </Layout>
    </section>
  );
};

export default ProLayout;

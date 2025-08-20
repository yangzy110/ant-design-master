import React, { useState, useRef, useCallback } from 'react';
import { Layout, theme } from 'antd';
import { ResizableBox } from 'react-resizable';
import classNames from 'classnames';
// import { DragOutlined } from '@ant-design/icons';
import { createStyles } from 'antd-style';

const { Sider, Content } = Layout;

const ORIGIN_BOX_WIDTH = 232;
const MIN_WIDTH = 232;
const MAX_WIDTH = 420;
const COLLAPSED_WIDTH = 50;
const HEADER_HEIGHT = 56;

interface ResizeData {
  size: {
    width: number;
    height: number;
  };
}

interface BasicLayoutProps {
  /** 侧边栏内容 */
  siderContent?: React.ReactNode;
  /** 头部内容 */
  headerContent?: React.ReactNode;
  /** 主要内容 */
  children?: React.ReactNode;
  /** 初始侧边栏宽度 */
  defaultSiderWidth?: number;
  /** 是否可调整侧边栏大小 */
  resizable?: boolean;
  /** 侧边栏最小宽度 */
  minSiderWidth?: number;
  /** 侧边栏最大宽度 */
  maxSiderWidth?: number;
}

const useStyles = createStyles(({ token, css }) => ({
  portalLayout: css`
    display: flex;
    flex-direction: row;
    min-width: 1200px;
    height: 100vh;
    min-height: 480px;
    overflow: auto;
    background-color: ${token.colorBgContainer};
  `,

  layoutCenter: css`
    position: relative;
    height: 100%;
    overflow: hidden;
  `,

  sider: css`
    z-index: 1;
    height: 100%;
    box-shadow: ${token.boxShadowSecondary};
    
    .react-resizable {
      height: 100%;
    }
  `,

  handleBtn: css`
    position: absolute;
    top: calc(40% - 24px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 48px;
    color: ${token.colorTextTertiary};
    font-size: 22px;
    background-color: ${token.colorBgContainer};
    border-radius: 0 ${token.borderRadiusSM}px ${token.borderRadiusSM}px 0;
    box-shadow: ${token.boxShadowTertiary};
    cursor: ew-resize;
    transition: all ${token.motionDurationSlow};
    
    &.resizing {
      color: ${token.colorPrimary};
      background-color: ${token.colorPrimaryBg};
    }
  `,

  mainContent: css`
    height: 100%;
    padding: 0;
  `,

  layoutCenterHeader: css`
    height: ${HEADER_HEIGHT}px;
    background-color: ${token.colorBgContainer};
    border-bottom: 1px solid ${token.colorBorderSecondary};
    display: flex;
    align-items: center;
    padding: 0 ${token.padding}px;
  `,

  mask: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    user-select: none;
    z-index: 999;
  `,

  resizeBox: css`
    position: absolute;
    top: 0;
    z-index: 1;
    width: 2px;
    height: 100%;
    border-left: 2px solid transparent;
    
    &.resizing {
      border-left-color: ${token.colorPrimary};
    }
  `,
}));

const BasicLayout: React.FC<BasicLayoutProps> = ({
  siderContent,
  headerContent,
  children,
  defaultSiderWidth = ORIGIN_BOX_WIDTH,
  // resizable = true,
  minSiderWidth = MIN_WIDTH,
  maxSiderWidth = MAX_WIDTH,
}) => {
  const { styles } = useStyles();
  const { token } = theme.useToken();

  const [boxWidth, setBoxWidth] = useState<number>(defaultSiderWidth);
  const [resizing, setResizing] = useState<boolean>(false);
  const originBoxWidthRef = useRef<number>(ORIGIN_BOX_WIDTH);

  const handleResize = useCallback((e: React.SyntheticEvent, data: ResizeData) => {
    const { width } = data.size;
    originBoxWidthRef.current = width;
    setBoxWidth(width);
  }, []);

  const handleResizeStart = useCallback(() => {
    setResizing(true);
  }, []);

  const handleResizeStop = useCallback(() => {
    setResizing(false);
  }, []);

  const renderResizeHandle = useCallback(
    (handleAxis: string, ref: React.Ref<HTMLDivElement>) => (
      <div
        ref={ref}
        style={{ left: boxWidth - 2 }}
        className={classNames(styles.handleBtn, { resizing })}
      >
        {/* <DragOutlined /> */}
      </div>
    ),
    [boxWidth, resizing, styles.handleBtn],
  );

  return (
    <section className={styles.portalLayout}>
      <Layout className={styles.layoutCenter}>
        <Sider
          collapsedWidth={COLLAPSED_WIDTH}
          collapsible
          trigger={null}
          width={boxWidth}
          theme="light"
          className={styles.sider}
        >
          <ResizableBox
            axis="x"
            width={boxWidth}
            height={Infinity}
            style={{ height: '100%' }}
            minConstraints={[minSiderWidth, Infinity]}
            maxConstraints={[maxSiderWidth, Infinity]}
            onResize={handleResize}
            onResizeStart={handleResizeStart}
            onResizeStop={handleResizeStop}
            resizeHandles={['e']}
            handle={renderResizeHandle}
          >
            {/* Sidebar content */}
            <div style={{ padding: token.padding }}>{siderContent || '侧边栏内容'}</div>
          </ResizableBox>
        </Sider>

        <Content className={styles.mainContent}>
          <header className={styles.layoutCenterHeader}>{headerContent || '头部内容'}</header>

          {children}

          {resizing && (
            <div className={styles.mask}>
              <div
                className={classNames(styles.resizeBox, { resizing })}
                style={{ left: boxWidth - 2 }}
              />
            </div>
          )}
        </Content>
      </Layout>
    </section>
  );
};

export default BasicLayout;

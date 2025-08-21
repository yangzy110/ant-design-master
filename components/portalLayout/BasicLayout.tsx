import React, { useState, useRef, useCallback } from 'react';
import { Layout, theme } from 'antd';
import { ResizableBox } from 'react-resizable';
import classNames from 'classnames';
import { createFromIconfontCN } from '@ant-design/icons';
import useStyle from './style/BasicLayout';

const { Sider, Content } = Layout;

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_1168848_e4suvyrbjro.js',
});

const ORIGIN_BOX_WIDTH = 232;
const MIN_WIDTH = 232;
const MAX_WIDTH = 420;
const COLLAPSED_WIDTH = 50;
// const HEADER_HEIGHT = 56;

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

const BasicLayout: React.FC<BasicLayoutProps> = ({
  siderContent,
  headerContent,
  children,
  defaultSiderWidth = ORIGIN_BOX_WIDTH,
  // resizable = true,
  minSiderWidth = MIN_WIDTH,
  maxSiderWidth = MAX_WIDTH,
}) => {
  const { styles } = useStyle();
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
        className={styles.handleBtn}
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
    [styles.handleBtn, boxWidth, resizing, token],
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
            <div style={{ padding: token.padding, color: token.colorWhite }}>
              {siderContent || '侧边栏内容'}
            </div>
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

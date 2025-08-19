import React, { CSSProperties, useState } from 'react';
import classNames from 'classnames';

export type PortalLayoutType = 'basic' | 'stone' | 'tree';

export interface PortalLayoutProps {
  /** 布局类型 */
  type?: PortalLayoutType;
  /** 左侧内容 */
  left?: React.ReactNode;
  /** 右侧内容 */
  right?: React.ReactNode;
  /** 主要内容 */
  children?: React.ReactNode;
  /** 容器类名 */
  className?: string;
  /** 容器样式 */
  style?: CSSProperties;
  /** 左侧栏宽度 */
  leftWidth?: number | string;
  /** 右侧栏宽度 */
  rightWidth?: number | string;
  /** 是否显示分割线 */
  divider?: boolean;
  /** 顶部菜单内容 (basic布局专用) */
  topMenu?: React.ReactNode;
  /** 左侧菜单是否可收缩 (basic布局专用) */
  collapsible?: boolean;
  /** 左侧菜单默认是否收缩 (basic布局专用) */
  defaultCollapsed?: boolean;
  /** 第二个菜单栏内容 (tree布局专用) */
  secondMenu?: React.ReactNode;
  /** 第一个菜单栏是否可收缩 (tree布局专用) */
  firstCollapsible?: boolean;
  /** 第二个菜单栏是否可收缩 (tree布局专用) */
  secondCollapsible?: boolean;
}

const PortalLayout: React.FC<PortalLayoutProps> = ({
  type = 'basic',
  left,
  children,
  className,
  style,
  leftWidth = 250,
  divider = true,
  topMenu,
  collapsible = true,
  defaultCollapsed = false,
  secondMenu,
  firstCollapsible = true,
  secondCollapsible = true,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [firstCollapsed, setFirstCollapsed] = useState(false);
  const [secondCollapsed, setSecondCollapsed] = useState(false);
  const prefixCls = 'ant-portal-layout';

  const containerCls = classNames(
    prefixCls,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-with-divider`]: divider,
      [`${prefixCls}-collapsed`]: collapsed && type === 'basic',
      [`${prefixCls}-first-collapsed`]: firstCollapsed && type === 'tree',
      [`${prefixCls}-second-collapsed`]: secondCollapsed && type === 'tree',
    },
    className,
  );

  // 样式定义
  const getStyles = () => {
    const collapsedWidth = 64;
    const currentLeftWidth = collapsed ? collapsedWidth : leftWidth;

    return {
      container: {
        display: 'flex',
        height: '100vh',
        width: '100%',
        ...style,
      } as CSSProperties,

      leftSidebar: {
        width: currentLeftWidth,
        minWidth: currentLeftWidth,
        maxWidth: collapsed ? collapsedWidth : 400,
        backgroundColor: '#001529',
        transition: 'width 0.2s ease',
        position: 'relative' as const,
        resize: collapsed ? 'none' : 'horizontal' as const,
        overflow: 'hidden',
      } as CSSProperties,

      resizeHandle: {
        position: 'absolute' as const,
        right: 0,
        top: 0,
        bottom: 0,
        width: 4,
        backgroundColor: 'transparent',
        cursor: 'ew-resize',
        zIndex: 1,
      } as CSSProperties,

      rightArea: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column' as const,
        overflow: 'hidden',
      } as CSSProperties,

      topMenu: {
        height: 50,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #f0f0f0',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      } as CSSProperties,

      content: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        overflow: 'auto',
        padding: '16px',
      } as CSSProperties,

      collapseBtn: {
        position: 'absolute' as const,
        right: -12,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 24,
        height: 24,
        backgroundColor: '#ffffff',
        border: '1px solid #d9d9d9',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        zIndex: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      } as CSSProperties,

      // Stone布局专用样式
      stoneContainer: {
        display: 'flex',
        flexDirection: 'column' as const,
        height: '100vh',
        width: '100%',
        ...style,
      } as CSSProperties,

      stoneTopMenu: {
        height: 50,
        backgroundColor: '#001529',
        borderBottom: '1px solid #f0f0f0',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      } as CSSProperties,

      stoneBottomArea: {
        flex: 1,
        display: 'flex',
        overflow: 'hidden',
      } as CSSProperties,

      stoneLeftSidebar: {
        width: currentLeftWidth,
        minWidth: currentLeftWidth,
        maxWidth: collapsed ? collapsedWidth : 400,
        backgroundColor: '#ffffff',
        transition: 'width 0.2s ease',
        position: 'relative' as const,
        resize: collapsed ? 'none' : 'horizontal' as const,
        overflow: 'hidden',
        borderRight: '1px solid #f0f0f0',
      } as CSSProperties,

      stoneContent: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        overflow: 'auto',
        padding: '16px',
      } as CSSProperties,

      // Tree布局专用样式
      treeContainer: {
        display: 'flex',
        height: '100vh',
        width: '100%',
        ...style,
      } as CSSProperties,

      treeFirstMenu: {
        width: firstCollapsed ? 64 : 100,
        minWidth: firstCollapsed ? 64 : 100,
        backgroundColor: '#001529',
        transition: 'width 0.2s ease',
        position: 'relative' as const,
        overflow: 'hidden',
      } as CSSProperties,

      treeSecondMenu: {
        width: secondCollapsed ? 64 : 200,
        minWidth: secondCollapsed ? 64 : 200,
        backgroundColor: '#ffffff',
        borderRight: '1px solid #f0f0f0',
        transition: 'width 0.2s ease',
        position: 'relative' as const,
        overflow: 'hidden',
      } as CSSProperties,

      treeRightArea: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column' as const,
        overflow: 'hidden',
      } as CSSProperties,

      treeTopMenu: {
        height: 50,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #f0f0f0',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      } as CSSProperties,

      treeContent: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        overflow: 'auto',
        padding: '16px',
      } as CSSProperties,

      treeCollapseBtn: {
        position: 'absolute' as const,
        right: -12,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 24,
        height: 24,
        backgroundColor: '#ffffff',
        border: '1px solid #d9d9d9',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        zIndex: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      } as CSSProperties,
    };
  };

  const styles = getStyles();

  const renderLayout = () => {
    switch (type) {
      case 'stone':
        return (
          <div className={containerCls} style={styles.stoneContainer}>
            <header className={`${prefixCls}-top-menu`} style={styles.stoneTopMenu}>
              {topMenu}
            </header>
            <div className={`${prefixCls}-bottom-area`} style={styles.stoneBottomArea}>
              {left && (
                <aside className={`${prefixCls}-left`} style={styles.stoneLeftSidebar}>
                  {left}
                  {!collapsed && <div style={styles.resizeHandle} />}
                  {collapsible && (
                    <button
                      style={styles.collapseBtn}
                      onClick={() => setCollapsed(!collapsed)}
                      title={collapsed ? '展开' : '收起'}
                    >
                      {collapsed ? '»' : '«'}
                    </button>
                  )}
                </aside>
              )}
              <main className={`${prefixCls}-content`} style={styles.stoneContent}>
                {children}
              </main>
            </div>
          </div>
        );

      case 'tree':
        return (
          <div className={containerCls} style={styles.treeContainer}>
            {left && (
              <aside className={`${prefixCls}-first-menu`} style={styles.treeFirstMenu}>
                {left}
                {firstCollapsible && (
                  <button
                    style={styles.treeCollapseBtn}
                    onClick={() => setFirstCollapsed(!firstCollapsed)}
                    title={firstCollapsed ? '展开' : '收起'}
                  >
                    {firstCollapsed ? '»' : '«'}
                  </button>
                )}
              </aside>
            )}
            {secondMenu && (
              <aside className={`${prefixCls}-second-menu`} style={styles.treeSecondMenu}>
                {secondMenu}
                {secondCollapsible && (
                  <button
                    style={styles.treeCollapseBtn}
                    onClick={() => setSecondCollapsed(!secondCollapsed)}
                    title={secondCollapsed ? '展开' : '收起'}
                  >
                    {secondCollapsed ? '»' : '«'}
                  </button>
                )}
              </aside>
            )}
            <div className={`${prefixCls}-right-area`} style={styles.treeRightArea}>
              {topMenu && (
                <header className={`${prefixCls}-top-menu`} style={styles.treeTopMenu}>
                  {topMenu}
                </header>
              )}
              <main className={`${prefixCls}-content`} style={styles.treeContent}>
                {children}
              </main>
            </div>
          </div>
        );

      case 'basic':
      default:
        return (
          <div className={containerCls} style={styles.container}>
            <aside className={`${prefixCls}-left`} style={styles.leftSidebar}>
              {left}
              {!collapsed && <div style={styles.resizeHandle} />}
              {collapsible && (
                <button
                  style={styles.collapseBtn}
                  onClick={() => setCollapsed(!collapsed)}
                  title={collapsed ? '展开' : '收起'}
                >
                  {collapsed ? '»' : '«'}
                </button>
              )}
            </aside>
            <div className={`${prefixCls}-right-area`} style={styles.rightArea}>
              <header className={`${prefixCls}-top-menu`} style={styles.topMenu}>
                {topMenu}
              </header>
              <main className={`${prefixCls}-content`} style={styles.content}>
                {children}
              </main>
            </div>
          </div>
        );
    }
  };

  return renderLayout();
};

export default PortalLayout;

import { CSSProperties } from 'react';

export type PortalLayoutType = 'basic' | 'stone' | 'tree';

export interface BasePortalLayoutProps {
  /** 左侧内容 */
  left?: React.ReactNode;
  /** 主要内容 */
  children?: React.ReactNode;
  /** 容器类名 */
  className?: string;
  /** 容器样式 */
  style?: CSSProperties;
  /** 左侧栏宽度 */
  leftWidth?: number | string;
  /** 是否显示分割线 */
  divider?: boolean;
  /** 顶部菜单内容 */
  topMenu?: React.ReactNode;
  /** 左侧菜单是否可收缩 */
  collapsible?: boolean;
  /** 左侧菜单默认是否收缩 */
  defaultCollapsed?: boolean;
}

export interface BasicLayoutProps extends BasePortalLayoutProps {}

export interface StoneLayoutProps extends BasePortalLayoutProps {}

export interface TreeLayoutProps extends BasePortalLayoutProps {
  /** 第二个菜单栏内容 */
  secondMenu?: React.ReactNode;
  /** 第一个菜单栏是否可收缩 */
  firstCollapsible?: boolean;
  /** 第二个菜单栏是否可收缩 */
  secondCollapsible?: boolean;
}

export interface PortalLayoutProps extends TreeLayoutProps {
  /** 布局类型 */
  type?: PortalLayoutType;
}

import React from 'react';
import classNames from 'classnames';
import { PortalLayoutProps } from './types';
import BasicLayout from './BasicLayout';
import StoneLayout from './StoneLayout';
import TreeLayout from './TreeLayout';

const LayoutComponent: React.FC<{ type: string; [key: string]: any }> = ({ type, ...props }) => {
  switch (type) {
    case 'stone':
      return <StoneLayout {...props} />;
    case 'tree':
      return <TreeLayout {...props} />;
    default:
      return <BasicLayout {...props} />;
  }
};

const PortalLayout: React.FC<PortalLayoutProps> = ({
  type = 'basic',
  divider = true,
  className,
  ...props
}) => {
  const prefixCls = 'ant-portal-layout';

  const containerCls = classNames(
    prefixCls,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-with-divider`]: divider,
    },
    className,
  );

  const renderLayout = () => {
    return (
      <div className={containerCls}>
        <LayoutComponent type={type} {...props} />
      </div>
    );
  };

  return renderLayout();
};

export default PortalLayout;
export type { PortalLayoutProps } from './types';

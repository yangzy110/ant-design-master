import { createStyles } from 'antd-style';

const HEADER_HEIGHT = 56;

export default createStyles(({ token, css }) => ({
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
    background-color: ${token.colorPrimary};
    
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
    font-size: ${token.fontSizeXL}px;
    background-color: ${token.colorBgContainer};
    border-radius: 0 ${token.borderRadiusOuter}px ${token.borderRadiusOuter}px 0;
    box-shadow: ${token.boxShadow};
    cursor: ew-resize;
    transition: all ${token.motionDurationSlow};
    border: 1px solid ${token.colorBorder};
    border-left: none;
    
    &:hover {
      color: ${token.colorText};
      background-color: ${token.colorBgTextHover};
    }
    
    &.resizing {
      color: ${token.colorPrimary};
      background-color: ${token.colorPrimaryBg};
      border-color: ${token.colorPrimary};
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
    padding: 0 ${token.paddingLG}px;
  `,

  mask: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
      background-color: ${token.colorPrimary};
      opacity: 0.1;
    }
  `,
}));

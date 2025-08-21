import { createStyles } from 'antd-style';

export default createStyles(({ token, css }) => ({
  portalLayout: css`
    display: flex;
    flex-direction: column;
    min-width: 1200px;
    height: calc(100vh);
    min-height: 480px;
    overflow: auto;
  `,

  app: css`
    height: 100%;
  `,

  appSider: css`
    background-color: ${token.colorPrimary};
    border-right: 1px solid ${token.colorBorderSecondary};
    height: 100%;
  `,

  appMain: css`
    position: relative;
    height: 100%;
    background-color: ${token.colorBgLayout};
  `,

  mask: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    user-select: none;
  `,

  resizeBox: css`
    position: absolute;
    top: 0;
    z-index: 2;
    width: 2px;
    height: 100%;
    border-left: 2px solid transparent;
  `,

  resizeBoxResizing: css`
    border-left-color: ${token.colorPrimary};
  `,

  appLayout: css`
    position: relative;
    height: 100%;
  `,

  appHeader: css`
    position: relative;
    z-index: 1;
    width: 100%;
    height: ${token.controlHeight * 1.2}px;
    padding: 0 ${token.paddingXS}px;
    background-color: ${token.colorBgContainer};
    border-bottom: 1px solid ${token.colorBorderSecondary};
    box-shadow: ${token.boxShadowTertiary};
  `,

  menuSider: css`
    z-index: 1;
    background-color: ${token.colorBgContainer};
    border-right: 1px solid ${token.colorBorderSecondary};
    box-shadow: ${token.boxShadowTertiary};
    height: 100%;
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
    font-size: ${token.fontSizeLG}px;
    background-color: ${token.colorBgContainer};
    border: 1px solid ${token.colorBorderSecondary};
    border-radius: 0 ${token.borderRadius}px ${token.borderRadius}px 0;
    box-shadow: ${token.boxShadowSecondary};
    cursor: ew-resize;
    transition: all ${token.motionDurationSlow};
  `,

  handleBtnResizing: css`
    color: ${token.colorWhite};
    background-color: ${token.colorPrimary};
    border-color: ${token.colorPrimary};
  `,

  mainContent: css`
    position: relative;
    height: calc(100% - 56px);
    padding: ${token.paddingXS}px;
    background-color: ${token.colorBgLayout};
  `,
}));

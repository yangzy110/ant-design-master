import { createStyles } from 'antd-style';

const LAYOUT_CONFIG = {
  HEADER_HEIGHT: 56,
} as const;

export default createStyles(({ token, css }) => ({
  container: css`
    display: flex;
    flex-direction: column;
    min-width: 1200px;
    height: 100vh;
    min-height: 480px;
    overflow: auto;
  `,

  header: css`
    position: relative;
    z-index: ${token.zIndexPopupBase};
    width: 100%;
    height: ${LAYOUT_CONFIG.HEADER_HEIGHT}px;
    background: ${token.colorPrimary};
    box-shadow: ${token.boxShadow};
  `,

  main: css`
    position: relative;
    height: calc(100% - ${LAYOUT_CONFIG.HEADER_HEIGHT}px);
  `,

  sider: css`
    z-index: ${token.zIndexBase};
    box-shadow: ${token.boxShadow};
  `,

  content: css`
    padding: ${token.paddingXS}px;
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
    background-color: ${token.colorPrimary};
    opacity: 0.1;
  `,

  handle: css`
    position: absolute;
    top: calc(40% - 24px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 48px;
    color: ${token.colorTextSecondary};
    font-size: ${token.fontSizeXL}px;
    background-color: ${token.colorBgContainer};
    border-radius: 0 ${token.borderRadius}px ${token.borderRadius}px 0;
    box-shadow: ${token.boxShadow};
    cursor: ew-resize;
    transition: all ${token.motionDurationMid};

    &:hover {
      color: ${token.colorText};
      background-color: ${token.colorPrimary}99;
    }
  `,
}));

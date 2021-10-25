import styled from "styled-components";
import {
  CommonGridStyle,
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
} from "../../style/commomStyle";

export const DashboardLayoutStyle = styled.main`
  ${CustomContainer};
  ${CommonSpacing};

  margin-top: 9.3rem;

  .title {
    text-align: center;
    font-weight: 900;
    text-transform: uppercase;

    font-size: 3rem;
  }

  .dashboard-body {
    ${CommonGridStyle({ columns: "40.4rem auto", align: "flex-start" })}

    margin-top : 5rem;
  }
`;

export const SidebarStyle = styled.aside`
  background: ${(p) => p.theme.colors.DIM_GRAY_COLOR};

  position: sticky;

  .profile-placeholder {
    position: absolute;
    left: 50%;
    top: -5rem;
    transform: translateX(-50%);

    .profile-image {
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
    }

    .user-status {
      background: ${(p) => p.theme.colors.GREEN_COLOR};
      color: ${(p) => p.theme.colors.WHITE_COLOR};

      position: absolute;
      bottom: 0;
      right: -2rem;

      width: 8rem;
      padding: 0.5rem 1rem;
      border-radius: 5rem;
    }
  }

  .name,
  .dashboard-details {
    text-align: center;
  }

  .name {
    margin-top: 13rem;
    font-weight: 800;
  }

  .dashboard-details {
    ${FlexboxStyle({ justify: "center" })};

    color: ${(p) => p.theme.colors.RICH_BLACK_COLOR};

    .reviews {
      margin-left: 1rem;
    }

    .no {
      margin-right: 0.5rem;
    }
  }

  .navbar-wrapper {
    list-style: none;
    border: none;
    background: none;

    margin-top: 4.3rem;
    padding-left: 7rem;

    .ant-menu-item {
      ${FlexboxStyle({ justify: "flex-start" })};
      padding: 3rem 2rem;

      &.ant-menu-item-selected {
        background: ${(p) => p.theme.colors.LIGHT_ORANGE_COLOR};
      }

      &.ant-menu-item-active {
        background: ${(p) => p.theme.colors.LIGHT_ORANGE_COLOR};
      }

      > svg {
        margin-right: 2rem;
        width: 2.3rem;
        fill: ${(p) => p.theme.colors.PRIMARY_COLOR};
      }

      .ant-menu-title-content {
        font-size: 2rem;

        .nav-item-link {
          color: ${(p) => p.theme.colors.BLACK_COLOR};
        }
      }
    }
  }

  .live-button {
    background: ${(p) => p.theme.colors.PRIMARY_COLOR};
    color: ${(p) => p.theme.colors.WHITE_COLOR};

    padding: 1.5rem;
    width: 100%;
    border: none;
    margin-top: 3rem;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 800;

    cursor: pointer;
  }
`;

import styled from "styled-components";
import {
  CommonGridStyle,
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
} from "../../style/commomStyle";

export const DashboardLayoutStyle = styled.main`
  ${CommonGridStyle({ columns: "35rem auto", align: "flex-start" })}

  ${CustomContainer};
  ${CommonSpacing};

  @media (max-width: ${(p) => p.theme.breakPoints.laptops}) {
    grid-template-columns: 1fr;
  }

  margin-top: 9.3rem;
`;

export const SidebarStyle = styled.aside`
  background: ${(p) => p.theme.colors.DIM_GRAY_COLOR};

  position: relative;

  @media (max-width: ${(p) => p.theme.breakPoints.laptops}) {
    position: fixed;
    top: 2rem;
    left: ${(p) => (p.toggleActive ? "0rem" : "-50rem")};

    width: 30rem;
    height: 50vh;
    overflow-y: auto;

    transition: ${(p) => p.theme.transitions.customTransition};
    z-index: 2;
  }

  .toggle-icon {
    display: none;
    position: fixed;
    top: 10rem;
    right: 1rem;

    cursor: pointer;

    @media (max-width: ${(p) => p.theme.breakPoints.laptops}) {
      display: block;
    }

    &.bar-active {
      .bar {
        &:first-child {
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          display: none;
        }

        &:last-child {
          transform: translateY(-0.55rem) rotate(-45deg);
        }
      }
    }

    .bar {
      width: 2.2rem;
      height: 0.25rem;
      border-radius: 0.1rem;
      margin-top: 0.4rem;
      background: ${(p) => p.theme.colors.PRIMARY_COLOR};
      transition: ${(p) => p.theme.transitions.customTransition};
    }
  }

  .profile-placeholder {
    position: absolute;
    left: 50%;
    top: -5rem;
    transform: translateX(-50%);

    @media (max-width: ${(p) => p.theme.breakPoints.laptops}) {
      position: relative;
      top: 10rem;
    }

    .profile-image {
      width: 15rem;
      height: 15rem;
      border-radius: 50%;

      @media (max-width: ${(p) => p.theme.breakPoints.laptops}) {
        width: 10rem;
        height: 10rem;
      }
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

    @media (max-width: ${(p) => p.theme.breakPoints.laptops}) {
      padding: 0;
    }

    &.ant-menu-inline {
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

      .ant-menu-submenu {
        .ant-menu-submenu-title {
          padding: 3rem 2rem;

          &:hover {
            background: ${(p) => p.theme.colors.LIGHT_ORANGE_COLOR};
          }

          > svg {
            margin-right: 2rem;
            width: 2.3rem;
            fill: ${(p) => p.theme.colors.PRIMARY_COLOR};
          }

          .ant-menu-title-content {
            font-size: 2rem;
            color: ${(p) => p.theme.colors.BLACK_COLOR};
          }
        }

        .ant-menu-sub {
          background: none;

          .ant-menu-item {
            padding-left: 6.8rem !important;

            .nav-item-link {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }

  .logout-button {
    ${FlexboxStyle({ justify: "flex-start" })};

    width: 100%;
    background: none;
    border: none;
    font-size: 2rem;
    padding-left: 8.3rem;
    padding: 2rem 2.1rem;

    cursor: pointer;

    &:hover {
      background: ${(p) => p.theme.colors.LIGHT_ORANGE_COLOR};
    }

    .icon {
      ${FlexboxStyle({ justify: "center" })};

      > svg {
        margin-right: 2rem;
        width: 2.3rem;
        fill: ${(p) => p.theme.colors.PRIMARY_COLOR};
      }
    }
  }

  .live-now {
    background: ${(p) => p.theme.colors.PRIMARY_COLOR};
    color: ${(p) => p.theme.colors.WHITE_COLOR};

    padding: 1.5rem;
    width: 100%;
    border: none;
    margin-bottom: 1rem;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 800;

    cursor: pointer;
  }
`;

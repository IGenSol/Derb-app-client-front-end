import styled from "styled-components";
import {
  CommonGridStyle,
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
} from "../../style/commomStyle";

export const DashboardStyle = styled.main`
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

    margin-top: 4.3rem;
    padding-left: 7rem;

    .nav-item {
      .nav-item-link {
        ${FlexboxStyle({ justify: "flex-start" })}

        font-weight: 700;
        padding: 1rem 3rem;

        transition: ${(p) => p.theme.transitions.customTransition};

        &:hover {
          background: ${(p) => p.theme.colors.LIGHT_ORANGE_COLOR};
          color: ${(p) => p.theme.colors.RICH_BLACK_COLOR};
        }

        .icon {
          margin-right: 2rem;
          padding-top: 1rem;

          > svg {
            width: 2.3rem;
            fill: ${(p) => p.theme.colors.PRIMARY_COLOR};
          }
        }

        .link-text {
          color: ${(p) => p.theme.colors.BLACK_COLOR};
          font-size: 2rem;
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

export const DashboardContentStyle = styled.section`
  .counters-wrapper {
    ${CommonGridStyle}

    .counter {
      background: ${(p) => p.theme.colors.PLATINUM_COLOR};

      position: relative;

      padding: 0 2rem;
      border-radius: 1rem;

      &:before {
        content: "";

        position: absolute;
        left: 0;
        top: -1.4rem;

        width: 100%;
        height: 0.5rem;
      }

      &:first-child {
        &:before {
          background: ${(p) => p.theme.colors.PRIMARY_COLOR};
        }
      }

      &:nth-child(2) {
        &:before {
          background: ${(p) => p.theme.colors.GREEN_COLOR};
        }
      }

      &:last-child {
        &:before {
          background: ${(p) => p.theme.colors.RED_COLOR};
        }
      }

      .card-icon {
        > svg {
          width: 6rem;
        }
      }

      .user-details {
        z-index: unset;
        background: unset;

        .heading {
          font-size: 4rem;
          color: ${(p) => p.theme.colors.DARK_COLOR};
          font-weight: 800;
        }

        .sub-heading {
          font-size: 2rem;
          color: ${(p) => p.theme.colors.RICH_BLACK_COLOR};
        }
      }
    }
  }
`;

export const RecentOrderStyle = styled.section`
  .table-heading {
    font-weight: 800;
    font-size: 2.3rem;
  }

  .orders-table {
    width: 100%;
    margin-top: 4rem;

    thead {
      background: ${(p) => p.theme.colors.LIGHT_ORANGE_COLOR};

      tr {
        td {
          padding: 1.5rem;
          font-size: 1.8rem;
          font-weight: 800;
        }
      }
    }

    .table-body {
      height: 30rem;
      overflow-y: auto;

      tr {
        td {
          padding: 1.5rem;
          font-weight: 700;

          .status {
            color: ${(p) => p.theme.colors.WHITE_COLOR};

            padding: 0.5rem 2rem;
            border-radius: 5rem;
            width: 12rem;
            text-align: center;

            &.pending {
              background: ${(p) => p.theme.colors.RED_COLOR};
            }

            &.shipped {
              background: ${(p) => p.theme.colors.PRIMARY_COLOR};
            }

            &.confirmed {
              background: ${(p) => p.theme.colors.GREEN_COLOR};
            }
          }
        }
      }
    }
  }
`;

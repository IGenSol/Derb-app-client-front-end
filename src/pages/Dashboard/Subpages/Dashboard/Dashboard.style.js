import styled from "styled-components";
import { CommonGridStyle } from "../../../../style/commomStyle";

export const DashboardStyle = styled.main`
  .title {
    font-weight: 900;
    text-transform: uppercase;

    font-size: 3rem;
    margin-bottom: 5rem;
  }

  .counters-wrapper {
    ${CommonGridStyle};

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
    margin-top: 4rem;
  }

  .orders-table {
    width: 100%;
    margin-top: 1.5rem;

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

            &.PENDING {
              background: ${(p) => p.theme.colors.PRIMARY_COLOR};
            }

            &.DELIVERED {
              background: ${(p) => p.theme.colors.GREEN_COLOR};
            }

            &.CANCELED {
              background: ${(p) => p.theme.colors.RED_COLOR};
            }
          }
        }
      }
    }
  }
`;

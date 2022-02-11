import styled from "styled-components";
import {
  CommonButton,
  CommonGridStyle,
  CommonSpacing,
  FlexboxStyle,
} from "../../style/commomStyle";

export const DashboardStyle = styled.main`
  width: 80%;
  margin: auto;
  margin-top: 3rem;
  padding: 2rem;
  box-shadow: 0rem 0.3rem 2rem 0.6rem rgb(3 3 3 / 10%);

  @media (max-width: 780px) {
    width: 100%;
  }

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

export const OrderStyleA = styled.main`
  ${CommonSpacing};

  .order-title {
    font-size: 2.5rem;
    font-weight: 700;
    padding: 2rem 0;
  }

  .tablescroll {
    overflow: auto;
  }

  @media (max-width: 780px) {
    .tablescroll {
      margin-bottom: 5rem;
    }
  }

  .orders-list {
    margin-top: 3rem;

    thead {
      background: ${(p) => p.theme.colors.PRIMARY_COLOR};

      tr {
        td {
          font-size: 1.7rem;
          font-weight: 600;
          padding: 1rem;
        }
      }
    }

    tbody {
      tr {
        td {
          padding: 1rem;
          font-weight: 600;

          .action-buttons-wrapper {
            ${FlexboxStyle};

            .action-button {
              border: none;
              background: none;
              margin-right: 1rem;

              cursor: pointer;

              &:first-of-type {
                > svg {
                  fill: ${(p) => p.theme.colors.GREEN_COLOR};
                }
              }

              &:last-of-type {
                > svg {
                  fill: ${(p) => p.theme.colors.RED_COLOR};
                }
              }

              > svg {
                width: 2rem;
              }
            }
          }

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

export const Modelstyle = styled.main`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .modal-main {
    position: fixed;
    background: white;
    width: 40%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
  }

  .display-block {
    display: block !important;
  }

  .cancel {
    padding: 1rem;
    position: absolute;
    right: 0;
    > svg {
      width: 2rem;
    }
  }
  .display-none {
    display: none;
  }
  .container {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .ratting {
    margin: auto;
  }
  .heading {
    font-size: 3rem;
    font-weight: 600;
    padding: 1.5rem;
  }
  textarea {
    padding: 1rem;
    width: 50%;
    border-radius: 0.5rem;
  }
  .buttonbox {
    display: flex;
    justify-content: flex-end;
    column-gap: 2rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    .btn {
      ${CommonButton({ padding: "1rem 2rem" })};
      font-size: 2rem;
    }
  }
`;

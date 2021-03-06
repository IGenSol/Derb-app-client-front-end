import styled from "styled-components";
import {
  CommonButton,
  CommonSpacing,
  FlexboxStyle,
} from "../../../../style/commomStyle";

export const OrderStyle = styled.main`
  ${CommonSpacing};

  .order-title {
    font-size: 2.5rem;
    font-weight: 700;
    padding: 2rem 0;
  }

  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;

    @media (max-width: ${(p) => p.theme.breakPoints.mobiles}) {
      border: 0;
    }

    thead {
      @media (max-width: ${(p) => p.theme.breakPoints.mobiles}) {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      tr {
        background: ${(p) => p.theme.colors.PRIMARY_COLOR};

        th {
          color: ${(p) => p.theme.colors.WHITE_COLOR};
          font-weight: 600;
        }
      }
    }

    tr {
      border: 1px solid #ddd;
      padding: 0.35em;

      @media (max-width: ${(p) => p.theme.breakPoints.mobiles}) {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: 0.625em;
      }
    }

    td {
      @media (max-width: ${(p) => p.theme.breakPoints.mobiles}) {
        position: relative;

        border-bottom: 1px solid #ddd;
        display: block;
        font-size: 0.8em;
        text-align: right;

        &::before {
          ${FlexboxStyle({ justify: "center" })};

          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);

          width: 12rem;
          height: 100%;
          background: ${(p) => p.theme.colors.PRIMARY_COLOR};

          content: attr(data-label);
          float: left;
          font-weight: bold;
          text-transform: uppercase;
        }

        &:last-child {
          border-bottom: 0;
        }
      }

      .action-buttons-wrapper {
        ${FlexboxStyle({ justify: "center" })};

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
    }

    th,
    td {
      padding: 0.625em;
    }

    th {
      font-size: 0.85em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }

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
    width: 30%;
    text-align: center;
    height: auto;
    border-radius: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .display-block {
    display: block !important;
  }

  .display-none {
    display: none;
  }

  .custom-container {
    width: 80%;
    padding: 1rem;
    margin: 2rem;
    border: 0.1rem solid;
    border-radius: 0.5rem;
  }
  .heading {
    margin: 1rem;
  }

  .add-button {
    ${CommonButton};
    padding: 1.5rem 5rem;
    margin: 1rem;
    margin-bottom: 2rem;
  }

  hr {
    background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
  }
`;

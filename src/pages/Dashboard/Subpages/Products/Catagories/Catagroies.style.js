import styled from "styled-components";
import { Modal } from "antd";

import {
  CommonButton,
  CommonSpacing,
  FlexboxStyle,
} from "../../../../../style/commomStyle";

export const CatagoriesStyle = styled.main`
  ${CommonSpacing};

  .section-header {
    ${FlexboxStyle};

    .add-catagories-link {
      ${CommonButton}
    }
  }

  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    margin-top: 5rem;
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
      .catagory-image {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
      }

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

          width: 8rem;
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
      text-align: center;
    }

    th {
      font-size: 0.85em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }
`;

export const AddCatagoryModalStyle = styled(Modal)`
  .modal-body {
    .custom-input {
      width: 100%;
      margin: 1rem 0;
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.PRIMARY_COLOR};
    }

    .add-button {
      ${CommonButton};

      display: block;
      margin-top: 1rem;
      width: 100%;
    }
  }
`;

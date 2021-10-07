import styled from "styled-components";
import {
  CommonButton,
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
} from "../../style/commomStyle";

export const CartListStyle = styled.main`
  ${CustomContainer};
  ${CommonSpacing};

  margin-top: 2rem;

  .heading {
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
  }

  .table-wrapper {
    width: 100%;
    margin-top: 5rem;

    thead {
      tr {
        background: ${(p) => p.theme.colors.LIGHT_ORANGE_COLOR};

        td {
          position: relative;
          width: 18rem;

          padding: 2rem 5rem;
          font-size: 1.8rem;
          font-weight: 700;
          text-align: center;

          &:last-of-type {
            &:after {
              content: none;
            }
          }

          &:after {
            content: "";
            position: absolute;
            right: 2rem;

            height: 3rem;
            width: 1rem;
            border-right: 0.1rem dotted
              ${(p) => p.theme.colors.RICH_BLACK_COLOR};
          }
        }
      }
    }

    tbody {
      tr {
        td {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;

          padding: 2rem;

          .cross-btn {
            background: none;
            border: none;
            outline: none;

            cursor: pointer;
          }

          &.total-amount {
            color: ${(p) => p.theme.colors.PRIMARY_COLOR};
          }

          .product-image {
            width: 6rem;
            height: 6rem;

            border-radius: 50%;
          }
        }
      }
    }
  }

  .table-footer {
    ${FlexboxStyle({ align: "flex-start" })};

    .continue-shopping-button {
      ${CommonButton};

      border-radius: 0;
    }

    .right-table-footer {
      .total-amount {
        font-size: 2rem;
        font-weight: 800;

        .total-price {
          color: ${(p) => p.theme.colors.PRIMARY_COLOR};

          margin-left: 2rem;
        }
      }

      .checkout-page-link {
        ${CommonButton};

        display: block;
        text-align: center;
        margin-top: 2rem;

        border-radius: 0;
      }
    }
  }
`;

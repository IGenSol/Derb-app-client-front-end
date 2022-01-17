import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";

import {
  CommonButton,
  CommonGridStyle,
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
} from "../../style/commomStyle";

export const CheckoutStyle = styled.section`
  ${CommonGridStyle({
    columns: "1fr 40rem",
    columnGap: "3rem",
    align: "flex-start",
  })};
  ${CustomContainer};
  ${CommonSpacing};

  margin-top: 3rem;

  .ant-collapse-header {
    ${FlexboxStyle({ justify: "flex-start" })};

    .title {
      ${FlexboxStyle({ justify: "flex-start" })};

      .serial-no {
        ${FlexboxStyle({ justify: "center" })};

        width: 2.5rem;
        height: 2.5rem;
        margin-right: 1rem;
        font-size: 1.2rem;

        background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
        color: ${({ theme }) => theme.colors.WHITE_COLOR};
      }

      .section-title {
        font-size: 2.2rem;
        font-weight: 400;
      }
    }
  }
`;

export const DeliveryDetailsStyle = styled.article`
  .title {
    .section-title {
      font-size: 2rem;
      font-weight: 400;
    }
  }

  .search-location {
    ${FlexboxStyle};

    position: relative;
    margin-top: 1rem;

    .custom-container {
      width: 100%;
      padding: 1.4rem;
      border-radius: 0.5rem 0 0 0.5rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.PRIMARY_COLOR};

      outline: none;
    }

    .search-button {
      background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
      color: ${({ theme }) => theme.colors.WHITE_COLOR};

      padding: 1.5rem;
      border: none;

      cursor: pointer;
    }

    .dropdown-list {
      position: absolute;
      top: 6rem;
      left: 1rem;

      width: 100%;

      background: ${({ theme }) => theme.colors.WHITE_COLOR};
      z-index: 2;
      cursor: pointer;

      .place-suggestion {
        padding: 1rem;
      }
    }
  }

  .label-wrapper {
    ${FlexboxStyle};

    background: ${({ theme }) => theme.colors.DIM_GRAY_COLOR};
    border-left: 0.3rem solid ${({ theme }) => theme.colors.SECONDARY_COLOR};
    margin: 3rem 0;
    padding: 2rem 1rem;

    .heading {
      font-size: 1.8rem;
    }

    .description {
      font-size: 1.4rem;
      font-weight: 400;
      margin-top: 0.5rem;

      color: ${({ theme }) => theme.colors.SONIC_SILVER_COLOR};
    }
  }

  .delevery-time-form {
    .heading {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .dropdown-wrapper {
      ${FlexboxStyle};

      margin-top: 1rem;

      select {
        width: 50%;
        padding: 1.5rem;

        cursor: pointer;
      }
    }
  }

  .delivery-address-wrapper {
    margin: 3rem 0;

    .heading {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .map-container {
      border-radius: 1rem;
      overflow: hidden;
      height: 40rem;
    }

    .address-info-wrapper {
      margin: 1rem 5rem;

      .address-container {
        ${FlexboxStyle};

        .address-details {
          .zip-code {
            font-size: 1.8rem;
            font-weight: 600;
          }

          .place-name {
            font-size: 1.6rem;
            font-weight: 300;
          }
        }

        .map-modal {
          .edit-modal {
            background: none;
            border: none;
            color: ${({ theme }) => theme.colors.PRIMARY_COLOR};

            cursor: pointer;
          }
        }
      }

      .missing-street-wrapper {
        width: 100%;
        margin-top: 1rem;

        .custom-container {
          border: 0.2rem solid ${({ theme }) => theme.colors.ALTO_GRAY_COLOR};

          border-radius: 0.5rem;
          width: 100%;
          padding: 1rem;
          outline: none;
        }
      }
    }

    .optional-details {
      .custom-input {
        border: 0.2rem solid ${({ theme }) => theme.colors.ALTO_GRAY_COLOR};

        border-radius: 0.5rem;
        width: 100%;
        padding: 1rem;
        outline: none;
        margin-bottom: 1rem;
      }
    }
  }

  .submit-button {
    ${CommonButton};

    width: 100%;
  }
`;

export const PersonalDetailsStyle = styled.section`
  .section-header {
    ${FlexboxStyle};

    .section-title {
      font-size: 2.3rem;
      font-weight: 400;
    }

    .edit-button {
      background: none;
      border: none;

      color: ${({ theme }) => theme.colors.PRIMARY_COLOR};

      cursor: pointer;
    }
  }

  .form-details {
    margin-top: 3rem;

    .form-container {
      .input-container {
        .heading {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 1rem 0;
        }

        .custom-input {
          width: 100%;
          padding: 1rem;
          border: 0.1rem solid ${({ theme }) => theme.colors.ALTO_GRAY_COLOR};
        }
      }

      .save-button {
        ${CommonButton({ padding: "1.5rem 3rem" })};

        margin-top: 1rem;
      }
    }

    .customer-details {
      h3 {
        font-size: 1.5rem;
        margin-bottom: 0.1rem;
        font-weight: 400;

        &.name {
          font-weight: 800;
        }
      }
    }
  }
`;

export const PaymentDetailsStyle = styled.section`
  .section-title {
    font-size: 2.3rem;
    font-weight: 400;
  }

  .payment-methods {
    margin-top: 3rem;

    .ant-collapse-header {
      .section-title {
        font-size: 1.3rem;
      }
    }

    .card-details {
      ${CommonGridStyle({ columns: "1fr 1fr" })};

      input {
        border: 0.1rem solid ${({ theme }) => theme.colors.ALTO_GRAY_COLOR};
        padding: 1rem;
        border-radius: 0.3rem;

        &.custom-input-full {
          grid-column: 1/-1;
        }
      }
    }

    .select-payment-method {
      ${FlexboxStyle({ justify: "flex-start" })};

      margin: 1rem 0;
      cursor: pointer;

      input {
        margin-right: 1rem;
      }
    }

    .heading {
      font-size: 1.4rem;
    }

    .description {
      font-size: 1.2rem;
      margin-top: 0.3rem;
    }
  }

  .form-footer {
    .voucher-button {
      display: block;

      color: ${({ theme }) => theme.colors.PRIMARY_COLOR};

      font-size: 1.7rem;
      font-weight: 300;
      padding: 1rem 0;
    }

    .term-and-conditions {
      .term-link {
        color: ${({ theme }) => theme.colors.PRIMARY_COLOR};
      }
    }

    .place-order-button {
      ${CommonButton};

      margin: 2rem 0;
      width: 100%;
    }

    .description {
      color: ${({ theme }) => theme.colors.ALTO_GRAY_COLOR};
      font-size: 1.3rem;
    }
  }
`;

export const PaymentPopupStyle = styled(StripeCheckout)`
  background: red;
`;

export const ItemListStyle = styled.aside`
  position: sticky;
  top: 10rem;

  .shop-name {
    font-size: 1.5rem;
    text-align: center;
  }

  .order-wrapper {
    max-height: 20rem;
    overflow-y: auto;
    margin-top: 3rem;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.ALTO_GRAY_COLOR};
    }

    .order {
      ${CommonGridStyle({ columns: "10rem auto 10rem", align: "flex-start" })};

      margin-bottom: 1rem;

      h3 {
        font-size: 1.4rem;
        font-weight: 300;

        &.quantity {
          b {
            font-weight: 600;
          }
        }
      }

      .order-details {
        .order-name {
          font-weight: 600;
        }

        .description {
          font-size: 1.3rem;
          font-weight: 300;
          margin-top: 0.5rem;
        }
      }
    }
  }

  .sidebar-footer {
    padding-top: 2rem;

    .deal-name {
      color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.ALTO_GRAY_COLOR};

      padding: 1rem 0;
      font-size: 1.7rem;
    }

    .deals-details {
      margin-top: 1rem;

      .deals-charges {
        ${FlexboxStyle};

        margin-bottom: 1rem;

        h3 {
          font-size: 1.4rem;
          font-weight: 300;
        }
      }
    }

    .grand-total {
      ${FlexboxStyle};

      margin-top: 1rem;

      h3 {
        font-size: 1.4rem;
        font-weight: 700;
      }
    }
  }
`;

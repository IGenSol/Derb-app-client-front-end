import styled from "styled-components";

import {
  CommonButton,
  CommonGridStyle,
  CommonSpacing,
  FlexboxStyle,
} from "../../../../../style/commomStyle";

export const UpdateProductsStyle = styled.main`
  .card {
    ${CommonSpacing};

    .go-back-link {
      ${FlexboxStyle({ justify: "flex-start" })};

      color: ${({ theme }) => theme.colors.PRIMARY_COLOR};
      font-size: 2rem;
      margin-bottom: 1rem;

      .icon {
        width: 2rem;
        margin-right: 1rem;
        margin-top: 0.5rem;

        > svg {
          fill: ${({ theme }) => theme.colors.PRIMARY_COLOR};
        }
      }
    }

    .title {
      margin-bottom: 5rem;
    }

    .card-body {
      ${CommonGridStyle({ columns: "30rem 10rem 1fr" })};

      margin-top: 1rem;

      .input-img-upload {
        display: none;
      }

      .upload-photo {
        ${FlexboxStyle({ justify: "center" })}

        background: ${(p) => p.theme.colors.SECONDARY_COLOR};

        padding: 2rem;
        border-radius: 1rem;
        margin-bottom: 2rem;

        height: 100%;
        width: 100%;

        cursor: pointer;

        .icon {
          > svg {
            width: 5rem;
          }
        }

        .silde-icon {
          > svg {
            width: 3rem;
          }
        }

        #upload-product-photo {
          display: none;
        }
      }
    }

    .form-content {
      .custom-input {
        width: 100%;
        padding: 1rem;
        outline: none;
        margin-bottom: 1rem;
        border-radius: 0.5rem;
        border: 0.1rem solid ${(p) => p.theme.colors.CADET_GREY_COLOR};
      }

      h3 {
        color: ${(p) => p.theme.colors.SECONDARY_COLOR};
        font-size: 1.5rem;
      }

      .input-layout {
        ${CommonGridStyle({
          columns: "18rem 1fr",
          columnGap: "1rem",
          align: "flex-start",
        })};
      }
    }

    .card-footer {
      grid-column: 1/-1;
      margin: 1rem 0rem;
      text-align: end;

      .add-product-button {
        ${CommonButton};
      }
    }
  }
`;

import styled from "styled-components";

import {
  CommonButton,
  CommonGridStyle,
  CommonSpacing,
  FlexboxStyle,
} from "../../../../../style/commomStyle";

export const AddProductsStyle = styled.main`
  .card {
    ${CommonSpacing};

    .title {
      margin-bottom: 5rem;
    }

    .card-body {
      ${CommonGridStyle({ columns: "1fr 10rem 1fr" })};

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

export const ProductFormStyle = styled.section`
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
    })};
  }
`;

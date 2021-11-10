import styled from "styled-components";
import { Modal } from "antd";

import {
  CommonButton,
  CommonGridStyle,
  CommonSpacing,
  FlexboxStyle,
} from "../../../../style/commomStyle";

export const ProductStyle = styled.section`
  ${CommonSpacing};

  .section-header {
    ${FlexboxStyle}

    margin-bottom : 5rem;

    .add-product-button {
      ${CommonButton};
    }
  }

  .products-wrapper {
    ${CommonGridStyle({
      columns: "repeat(auto-fill, minmax(25rem, 1fr))",
      columnGap: "3rem",
      rowGap: "3rem",
    })};
  }
`;

export const ModalStyle = styled(Modal)`
  .popup-body {
    ${CommonGridStyle({ columns: "1fr 1fr" })};

    .upload-photo {
      ${FlexboxStyle({ justify: "center" })}

      background: ${(p) => p.theme.colors.SECONDARY_COLOR};

      padding: 2rem;
      border-radius: 1rem;
      height: 100%;
      width: 100%;

      cursor: pointer;

      .icon {
        > svg {
          width: 5rem;
        }
      }

      #upload-product-photo {
        display: none;
      }
    }

    .form-wrapper {
      .custom-input {
        width: 100%;
        padding: 1rem;
        outline: none;

        margin-bottom: 1rem;
        border-radius: 0.5rem;
        border: 0.1rem solid ${(p) => p.theme.colors.CADET_GREY_COLOR};
      }

      .rate-input {
        ${CommonGridStyle({ columns: "1fr 1fr", columnGap: "1rem" })};
      }
    }
  }
`;

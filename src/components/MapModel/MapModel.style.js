import Modal from "antd/lib/modal/Modal";
import styled from "styled-components";
import { CommonButton, CommonGridStyle } from "../../style/commomStyle";

export const MapModalStyle = styled(Modal)`
  .input-container {
    .heading {
      font-size: 1.2rem;
    }

    .custom-container {
      width: 100%;
      padding: 1rem;
      margin-top: 0.8rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.DIM_GRAY_COLOR};
    }
  }

  .search-location {
    position: relative;

    .dropdown-list {
      position: absolute;
      top: 5.3rem;
      padding: 1rem;
      background: ${({ theme }) => theme.colors.WHITE_COLOR};
      z-index: 10;

      .place-suggestion {
        padding: 1rem;
      }
    }
  }

  .map-container {
    margin: 2rem 0;
    border-radius: 1rem;
    height: 30rem;

    overflow: hidden;
  }

  .button-wrapper {
    ${CommonGridStyle({ columns: "unset" })};

    place-items: center;

    .submit-button {
      ${CommonButton};

      width: 70%;
    }
  }
`;

import styled from "styled-components";
import {
  CommonGridStyle,
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
} from "../../style/commomStyle";

export const DiscoverStyle = styled.main`
  ${CustomContainer};
  ${CommonSpacing};

  margin-top: 2rem;

  .discover-prducts-wrapper {
    ${CommonGridStyle};

    margin-bottom: 2rem;
  }

  .postimagecontainer {
    width: 100%;
    display: block;
    height: 45rem;
    background: #818181;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .profilewrapper {
    display: flex;
    align-items: baseline;
    .img {
      width: 4rem;
      height: 4rem;
      border: 0.1rem solid ${(p) => p.theme.colors.PRIMARY_COLOR};
      border-radius: 50%;
      margin-right: 1rem;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const FollowingStyle = styled.section`
  ${CommonGridStyle({
    columns: "30rem 1fr",
    columnGap: "8rem",
    align: "flex-start",
  })};

  .following-wrapper {
    position: sticky;
    -webkit-poistion: sticky;
    left: 0;
    top: 8rem;

    padding: 3rem;
    background: ${(p) => p.theme.colors.WHITE_COLOR};

    z-index: 3;

    .heading {
      color: ${(p) => p.theme.colors.GRAY_COLOR};
      font-size: 1.6rem;
      margin-bottom: 3rem;
    }
  }

  .user-profiles-wrapper {
    ${CommonGridStyle({
      columns: "1fr 1fr",
      rowGap: "4.4rem",
      columnGap: "2.5rem",
    })};
  }
`;

export const CommentStyle = styled.main`
  .comments {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 85%;
    margin: auto;
    height: 16rem;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${(p) => p.theme.colors.PRIMARY_COLOR};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    .text {
      margin: 1rem 0rem 1rem 4rem;
    }
  }

  .profilewrapper {
    display: flex;
    .img {
      width: 3rem;
      height: 3rem;
      border: 0.1rem solid ${(p) => p.theme.colors.PRIMARY_COLOR};
      border-radius: 50%;
      margin-right: 1rem;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }

  .comment-box-wrapper {
    ${FlexboxStyle};
    width: 95%;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 1rem 2rem;
    border-radius: 5rem;
    background: ${({ theme }) => theme.colors.CULTURED_GRAY_COLOR};

    .comment-input-box {
      flex: 1;
      border: none;
      outline: none;
      background: none;
    }

    .send-button {
      background: none;
      border: none;
      cursor: pointer;
      padding-top: 0.5rem;

      > svg {
        width: 1.6rem;
        fill: ${({ theme }) => theme.colors.DARK_SILVER_COLOR};
      }
    }
  }
`;

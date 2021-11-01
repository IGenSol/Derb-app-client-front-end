import styled from "styled-components";
import {
  CommonButton,
  CommonGridStyle,
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
} from "../../style/commomStyle";

export const UserProfileStyle = styled.main`
  ${CustomContainer};
  ${CommonSpacing};

  .user-details {
    ${CommonGridStyle({ columns: "1fr 30rem", columnGap: "15rem" })};

    margin-top: 5rem;

    @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
      grid-template-columns: 1fr;
    }

    .user-profile {
      .user-info {
        ${CommonGridStyle({
          columns: "3rem 1fr",
          columnGap: "12rem",
          align: "flex-start",
        })};

        @media (max-width: ${(p) => p.theme.breakPoints.largeDevices}) {
          grid-template-columns: 1fr;
        }

        .user-thumbnail {
          display: block;

          width: 12rem;
          border-radius: 50%;
          margin-right: 1rem;
          border: 0.2rem solid ${(p) => p.theme.colors.PRIMARY_COLOR};
          overflow: hidden;

          .user-image {
            max-width: 100%;
            object-fit: contain;
          }
        }

        .user-profile-details {
          .name {
            font-weight: 600;
          }

          .description {
            font-size: 1.6rem;
          }
        }
      }

      .user-connections {
        ${CommonGridStyle({ columns: "repeat(3, 1fr)" })};

        .counter {
          background: ${(p) => p.theme.colors.LIGHT_ORANGE_COLOR};

          text-align: center;
          margin-top: 3rem;
          padding: 1.5rem;
          border-radius: 1rem;

          .counter-no {
            font-weight: 700;
          }
        }
      }

      .about-user {
        margin-top: 3rem;

        .heading {
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .tags-wrapper {
          ${FlexboxStyle};

          flex-wrap: wrap;

          .tags {
            background: ${(p) => p.theme.colors.LIGHT_ORANGE_COLOR};
            padding: 1rem 2rem;
            border-radius: 5rem;
            margin: 1rem 0;
          }
        }
      }
    }

    .buttons-wrapper {
      text-align: center;

      .profile-button {
        ${CommonButton};

        width: 80%;

        margin-bottom: 2rem;
      }
    }
  }
`;

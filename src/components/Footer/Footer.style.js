import styled from "styled-components";
import {
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
} from "../../style/commomStyle";

export const FooterStyle = styled.footer`
  background: ${(p) => p.theme.colors.LIGHT_GRAY_COLOR};

  .foot-container {
    ${CustomContainer};
    ${CommonSpacing};
    ${FlexboxStyle};

    padding-top: 2rem;
    padding-bottom: 2rem;

    .subscribe-container {
      padding: 2rem 0;

      .announcment-card {
        .card-details {
          .heading {
            font-size: 1.8rem;
            margin: 0.6rem 0;
          }
        }
      }
    }
  }
`;

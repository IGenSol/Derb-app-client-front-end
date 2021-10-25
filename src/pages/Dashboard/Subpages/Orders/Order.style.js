import styled from "styled-components";
import { CommonSpacing, FlexboxStyle } from "../../../../style/commomStyle";

export const OrderStyle = styled.main`
  ${CommonSpacing};

  .order-title {
    font-size: 2.5rem;
    font-weight: 700;
    padding: 2rem 0;
  }

  .orders-list {
    margin-top: 3rem;

    thead {
      background: ${(p) => p.theme.colors.PRIMARY_COLOR};

      tr {
        td {
          font-size: 1.7rem;
          font-weight: 600;
          padding: 1rem;
        }
      }
    }

    tbody {
      tr {
        td {
          padding: 1rem;
          font-weight: 600;

          .action-buttons-wrapper {
            ${FlexboxStyle};

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
      }
    }
  }
`;

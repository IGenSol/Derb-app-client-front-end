import styled from "styled-components";
import { CommonButton, FlexboxStyle } from "../../../../../style/commomStyle";

export const SubCatagoriesStyle = styled.main`
  .section-header {
    ${FlexboxStyle};

    .sub-catagory-link {
      ${CommonButton}
    }
  }

  .sub-catagories-table {
    margin-top: 5rem;

    thead {
      tr {
        background: ${({ theme }) => theme.colors.PRIMARY_COLOR};

        td {
          padding: 1rem;
          text-align: center;
          font-weight: 700;
        }
      }
    }

    tbody {
      tr {
        td {
          padding: 1rem;
          text-align: center;
          border: 0.1rem solid ${({ theme }) => theme.colors.PRIMARY_COLOR};

          .button-wrapper {
            ${FlexboxStyle({ justify: "center" })}

            button {
              background: none;
              border: none;
              margin-right: 1rem;

              cursor: pointer;

              &.delete-button {
                > svg {
                  fill: ${({ theme }) => theme.colors.RED_COLOR};
                }
              }

              &.edit-button {
                > svg {
                  fill: ${({ theme }) => theme.colors.GREEN_COLOR};
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

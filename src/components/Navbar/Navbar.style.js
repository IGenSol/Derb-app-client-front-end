import styled from "styled-components";
import {
  CommonButton,
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
} from "../../style/commomStyle";
import { Modal } from 'antd';

export const NavbarStyle = styled.nav`
  background: ${(p) => p.theme.colors.WHITE_COLOR};
  position: sticky;
  left: 0;
  top: 0;
  z-index: 10;

  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.09);
  height: 8rem;

  .navbar-container {
    ${CustomContainer};
    ${CommonSpacing};
    ${FlexboxStyle};

    height: inherit;

    .logo-wrapper {
      display: block;

      width: 7rem;
      outline: none;

      .site-logo {
        max-width: 100%;
      }
    }

    .searchbar-wrapper {
      ${FlexboxStyle};

      position: relative;
      flex: 1;

      .site-searchbar {
        background: ${(p) => p.theme.colors.DULL_GRAY_COLOR};
        padding: 1.7rem;
        padding-right: 4rem;
        border: none;
        outline: none;
        border-radius: 0.5rem;

        flex: 1;
      }

      .icon-wrapper {
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);

        > svg {
          width: 2rem;
        }
      }
    }
  }
`;

export const SiteMenuStyle = styled.ul`
  ${FlexboxStyle};

  list-style: none;
  margin: 0 1.5rem;

  @media (max-width: ${(p) => p.theme.breakPoints.mediumDevices}) {
    position: fixed;
    bottom: 0;
    left: 0;

    background: ${(p) => p.theme.colors.WHITE_COLOR};
    width: 100%;

    padding: 1rem;
  }

  .menu-item {
    margin-right: 2rem;

    .menu-item-link {
      ${FlexboxStyle({ direction: "column" })};

      text-decoration: none;
      color: ${(p) => p.theme.colors.CADET_GREY_COLOR};
      transition: ${(p) => p.theme.transitions.customTransition};

      &:hover {
        color: ${(p) => p.theme.colors.DARK_COLOR};

        .menu-icon {
          > svg {
            fill: ${(p) => p.theme.colors.PRIMARY_COLOR};
          }
        }
      }

      .menu-icon {
        > svg {
          width: 2rem;
          fill: ${(p) => p.theme.colors.BEAU_BLUE_COLOR};
          transition: ${(p) => p.theme.transitions.customTransition};
        }
      }
    }
  }
`;

export const UserProfileStyle = styled.article`
  ${FlexboxStyle};

  .user-profile-placeholder-wrapper {
    display: block;

    .user-profile-placeholder {
      width: 4rem;
    }
  }

  .down-arrow-icon {
    margin-left: 1rem;

    > svg {
      fill: ${(p) => p.theme.colors.SILVER_SAND_COlOR};
      width: 1rem;
    }
  }

  .add-post-btn {
    ${CommonButton({ padding: "1rem" })};

    margin-left: 1.5rem;
  }
`;

export const Modelstyle = styled(Modal)`
${FlexboxStyle({
  justify: "start",
  direction: "column"
})};


.profileimg{
    width: 5rem;
  }
input{
  margin-left: 3rem;
}
.footer{
  ${FlexboxStyle};
  width:80%;
  margin-left: 8rem;
   
}
.add-post {
  background: ${(p) => p.theme.colors.DULL_GRAY_COLOR};
  padding: 1.7rem;
  padding-right: 21rem;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  flex: 1;
}
.add-post-btn {
  ${CommonButton({ padding: "1rem" })}; 
}

.postimg{
  margin-top: 3rem;
  width:20rem;
  height:20rem
  }


`

export const Imagestyle = styled.div`

margin-top: 2rem;

input[type="file"] {
  display: none;
}

.icon{
  >svg{
    width:3rem;
    height:3rem;
  }
}

`


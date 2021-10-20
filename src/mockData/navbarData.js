import {
  ActivityIcon,
  CartIcon,
  DescoverIcon,
  DownArrow,
  FeedIcon,
  HomeIcon,
  PhoneIcon,
} from "../svgs";

export const topBeltDetails = [
  {
    heading: "Welcome to Our store Derb",
  },
  {
    icon: <PhoneIcon />,
    heading: "Call Us : +92 311 5506699",
  },
];

export const menubarItems = [

  {
    url: "/home",
    linkText: "Home",
    icon: <HomeIcon />,
  },

  {
    url: "/",
    linkText: "Feed",
    icon: <FeedIcon />,
  },



  {
    url: "/store",
    linkText: "Store",
    icon: <CartIcon />,
  },

  // {
  //   url: "/discover",
  //   linkText: "Discover",
  //   icon: <DescoverIcon />,
  // },
  {
    url: "/activity",
    linkText: "Activity",
    icon: <ActivityIcon />,
  },
];

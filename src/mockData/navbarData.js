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
    url: "/",
    linkText: "Home",
    icon: <HomeIcon />,
  },

  // {
  //   url: "/home",
  //   linkText: "Home",
  //   icon: <HomeIcon />,
  // },

  {
    url: "/feed",
    linkText: "Feed",
    icon: <FeedIcon />,
  },

  {
    url: "/store",
    linkText: "Store",
    icon: <CartIcon />,
  },

  {
    url: "/activity",
    linkText: "Activity",
    icon: <ActivityIcon />,
  },
];

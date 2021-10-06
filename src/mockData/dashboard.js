import {
  BoxIcon,
  DashboardIcon,
  LogoutIcon,
  OrderIcon,
  PendingIcon,
  ProductIcon,
  SalesIcon,
  SettingIcon,
  UserIcon,
} from "../svgs";

export const sideMenus = [
  {
    icon: <DashboardIcon />,
    linkText: "Dashboard",
    url: "#",
  },
  {
    icon: <ProductIcon />,
    linkText: "Products",
    url: "#",
  },
  {
    icon: <OrderIcon />,
    linkText: "Order",
    url: "#",
  },
  {
    icon: <UserIcon />,
    linkText: "Profile",
    url: "#",
  },
  {
    icon: <SettingIcon />,
    linkText: "Settings",
    url: "#",
  },
  {
    icon: <LogoutIcon />,
    linkText: "Logout",
    url: "#",
  },
];

export const counters = [
  {
    icon: <BoxIcon />,
    heading: "25",
    subHeading: "Total Products",
  },

  {
    icon: <SalesIcon />,
    heading: "12250",
    subHeading: "Total Sales",
  },

  {
    icon: <PendingIcon />,
    heading: "25",
    subHeading: "Orders Pending",
  },
];

export const orders = [
  {
    orderId: "#1542",
    details: " Main Print Tree",
    status: "Pending",
    statusClass: "pending",
  },

  {
    orderId: "#4572",
    details: "Belted Trench Coat",
    status: "Shipped",
    statusClass: "shipped",
  },

  {
    orderId: "#2541",
    details: "Neck Velvet Dress",
    status: "Confirmed",
    statusClass: "confirmed",
  },

  {
    orderId: "#7584",
    details: "Trench Coat",
    status: "Confirmed",
    statusClass: "confirmed",
  },

  {
    orderId: "#7849",
    details: " Main Print Tree",
    status: "Pending",
    statusClass: "pending",
  },
];

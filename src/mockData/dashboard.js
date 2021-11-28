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
    url: "/dashboard",
  },
  {
    icon: <ProductIcon />,
    linkText: "Products",
    submenus: [
      {
        linkText: "Products List",
        url: "/dashboard/products-list",
      },
      {
        linkText: "Add Products",
        url: "/dashboard/add-products",
      },
    ],
  },
  {
    icon: <OrderIcon />,
    linkText: "Order",
    url: "/dashboard/orders",
  },
  {
    icon: <UserIcon />,
    linkText: "Profile",
    url: "/dashboard/profile",
  },
  {
    icon: <SettingIcon />,
    linkText: "Settings",
    url: "/dashboard/settings",
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
    subHeading: "Orders",
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

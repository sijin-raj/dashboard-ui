// custom pages
import Stores from "views/DashboardPages/Stores/Stores";
import Booking from "views/DashboardPages/Booking/Booking";

// @material ui
import StoreIcon from "@material-ui/icons/Store";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

let DashboardRoutes = [
  {
    path: "/dashboard/stores",
    label: "Stores",
    component: Stores,
    sidebar: { name: "Stores", icon: StoreIcon, to: "/dashboard/stores" },
  },
  {
    path: "/dashboard/booking",
    label: "Booking",
    component: Booking,
    sidebar: {
      name: "Booking",
      icon: AddShoppingCartIcon,
      to: "/dashboard/booking",
    },
  },
  {
    path: "/signIn",
    label: "Logout",
    sidebar: {
      name: "Logout",
      icon: ExitToAppIcon,
      to: "/signIn",
    },
  },
];

export default DashboardRoutes;

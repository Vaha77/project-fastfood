import { ReactComponent as byurtmalar } from "../assets/icons/buyurtmalar.svg";
import { ReactComponent as mahsulotlar } from "../assets/icons/mahsulotlar.svg";
import { ReactComponent as kategoriya } from "../assets/icons/kategoriya.svg";
import { ReactComponent as filial } from "../assets/icons/filial.svg";
import { ReactComponent as mijozlar } from "../assets/icons/mijozlar.svg";
import { ReactComponent as hisobot } from "../assets/icons/hisobot.svg";
import { ReactComponent as hodimlar } from "../assets/icons/settings.svg";
import { ReactComponent as katalog } from "../assets/icons/settings.svg";
import Generik from "../page/Generic";
import Byurtmalar from "../page/Byurtmalar";

export const sidebar = [
  {
    id: 1,
    title: "Buyurtmalar",
    path: "/byurtmalar",
    Icon: byurtmalar,
    Component: Byurtmalar,
    hidden: false,
  },

  {
    id: 2,
    title: "Mahsulotlar",
    path: "/mahsulotlar",
    Icon: mahsulotlar,
    Component: Generik,
    hidden: false,
  },
  {
    id: 3,
    title: "Kategoriya",
    path: "/kategoriya",
    Icon: kategoriya,
    Component: Generik,
    hidden: false,
  },
  {
    id: 4,
    title: "Filiallar",
    path: "/filiallar",
    Icon: filial,
    Component: Generik,
    hidden: false,
  },
  {
    id: 5,
    title: "Mijozlar",
    path: "/mijozlar",
    Icon: mijozlar,
    Component: Generik,
    hidden: false,
  },
  {
    id: 6,
    title: "Hisobot",
    path: "/hisobot",
    Icon: hisobot,
    Component: Generik,
    hidden: false,
  },
  {
    id: 7,
    title: "Hodimlar",
    path: "/hodimlar",
    Icon: hodimlar,
    Component: Generik,
    hidden: false,
  },
  {
    id: 8,
    title: "Katalog",
    path: "/katalog",
    Icon: katalog,
    Component: Generik,
    hidden: false,
  },
];

import {
  Atom,
  Activity,
  CloudArrowDown,
  AddressBook,
  AppleLogo,
  PuzzlePiece,
} from "phosphor-react";
import Image  from "next/image";


export const Menus = [
  
  {
    title: "Features",
    icon: '',
    submenu: true,
    submenuItems: [
      {
        title: "Todo List ",
        icon: <Image src="/images/icon-todo.svg" width={14} height={16} alt="" />,
        link: '#'
      },
      {
        title: "Calendar",
        icon: <Image src="/images/icon-calendar.svg" width={16} height={16} alt="" />,
        link: '#'
      },
      {
        title: "Reminders",
        icon: <Image src="/images/icon-reminders.svg" width={13} height={13} alt="" />,
        link: '#'
      },
      {
        title: "Planning",
        icon: <Image src="/images/icon-planning.svg" width={16} height={16} alt="" />,
        link: '#'
      },
    ],
  },
  {
    title: "Company",
    icon: '',
    submenu: true,
    submenuItems: [
      {
        title: "History",
        icon: '',
        link: '#'
      },
      {
        title: "Out Team",
        icon: '',
        link: '#'
      },
      {
        title: "Blog",
        icon: '',
        link: '#'
      },
      
    ],
  },
  { title: "Careers" },
  { title: "About" },
];

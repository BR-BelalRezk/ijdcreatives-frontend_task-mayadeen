import { FaSnapchatGhost, FaInstagram, FaTiktok } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
export const navbarLinks = [
  "عن ميادين",
  "الخدمات",
  "المسابقات",
  "البث المباشر",
  "اتصل بنا",
] as const;

export const transition = {
  duration: 0.75,
  type: "tween",
  ease: [0.76, 0, 0.24, 1],
} as const;

export const stats = [
  { number: "2", power: "1", time: "23.29" },
  { number: "3", power: "3", time: "47.23" },
  { number: "5", power: "1/2", time: "59.82" },
  { number: "6", power: "11", time: "1:12.71" },
] as const;

export const modelListItems = [
  { title: "المسافة", value: "4 كم" },
  { title: "النوع", value: "رملي" },
  { title: "العمر", value: "3 سنوات" },
  { title: "الجائزة", value: "100,000 ر.س" },
] as const;

export const footerLinks = [
  { icon: FaSnapchatGhost, link: "#" },
  { icon: FaInstagram, link: "#" },
  { icon: FaXTwitter, link: "#" },
  { icon: FaTiktok, link: "#" },
] as const;

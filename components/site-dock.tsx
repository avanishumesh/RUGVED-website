"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconTank,
  IconCpu,
  IconUsersGroup,
  IconMail,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";

export function SiteDock() {
  const items = [
    { title: "Home", icon: <IconHome className="h-full w-full text-[#c2b8a3]" />, href: "/" },
    { title: "Projects", icon: <IconTank className="h-full w-full text-[#c2b8a3]" />, href: "/projects" },
    { title: "Subsystems", icon: <IconCpu className="h-full w-full text-[#c2b8a3]" />, href: "/subsystems" },
    { title: "Team", icon: <IconUsersGroup className="h-full w-full text-[#c2b8a3]" />, href: "/team" },
    { title: "Contact", icon: <IconMail className="h-full w-full text-[#c2b8a3]" />, href: "/contact" },
    { title: "GitHub", icon: <IconBrandGithub className="h-full w-full text-[#c2b8a3]" />, href: "https://github.com/RUGVED-Systems-MIT" },
    { title: "Instagram", icon: <IconBrandInstagram className="h-full w-full text-[#c2b8a3]" />, href: "https://www.instagram.com/rugved_systems" },
  ];
  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <FloatingDock items={items} />
    </div>
  );
}

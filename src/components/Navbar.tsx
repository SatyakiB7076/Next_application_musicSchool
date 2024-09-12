"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { HeroHighlight } from "./ui/hero-highlight";


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <HeroHighlight>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href={"/courses"}>All Lessons</HoveredLink>
              <HoveredLink href={"/"}>Guitar Lesson</HoveredLink>
              <HoveredLink href={"/"}>Piano Lesson</HoveredLink>
              <HoveredLink href={"/"}>Vocal Lesson</HoveredLink>
            </div>
          </HeroHighlight>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact Us"
        ></MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;

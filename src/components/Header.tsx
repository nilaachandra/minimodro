import React from "react";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-xl font-bold">minimodoro</h1>
      <div className="flex items-center gap-4">
        <a href="https://github.com/nilaachandra/minimodro" target="_blank">
          <Button variant="outline" className="">
            <Star className="h-[1.2rem] w-[1.2rem] " />
          </Button>
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Header;

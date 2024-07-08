import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

interface DropDownProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  handleAction: (action: string) => void;
  options: string[];
}

function DropDown({
  label,
  value,
  setValue,
  handleAction,
  options,
}: DropDownProps) {
  return (
    <div className="w-full justify-end flex px-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[9rem] ">
            {label}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={value} onValueChange={setValue} >
            {options.map((option) => (
              <DropdownMenuRadioItem
                key={option}
                value={option}
                onClick={() => handleAction(option)}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropDown;

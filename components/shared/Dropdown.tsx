"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/lib/database/models/category.model";

type DropdownProps = {
  value?: string;
  onChangeHandler: () => void;
};

export default function Dropdown({ onChangeHandler, value }: DropdownProps) {
  const [categories, setCategories] = useState<ICategory[]>([]);
  return (
    <Select onValueChange={onChangeHandler} defaultValues={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 &&
          categories?.map((category) => (
            <SelectItem
              key={category._id}
              value={category.name}
              className="p-regular-14"
            >
              {category.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}

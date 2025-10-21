import type { JSX } from "react";

interface FilterBarProps {
  onFilterChange?: (filter: string) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps): JSX.Element {
  const filters = ["All", "Dress", "Top", "Skirt", "Pants"];

  return (
    <div className="flex gap-2 mt-4 flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter}
          className="px-2 py-1 border rounded hover:bg-gray-100 transition"
          onClick={() => onFilterChange?.(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

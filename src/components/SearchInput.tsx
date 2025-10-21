import type { JSX } from "react";

interface SearchInputProps {
  onSearch?: (query: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps): JSX.Element {
  return (
    <input
      type="text"
      placeholder="Search patterns..."
      className="border p-2 rounded w-full"
      onChange={(e) => onSearch?.(e.currentTarget.value)}
    />
  );
}

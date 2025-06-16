export interface item {
  id: number;
  text: string;
  checked: boolean;
}
export interface Props {
  items: item[];
  check: (id: number) => void;
  deleteItem: (id: number) => void;
}

type Width = number;
type Height = number;

type Size = `${Width}x${Height}`;

export interface Unsplash {
  id: string;
  size: Size;
}

export function unsplash({ id, size }: Unsplash) {
  return `https://source.unsplash.com/${id}/${size}`;
}

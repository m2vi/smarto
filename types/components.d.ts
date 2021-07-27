export interface RedirectProps {
  type: "push" | "replace";
  url: string;
  as?: string;
  title?: string;
  options?: {
    shallow?: boolean;
    locale?: string | false;
    scroll?: boolean;
  };
}

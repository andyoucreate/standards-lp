declare module "react-scroll-into-view" {
  import type { ComponentType, ReactNode } from "react";

  interface ScrollIntoViewProps {
    selector: string;
    smooth?: boolean;
    alignToTop?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
    onClick?: () => void;
    [key: string]: unknown;
  }

  const ScrollIntoView: ComponentType<ScrollIntoViewProps>;
  export default ScrollIntoView;
}

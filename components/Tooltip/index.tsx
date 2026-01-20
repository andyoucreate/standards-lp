"use client";

import Tippy from "@tippyjs/react";
import type { TippyProps } from "@tippyjs/react";
import { forwardRef } from "react";

// Wrapper component to fix React 19 ref compatibility with Tippy
const TippyChild = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function TippyChild(props, ref) {
    return <div ref={ref} {...props} />;
  }
);

interface TooltipProps extends Omit<TippyProps, "children"> {
  children: React.ReactNode;
  className?: string;
}

export function Tooltip({ children, className, ...tippyProps }: TooltipProps) {
  return (
    <Tippy {...tippyProps}>
      <TippyChild className={className}>{children}</TippyChild>
    </Tippy>
  );
}

export default Tooltip;

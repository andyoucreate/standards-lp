declare module "@splidejs/react-splide" {
  import type { ComponentType, ReactNode } from "react";

  export interface SplideProps {
    options?: Record<string, unknown>;
    hasTrack?: boolean;
    tag?: string;
    className?: string;
    children?: ReactNode;
    onMounted?: (splide: unknown) => void;
    onMove?: (splide: unknown, newIndex: number, prevIndex: number) => void;
    onMoved?: (splide: unknown, newIndex: number, prevIndex: number) => void;
    [key: string]: unknown;
  }

  export interface SplideSlideProps {
    className?: string;
    children?: ReactNode;
    [key: string]: unknown;
  }

  export interface SplideTrackProps {
    className?: string;
    children?: ReactNode;
    [key: string]: unknown;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
  export const SplideTrack: ComponentType<SplideTrackProps>;
}

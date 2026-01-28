import { type ImageProps, default as NextImage } from "next/image";
import { memo, useState } from "react";

const Image = memo(function Image({ className, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <NextImage
      className={`inline-block align-top opacity-0 transition-opacity ${
        loaded && "opacity-100"
      } ${className || ""}`}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
});

export default Image;

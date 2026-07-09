import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  style?: CSSProperties;
}

const DEFAULT_FALLBACK = "/hero-pasillo-web.png";

export function LazyImage({
  src,
  alt,
  fallback = DEFAULT_FALLBACK,
  className = "",
  style,
}: LazyImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src || fallback);

  useEffect(() => {
    setCurrentSrc(src || fallback);
  }, [src, fallback]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
      }}
    />
  );
}
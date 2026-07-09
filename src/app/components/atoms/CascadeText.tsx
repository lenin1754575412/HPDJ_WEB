import { memo, CSSProperties, ElementType } from 'react';

interface CascadeTextProps {
  text: string;
  as?: ElementType;
  href?: string;
  target?: string;
  className?: string;
  style?: CSSProperties;
  staggerDelay?: number;
  duration?: number;
  easing?: string;
  color?: string;
  hoverColor?: string;
  direction?: 'up' | 'down';
  onClick?: (e: React.MouseEvent) => void;
}

function getChars(text: string): string[] {
  try {
    const seg = new Intl.Segmenter('en', { granularity: 'grapheme' });
    return Array.from(seg.segment(text), s => s.segment);
  } catch {
    return [...text];
  }
}

export const CascadeText = memo(function CascadeText({
  text,
  as: Tag = 'span',
  href,
  target,
  className = '',
  style,
  staggerDelay = 25,
  duration = 250,
  easing = 'ease-in-out',
  color,
  hoverColor = '#D8B17A',
  direction = 'up',
  onClick,
}: CascadeTextProps) {
  const sign = direction === 'up' ? 1 : -1;
  const chars = getChars(text);

  const containerStyle: CSSProperties = {
    display: 'inline-flex',
    overflow: 'hidden',
    height: '1.1em',
    verticalAlign: 'bottom',
    color,
    ...style,
  };

  const props: Record<string, unknown> = { className, style: containerStyle, onClick };
  if (Tag === 'a' || href) {
    props.href = href;
    props.target = target;
  }

  return (
    <Tag {...props}>
      {chars.map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            whiteSpace: 'pre',
            transition: `transform ${duration}ms ${easing} ${i * staggerDelay}ms`,
            textShadow: `0 ${sign}em currentColor`,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = `translateY(${-sign}em)`;
            (e.currentTarget as HTMLElement).style.color = hoverColor;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            (e.currentTarget as HTMLElement).style.color = '';
          }}
        >
          {char}
        </span>
      ))}
    </Tag>
  );
});

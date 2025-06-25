import {changeSrcUrl} from "@/utils/changeSrcUrl";

interface HighlightedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function HighlightedText({
  text,
  className = "",
  style,
}: HighlightedTextProps) {
  const result = changeSrcUrl(text);

  return (
    <div
      className={className + " rich-text font-segoe"}
      style={style}
      dangerouslySetInnerHTML={{__html: result}}
    />
  );
}
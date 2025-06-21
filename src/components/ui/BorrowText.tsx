export default function BorrowText({ className = "" }: { className?: string }) {
    return (
      <span className={` ${className}`} style={{
        fontFamily: "Prompt",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "10px",
        lineHeight: "26px",
        display: "flex",
        alignItems: "flex-end",
        textAlign: "center",
        letterSpacing: "-0.319844px",
        color: "currentColor",
      }}>Borrow & back</span>
    )
  }
export function HeroBackground({color="#166AF6"}: {color?:string}) {
    return (
      <>
        <div
          style={{
            position: "absolute",
            width: "650px",
            height: "650px",
            left: "0px",
            top: "400px",
            background: color,
            mixBlendMode: "lighten",
            opacity: 0.4,
            filter: "blur(250px)",
            zIndex: -10
          }}
        />
      </>
    );
  }
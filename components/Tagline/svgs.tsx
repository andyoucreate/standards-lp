export const brackets = (position: "left" | "right") =>
  position === "left" ? (
    <svg width="5" height="14" viewBox="0 0 5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 0.822266H1V12.8223H5" stroke="#F2C84B" />
    </svg>
  ) : (
    <svg width="5" height="14" viewBox="0 0 5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-2.98023e-08 0.822266H4V12.8223H-2.98023e-08" stroke="#F2C84B" />
    </svg>
  );

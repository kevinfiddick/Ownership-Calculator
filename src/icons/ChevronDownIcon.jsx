export default function PersonIcon({ size = 24, ...other }) {
  return (
    <div className="inline" {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${String(size)} ${String(size)}`}
        width={String(size)}
        height={String(size)}
      >
        <path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"></path>
      </svg>
    </div>
  );
}

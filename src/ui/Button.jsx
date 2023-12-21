import { Link } from "react-router-dom";

const base =
  "text-sm inline-block rounded-full bg-sky-400 font-semibold uppercase tracking-wide text-gray-700 transition-colors hover:bg-sky-300 focus:bg-sky-300 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

const styles = {
  primary: base + "px-3 py-2 md:px-6 md:py-4",
  secondary:
    "text-sm inline-block rounded-full border-2 border-gray-300 px-3 py-1.5 font-semibold uppercase tracking-wide text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-600 focus:bg-gray-200 focus:text-gray-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3",
  small: base + "text-xs px-2 py-1.5 sm:px-4 sm:py-2 md:text-sm",
  round: base + "text-sm px-2.5 py-1 md:px-3.5 md:py-1.5 md:text-lg",
};

// Component looks like a button
// Can act as a link when presssed if provided 'to'
// Is a button by default
function Button({ children, disabled, to, type, onClick }) {
  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

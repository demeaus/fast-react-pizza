import { Link, useNavigate } from "react-router-dom";

const className =
  "text-sm text-yellow-500 hover:text-yellow-600 hover:underline";

// Component looks like a link and acts as a link
// Can act as a back link if provided '-1'
// Acts as a link to the 'to' url by default
function LinkButton({ children, to }) {
  const navigate = useNavigate();

  if (to === "-1") {
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;

import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // React Router automatically associates useLoaderData() with loader
  const menu = useLoaderData();
  return (
    <div className="mt-0 bg-yellow-50 sm:mt-2">
      <h1 className="text-md bg-yellow-300 py-1 text-center uppercase sm:text-xl sm:font-semibold">
        Menu
      </h1>
      <ul className="divide-y divide-gray-200 px-2">
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
}

// Async fetch function
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;

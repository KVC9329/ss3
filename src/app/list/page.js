"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

async function deleteMenu(id) {
  const res = await fetch(`http://127.0.0.1:8000/api/menu/${id}/`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to retrieve menu");
  }
  return Promise.resolve();
}

async function getData() {
  const res = await fetch("http://127.0.0.1:8000/api/menu/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const MenuItem = ({ id, name, price, onEdit, onDelete }) => {
  return (
    <div className="menu-item" data-id={id}>
      <div className="menu-item-info">
        <div className="menu-item-name">{name}</div>
        <div className="menu-item-price">₹  {price.toFixed(2)}</div>
      </div>
      <div className="menu-item-actions">
        <button className="edit-button" onClick={onEdit}>
          Edit
        </button>
        <button
          className="delete-button"
          onClick={() => {
            deleteMenu(id).then(() => onDelete(id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const [menuItem, setMenuItem] = useState(null);
  const router = useRouter();
  const params = useSearchParams();

   // State for displaying a success message
  const [successMessage, setSuccessMessage] = useState({
    show : false,
    type : "", // either 'add' or 'update'
  })
 
  // Fetch menu items on component mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setMenuItem(data);
    };
    fetchData().catch(console.error);
  }, []);

   // Detect changes in URL parameters for success messages
   useEffect(() => {
    if (!!params.get("action")) {
      setSuccessMessage({
        type: params.get("action"),
        show: true,
      });
      router.replace("/");
    }
  }, [params, router]);

  // Automatically hide the success message after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (successMessage.show) {
        setSuccessMessage({ show: false, type: "" });
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [successMessage.show]);

  // Handle deletion of a menu item
  const handleDelete = (id) => {
    setMenuItem((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <input
          type="text"
          placeholder="search"
          className="py-3 px-2 w-large h-10 text-black"
        />
        <button className="add-button" onClick={() => router.push("/add")}>
          Add
        </button>
      </div>
      {successMessage.show && (
        <p className="success-message">
          {successMessage.type === "add" ? "Added a" : "Modified a"} menu
          item.
        </p>
      )}
      {menuItem ? (
        menuItem.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            onEdit={() => router.push(`/update/${item.id}`)}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <div>
          <div className="my-2 w-16 h-16 border-4 border-black border-dashed rounded-full animate-spin"></div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import { userData } from "./logic";

export const PersonOne = () => {
  const [user, setUser] = useState<userData>({
    id: 0,
    Title: "",
    Name_front_mid: "",
    lastName: "",
    Nasionality: "",
  });
  const [Users, setUsers] = useState<userData[]>([]);
  const [isEditing, setEditing] = useState<number | null>(null);
  const [editUser, setEditUser] = useState<userData | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setEditUser((prevState) =>
      prevState ? { ...prevState, [name]: value } : null,
    );
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setUsers((prevUsers) => [...prevUsers, { ...user, id: Date.now() }]);
    setUser({
      id: 0,
      Title: "",
      Name_front_mid: "",
      lastName: "",
      Nasionality: "",
    });
  };

  const handleEditSave = () => {
    if (isEditing !== null && editUser) {
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === isEditing ? editUser : u)),
      );
      setEditing(null);
      setEditUser(null);
    }
  };

  const handleEdit = (id: number) => {
    const userToEdit = Users.find((u) => u.id === id);
    if (userToEdit) {
      setEditUser(userToEdit);
      setEditing(id);
      setExpanded(id);
    }
  };

  const handleDelete = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
    setEditing(null);
    setEditUser(null);
  };

  const handleCancelEdit = () => {
    setEditUser(null);
    setEditing(null);
  };

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="py">
      <div className="rounded-lg bg-white py-4">
        <form onSubmit={handleSave}>
          <div className="flex items-center justify-between px-2">
            <h1 className="text-base font-semibold">Person 1</h1>
            <button
              type="submit"
              className="text-sm text-orange-400 hover:scale-110 hover:text-orange-500"
            >
              Save
            </button>
          </div>
          <hr className="border-b-1 border-t border-gray-300" />
          <div>
            <p className="text-orange-400 sm:p-5 sm:text-[11px] lg:p-7 lg:text-sm">
              Pastikan nama penumpang persis seperti yang tertulis di KTP/SIM
              yang dikeluarkan pemerintah. Hindari kesalahan apa pun, karena
              beberapa maskapai tidak mengizinkan koreksi nama setelah
              pemesanan.
            </p>
          </div>
          <div className="mt-5 items-center px-2">
            <div className="my-4">
              <div className="my-4 flex">
                <h5 className="py-1 text-gray-400 sm:text-[11px] lg:text-sm">
                  Title
                </h5>
                <span className="text-red-600">*</span>
              </div>
              <div className="relative sm:text-[11px] lg:text-sm">
                <select
                  name="Title"
                  value={user.Title}
                  onChange={handleChange}
                  className="block w-32 appearance-none rounded border border-gray-400 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                >
                  <option value="">Select Title</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-24 flex items-center px-2 text-gray-700">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-between py-6">
              <div className="">
                <div className="flex">
                  <h5 className="py-1 text-gray-400 sm:text-[10px] lg:text-sm">
                    Nama depan dan tengah (jika ada)
                  </h5>
                  <span className="text-red-600">*</span>
                </div>
                <input
                  type="text"
                  name="Name_front_mid"
                  value={user.Name_front_mid}
                  onChange={handleChange}
                  className="mt-1 h-[50px] rounded-md border border-gray-400 pl-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:w-[180px] lg:w-[310px]"
                  required
                />
                <p className="pt-3 text-gray-400 sm:text-[11px] lg:text-sm">
                  (tanpa gelar dan tanda baca)
                </p>
              </div>
              <div className="mt-0">
                <div className="mt-0 flex">
                  <h5 className="py-1 text-gray-400 sm:text-[11px] lg:text-sm">
                    Nama Belakang
                  </h5>
                  <span className="text-red-600">*</span>
                </div>
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  className="mt-1 h-[50px] rounded-md border border-gray-400 pl-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:w-[180px] lg:w-[310px]"
                  required
                />
                <p className="pt-3 text-gray-400 sm:text-[11px] lg:text-sm">
                  (tanpa gelar dan tanda baca)
                </p>
              </div>
            </div>
            <div className="my-4">
              <div className="my-4 flex">
                <h5 className="py-1 text-gray-400 sm:text-[11px] lg:text-sm">
                  Nasionality
                </h5>
                <span className="text-red-600">*</span>
              </div>
              <div className="relative sm:text-[11px] lg:text-sm">
                <select
                  name="Nasionality"
                  value={user.Nasionality}
                  onChange={handleChange}
                  className="block w-72 appearance-none rounded border border-gray-400 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                >
                  <option value="">Select Nationality</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="USA">USA</option>
                </select>
                <div className="Wx pointer-events-none absolute inset-y-0 left-64 flex items-center px-2">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-5">
        {Users.map((u, index) => (
          <div key={u.id} className="mt-5 rounded-lg border bg-white py-5">
            <div
              className="flex items-center justify-between px-2"
              onClick={() => toggleExpand(u.id)}
            >
              <h2 className="cursor-pointer text-base font-semibold">
                Person {index + 2}
              </h2>
              <div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(u.id);
                  }}
                >
                  {expanded == u.id ? (
                    <div className="">
                      {isEditing === u.id ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditSave();
                          }}
                          className="text-sm text-orange-400 hover:scale-110 hover:text-orange-600"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEdit(u.id);
                          }}
                          className="text-sm text-orange-400 hover:scale-110 hover:text-orange-600"
                        >
                          Edit Passenger
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="pr-4 text-xl font-semibold">+</div>
                  )}
                </div>
              </div>
            </div>

            {expanded === u.id && (
              <div>
                <hr className="border-b-1 border-t border-gray-300 pb-4" />
                <div className="">
                  {isEditing === u.id ? (
                    <div className="mt-5 items-center px-2">
                      <div className="my-4">
                        <div className="my-4 flex">
                          <h5 className="py-1 text-gray-400 sm:text-[11px] lg:text-sm">
                            Title
                          </h5>
                          <span className="text-red-600">*</span>
                        </div>
                        <div className="relative sm:text-[11px] lg:text-sm">
                          <select
                            name="Title"
                            value={editUser?.Title || ""}
                            onChange={handleEditChange}
                            className="block w-32 appearance-none rounded border border-gray-400 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="grid-state"
                          >
                            <option value="">Select Title</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 left-24 flex items-center px-2 text-gray-700">
                            <svg
                              className="h-4 w-4 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between py-6">
                        <div className="mt-0">
                          <div className="mt-0 flex">
                            <h5 className="py-1 text-gray-400 sm:text-[10px] lg:text-sm">
                              Nama depan dan tengah (jika ada)
                            </h5>
                            <span className="text-red-600">*</span>
                          </div>
                          <input
                            type="text"
                            name="Name_front_mid"
                            value={editUser?.Name_front_mid || ""}
                            onChange={handleEditChange}
                            className="mt-1 h-[50px] rounded-md border border-gray-400 pl-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:w-[180px] lg:w-[310px]"
                            required
                          />
                          <p className="pt-3 text-gray-400 sm:text-[11px] lg:text-sm">
                            (tanpa gelar dan tanda baca)
                          </p>
                        </div>
                        <div className="mt-0">
                          <div className="mt-0 flex">
                            <h5 className="py-1 text-gray-400 sm:text-[11px] lg:text-sm">
                              Nama Belakang
                            </h5>
                            <span className="text-red-600">*</span>
                          </div>
                          <input
                            type="text"
                            name="lastName"
                            value={editUser?.lastName || ""}
                            onChange={handleEditChange}
                            className="mt-1 h-[50px] rounded-md border border-gray-400 pl-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:w-[180px] lg:w-[310px]"
                            required
                          />
                          <p className="pt-3 text-gray-400 sm:text-[11px] lg:text-sm">
                            (tanpa gelar dan tanda baca)
                          </p>
                        </div>
                      </div>
                      <div className="my-4">
                        <div className="my-4 flex">
                          <h5 className="py-1 text-gray-400 sm:text-[11px] lg:text-sm">
                            Nasionality
                          </h5>
                          <span className="text-red-600">*</span>
                        </div>
                        <div className="relative sm:text-[11px] lg:text-sm">
                          <select
                            name="Nasionality"
                            value={editUser?.Nasionality || ""}
                            onChange={handleEditChange}
                            className="block w-72 appearance-none rounded border border-gray-400 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="grid-state"
                          >
                            <option value="">Select Nationality</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="USA">USA</option>
                          </select>
                          <div className="Wx pointer-events-none absolute inset-y-0 left-64 flex items-center px-2">
                            <svg
                              className="h-4 w-4 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 px-2">
                      <div className="space-y-1">
                        <h3 className="text-gray-400 sm:text-[11px] lg:text-sm">
                          Nama Passenger
                        </h3>
                        <p className="text-base">
                          {u.Title} {u.Name_front_mid} {u.lastName}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-gray-400 sm:text-[11px] lg:text-sm">
                          kewarganegaraan
                        </h3>
                        <p className="text-base">{u.Nasionality}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

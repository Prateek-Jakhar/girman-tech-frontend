import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import UserDialog from "./components/UserDialog";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allUsers, setAllUsers] = useState([]); // Original data
  const [filteredResults, setFilteredResults] = useState([]); // Filtered data
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://girman-tech-backend.vercel.app/api/user/fetchUsers"
        );
        const data = await response.json();
        setAllUsers(data.data);
        setFilteredResults(data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term) {
      const filteredResults = allUsers.filter((user) =>
        `${user.first_name} ${user.last_name}`
          .toLowerCase()
          .includes(term.toLowerCase())
      );
      setFilteredResults(filteredResults);
    } else {
      setFilteredResults(allUsers);
    }
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <img
            src={"company-logo.svg"}
            alt="Logo"
            className="w-1/2 md:w-1/3 lg:w-1/4 max-w-xs"
          />
          <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
        </div>
        {searchTerm && filteredResults.length > 0 ? (
          <SearchResults results={filteredResults} onUserClick={openModal} />
        ) : searchTerm && filteredResults.length === 0 ? (
          <div className="flex flex-col items-center mt-8">
            <img
              src="no_data_found.jpg"
              alt="No results found"
              className="w-1/2 max-w-sm md:w-1/3 lg:w-1/4"
            />
            {/* <p className="text-gray-600 mt-4">No results found</p> */}
          </div>
        ) : null}{" "}
      </div>

      <UserDialog
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;

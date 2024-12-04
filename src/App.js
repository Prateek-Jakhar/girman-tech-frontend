import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import UserDialog from "./components/UserDialog";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setResults([
      {
        id: 1,
        first_name: "Anjali",
        last_name: "Sharma",
        city: "Mumbai",
        contact_number: "90999 80888",
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        id: 2,
        first_name: "Emily",
        last_name: "Watson",
        city: "New York",
        contact_number: "80888 70777",
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      },
    ]);
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
          <h1 className="text-2xl font-bold text-blue-600 mb-4">
            Girman Technologies
          </h1>
          <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
        </div>
        {searchTerm && (
          <SearchResults results={results} onUserClick={openModal} />
        )}
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

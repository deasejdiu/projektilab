import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function CarRental() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const editCar = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const deleteCar = () => {
        alert("Car deleted!");
    }

    const handleModalClose = (event) => {
        if (event.target.id === "editModal") {
            setIsModalOpen(false);
        }
    }

    const addCar = () => {
        // Logic for adding a new car
    }

    return (
        <div>
            <header>
                <h1>Car Rental Service</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cars">Cars</Link></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><button onClick={editCar}>Add Car</button></li>
                    </ul>
                </nav>
            </header>

            <section className="crud">
                <h2>Available cars</h2>
                <div className="car">
                    <img src="car1.jpg" alt="Car 1" />
                    <h3>Toyota Camry</h3>
                    <p>Price: 50 € /day</p>
                    <button onClick={editCar}>Edit</button>
                    <button onClick={deleteCar}>Delete</button>
                </div>
            </section>

            <footer>
                <p>&copy; 2024 Car Rental Service. All rights reserved.</p>
            </footer>

            {isModalOpen && (
                <div id="editModal" className="modal" onClick={handleModalClose}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Edit Car</h2>
                        <form>
                            <label htmlFor="editCarName">Car Name:</label><br />
                            <input type="text" id="editCarName" name="editCarName" required /><br />
                            <label htmlFor="editCarPrice">Price per Day:</label><br />
                            <input type="number" id="editCarPrice" name="editCarPrice" required /><br /><br />
                            <button type="submit">Save Changes</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CarRental;

import {NavDropdown} from "react-bootstrap";
import React, {useState} from "react";

const CityManager = () => {
    const [city, setCity] = useState(localStorage.getItem("city") || "Москва");

    function changeCity(city) {
        setCity(city);
        localStorage.setItem("city", city)
    }

    return (
        <NavDropdown menuVariant="dark" title={city} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={(e) => changeCity("Москва")}>Москва</NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => changeCity("Санкт-Петербург")}>Санкт-Петербург</NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => changeCity("Казань")}>Казань</NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => changeCity("Екатеринбург")}>Екатеринбург</NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => changeCity("Нижний Новгород")}>Нижний Новгород</NavDropdown.Item>
        </NavDropdown>
    );
};

export default CityManager;
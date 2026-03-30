import { useState } from "react";
import Layout from "./Layout";

export default function NewNobel() {
    const [formData, setFormData] = useState({
        person: "",
        year: "",
        place_of_birth: "",
    });

    const [answer, setAnswer] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch("https://mathiasz-siofok.edu.hu/nobel/create.php", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then( () => {
            setFormData({person: "", year: "", place_of_birth: ""})
            setAnswer("Sikeres mentés!")
        })
        .catch(errors => {
            console.error(errors)
            setAnswer("Hiba a mentés során!")
        });
    };


    return (
        <>
            <Layout>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Író neve</label>
                        <input 
                            type="text" 
                            className="form-control"
                            name="person"
                            value={formData.person}
                            onChange={handleChange} 
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Év</label>
                        <input 
                            type="number" 
                            className="form-control"
                            name="year"
                            value={formData.year}
                            onChange={handleChange} 
                            min="1901"
                            max="2026"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Születési hely azonosító</label>
                        <input 
                            type="number" 
                            className="form-control"
                            name="place_of_birth"
                            value={formData.place_of_birth}
                            onChange={handleChange} 
                            min="1"
                            max="37"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-secondary">Küldés</button>
                </form>
                {answer && <div>{answer}</div>}
            </Layout>
        </>
    )
}
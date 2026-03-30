import { useState } from "react";
import Layout from "./Layout";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditNobel() {
    const navigate = useNavigate();
    const location = useLocation();
    const props = location.state;
    const [formData, setFormData] = useState({
        person: props.person,
        year: props.year,
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

        fetch(`https://mathiasz-siofok.edu.hu/nobel/update.php?id=${props.id}`, 
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then( () => {
            props.person = formData.person
            props.year = formData.year
            navigate(`/${props.id}`, {state: props});
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
                    <button type="submit" className="btn btn-secondary">Küldés</button>
                </form>
                {answer && <div>{answer}</div>}
            </Layout>
        </>
    )
}
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import Layout from "./Layout";

export default function CardShow() {
    const location = useLocation();
    const props = location.state;
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/edit/${props.id}`, {state: props});
    }

    const deleteClick = () => {
        const confirmDelete = window.confirm("Biztosan törli?");
        if (!confirmDelete) return;
        fetch(`https://mathiasz-siofok.edu.hu/nobel/delete.php?id=${props.id}`)
        .then(navigate('/'))
        .catch(errors => {console.error(errors)});
    }

    return(
        <>
            <Layout>
                <article className="col-lg-4 col-md-4 col-sm-12">

                        <img src={props.img} alt={props.person}/>
                        <h2>{props.person}</h2>
                        <p>{props.year}</p>
                        <p><strong>Származás: </strong><br/>
                        {props.continent}, {props.country}</p>

                        <div>
                            <button onClick={handleClick}>Módosítás</button>
                            <button onClick={deleteClick}>Törlés</button>
                        </div>
                    </article>
            </Layout>
        </>
    )
}
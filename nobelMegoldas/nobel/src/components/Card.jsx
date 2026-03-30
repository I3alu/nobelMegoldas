import { useNavigate } from "react-router-dom"

export default function Card(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${props.id}`, {state: props});
    };
    
    return(
        <>
        <article className="col-lg-4 col-md-4 col-sm-12">

                <img src={props.img} alt={props.person}/>
                <h2>{props.person}</h2>
                <p>{props.year}</p>
                <div>
                    <button onClick={handleClick}>Részletek</button>
                </div>
            </article>
        </>
    )
}
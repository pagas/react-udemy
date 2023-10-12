const ConceptItem = ({ title, description, image }) => {
    return (
        <li className="concept">
            <img src={image} alt={title} />
            <h2>TODO: {title}</h2>
            <p>TODO: {description}</p>
        </li>
    )
}

export default ConceptItem;
import ConceptItem from "./ConceptItem";

const Concepts = ({ concepts }) => {
    return (
        <ul id="concepts">
            {concepts.map((concept, index) => (
                <ConceptItem key={index} {...concept} />
            ))}
        </ul>
    )
}

export default Concepts;
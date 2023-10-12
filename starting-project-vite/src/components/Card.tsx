import { PropsWithChildren } from "react";
import "./Card.css";

interface CardProps {
    className: string
}

const Card = ({ children, className }: PropsWithChildren<CardProps>) => {
    const combinedClassName = `card ${className}`;
    return (
        <div className={combinedClassName}>
            {children}
        </div>
    )
}

export default Card;
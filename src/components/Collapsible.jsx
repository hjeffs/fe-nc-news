import { useState } from "react";

function Collapsible({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="Collapsible">
            <button className="Collapsible_button" onClick={toggleCollapsible}>
                {title}
            </button>
            {isOpen && (
                <div className="Collapsible_content">
                    {children}
                </div>
            )}
        </div>
    );
}

export default Collapsible;

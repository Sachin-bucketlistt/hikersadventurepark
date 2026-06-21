import React from "react";
import "./Button.css";

/**
 * Reusable Button component
 * @param {string} variant - "primary" | "secondary"  (default: "primary")
 * @param {string} tag     - HTML tag to render: "button" | "a" (default: "button")
 */
const Button = ({ variant = "primary", tag = "button", children, className = "", ...props }) => {
    const Tag = tag;
    return (
        <Tag className={`btn btn--${variant} ${className}`.trim()} {...props}>
            {children}
        </Tag>
    );
};

export default Button;

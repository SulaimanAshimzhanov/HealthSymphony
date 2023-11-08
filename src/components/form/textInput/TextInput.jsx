import React from "react";


export const TextInput = React.forwardRef(({
    type,
    placeholder,
    ...rest
}, ref) => (
    <input
        type={type}
        placeholder={placeholder}
        {...rest}
        ref={ref}
    />
));
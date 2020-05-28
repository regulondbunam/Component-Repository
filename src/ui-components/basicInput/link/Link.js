import React from 'react';
import PropTypes from 'prop-types';

const disabledStyle = {
    color: "#666666"
}

const accentStyle = {
    color: "#cc9900",
    fontFamily: "sans-serif"
}

const simpleStyle = {
    color: "#ffffff",
    textDecoration: "none"
}

const Link = ({
    disabled,
    href,
    style,
    target,
    children,
    regulonStyle
}) => {

    let prefStyle;

    switch (regulonStyle) {
        case "accent":
            prefStyle = Object.assign({},style, accentStyle)
            break;
        case "simple":
            prefStyle =  Object.assign({},style, simpleStyle)
            break;
        default:
            prefStyle = style
            break;
    }

    return (
        <>
            {
                disabled
                    ? <a href={href} style={disabledStyle} target={target}>
                        {children}
                    </a>
                    : <a href={href} style={prefStyle} target={target}>
                        {children}
                    </a>
            }
        </>
    );
}

export default Link;


Link.propTypes = {
    disabled: PropTypes.bool,
    href: PropTypes.string,
    style: PropTypes.object,
    regulonStyle: PropTypes.string,
    target: PropTypes.string,
    children: PropTypes.string,
};

Link.defaultProps = {
    disabled: false,
    href: "",
    style: {},
    regulonStyle: "",
    target: "_top",
    children: "link"
};


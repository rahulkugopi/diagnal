import React, { Fragment } from 'react'

interface PropsType {
    color?: string;
}

function SearchIcon(props: PropsType) {
    const { color } = props;

    return (
        <Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 32 32"><path d="M21.15 19.74a12 12 0 1 0-1.41 1.41l10.55 10.56 1.41-1.41zM12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10z" data-name="49-Search" /></svg>
        </Fragment>
    )
}

export default SearchIcon
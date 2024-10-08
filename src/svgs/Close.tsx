import React, { Fragment } from 'react'

interface PropsType {
    color?: string;
}

function Close(props: PropsType) {
    const { color } = props;

    return (
        <Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 32 32"><g data-name="59-Remove"><path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z" /><path d="M22.29 8.29 16 14.59l-6.29-6.3-1.42 1.42 6.3 6.29-6.3 6.29 1.42 1.42 6.29-6.3 6.29 6.3 1.42-1.42-6.3-6.29 6.3-6.29-1.42-1.42z" /></g></svg>
        </Fragment>
    )
}

export default Close
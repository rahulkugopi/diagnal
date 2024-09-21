import React, { Fragment } from 'react'

interface PropsType {
  width?: string;
  height?: string;
  color?: string;
}

function LeftArrow(props: PropsType) {
  const { width, height, color } = props;

  return (
    <Fragment>
      <svg fill={color} height={`${width}px`} width={`${height}px`} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 489.3 489.3">
        <g>
          <g>
            <path d="M476.9,232.45H147.2l55.9-55.9c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0l-76.8,76.8c-4.8,4.8-4.8,12.5,0,17.3l76.8,76.8
			c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-55.9-55.9H477c6.8,0,12.3-5.5,12.3-12.3
			C489.2,237.85,483.7,232.45,476.9,232.45z"/>            
          </g>
        </g>
      </svg>
    </Fragment>
  )
}

export default LeftArrow
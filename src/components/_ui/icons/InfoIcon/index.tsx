import React from 'react'

import { IconProps } from '../types.js'

import classes from '../index.module.scss'

export const InfoIcon: React.FC<IconProps> = (props) => {
  const { size, className } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={[className, classes.icon, size && classes[size]]
        .filter(Boolean)
        .join(' ')}
    >
      <path
        d="M47 23.8535C47 36.4694 36.7083 46.707 24 46.707C11.2917 46.707 1 36.4694 1 23.8535C1 11.2376 11.2917 1 24 1C36.7083 1 47 11.2376 47 23.8535Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M25.7808 13.9119V15.6294C25.7808 15.8534 25.6055 16.0276 25.3801 16.0276H23.6771C23.4517 16.0276 23.2764 15.8534 23.2764 15.6294V13.9119C23.2764 13.7128 23.4517 13.5137 23.6771 13.5137H25.3801C25.6055 13.5137 25.7808 13.7128 25.7808 13.9119ZM23.1512 20.7817H20.1209C19.8455 20.7817 19.6201 20.5577 19.6201 20.2839V19.1638C19.6201 18.89 19.8455 18.666 20.1209 18.666H25.2048C25.4802 18.666 25.7056 18.89 25.7056 19.1638V28.7467C25.7056 28.8961 25.8058 28.9956 25.9561 28.9956H29.1366C29.4121 28.9956 29.6375 29.2197 29.6375 29.4935V30.6135C29.6375 30.8873 29.4121 31.1113 29.1366 31.1113H19.8705C19.595 31.1113 19.3696 30.8873 19.3696 30.6135V29.4935C19.3696 29.2197 19.595 28.9956 19.8705 28.9956H23.1512C23.3015 28.9956 23.4016 28.8961 23.4016 28.7467V21.0306C23.4016 20.8813 23.3015 20.7817 23.1512 20.7817Z"
        fill="currentColor"
      />
    </svg>
  )
}
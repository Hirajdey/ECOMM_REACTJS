import React from 'react'
import classnames from 'classnames'
import Styles from './ResponsiveRow.module.scss'

interface ResponsiveRow{
    children: JSX.Element;
    responsiveClass?: string;
} 

const ResponsiveRow = ({children, responsiveClass}: ResponsiveRow) => {
    return (
        <div className={classnames(Styles.main, responsiveClass)}>
            {children}
        </div>
    )
}

export default ResponsiveRow

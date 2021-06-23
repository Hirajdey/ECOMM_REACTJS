import React from 'react';
import classnames from 'classnames'
import Styles from './Container.module.scss'

interface ContainerProps {
    children: JSX.Element;
    containerClass?: string;
}

const Container = ({children, containerClass}: ContainerProps) => {
    return (
        <div className={classnames(Styles.main, containerClass)}>
            {children}
        </div>
    )
}

export default Container;

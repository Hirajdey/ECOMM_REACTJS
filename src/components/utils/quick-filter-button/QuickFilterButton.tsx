import React from 'react'
import classnames from 'classnames';
import Styles from './QuickFilterButton.module.scss';

interface QuickFilterButton{
    category:string;
    quickbtnClass?: string;
    handelFilter: (e:string) => void;
    filterValue: string;
}

const QuickFilterButton = ({category, quickbtnClass, handelFilter, filterValue}:QuickFilterButton) => {
    return (
        <span 
            className={classnames(Styles.main, quickbtnClass, category === filterValue? Styles.selected:"")} 
            onClick={() => handelFilter(category)}
            
        >
            {category}
        </span>
    )
}

export default QuickFilterButton

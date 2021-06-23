import classNames from 'classnames';
import React from 'react';
import Container from '../container/Container';
import QuickFilterButton from '../quick-filter-button/QuickFilterButton';
import ResponsiveRow from '../responsive-row/ResponsiveRow';
import Styles from './FilterPanel.module.scss';

interface FilterPanelProps{
    categoryes:any;
    handelFilter: (e:string) => void;
    filterValue: string;
}

const FilterPanel = ({categoryes, handelFilter, filterValue}:FilterPanelProps) => {   
    return (
        <section className={Styles.main}>
            <Container>
                <ResponsiveRow>
                    <>
                        <div className={Styles.col}>
                            {/* serach */}                    
                        </div>
                        <div className={Styles.col}>
                            {/* filter by price */}
                        </div>
                        <div className={Styles.col}>
                            {/* short */}
                        </div>
                        <div className={Styles.col}>
                            {categoryes.map((data:string,index:number)=>(
                                <QuickFilterButton
                                    key={index}
                                    category={data}
                                    quickbtnClass={Styles.quickFilterBtn}
                                    handelFilter={handelFilter}
                                    filterValue={filterValue}
                                />
                            ))}
                        </div>
                    </>
                </ResponsiveRow>
            </Container>
                
        </section>
    )
}

export default FilterPanel

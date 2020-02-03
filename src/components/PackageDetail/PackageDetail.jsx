import React, { Component } from 'react';
import styles from './PackageDetail.module.css';

const packageDetail = (props) => {

    return <div
        className={styles.PackageDetail}
        hidden={Object.keys(props.selectedPackage).length == 0}>
        <h3 className={styles.H3}>Name</h3>
        <p>{props.selectedPackage.name}</p>
        <h3 className={styles.H3}>Description</h3>
        <p>{props.selectedPackage.description}</p>
        <h3 className={styles.H3}>Dependencies</h3>
        {props.selectedPackage.depends.map(dependance =>
            <li>{dependance}</li>
        )}

    </div>
}

export default packageDetail;
import React, { Component } from 'react';
import styles from './Package.module.css'

const packageNames = (props) => {
    const selectedPackageId = props.packages[props.selectedIndex].id
    const packageNames = Object.keys(props.packages)
        .map(packageKey => {
            return (
                <div
                    key={packageKey}
                    className={styles.PackageLink}
                    onClick={event => props.clicked(event, packageKey)}
                    style={props.packages[packageKey].id === selectedPackageId ?
                        { backgroundColor: 'gray', color: 'white' } : { hover: 'lightgray' }}>
                    {props.packages[packageKey].name}
                </div>
            );
        });

    return (
        <div className={styles.Packages}>
            <h3 className={styles.H3}>Packages</h3>
            <div style={{ backgroundColor: 'lightgray', height: '1px' }} ></div>
            {packageNames}
        </div>
    );

}

export default packageNames;
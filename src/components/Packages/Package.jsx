import React, { Component } from 'react';
import classes from './Package.module.css'

const packageNames = () => {
    return (
        <div className={classes.Packages}>
            <div className={classes.Package}>
                <h2>Packages</h2>
                <div className={classes.PackageLink}>libws-commons-util-java</div>
                <div className={classes.PackageLink}>python-pkg-resources</div>
                <div className={classes.PackageLink}>tcpd</div>
                <div className={classes.PackageLink}>libbsf-java</div>
                <div className={classes.PackageLink}>libaspectj-java</div>
                <div className={classes.PackageLink}>libslf4j-java</div>
            </div>
        </div>
    );

}

export default packageNames;
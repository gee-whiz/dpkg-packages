import React, { Component } from 'react';
import classes from './PackageDetail.module.css';


class PackageDetail extends Component {
    render() {
        return <div className={classes.PackageDetail}>
            <h2>Description</h2>
            <p>
                python-setuptools , python2.3-setuptools , python2.4-setuptools
                    Description: Package Discovery and Resource Access using pkg_resources
                             The pkg_resources module provides an API for Python libraries to
                             access their resource files, and for extensible applications and
                             frameworks to automatically discover plugins.  It also provides
                             runtime support for using C extensions that are inside zipfile-format
                             eggs, support for merging packages that have separately-distributed
                             modules or subpackages, and APIs for managing Python's current
                             "working set" of active packages.
                </p>
        </div>
    }
}

export default PackageDetail;
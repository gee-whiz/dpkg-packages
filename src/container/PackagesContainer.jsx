import React, { Component } from 'react';
import Package from '../components/Packages/Package';
import PackageDetail from '../components/PackageDetail/PackageDetail';
import Aux from '../hoc/Aux';

class PackagesContainer extends Component {

    state = {
        packages: [{
            id: '0', name: "libws-commons-util-java",
            description: " Common utilities from the Apache Web Services ProjectThis is a small collection of utility classes, that allow high performance XML processing based on SAX.t",
            depends: ["Python", "Java"]
        },
        {
            id: '1', name: "python-pkg-resources",
            description: "Common utilities from the Apache Web Services Project",
            depends: ["Python", "Java", "C++"]
        },
        {
            id: '2', name: "tcpd",
            description: "Common utilities from the Apache Web Services Project",
            depends: ["Python", "Java", "C++"]

        },
        {
            id: '3', name: "libbsf-java",
            description: "aspect-oriented extension for Java - libraryAspectJ enables the clean modularization of crosscutting concernssuch as: error checking and handling, synchronization, context- sensitivebehavior, performance optimizations, monitoring and logging, debuggingsupport, multi- object protocols.",
            depends: ["Python", "Java", "C++", "swift"]
        },
        {
            id: '4', name: "libaspectj-java",
            description: "Common utilities from the Apache Web Services Project",
            depends: ["Python", "Java", "C++"]
        },
        {
            id: '5', name: "libslf4j-java",
            description: "Common utilities from the Apache Web Services Project",
            depends: ["Python", "Java", "C++"]
        }
        ],
        selectedIndex: 0

    };

    showPackageDetailHandler = (event, id) => {
        const packageIndex = this.state.packages.findIndex(p => {
            return p.id === id;
        });
        this.setState({ selectedIndex: packageIndex });
    };

    render() {
        const selectedIndex = this.state.selectedIndex;
        return (
            <Aux>
                <Package
                    packages={this, this.state.packages}
                    selectedIndex={selectedIndex}
                    clicked={this.showPackageDetailHandler} />
                <PackageDetail selectedPackage={this.state.packages[selectedIndex]} />
            </Aux>
        );
    }
}

export default PackagesContainer;
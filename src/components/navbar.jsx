
import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <div className="navbar">
                <i class="far fa-laugh-wink navbar-logo"></i>
                <span>Habits</span>
                <span className="navbar-count">{this.props.totalCount}</span>

            </div>
        );
    }
}

export default Navbar;
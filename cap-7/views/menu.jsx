'use strict';

const React = require('react');

const Component = React.createClass({
    displayName: 'Menu',
    render: function () {

        return (
            <div>
                Hello World!;
                <div style={{ width: '100%', height: '100px', border: '1px solid red' }}>
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                </div>
            </div>
        );
    }
});

module.exports = Component;

const MenuItem = function(props) {
    return (
        <div style={{ float: 'left', width: '19.88%', height: '99px', border: '1px solid blue' }}>
            item
        </div>
    );
};

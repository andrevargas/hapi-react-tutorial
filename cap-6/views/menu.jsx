'use strict';

const React = require('react');

const Component = React.createClass({
    displayName: 'Menu',
    render: function () {

        return (
            <div>
                Hello World!;
                <div style={{ width: '100%', height: '100px', border: '1px solid red' }}>
                    MEU MENUZÃO
                </div>
            </div>
        );
    }
});

module.exports = Component;

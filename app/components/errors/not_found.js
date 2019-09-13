'use strict';

const React = require('react');

const NotFound = React.createClass({
    render: function () {
        return (
            <div className='not-found'>
                404: Seems you enter somewhere nonexisted
                <br/>
                <span>
                    Return to safety <a href='/'>here.</a>
                </span>
            </div>
        );
    }
});

module.exports = NotFound;

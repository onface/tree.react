var React = require('react')
var Tree = require('tree.react')
class Basic extends React.Component {
    render () {
        return (
            <div className="basicDemo" >
                Basic
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic

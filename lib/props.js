import p from 'prop-types'
export default function (app) {
    app.defaultProps = {
        prefixClassName: 'tree.react-onface',
        themes: ''
    }
    app.propTypes = {
        prefixClassName: p.string,
        themes: p.string
    }
}

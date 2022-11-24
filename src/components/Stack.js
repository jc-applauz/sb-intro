import PropTypes from 'prop-types'

function Stack ({ children, spacing = 2, direction = 'row', wrap = false }) {
  const style = {
    display: 'flex',
    gap: `${spacing * 0.25}em`,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    flexDirection: direction,
  }

  return <div style={style}>{children}</div>
}

//defining our prop types that are being passed to the Button/component
Stack.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'column']),
}

export default Stack

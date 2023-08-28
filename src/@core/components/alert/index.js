import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Fade from '../fade';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  fade: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: PropTypes.any,
  transition: PropTypes.shape(Fade.propTypes),
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
};

const defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: {
    ...Fade.defaultProps,
    unmountOnExit: true,
  },
};

let globalCssModule;

const mapToCssModules = (className = '', cssModule = globalCssModule) => {
  if (!cssModule) return className;
  return className
    .split(' ')
    .map(c => cssModule[c] || c)
    .join(' ');
};

const tagPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.string,
  PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
  PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
  ])),
]);

function Alert(props) {
  const {
    className,
    closeClassName,
    closeAriaLabel,
    cssModule,
    tag: Tag,
    color,
    isOpen,
    toggle,
    children,
    transition,
    fade,
    innerRef,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'alert',
    `alert-${color}`,
    { 'alert-dismissible': toggle },
  ), cssModule);

  const closeClasses = mapToCssModules(classNames('close', closeClassName), cssModule);

  const alertTransition = {
    ...Fade.defaultProps,
    ...transition,
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0,
  };

  return (
    <React.StrictMode ignore>
      <Fade {...attributes} {...alertTransition} tag={Tag} className={classes} in={isOpen} role="alert" innerRef={innerRef}>
        {toggle ? <button type="button" className={closeClasses} aria-label={closeAriaLabel} onClick={toggle}>
            <span aria-hidden="true">&times;</span>
          </button> : null}
        {children}
      </Fade>
    </React.StrictMode>
  );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;

import PropTypes from 'prop-types';

export const FirstApp = ( {title, subTitle, name, cuantoLeMideElGuebo} ) => {

  return (
    <>
    <h2>{name}</h2>
    <h2>{subTitle}</h2>
    <h1>{title}</h1>
    <h1>Pulgadas de guebo: {cuantoLeMideElGuebo}</h1>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cuantoLeMideElGuebo: PropTypes.number
}

FirstApp.defaultProps = {
name: 'Rononoa Zoro',
subTitle: 'Mugiwaras',
title: 'The beast, the best, the androide!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', 
cuantoLeMideElGuebo: 525
}
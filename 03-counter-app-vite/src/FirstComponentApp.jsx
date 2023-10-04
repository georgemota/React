import PropTypes from 'prop-types';
import logo from './img/img.css'



export const FirstComponentApp = ({ title, subTitle, image }) => {
   return ( 
    <>    
    <h1>{ title }</h1>
    <h2>{ subTitle }</h2>
    <img src = { logo } alt="Bobo manito" />
    </>
  )
}

FirstComponentApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  //img: PropTypes.img.isRequired,
}

FirstComponentApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'George la parita Uzumaki'
}
import PropTypes from 'prop-types'
import Button from './Button'
import { useState } from 'react'

const Header = ({title, onAdd, showAdd}) => {
    
    return (
        <header className='header'>
            <h1>{title} </h1>
            <Button 
                text={showAdd ? 'Close' : 'Add'} 
                color={showAdd ? 'red' :"green" }
                onClick={onAdd}/> 
        </header>
    )
}

//Ajuda a achar erros de tipagem
Header.propTypes = {
    title: PropTypes.string
}



export default Header

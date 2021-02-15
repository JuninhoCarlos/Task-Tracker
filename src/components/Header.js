import PropTypes from 'prop-types'
import Button from './Button'
import { useState } from 'react'

const Header = ({title}) => {
    const [counter, setCounter] = useState(1)

    const onClick = () => {
        console.log("click")
        setCounter(counter+1)
    }

    return (
        <header className='header'>
            <h1>{title} {counter}</h1>
            <Button text='add' color="green" onClick={onClick}/> 
        </header>
    )
}

//Ajuda a achar erros de tipagem
Header.propTypes = {
    title: PropTypes.string
}



export default Header

import { Link, NavLink } from 'react-router-dom'

function NavigationBar() {
    return (
        <nav>
            <NavLink to='/home' activeClassName='active'>Home</NavLink>
            <NavLink to='/browse' activeClassName='active'>Browse</NavLink>
            <NavLink to='/details' activeClassName='active'>Details</NavLink>
            <NavLink to='/comics' activeClassName='active'>Comics</NavLink>
        </nav>
    )
}

export default NavigationBar
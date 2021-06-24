import React from "react";
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const Main: React.FC = () => {
    return (
        <NavLink to='/form'>
            <Button variant="contained" color="primary">
                form
            </Button>
        </NavLink>
    )
}

export default Main;

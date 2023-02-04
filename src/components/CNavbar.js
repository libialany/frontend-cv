import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

function CNavbar() {

    return (
        <div>
            <Navbar>
                <NavbarBrand href="/">Portafolio Mels</NavbarBrand>
                <Nav className="me-auto">
                    <NavItem>
                        <NavLink href="/certificados/">Certificados</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Projects
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href='/proyectos/python/'>Python</DropdownItem>
                            <DropdownItem href='/proyectos/javascript/'>Javascript</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="/about/">About</NavLink>
                    </NavItem>
                </Nav>

            </Navbar>
        </div>
    );
}

export default CNavbar

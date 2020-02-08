import React, { Component } from 'react';
import { NavMenu } from './NavMenu';

export default function Layout() {

    return (
        <div>
            <NavMenu />
            <Container>
                {this.props.children}
            </Container>
        </div>
    );
}

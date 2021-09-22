import React from 'react'
import styles from './ShoppingCart.module.css'

interface Props { }

interface State { isOpen: boolean }

class ShoppingCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    render() {
        return <div></div>
    }
}
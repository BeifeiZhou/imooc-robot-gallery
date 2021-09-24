import React from 'react'
import styles from './ShoppingCart.modeule.css'
import { FiShoppingCart } from 'react-icons/fi'

interface Props { }

interface State { isOpen: boolean }

class ShoppingCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    click = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if ((e.target as HTMLElement).nodeName === "SPAN") {
            this.setState({ isOpen: !this.state.isOpen })
        }
    }

    render() {
        return <div className={styles.cardContainer}>
            <button
                className={styles.button}
                onClick={this.click}
            >
                <FiShoppingCart />
                <span>
                    购物车2件
                </span>
            </button>
            <div
                className={styles.cartDropDown}
                style={{
                    display: this.state.isOpen ? "block" : "none",
                }}
            >
                <ul>
                    <li>robot 1</li>
                    <li>robot 2</li>
                </ul>
            </div>
        </div>
    }
}

export default ShoppingCart;
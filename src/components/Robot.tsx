import React from 'react'
import styles from './Robots.module.css'

interface RobotProps {
    id: number,
    name: string,
    email: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
    return <>
        <div className={styles.cardContainer}>
            <img alt='robot' src={`https://robohash.org/${id}`} />
            <h2>{name}</h2>
            <h2>{email}</h2>
        </div>
    </>
}

export default Robot;

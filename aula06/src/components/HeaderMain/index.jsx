import React from 'react'
import * as styles from "./HeaderMain.module.css"
import { Link } from 'react-router-dom'

export default function HeaderMain() {
    return (
        <header>
            <div className={styles.container}>
                
                <div className={styles.logo}>
                    <h1>Postagens Diversas</h1>
                </div>

                <div className={styles.btnNewPost}>
                    <Link to={"/posts"}>
                        <button>Novo Post</button>
                    </Link>
                </div>

            </div>
        </header>
    )
}

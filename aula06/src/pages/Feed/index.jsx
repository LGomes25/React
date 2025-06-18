import { Link } from "react-router-dom";
import HeaderMain from '../../components/HeaderMain'
import * as styles from "./Feed.module.css";

export default function Feed() {
    return (
        <div>
        <HeaderMain />
        <main>
            <div className={styles.cards}>
            <div className={styles.card}>
                <header>
                <h2>Consumindo API</h2>
                </header>
                <div className={styles.line} />
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                deleniti consequatur voluptate cum libero doloribus atque
                consectetur veniam, odit, numquam suscipit sunt. Magni quod
                ducimus ex excepturi, nobis dolores error.
                </p>
                <div className={styles.btns}>
                <div className={styles.btnEdit}>
                    <Link to={"/update"}>
                    <button>Editar</button>
                    </Link>
                </div>

                <div className={styles.btnReadMore}>
                    <Link to={"/more"}>
                    <button>Leia mais</button>
                    </Link>
                </div>

                <div className={styles.btnDelete}>
                    <button>Apagar</button>
                </div>
                </div>
            </div>
            </div>
        </main>
        </div>
    );
}

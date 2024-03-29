import styles from './home.module.css'
import Board from "../../components/board/Board";
import Menu from "../../components/menu/Menu";
import Layout from "../../components/layout/Layout";

const Home = () => {
    return (
        <div className={styles.container}>
            <Layout title={'Select segments'}>
                <Menu/>
            </Layout>
            <Layout title={'Board'}>
                <Board/>
            </Layout>
        </div>
    )
}

export default Home;

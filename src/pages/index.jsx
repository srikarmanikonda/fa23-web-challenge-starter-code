import MainHeader from "../components/main-header";
import styles from "../styles/index.module.scss";

const Index = () => {
    return (
        <>
            <MainHeader />
            <p className={styles.myParagraph}>  Welcome to the events page!</p>
        </>
    );
};

export default Index;

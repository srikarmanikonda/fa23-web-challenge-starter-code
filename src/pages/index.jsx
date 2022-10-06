import MainHeader from "../components/main-header";
import styles from "../styles/index.module.scss";

const Index = () => {
    return (
        <>
            <MainHeader />
            <p className={styles.myParagraph}>Paragraph!</p>
        </>
    );
};

export default Index;

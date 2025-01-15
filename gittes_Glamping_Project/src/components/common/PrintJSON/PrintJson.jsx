import styles from './printJson.module.css';
const PrintJson = ({jsonobj, headline = ''}) => {


    const printHeadline = headline !== '' ? <p>{headline}</p> : null

    return (
        <div>

            {printHeadline}

            <pre className={styles.printJson}>
                {JSON.stringify(jsonobj, null, 2)}
            </pre>
        </div>
    )
};
export default PrintJson;
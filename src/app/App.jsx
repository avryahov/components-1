import styles from './app.module.css'
import {useState} from "react";

function App() {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const [list, setList] = useState([])

    const onInputButtonClick = () => {
        const promptValue = prompt("Введите значение")
        setValue(promptValue)
    }
    return (
            <div className={styles.app}>
                <h1 className={styles['page-heading']}>Ввод значения</h1>
                <p className={styles['no-margin-text']}>
                    Текущее значение <code>{value}</code>: "
                    <output className={styles['current-value']}></output>
                    "
                </p>
                <div className="error">Введенное значение должно содержать минимум 3 символа</div>
                <div className={styles['buttons-container']}>
                    <button className="button" onClick={onInputButtonClick}>Ввести новое</button>
                    <button className="button" disabled>Добавить в список</button>
                </div>
                <div className={styles['list-container']}>
                    <h2 className={styles['list-heading']}>Список:</h2>
                    <p className={styles['no-margin-text']}>Нет добавленных элементов</p>
                    <div className={styles['list-wrapper']}>
                        <ul className="list">
                            <li className={styles['list-item']}>Первый элемент</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default App

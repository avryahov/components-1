import s from './app.module.css'
import {useState} from "react";

function App() {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const [list, setList] = useState([])

    const isValueValid = value?.trim().length >= 3;

    const onInputButtonClick = () => {
        const promptValue = prompt("Введите значение")
        if (promptValue?.trim().length >= 3) {
            setError("")
            setValue(promptValue.trim())
        } else {
            setError("Введенное значение должно содержать минимум 3 символа")
            setValue("")
        }
    }

    const onAddButtonClick = () => {
        if (isValueValid) {
            const newItem = {
                id: Date.now(),
                value: value,
                createdAt: new Date().toLocaleDateString("ru-RU"),
            }
            setError("")
            setValue("")
            setList((prevList) => [...prevList, newItem])
        }
    }

    return (
            <div className={s.app}>
                <h1 className={s['page-heading']}>Ввод значения</h1>
                <p className={s['no-margin-text']}>
                    Текущее значение <code>value</code>: "
                    <output className={s['current-value']}>{value}</output>
                    "
                </p>
                {error && <div className={s.error}>{error}</div>}
                <div className={s['buttons-container']}>
                    <button className={s.button} onClick={onInputButtonClick}>Ввести новое</button>
                    <button className={s.button} disabled={!isValueValid} onClick={onAddButtonClick}>Добавить в
                        список
                    </button>
                </div>
                <div className={s['list-container']}>
                    <h2 className={s['list-heading']}>Список:</h2>
                    {list?.length > 0 ? <ul className={s.list}>
                        {list.map((item) => (
                                <li className={s['list-item']} key={item.id}>{item.value} — {item.createdAt}</li>
                        ))}
                    </ul> : <p className={s['no-margin-text']}>Нет добавленных элементов</p>
                    }
                </div>
            </div>
    )
}

export default App

import css from './Contact.module.css';

export default function Contact({ id, name, number, onDelete }) {
    return (
        <li className={css.wrapper}>
            <div>
                <p className={css.text}>
                    {name}
                </p>
                <p className={css.text}>
                    {number}
                </p>
            </div>

            <button className={css.deleteButton} onClick={() => onDelete(id)}>
                Delete
            </button>
        </li>
    )
}
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ id, name, number }) {
    const dispatch = useDispatch();
    function handleDelete() {
        dispatch(deleteContact(id));
    }

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

            <button className={css.deleteButton} onClick={handleDelete}>
                Delete
            </button>
        </li>
    )
}
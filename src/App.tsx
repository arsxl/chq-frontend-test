import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <form className={styles.form_style}>
                <label className={styles.form_label}>USER ROLE</label>
                <select className={styles.form_dropdown}>
                    <option disabled selected>
                        Select user role
                    </option>
                    <option>Admin</option>
                    <option>Event Owner</option>
                    <option>Event User</option>
                </select>
                <label className={styles.form_label}>USERNAME</label>
                <br />
                <input type="text" className={styles.input_style} />
                <br />
                <label className={styles.form_label}>PASSWORD</label>
                <br />
                <input type="text" className={styles.input_style} />
                <br />
                <br />
                <input type="submit" value="LOG IN" className={styles.login_button} />
            </form>
        </div>
    );
}

export default App;

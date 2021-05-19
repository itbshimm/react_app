import React from 'react';
import PropTypes from 'prop-types';

const styles ={
    li: {
    display: 'flex',
    justifyContent: 'space-between',
    flignItems: 'center',
    border: '1px solid gray',
    borderRadius: '10px',
    padding: '8px',
    margin: '10px'
    },
    input: {
        marginRight: '10px'
    }
}
function TodoItem({ todo, index, onChange }) {
    const classes = []
    if (todo.complited) {
        classes.push('done')
    }
    return (
        <li style={styles.li} >
            <span className={classes.join(' ')}>
                <input
                type="checkbox"
                checked={todo.complited}
                style={styles.input}
                onChange={() => onChange(todo.id)}
                />
                <b>{index + 1}</b>&nbsp;{todo.title}
            </span>
            <button className="rm">&times;</button>
        </li>
    )
}
TodoItem.protoTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
export default TodoItem
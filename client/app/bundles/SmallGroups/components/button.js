import React from 'react';
import { css } from 'glamor';

import { PRIMARY, WHITE } from '../palette';

export default function Button({ onClick, text }) {
  return (
    <div>
      <button
        { ...styles.button }
        onClick={ onClick }
      >
        <span { ...styles.buttonText }>
          { text }
        </span>
      </button>
    </div>
  );
}

const styles = {
  button: css({
    backgroundColor: PRIMARY,
    borderStyle: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    padding: '1em',
    color: WHITE,
  }),
  buttonText: css({
    margin: '0 auto',
    fontSize: '30px',
    padding: '30px',
  }),
}

import React from 'react';
import { css } from 'glamor';

import { LIGHT_PRIMARY, PRIMARY, WHITE } from '../palette';

export default function Button({ style, textStyle, disabled = false, onClick, text }) {
  return (
    <div>
      <button
        { ...css(styles.button, style ) }
        disabled={ disabled }
        onClick={ onClick }
      >
        <span { ...css(styles.buttonText, textStyle) }>
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
    padding: '12px',
    color: WHITE,
    ':disabled': {
      backgroundColor: LIGHT_PRIMARY,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    }
  }),
  buttonText: css({
    fontWeight: 100,
    margin: '0 auto',
    fontSize: '30px',
    padding: '30px',
  }),
}

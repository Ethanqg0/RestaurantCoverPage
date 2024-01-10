import React, { useState } from 'react';

export default function Button( {onToast} ) {
    return (
        <button onClick={onToast}>Toast Test</button>
    )
}
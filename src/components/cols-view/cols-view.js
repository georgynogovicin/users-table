import React, { useState,  } from 'react';

const ColsView = ({ colons }) => {
    const [popIsActive, setPopIsActive ] = useState(false);

    



    const items = colons.map(item => {
        return (
            <div key={item} className="form-check">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value={item} />
                    {item.toUpperCase()}
                </label>
            </div>
        )
    })

    return (
        <div className='col-1 dropdown mx-5'>
            <button type='button' className='btn btn-primary dropdown-toggle' id='items-per-page' onClick={() => setPopIsActive(!popIsActive)}>Table colons</button>
            <div className='dropdown-menu px-4 py-3' aria-labelledby='items-per-page' style={{display: `${popIsActive ? 'block' : 'none'}`}}>
                {items}
            </div>
        </div>
    )
}

export default ColsView;
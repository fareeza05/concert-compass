import React from "react";

const List = () => {
    return(
        <div>
            <div className="list-container">
            <div className='search-filter'>
            <input type="text" placeholder='Enter Date or Artist...' className='search-bar'/>
            <input type="text" placeholder='Enter Date or Artist...' className='search-bar'/>
        </div>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>

                </ul>
            </div>
        </div>
    );
};

export default List;
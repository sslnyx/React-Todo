import React from "react";

const Item = ({ data: { note, date, time, id }, deleteData, submittingDataStatus }) => {

    function deleteItem() {
        submittingDataStatus.current = true
        deleteData((prev) => {
            return prev.filter(item => item.id !== id)
        })
    }

    return (
        <div className="item">
            <p>{note}</p>
            <p>{`${date}, ${time}`}</p>

            <button onClick={deleteItem} className="remove">刪除</button>
        </div>
    );
};

export default Item;

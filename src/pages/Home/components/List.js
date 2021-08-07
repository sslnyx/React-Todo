import React from "react";
import Item from "./Item";

const List = ({ listData, deleteData, submittingDataStatus }) => {
  return (
    <div className="list">
      {listData.map((item, i) => (
        <Item data={item} deleteData={deleteData} key={item.id} submittingDataStatus={submittingDataStatus} />
      ))}
    </div>
  );
};

export default List;

import React, { Fragment } from 'react';

const CreateTd = (props) => {
  const arrKeys = Object.keys(props);
  const Td = (ts) => {
    const td = <td>{props[ts.value]}</td>;
    return td;
  }  
  return (
    <Fragment>
      {
        arrKeys.map((m, i)=>{
          return (
            <Td key={m} value={m} />
          )
        })
      }
    </Fragment>
  );
};

export default CreateTd;
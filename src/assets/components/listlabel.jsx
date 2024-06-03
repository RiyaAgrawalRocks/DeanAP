import React from 'react';


export default function ListItem (props){
  return (
    <div className="item-list-container">
            <div className="id iboxes">{props.id}</div>
            <div className="roll iboxes">{props.roll}</div>
            <div className="date iboxes">{props.date}</div>
            <div className="name iboxes">{props.name}</div>
            <div className="department iboxes">{props.department}</div>
            <div className="subject iboxes">{props.subject}</div>
            <div className="remarks iboxes">{props.remarks}</div>
            <div className="application-document iboxes">{props.app_doc}</div>
        </div>
  );
};

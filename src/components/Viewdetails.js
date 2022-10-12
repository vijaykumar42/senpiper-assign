import React from "react";
import { Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

const Viewdetails = ({ storedData, setStoredData }) => {
  return (
    <div style={{ padding: "20px" }}>
      {storedData.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Delete</th>
              <th>Name</th>
              <th>Gmail</th>
              <th>Phone</th>
              <th>Q1</th>
              <th>Q2</th>
              <th>Q3</th>
              <th>Q4</th>
            </tr>
          </thead>
          <tbody>
            {storedData.map((item, index) => (
              <tr key={item.gmail}>
                <td>
                  <AiFillDelete
                    style={{ color: "red" }}
                    onClick={() => {
                      setStoredData(
                        storedData.filter((d) => d.gmail !== item.gmail)
                      );
                    }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.gmail}</td>
                <td>{item.phone}</td>
                <td>{item.q1}</td>
                <td>{item.q2}</td>
                <td>{item.q3}</td>
                <td>{item.q4}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        "No LocalStorage Data Found"
      )}
    </div>
  );
};

export default Viewdetails;

import PropTypes from "prop-types";
import { useTable } from "react-table";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./MyTable.css";
import { Link } from "react-router-dom";

const MyTable = ({ columns, data, handleDelete }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="table text-lg font-semibold ">
      <thead className="text-xl font-bold bg-[#E8399E]">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
            <th>Actions</th>
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
              <td className="flex items-center">
                <Link to={`/update/${row.original._id}`}>
                  <button
                    className="btn
                btn-circle btn-outline text-2xl border-2 border-[#ffffff]  hover:bg-[#D70F64] hover:text-white hover:border-none "
                  >
                    <FaEdit />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(row.original._id)}
                  className="btn
                btn-circle btn-outline text-2xl border-2 border-[#ffffff]  hover:bg-[#D70F64] hover:text-white hover:border-none mx-5"
                >
                  <RiDeleteBin6Line />
                </button>
                <Link to={`/manage/${row.original.foodName}`}>
                  <button
                    className="btn btn-outline border-2 border-[#ffffff] hover:bg-[#D70F64] hover:text-white hover:border-none"
                  >
                    Manage
                  </button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

MyTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default MyTable;

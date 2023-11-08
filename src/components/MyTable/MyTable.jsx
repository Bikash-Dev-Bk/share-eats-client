import PropTypes from "prop-types";
import { useTable } from "react-table";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./MyTable.css";

const MyTable = ({ columns, data }) => {
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
                {/* Action buttons */}
                <button onClick={() => onEdit(row.original)} className="btn
                btn-circle btn-outline text-2xl border-2 border-[#ffffff]  hover:bg-[#D70F64] hover:text-white hover:border-none "><FaEdit /></button>
                <button onClick={() => onDelete(row.original)} className="btn
                btn-circle btn-outline text-2xl border-2 border-[#ffffff]  hover:bg-[#D70F64] hover:text-white hover:border-none mx-5"><RiDeleteBin6Line /></button>
                <button onClick={() => onViewDetails(row.original)} className="btn
                 btn-outline border-2 border-[#ffffff]  hover:bg-[#D70F64] hover:text-white hover:border-none">
                  Manage
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

MyTable.propTypes = {
  columns: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default MyTable;

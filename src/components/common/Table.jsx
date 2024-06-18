import "./Table.css";

const Table = ({ headings, children }) => {
  return (
    <table className="common_table">
      <tbody>
        <tr>
          {headings.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
        {children}
      </tbody>
    </table>
  );
};

export default Table;

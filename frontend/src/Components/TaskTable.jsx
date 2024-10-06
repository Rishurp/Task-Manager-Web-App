import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TaskTable = () => {
  return (
    <div className=" ">
      <div className="mx-14 my-4 rounded-md">
        <table className="table-auto border-collapse w-full border text-left">
          <thead>
            <tr>
              <th className="px-4 py-4">Title</th>
              <th className="px-4 py-4">Description</th>
              <th className="px-4 py-4">Deadline</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="px-4 py-4 ">React Basics</td>
              <td className="px-4 py-4 ">Refer to document for more </td>
              <td className="px-4 py-4 ">19/08/2024</td>
              <td className="px-4 py-4 ">
                <span className="bg-green-500 rounded-2xl text-white px-3 py-2">
                  DONE
                </span>
              </td>
              <td>
                <DownloadIcon style={{ color: "blue", marginRight: "1rem" }} />
                <EditIcon style={{ color: "purple", marginRight: "1rem" }} />
                <DeleteIcon style={{ color: "red" }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;

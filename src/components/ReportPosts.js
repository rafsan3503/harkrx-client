import React from "react";
import Swal from "sweetalert2";
import usePosts from "../hooks/usePosts";

const ReportPosts = () => {
  const { posts, refetch } = usePosts();
  const reportPosts = posts?.filter((post) => post.reports);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/post/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Author</th>
            <th>Post</th>
            <th>Post Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reportPosts?.map((reportPost) => (
            <tr>
              <td>
                <div className="avatar">
                  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={reportPost?.authorImage} alt="" />
                  </div>
                </div>
                <br />
                <span className="badge badge-ghost badge-sm">
                  {reportPost?.authorName}
                </span>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold"></div>
                    <div className="text-sm opacity-50">
                      {reportPost?.description?.slice(0, 10) + "..."}
                    </div>
                  </div>
                </div>
              </td>

              <td>{reportPost?.date.slice(0, 10)}</td>
              <th>
                <button
                  onClick={() => handleDelete(reportPost?._id)}
                  className="btn btn-error btn-sm"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportPosts;

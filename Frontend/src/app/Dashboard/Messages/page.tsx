"use client";
import { useGetClarificationsQuery } from "@/app/Services/courses";
import React from "react";

const Messages = () => {
  const { data, error, isLoading, refetch } = useGetClarificationsQuery();

  React.useEffect(() => {
    refetch();
  }, []);
  return (
    <div>
      <div className="dashboard__content__wraper">
        <div className="dashboard__section__title">
          <h4>Support Messages</h4>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="dashboard__table table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Message from</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Message from date</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.["data"]?.data.map((result) => (
                    <tr>
                      <td>{result?.courseName}</td>
                      <td>{result?.name}</td>
                      <td>{result?.email}</td>
                      <td>{result?.commits}</td>
                      <td>{result?.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

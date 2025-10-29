import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/axios";
import DashboardNavbar from "../components/DashboardNavbar";

const MentorDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null); // to show status update in progress
  const navigate = useNavigate();

  const fetchApplications = async () => {
    try {
      const res = await api.get("student/applications/");
      setApplications(res.data);
    } catch (err) {
      console.error(err.response?.data || err);
      alert("Failed to fetch applications.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleUpdateStatus = async (appId, status, consultationDate = null) => {
    try {
      setUpdatingId(appId);
      await api.post(`student/applications/${appId}/update_status/`, {
        status,
        consultation_date: consultationDate,
      });
      alert(`Application ${status} successfully!`);
      fetchApplications();
    } catch (err) {
      console.error(err.response?.data || err);
      alert("Failed to update status.");
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading applications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <DashboardNavbar userType="mentor" userName="Mentor" />
      
      <div className="max-w-7xl mx-auto p-4 sm:p-6 pt-28 md:pt-32">
        {/* Welcome Header */}
        <div className="mb-8 text-center px-2">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
            Mentor Dashboard
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Review and manage student mentorship applications
          </p>
        </div>

        {/* Stats Summary */}
        {applications.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 px-2">
            <div className="bg-white p-4 rounded-xl shadow-md border border-green-100 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {applications.length}
              </div>
              <h3 className="text-sm font-semibold text-gray-800">Total Applications</h3>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-green-100 text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-1">
                {applications.filter((app) => app.status === "Pending").length}
              </div>
              <h3 className="text-sm font-semibold text-gray-800">Pending</h3>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-green-100 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {applications.filter((app) => app.status === "Approved").length}
              </div>
              <h3 className="text-sm font-semibold text-gray-800">Approved</h3>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-green-100 text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">
                {applications.filter((app) => app.status === "Rejected").length}
              </div>
              <h3 className="text-sm font-semibold text-gray-800">Rejected</h3>
            </div>
          </div>
        )}

        {/* Applications List */}
        {applications.length === 0 ? (
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border-2 border-green-200 text-center">
            <div className="text-4xl md:text-6xl mb-4">📋</div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              No Applications Yet
            </h2>
            <p className="text-gray-600">
              Student applications will appear here once they are assigned to you.
            </p>
          </div>
        ) : (
          <div className="flex justify-center px-2">
            <div className="grid grid-cols-1 gap-6 mb-8 w-full max-w-3xl">
              {applications.map((app) => (
              <div
                key={app.id}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-shadow"
              >
                {/* Student Info Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {app.first_name?.[0] || ""}
                    {app.last_name?.[0] || ""}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {app.first_name} {app.last_name}
                    </h3>
                    <p className="text-gray-600 text-sm">{app.email || "No email"}</p>
                  </div>
                </div>

                {/* Application Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Course:</span>
                    <span className="text-gray-800">{app.course || "Not specified"}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Status:</span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        app.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : app.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>
                  <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Applied:</span>
                    <span className="text-gray-800">
                      {app.created_at
                        ? new Date(app.created_at).toLocaleDateString()
                        : "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Consultation:</span>
                    <span className="text-gray-800">
                      {app.consultation_date
                        ? new Date(app.consultation_date).toLocaleDateString()
                        : "Not scheduled"}
                    </span>
                  </div>
                </div>

                {/* Feedback Section */}
                {app.feedback && (
                  <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Your Feedback:</p>
                    <p className="text-gray-700 text-sm">{app.feedback}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button
                    disabled={updatingId === app.id || app.status === "Approved"}
                    onClick={() =>
                      handleUpdateStatus(
                        app.id,
                        "Approved",
                        new Date().toISOString()
                      )
                    }
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ${
                      app.status === "Approved" || updatingId === app.id
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                    }`}
                  >
                    {updatingId === app.id ? "Processing..." : "Approve & Schedule"}
                  </button>
                  <button
                    disabled={updatingId === app.id || app.status === "Rejected"}
                    onClick={() => handleUpdateStatus(app.id, "Rejected")}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ${
                      app.status === "Rejected" || updatingId === app.id
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                    }`}
                  >
                    {updatingId === app.id ? "Processing..." : "Reject"}
                  </button>
                </div>
              </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorDashboard;
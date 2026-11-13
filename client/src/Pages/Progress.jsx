import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  CheckCircle,
  Circle,
  Clock,
  Calendar,
  User,
  MessageSquare,
  FileText,
  Download,
  AlertCircle,
  TrendingUp,
  Target,
  Award,
} from "lucide-react";

const projectsProgressData = {
  savoria: {
    projectData: {
      name: "Savoria SaaS",
      client: "Savoria",
      startDate: "Jun 1, 2026",
      endDate: "November 30, 2026",
      progress: 85,
      status: "In Progress",
      projectManager: {
        name: "Anurag Verma",
        avatar: "anurag.jpeg",
      },
    },
    milestones: [
      {
        id: 1,
        title: "SaaS Platform Development",
        description:
          "Market research, feature planning, and multi-tenant system design",
        status: "completed",
        date: "Jun 15, 2026",
        tasks: 10,
        completedTasks: 10,
      },
      {
        id: 2,
        title: "UI/UX Design",
        description: "Dashboard wireframes, design system, and prototype flows",
        status: "completed",
        date: "Jul 1, 2026",
        tasks: 12,
        completedTasks: 12,
      },
      {
        id: 3,
        title: "Core Platform Development",
        description: "Tenant onboarding, menu management, and order workflows",
        status: "completed",
        date: "Jul 10, 2026",
        tasks: 18,
        completedTasks: 18,
      },
      {
        id: 4,
        title: "Analytics & Reporting",
        description: "Sales insights, performance dashboards, and exports",
        status: "completed",
        date: "Jul 18, 2026",
        tasks: 8,
        completedTasks: 8,
      },
      {
        id: 5,
        title: "OTP System",
        description: "Phone verification, login OTP flow, and secure authentication",
        status: "in-progress",
        date: "November 20, 2026",
        tasks: 6,
        completedTasks: 3,
      },
      {
        id: 6,
        title: "Payment System",
        description: "Online payments, gateway integration, and transaction tracking",
        status: "pending",
        date: "November 25, 2026",
        tasks: 6,
        completedTasks: 0,
      },
    ],
    recentUpdates: [
      {
        date: "Jul 18, 2026",
        title: "Analytics Module Completed",
        description: "Restaurant sales dashboards and export reports are live.",
        type: "milestone",
      },
      {
        date: "Jul 12, 2026",
        title: "Order Management Module Completed",
        description: "Live order tracking and kitchen workflow views are done.",
        type: "update",
      },
      {
        date: "Jul 12, 2026",
        title: "OTP System In Progress",
        description: "Phone verification flow is 50% done — login OTP screens are built.",
        type: "update",
      },
      {
        date: "Jul 1, 2026",
        title: "Design System Finalized",
        description: "Savoria SaaS shared components and layouts approved.",
        type: "document",
      },
    ],
  },
  clinicsaathi: {
    projectData: {
      name: "ClinicSaathi",
      client: "ClinicSaathi Health",
      startDate: "Jul 15, 2026",
      endDate: "December 20, 2026",
      progress: 75,
      status: "In Progress",
      projectManager: {
        name: "Anurag Verma",
        avatar: "anurag.jpeg",
      },
    },
    milestones: [
      {
        id: 1,
        title: "System Architecture & Security",
        description: "Encrypted patient database schema, role-based access, and compliance",
        status: "completed",
        date: "Aug 5, 2026",
        tasks: 10,
        completedTasks: 10,
      },
      {
        id: 2,
        title: "UI/UX Design System",
        description: "Doctor dashboard, queue display interface, and mobile patient portal prototype",
        status: "completed",
        date: "Aug 25, 2026",
        tasks: 14,
        completedTasks: 14,
      },
      {
        id: 3,
        title: "Patient CRM & Appointments",
        description: "Online slot booking, doctor availability calendar, and patient history records",
        status: "completed",
        date: "Sep 20, 2026",
        tasks: 16,
        completedTasks: 16,
      },
      {
        id: 4,
        title: "Digital Queue & Live Token System",
        description: "Real-time token management, wait-time estimation, and waiting room display screen",
        status: "completed",
        date: "Oct 15, 2026",
        tasks: 12,
        completedTasks: 12,
      },
      {
        id: 5,
        title: "WhatsApp Automation & Prescriptions",
        description: "Automated booking alerts, digital prescription sharing, and reminder messages",
        status: "in-progress",
        date: "November 25, 2026",
        tasks: 8,
        completedTasks: 5,
      },
      {
        id: 6,
        title: "Billing, Payments & Advanced Analytics",
        description: "Invoicing, payment gateway integration, clinic revenue reports, and doctor performance",
        status: "pending",
        date: "December 10, 2026",
        tasks: 8,
        completedTasks: 0,
      },
    ],
    recentUpdates: [
      {
        date: "Oct 28, 2026",
        title: "Digital Queue System Deployed",
        description: "Live waiting room screen with token call-outs is fully operational.",
        type: "milestone",
      },
      {
        date: "Oct 20, 2026",
        title: "WhatsApp Alerts Integration Started",
        description: "Connecting WhatsApp Business API for appointment reminders and digital receipts.",
        type: "update",
      },
      {
        date: "Oct 10, 2026",
        title: "Patient CRM Tested",
        description: "Doctor consultation records and patient history workflows passed QA.",
        type: "update",
      },
      {
        date: "Sep 15, 2026",
        title: "Clinic Dashboard Approved",
        description: "Design and flow approved for reception desk and doctor consultation views.",
        type: "document",
      },
    ],
  },
};

const ProjectProgressPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchParams, setSearchParams] = useSearchParams();

<<<<<<< HEAD
  const projectParam = searchParams.get("project");
  const selectedProjectKey =
    projectParam && projectsProgressData[projectParam]
      ? projectParam
      : "savoria";

  const { projectData, milestones, recentUpdates } =
    projectsProgressData[selectedProjectKey];
=======
  // Sample project data
  const projectData = {
    name: "Savoria SaaS",
    client: "Savoria",
    startDate: "Jun 1, 2026",
    endDate: "August 30, 2026",
    progress: 85,
    status: "In Progress",
    projectManager: {
      name: "Anurag Verma",
      avatar: "anurag.jpeg",
    },
  };

  const milestones = [
    {
      id: 1,
      title: "SaaS Platform Development",
      description:
        "Market research, feature planning, and multi-tenant system design",
      status: "completed",
      date: "Jun 15, 2026",
      tasks: 10,
      completedTasks: 10,
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Dashboard wireframes, design system, and prototype flows",
      status: "completed",
      date: "Jul 1, 2026",
      tasks: 12,
      completedTasks: 12,
    },
    {
      id: 3,
      title: "Core Platform Development",
      description: "Tenant onboarding, menu management, and order workflows",
      status: "completed",
      date: "Jul 10, 2026",
      tasks: 18,
      completedTasks: 18,
    },
    {
      id: 4,
      title: "Analytics & Reporting",
      description: "Sales insights, performance dashboards, and exports",
      status: "completed",
      date: "Jul 18, 2026",
      tasks: 8,
      completedTasks: 8,
    },
    {
      id: 5,
      title: "OTP System",
      description: "Phone verification, login OTP flow, and secure authentication",
      status: "in-progress",
      date: "August 25, 2026",
      tasks: 6,
      completedTasks: 3,
    },
    {
      id: 6,
      title: "Payment System",
      description: "Online payments, gateway integration, and transaction tracking",
      status: "pending",
      date: "August 30, 2026",
      tasks: 6,
      completedTasks: 0,
    },
  ];

  const recentUpdates = [
    {
      date: "Jul 18, 2026",
      title: "Analytics Module Completed",
      description: "Restaurant sales dashboards and export reports are live.",
      type: "milestone",
    },
    {
      date: "Jul 12, 2026",
      title: "Order Management Module Completed",
      description: "Live order tracking and kitchen workflow views are done.",
      type: "update",
    },
    {
      date: "August 25, 2026",
      title: "OTP System In Progress",
      description: "Phone verification flow is 50% done — login OTP screens are built.",
      type: "update",
    },
    {
      date: "August 30, 2026",
      title: "Design System Finalized",
      description: "Savoria SaaS shared components and layouts approved.",
      type: "document",
    },
  ];
>>>>>>> 9fb60e594a3bc25d1e80050db05e2aeab1559d88

  // const deliverables = [
  //   {
  //     name: "Design Mockups",
  //     type: "PDF",
  //     size: "24.5 MB",
  //     date: "Jan 28, 2025",
  //     status: "available",
  //   },
  //   {
  //     name: "Brand Guidelines",
  //     type: "PDF",
  //     size: "8.2 MB",
  //     date: "Jan 20, 2025",
  //     status: "available",
  //   },
  //   {
  //     name: "SEO Strategy Document",
  //     type: "PDF",
  //     size: "3.1 MB",
  //     date: "Jan 8, 2025",
  //     status: "available",
  //   },
  //   {
  //     name: "Final Website Files",
  //     type: "ZIP",
  //     size: "TBD",
  //     date: "Mar 30, 2025",
  //     status: "pending",
  //   },
  // ];

  const totalTasks = milestones.reduce((sum, milestone) => sum + milestone.tasks, 0);
  const completedTasks = milestones.reduce(
    (sum, milestone) => sum + milestone.completedTasks,
    0
  );
  const completedMilestones = milestones.filter(
    (milestone) => milestone.status === "completed"
  ).length;
  const calculatedProgress = Math.round((completedTasks / totalTasks) * 100);
  const displayProgress = projectData.progress ?? calculatedProgress;

  // Auto deadline tracking based on today's date
  const DAY_MS = 24 * 60 * 60 * 1000;
  const startOfDay = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const today = startOfDay(new Date());
  const deadline = startOfDay(projectData.endDate);
  const isProjectComplete = displayProgress >= 100;

  const daysUntilDeadline = Math.round((deadline - today) / DAY_MS);
  const isOverdue = !isProjectComplete && daysUntilDeadline < 0;
  const overdueDays = isOverdue ? Math.abs(daysUntilDeadline) : 0;
  const daysRemaining = Math.max(daysUntilDeadline, 0);

  const isMilestoneOverdue = (milestone) =>
    milestone.status !== "completed" && startOfDay(milestone.date) < today;

  const stats = [
    {
      label: "Completion",
      value: `${displayProgress}%`,
      icon: Target,
      color: "bg-blue-100 text-blue-600",
    },
    isOverdue
      ? {
          label: "Days Overdue",
          value: `+${overdueDays}`,
          icon: AlertCircle,
          color: "bg-red-100 text-red-600",
          valueColor: "text-red-600",
        }
      : {
          label: "Days Remaining",
          value: `${daysRemaining}`,
          icon: Calendar,
          color: "bg-green-100 text-green-600",
        },
    {
      label: "Tasks Completed",
      value: `${completedTasks}/${totalTasks}`,
      icon: CheckCircle,
      color: "bg-purple-100 text-purple-600",
    },
    {
      label: "Milestones",
      value: `${completedMilestones}/${milestones.length}`,
      icon: Award,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-blue-500";
      case "pending":
        return "bg-gray-300";
      default:
        return "bg-gray-300";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="text-green-600" size={24} />;
      case "in-progress":
        return <Clock className="text-blue-600" size={24} />;
      case "pending":
        return <Circle className="text-gray-400" size={24} />;
      default:
        return <Circle className="text-gray-400" size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f1e8] to-[#e8e4d8]">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src="logo1.png" alt="Logo" className="h-12 sm:h-15" />
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-gray-100 p-1.5 rounded-full">
                <button
                  type="button"
                  onClick={() => setSearchParams({ project: "savoria" })}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition ${
                    selectedProjectKey === "savoria"
                      ? "bg-[#1a4d3c] text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Savoria SaaS
                </button>
                <button
                  type="button"
                  onClick={() => setSearchParams({ project: "clinicsaathi" })}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition ${
                    selectedProjectKey === "clinicsaathi"
                      ? "bg-[#1a4d3c] text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  ClinicSaathi
                </button>
              </div>

              <Link
                to="/"
                className="text-sm font-medium text-[#1a4d3c] hover:underline hidden md:inline-block ml-2"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Header */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-4xl font-light text-gray-900">
                  {projectData.name}
                </h1>
                <span className="px-4 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                  {projectData.status}
                </span>
              </div>
              <p className="text-gray-600">Client: {projectData.client}</p>
              <p className="text-gray-500 text-sm mt-1">
                {projectData.startDate} -{" "}
                <span
                  className={
                    isOverdue ? "text-red-600 font-semibold" : undefined
                  }
                >
                  {projectData.endDate}
                </span>
              </p>
              {isOverdue && (
                <p className="flex items-center gap-1 text-red-600 text-sm font-medium mt-2">
                  <AlertCircle size={16} />
                  Deadline missed — {overdueDays} extra day
                  {overdueDays > 1 ? "s" : ""} and counting
                </p>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <img
                src={projectData.projectManager.avatar}
                alt={projectData.projectManager.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-gray-500">Project Manager</p>
                <p className="font-semibold text-gray-900">
                  {projectData.projectManager.name}
                </p>
                <p className="text-sm text-gray-600">
                  {projectData.projectManager.email}
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Overall Progress
              </span>
              <span className="text-sm font-bold text-[#1a4d3c]">
                {displayProgress}%
              </span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#1a4d3c] to-[#2a5d4c] rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${displayProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                <div
                  className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon size={24} />
                </div>
                <p
                  className={`text-3xl font-bold mb-1 ${
                    stat.valueColor || "text-gray-900"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {["overview", "updates"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab
                  ? "bg-[#1a4d3c] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === "overview" && (
            <>
              {/* Milestones */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Project Milestones
                </h2>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div
                      key={milestone.id}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className="flex-shrink-0">
                          {getStatusIcon(milestone.status)}
                        </div>
                        {index < milestones.length - 1 && (
                          <div
                            className={`w-0.5 h-16 mt-2 ${
                              milestone.status === "completed"
                                ? "bg-green-500"
                                : "bg-gray-300"
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {milestone.title}
                          </h3>
                          <span
                            className={`text-sm ${
                              isMilestoneOverdue(milestone)
                                ? "text-red-600 font-semibold"
                                : "text-gray-500"
                            }`}
                          >
                            {milestone.date}
                            {isMilestoneOverdue(milestone) && " (overdue)"}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          {milestone.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-gray-500">
                            Tasks: {milestone.completedTasks}/{milestone.tasks}
                          </span>
                          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${getStatusColor(
                                milestone.status
                              )} transition-all`}
                              style={{
                                width: `${
                                  (milestone.completedTasks / milestone.tasks) *
                                  100
                                }%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "updates" && (
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Recent Updates
              </h2>
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-[#1a4d3c] pl-6 py-4 hover:bg-gray-50 transition-colors rounded-r-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">
                        {update.title}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {update.date}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {update.description}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {update.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "deliverables" && (
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Project Deliverables
              </h2>
              {/* <div className="space-y-4">
                {deliverables.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <FileText className="text-gray-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {file.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {file.type} • {file.size} • {file.date}
                        </p>
                      </div>
                    </div>
                    {file.status === "available" ? (
                      <button className="flex items-center space-x-2 px-4 py-2 bg-[#1a4d3c] text-white rounded-lg hover:bg-[#2a5d4c] transition-colors">
                        <Download size={18} />
                        <span className="text-sm font-medium">Download</span>
                      </button>
                    ) : (
                      <span className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm">
                        Coming Soon
                      </span>
                    )}
                  </div>
                ))}
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectProgressPage;

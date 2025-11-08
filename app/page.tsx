'use client';

import { useState } from 'react';
import {
  Bot,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  Zap,
  Server,
  Activity,
  MessageSquare,
  Calendar
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Active Automations', value: '47', change: '+12%', icon: Bot, color: 'bg-blue-500' },
    { label: 'Total Clients', value: '23', change: '+5%', icon: Users, color: 'bg-purple-500' },
    { label: 'Monthly Revenue', value: '$84,250', change: '+23%', icon: DollarSign, color: 'bg-green-500' },
    { label: 'Tasks Completed', value: '1,294', change: '+8%', icon: CheckCircle2, color: 'bg-orange-500' },
  ];

  const recentAutomations = [
    { id: 1, name: 'Email Campaign Automation', client: 'TechCorp Inc.', status: 'active', uptime: '99.8%' },
    { id: 2, name: 'Customer Support Bot', client: 'RetailMax', status: 'active', uptime: '98.5%' },
    { id: 3, name: 'Data Pipeline Integration', client: 'FinanceHub', status: 'warning', uptime: '95.2%' },
    { id: 4, name: 'Social Media Scheduler', client: 'BrandCo', status: 'active', uptime: '100%' },
    { id: 5, name: 'Invoice Processing System', client: 'AccountPro', status: 'active', uptime: '99.1%' },
  ];

  const upcomingTasks = [
    { id: 1, task: 'Deploy chatbot update', client: 'TechCorp Inc.', due: '2 hours', priority: 'high' },
    { id: 2, task: 'Review automation logs', client: 'RetailMax', due: '4 hours', priority: 'medium' },
    { id: 3, task: 'Client meeting - new project', client: 'StartupXYZ', due: 'Tomorrow', priority: 'high' },
    { id: 4, task: 'System maintenance', client: 'Internal', due: '3 days', priority: 'low' },
  ];

  const performanceMetrics = [
    { metric: 'API Response Time', value: '145ms', status: 'good' },
    { metric: 'Error Rate', value: '0.3%', status: 'good' },
    { metric: 'CPU Usage', value: '42%', status: 'good' },
    { metric: 'Memory Usage', value: '68%', status: 'warning' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Automation Agency</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <MessageSquare className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <Calendar className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                AA
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {['overview', 'automations', 'clients', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Automations */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <Server className="h-5 w-5 mr-2 text-blue-500" />
                Active Automations
              </h2>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View All</button>
            </div>
            <div className="space-y-3">
              {recentAutomations.map((automation) => (
                <div
                  key={automation.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`h-2 w-2 rounded-full ${
                      automation.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                    }`} />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{automation.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{automation.client}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{automation.uptime}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Uptime</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Activity className="h-5 w-5 mr-2 text-purple-500" />
              Performance
            </h2>
            <div className="space-y-4">
              {performanceMetrics.map((metric, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{metric.metric}</span>
                    <span className={`text-sm font-medium ${
                      metric.status === 'good' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
                    }`}>
                      {metric.value}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        metric.status === 'good' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                      style={{ width: metric.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Tasks & Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Upcoming Tasks */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-orange-500" />
              Upcoming Tasks
            </h2>
            <div className="space-y-3">
              {upcomingTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="font-medium text-gray-900 dark:text-white">{task.task}</p>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        task.priority === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' :
                        task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                        'bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{task.client}</p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 ml-4">
                    {task.due}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Analytics */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-green-500" />
              Quick Analytics
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">94%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full" style={{ width: '94%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Automation Success Rate</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">97%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full" style={{ width: '97%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Resource Utilization</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">73%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full" style={{ width: '73%' }} />
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Active Alerts</span>
                  <span className="flex items-center text-orange-600 dark:text-orange-400">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    3 warnings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

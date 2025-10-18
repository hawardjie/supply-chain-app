'use client';

import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Package,
  AlertTriangle,
  Activity,
  Target,
  Layers,
  Calendar,
  Globe2,
  Clock,
  ChevronRight,
  Zap,
  ShoppingCart,
  TruckIcon,
  Factory,
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Settings,
  Bell,
  Search
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

export default function SupplyChainDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedScenario, setSelectedScenario] = useState('baseline');

  // Sample data for charts
  const demandForecastData = [
    { month: 'Jan', actual: 4200, forecast: 4100, optimal: 4300 },
    { month: 'Feb', actual: 3800, forecast: 3900, optimal: 4000 },
    { month: 'Mar', actual: 4500, forecast: 4400, optimal: 4600 },
    { month: 'Apr', actual: 4800, forecast: 4900, optimal: 5000 },
    { month: 'May', actual: 5200, forecast: 5300, optimal: 5400 },
    { month: 'Jun', actual: 5500, forecast: 5600, optimal: 5700 },
    { month: 'Jul', actual: 0, forecast: 5800, optimal: 6000 },
    { month: 'Aug', actual: 0, forecast: 6100, optimal: 6300 },
  ];

  const inventoryData = [
    { category: 'Raw Materials', current: 85, optimal: 90, critical: 30 },
    { category: 'WIP', current: 65, optimal: 70, critical: 25 },
    { category: 'Finished Goods', current: 92, optimal: 85, critical: 40 },
    { category: 'Safety Stock', current: 78, optimal: 80, critical: 50 },
  ];

  const supplierPerformance = [
    { name: 'Supplier A', onTime: 95, quality: 98, cost: 87 },
    { name: 'Supplier B', onTime: 88, quality: 92, cost: 94 },
    { name: 'Supplier C', onTime: 92, quality: 95, cost: 85 },
    { name: 'Supplier D', onTime: 85, quality: 90, cost: 92 },
  ];

  const distributionData = [
    { name: 'North America', value: 35 },
    { name: 'Europe', value: 28 },
    { name: 'Asia Pacific', value: 22 },
    { name: 'Latin America', value: 10 },
    { name: 'Africa', value: 5 },
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

  const realtimeMetrics = [
    {
      title: 'Active Orders',
      value: '1,247',
      change: '+12%',
      positive: true,
      icon: ShoppingCart,
      color: 'blue'
    },
    {
      title: 'In Transit',
      value: '438',
      change: '-5%',
      positive: false,
      icon: TruckIcon,
      color: 'purple'
    },
    {
      title: 'Inventory Level',
      value: '87%',
      change: '+3%',
      positive: true,
      icon: Package,
      color: 'green'
    },
    {
      title: 'Supplier Score',
      value: '94.2',
      change: '+2.1%',
      positive: true,
      icon: Factory,
      color: 'orange'
    },
  ];

  const alerts = [
    { severity: 'high', message: 'Low inventory alert: Component X-247', time: '5m ago' },
    { severity: 'medium', message: 'Delayed shipment from Supplier C', time: '23m ago' },
    { severity: 'low', message: 'Demand spike predicted for next week', time: '1h ago' },
  ];

  const scenarios = [
    { id: 'baseline', name: 'Baseline Scenario', impact: 0 },
    { id: 'demand-spike', name: 'Demand Spike +20%', impact: 15 },
    { id: 'supply-disruption', name: 'Supply Disruption', impact: -25 },
    { id: 'optimized', name: 'AI Optimized', impact: 18 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Supply Chain Command Center
                  </h1>
                  <p className="text-sm text-slate-500">Real-time visibility & AI-powered insights</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>
              <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-slate-600" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-semibold">
                JD
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 mt-4">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
              { id: 'forecasting', label: 'Demand Forecasting', icon: Target },
              { id: 'visibility', label: 'Real-time Visibility', icon: Activity },
              { id: 'scenarios', label: 'Scenario Planning', icon: Layers },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Real-time Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {realtimeMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-slate-500 font-medium">{metric.title}</p>
                      <p className="text-3xl font-bold mt-2 text-slate-900">{metric.value}</p>
                      <div className="flex items-center mt-2">
                        {metric.positive ? (
                          <ArrowUpRight className="w-4 h-4 text-green-500" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-500" />
                        )}
                        <span
                          className={`text-sm font-semibold ml-1 ${
                            metric.positive ? 'text-green-500' : 'text-red-500'
                          }`}
                        >
                          {metric.change}
                        </span>
                        <span className="text-xs text-slate-400 ml-2">vs last month</span>
                      </div>
                    </div>
                    <div className={`bg-${metric.color}-100 p-3 rounded-xl`}>
                      <metric.icon className={`w-6 h-6 text-${metric.color}-600`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Demand Forecast Chart */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Demand Forecast</h3>
                    <p className="text-sm text-slate-500">Actual vs Predicted demand trends</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-semibold">
                      98.2% Accuracy
                    </span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={demandForecastData}>
                    <defs>
                      <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="actual"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      fill="url(#colorActual)"
                      name="Actual Demand"
                    />
                    <Area
                      type="monotone"
                      dataKey="forecast"
                      stroke="#8b5cf6"
                      strokeWidth={3}
                      strokeDasharray="5 5"
                      fill="url(#colorForecast)"
                      name="Forecasted"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Distribution Chart */}
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Regional Distribution</h3>
                <p className="text-sm text-slate-500 mb-4">Revenue by region</p>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={distributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {distributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Inventory & Alerts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Inventory Levels */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Inventory Levels</h3>
                    <p className="text-sm text-slate-500">Current vs Optimal stock levels</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={inventoryData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="category" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="current" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Current" />
                    <Bar dataKey="optimal" fill="#10b981" radius={[8, 8, 0, 0]} name="Optimal" />
                    <Bar dataKey="critical" fill="#ef4444" radius={[8, 8, 0, 0]} name="Critical Threshold" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Alerts Panel */}
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900">Active Alerts</h3>
                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-semibold">
                    3 Active
                  </span>
                </div>
                <div className="space-y-3">
                  {alerts.map((alert, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border-l-4 ${
                        alert.severity === 'high'
                          ? 'bg-red-50 border-red-500'
                          : alert.severity === 'medium'
                          ? 'bg-orange-50 border-orange-500'
                          : 'bg-blue-50 border-blue-500'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <AlertTriangle
                          className={`w-5 h-5 mt-0.5 ${
                            alert.severity === 'high'
                              ? 'text-red-600'
                              : alert.severity === 'medium'
                              ? 'text-orange-600'
                              : 'text-blue-600'
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">{alert.message}</p>
                          <p className="text-xs text-slate-500 mt-1 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {alert.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  View All Alerts
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Supplier Performance */}
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Supplier Performance</h3>
                <p className="text-sm text-slate-500 mb-4">Multi-dimensional analysis</p>
                <ResponsiveContainer width="100%" height={350}>
                  <RadarChart data={supplierPerformance}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="name" stroke="#94a3b8" />
                    <PolarRadiusAxis stroke="#94a3b8" />
                    <Radar name="On-Time Delivery" dataKey="onTime" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                    <Radar name="Quality Score" dataKey="quality" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                    <Radar name="Cost Efficiency" dataKey="cost" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Performance Trends */}
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Performance Trends</h3>
                <p className="text-sm text-slate-500 mb-4">Key metrics over time</p>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={demandForecastData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} name="Actual" />
                    <Line type="monotone" dataKey="forecast" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 5 }} name="Forecast" />
                    <Line type="monotone" dataKey="optimal" stroke="#10b981" strokeWidth={3} dot={{ r: 5 }} name="Optimal" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-500/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">Order Fulfillment Rate</p>
                    <p className="text-4xl font-bold mt-2">96.8%</p>
                    <p className="text-blue-100 text-sm mt-2">↑ 2.3% from last quarter</p>
                  </div>
                  <Target className="w-12 h-12 text-blue-200" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg shadow-purple-500/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm font-medium">Average Lead Time</p>
                    <p className="text-4xl font-bold mt-2">4.2d</p>
                    <p className="text-purple-100 text-sm mt-2">↓ 0.5d improved</p>
                  </div>
                  <Clock className="w-12 h-12 text-purple-200" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg shadow-green-500/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium">Cost Savings</p>
                    <p className="text-4xl font-bold mt-2">$2.4M</p>
                    <p className="text-green-100 text-sm mt-2">↑ 15% YoY</p>
                  </div>
                  <DollarSign className="w-12 h-12 text-green-200" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'forecasting' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">AI-Powered Demand Forecasting</h3>
                  <p className="text-sm text-slate-500 mt-1">Machine learning models predicting future demand patterns</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-semibold text-slate-700">AI Optimized</span>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={demandForecastData}>
                  <defs>
                    <linearGradient id="colorActual2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorForecast2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorOptimal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="actual"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    fill="url(#colorActual2)"
                    name="Historical Data"
                  />
                  <Area
                    type="monotone"
                    dataKey="forecast"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    fill="url(#colorForecast2)"
                    name="AI Forecast"
                  />
                  <Area
                    type="monotone"
                    dataKey="optimal"
                    stroke="#10b981"
                    strokeWidth={2}
                    strokeDasharray="3 3"
                    fill="url(#colorOptimal)"
                    name="Optimal Target"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Forecast Accuracy</p>
                    <p className="text-2xl font-bold text-slate-900">98.2%</p>
                  </div>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600" style={{ width: '98.2%' }}></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Activity className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Prediction Confidence</p>
                    <p className="text-2xl font-bold text-slate-900">94.7%</p>
                  </div>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600" style={{ width: '94.7%' }}></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Model Performance</p>
                    <p className="text-2xl font-bold text-slate-900">Excellent</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex-1 h-2 bg-green-500 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'visibility' && (
          <div className="space-y-6">
            {/* Real-time Map Placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Global Supply Chain Network</h3>
                  <p className="text-sm text-slate-500 mt-1">Real-time tracking of shipments and inventory</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-slate-600">Live Updates</span>
                  </div>
                </div>
              </div>

              <div className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Globe2 className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">Interactive Map View</p>
                    <p className="text-sm text-slate-500 mt-1">438 Active Shipments • 87 Warehouses • 34 Countries</p>
                  </div>
                </div>

                {/* Simulated tracking points */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Real-time Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-l-4 border-l-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-slate-700">In Production</h4>
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-3xl font-bold text-slate-900">247</p>
                <p className="text-xs text-slate-500 mt-2">Orders being manufactured</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-l-4 border-l-purple-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-slate-700">In Transit</h4>
                  <TruckIcon className="w-5 h-5 text-purple-500" />
                </div>
                <p className="text-3xl font-bold text-slate-900">438</p>
                <p className="text-xs text-slate-500 mt-2">Shipments on the way</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-l-4 border-l-green-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-slate-700">Delivered Today</h4>
                  <Package className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-3xl font-bold text-slate-900">89</p>
                <p className="text-xs text-slate-500 mt-2">Successful deliveries</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-l-4 border-l-orange-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-slate-700">Delays</h4>
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                </div>
                <p className="text-3xl font-bold text-slate-900">12</p>
                <p className="text-xs text-slate-500 mt-2">Requiring attention</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { event: 'Shipment SH-2847 departed from Shanghai', time: '2 min ago', status: 'in-transit', icon: TruckIcon },
                  { event: 'Order PO-5621 completed production', time: '15 min ago', status: 'completed', icon: Factory },
                  { event: 'Inventory restocked: Component X-247', time: '32 min ago', status: 'success', icon: Package },
                  { event: 'Shipment SH-2801 delivered to Los Angeles', time: '1 hour ago', status: 'delivered', icon: Package },
                  { event: 'New order received: PO-5628', time: '2 hours ago', status: 'new', icon: ShoppingCart },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
                    <div className={`p-3 rounded-xl ${
                      activity.status === 'completed' || activity.status === 'delivered' || activity.status === 'success'
                        ? 'bg-green-100'
                        : activity.status === 'in-transit'
                        ? 'bg-blue-100'
                        : 'bg-purple-100'
                    }`}>
                      <activity.icon className={`w-5 h-5 ${
                        activity.status === 'completed' || activity.status === 'delivered' || activity.status === 'success'
                          ? 'text-green-600'
                          : activity.status === 'in-transit'
                          ? 'text-blue-600'
                          : 'text-purple-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">{activity.event}</p>
                      <p className="text-xs text-slate-500 flex items-center mt-1">
                        <Clock className="w-3 h-3 mr-1" />
                        {activity.time}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'scenarios' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Scenario Planning & What-If Analysis</h3>
                  <p className="text-sm text-slate-500 mt-1">Model different scenarios to optimize supply chain decisions</p>
                </div>
              </div>

              {/* Scenario Selector */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {scenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => setSelectedScenario(scenario.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      selectedScenario === scenario.id
                        ? 'border-blue-500 bg-blue-50 shadow-lg'
                        : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                    }`}
                  >
                    <p className="font-semibold text-slate-900">{scenario.name}</p>
                    <div className="flex items-center mt-2">
                      <span className={`text-sm font-bold ${
                        scenario.impact > 0 ? 'text-green-600' : scenario.impact < 0 ? 'text-red-600' : 'text-slate-600'
                      }`}>
                        {scenario.impact > 0 ? '+' : ''}{scenario.impact}%
                      </span>
                      <span className="text-xs text-slate-500 ml-2">impact</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Scenario Impact Chart */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-4">Projected Impact Analysis</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={inventoryData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="category" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="current" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Current State" />
                    <Bar dataKey="optimal" fill="#10b981" radius={[8, 8, 0, 0]} name="Projected State" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Scenario Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-900">Revenue Impact</h4>
                  <DollarSign className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-3xl font-bold text-green-600">+$1.2M</p>
                <p className="text-sm text-slate-500 mt-2">Potential revenue increase</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-900">Cost Savings</h4>
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-3xl font-bold text-blue-600">$340K</p>
                <p className="text-sm text-slate-500 mt-2">Operational cost reduction</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-900">Efficiency Gain</h4>
                  <Zap className="w-5 h-5 text-yellow-500" />
                </div>
                <p className="text-3xl font-bold text-yellow-600">+18%</p>
                <p className="text-sm text-slate-500 mt-2">Overall efficiency improvement</p>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">AI-Powered Recommendations</h3>
              <div className="space-y-3">
                {[
                  {
                    title: 'Increase safety stock for high-demand items',
                    impact: 'High',
                    confidence: 92,
                    description: 'Prevent stockouts during demand spikes'
                  },
                  {
                    title: 'Optimize warehouse distribution network',
                    impact: 'Medium',
                    confidence: 87,
                    description: 'Reduce transportation costs by 12%'
                  },
                  {
                    title: 'Implement dynamic pricing for peak seasons',
                    impact: 'High',
                    confidence: 95,
                    description: 'Maximize revenue during high-demand periods'
                  },
                ].map((rec, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h5 className="font-semibold text-slate-900">{rec.title}</h5>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                            rec.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                          }`}>
                            {rec.impact} Impact
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 mt-1">{rec.description}</p>
                        <div className="flex items-center mt-2">
                          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                              style={{ width: `${rec.confidence}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-600 ml-2">{rec.confidence}% confidence</span>
                        </div>
                      </div>
                      <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

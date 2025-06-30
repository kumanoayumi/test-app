'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Palette, Type, Layout, Box, Settings, GitBranch } from 'lucide-react'
import TokenManager from '@/components/TokenManager'
import ComponentLibrary from '@/components/ComponentLibrary'
import VersionHistory from '@/components/VersionHistory'

const tabs = [
  { id: 'tokens', label: 'Design Tokens', icon: Palette },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'components', label: 'Components', icon: Box },
  { id: 'layout', label: 'Layout', icon: Layout },
  { id: 'versions', label: 'Version History', icon: GitBranch },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('tokens')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Design System Manager
              </h1>
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap
                    ${activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'tokens' && <TokenManager />}
          {activeTab === 'components' && <ComponentLibrary />}
          {activeTab === 'versions' && <VersionHistory />}
          {activeTab === 'typography' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Typography System</h2>
              <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
            </div>
          )}
          {activeTab === 'layout' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Layout System</h2>
              <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  )
}
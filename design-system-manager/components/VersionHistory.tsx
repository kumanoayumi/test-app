'use client'

import { GitBranch, GitCommit, Clock, User } from 'lucide-react'
import { motion } from 'framer-motion'

interface Version {
  id: string
  version: string
  date: string
  author: string
  changes: string[]
  type: 'major' | 'minor' | 'patch'
}

const versionHistory: Version[] = [
  {
    id: '1',
    version: '2.0.0',
    date: '2024-12-30',
    author: 'Design Team',
    type: 'major',
    changes: [
      'Complete redesign of color system',
      'New component architecture',
      'Breaking changes in spacing tokens',
      'Added dark mode support'
    ]
  },
  {
    id: '2',
    version: '1.3.2',
    date: '2024-12-15',
    author: 'John Doe',
    type: 'patch',
    changes: [
      'Fixed button hover states',
      'Updated shadow tokens',
      'Minor typography adjustments'
    ]
  },
  {
    id: '3',
    version: '1.3.0',
    date: '2024-12-01',
    author: 'Jane Smith',
    type: 'minor',
    changes: [
      'Added new form components',
      'Introduced animation tokens',
      'New utility classes'
    ]
  },
  {
    id: '4',
    version: '1.2.0',
    date: '2024-11-15',
    author: 'Design Team',
    type: 'minor',
    changes: [
      'New card components',
      'Updated grid system',
      'Accessibility improvements'
    ]
  }
]

export default function VersionHistory() {
  const getVersionColor = (type: Version['type']) => {
    switch (type) {
      case 'major': return 'text-red-600 bg-red-100'
      case 'minor': return 'text-yellow-600 bg-yellow-100'
      case 'patch': return 'text-green-600 bg-green-100'
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Version History</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Track changes and updates to your design system
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
        
        <div className="space-y-8">
          {versionHistory.map((version, index) => (
            <motion.div
              key={version.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-full border-4 border-gray-200 dark:border-gray-700 z-10">
                <GitCommit className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </div>
              
              <div className="ml-6 flex-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Version {version.version}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getVersionColor(version.type)}`}>
                          {version.type.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{version.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{version.author}</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">Changes:</h4>
                    <ul className="space-y-1">
                      {version.changes.map((change, changeIndex) => (
                        <li key={changeIndex} className="flex items-start text-gray-600 dark:text-gray-400">
                          <span className="mr-2">•</span>
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
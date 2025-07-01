'use client'

import { useState } from 'react'
import { Search, Code, Eye, Copy } from 'lucide-react'
import { motion } from 'framer-motion'

interface Component {
  id: string
  name: string
  category: string
  description: string
  code: string
  preview: React.ReactNode
}

const sampleComponents: Component[] = [
  {
    id: '1',
    name: 'Primary Button',
    category: 'Buttons',
    description: 'Main action button with hover and active states',
    code: `<button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors">
  Click me
</button>`,
    preview: (
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors">
        Click me
      </button>
    ),
  },
  {
    id: '2',
    name: 'Card',
    category: 'Layout',
    description: 'Basic card component with shadow',
    code: `<div className="bg-white rounded-lg shadow-md p-6">
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
  <p className="text-gray-600">Card content goes here</p>
</div>`,
    preview: (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">Card content goes here</p>
      </div>
    ),
  },
  {
    id: '3',
    name: 'Input Field',
    category: 'Forms',
    description: 'Text input with label and focus states',
    code: `<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700">
    Label
  </label>
  <input
    type="text"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Enter text..."
  />
</div>`,
    preview: (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Label
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text..."
        />
      </div>
    ),
  },
]

export default function ComponentLibrary() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const categories = ['all', ...Array.from(new Set(sampleComponents.map(c => c.category)))]

  const filteredComponents = sampleComponents.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Component Library</h2>
        <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Browse and use pre-built components
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className={viewMode === 'grid' ? 'grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-4'}>
        {filteredComponents.map((component) => (
          <motion.div
            key={component.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {component.name}
                  </h3>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {component.category}
                  </span>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                {component.description}
              </p>

              <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg flex items-center justify-center min-h-[100px]">
                {component.preview}
              </div>

              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Code</span>
                  <button
                    onClick={() => copyCode(component.code)}
                    className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </button>
                </div>
                <pre className="p-3 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-xs sm:text-sm">
                  <code>{component.code}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
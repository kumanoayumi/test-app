'use client'

import { useState } from 'react'
import { Plus, Copy, Edit2, Trash2, Download } from 'lucide-react'
import { motion } from 'framer-motion'

interface Token {
  id: string
  name: string
  value: string
  category: 'color' | 'spacing' | 'radius' | 'shadow'
  description?: string
}

const initialTokens: Token[] = [
  { id: '1', name: 'primary', value: '#3b82f6', category: 'color', description: 'Main brand color' },
  { id: '2', name: 'secondary', value: '#8b5cf6', category: 'color', description: 'Secondary brand color' },
  { id: '3', name: 'success', value: '#10b981', category: 'color', description: 'Success state color' },
  { id: '4', name: 'spacing-xs', value: '4px', category: 'spacing', description: 'Extra small spacing' },
  { id: '5', name: 'spacing-sm', value: '8px', category: 'spacing', description: 'Small spacing' },
  { id: '6', name: 'radius-sm', value: '4px', category: 'radius', description: 'Small border radius' },
  { id: '7', name: 'shadow-sm', value: '0 1px 2px rgba(0,0,0,0.05)', category: 'shadow', description: 'Small shadow' },
]

export default function TokenManager() {
  const [tokens, setTokens] = useState<Token[]>(initialTokens)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isAddingToken, setIsAddingToken] = useState(false)

  const categories = ['all', 'color', 'spacing', 'radius', 'shadow']

  const filteredTokens = selectedCategory === 'all' 
    ? tokens 
    : tokens.filter(token => token.category === selectedCategory)

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value)
  }

  const exportTokens = () => {
    const tokenExport = {
      version: '1.0.0',
      tokens: tokens.reduce((acc, token) => {
        if (!acc[token.category]) acc[token.category] = {}
        acc[token.category][token.name] = {
          value: token.value,
          description: token.description
        }
        return acc
      }, {} as any)
    }
    
    const blob = new Blob([JSON.stringify(tokenExport, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'design-tokens.json'
    a.click()
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Design Tokens</h2>
          <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Manage your design system&apos;s core values
          </p>
        </div>
        <div className="flex space-x-2 sm:space-x-3">
          <button
            onClick={exportTokens}
            className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
          <button
            onClick={() => setIsAddingToken(true)}
            className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Token</span>
          </button>
        </div>
      </div>

      <div className="flex space-x-2 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 font-medium text-sm capitalize ${
              selectedCategory === category
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTokens.map((token) => (
          <motion.div
            key={token.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white break-words">{token.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{token.description}</p>
              </div>
              <div className="flex space-x-1">
                <button
                  onClick={() => copyToClipboard(token.value)}
                  className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-red-500">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="mt-3">
              {token.category === 'color' && (
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-12 h-12 rounded-lg border border-gray-200"
                    style={{ backgroundColor: token.value }}
                  />
                  <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {token.value}
                  </code>
                </div>
              )}
              {token.category !== 'color' && (
                <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  {token.value}
                </code>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
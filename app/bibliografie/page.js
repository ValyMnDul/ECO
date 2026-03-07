'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Library, Book, FileText, Globe } from 'lucide-react'

export default function BibliografiePage() {
  const sources = [
    {
      type: 'Manuale',
      icon: Book,
      color: 'blue',
      items: [
        'Manual de Economie pentru liceu, Editura Didactică și Pedagogică',
        'Economia - manual pentru clasa a XI-a, Editura Economică',
        'Principiile Economiei, N. Gregory Mankiw'
      ]
    },
    {
      type: 'Articole Academice',
      icon: FileText,
      color: 'green',
      items: [
        'Solow, R. M. (1957). Technical Change and the Aggregate Production Function',
        'Krugman, P. (1994). The Age of Diminished Expectations',
        'Acemoglu, D. (2019). Automation and New Tasks'
      ]
    },
    {
      type: 'Resurse Online',
      icon: Globe,
      color: 'purple',
      items: [
        'Investopedia - Economic Productivity',
        'Khan Academy - Microeconomics',
        'OECD - Productivity Statistics',
        'World Bank - Economic Data'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" />Acasă</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex items-center gap-3 mb-8">
          <Library className="h-10 w-10 text-teal-600" />
          <h1 className="text-4xl font-bold gradient-text">Bibliografie și Surse</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Despre Sursele Utilizate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              Proiect bazat pe surse academice, manuale școlare și resurse online verificate.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {sources.map((category, idx) => {
            const Icon = category.icon
            const colorMap = {
              blue: 'from-blue-500 to-cyan-500',
              green: 'from-green-500 to-emerald-500',
              purple: 'from-purple-500 to-pink-500'
            }

            return (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorMap[category.color]} flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{category.type}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 flex justify-between">
          <Button asChild variant="outline">
            <Link href="/lectii">← Lecții</Link>
          </Button>
          <Button asChild>
            <Link href="/">Acasă →</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

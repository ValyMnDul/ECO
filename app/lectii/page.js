'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, GraduationCap, ExternalLink, Youtube, BookOpen } from 'lucide-react'

export default function LectiiPage() {
  const resources = [
    {
      title: 'Khan Academy - Economie',
      description: 'Cursuri video gratuite despre concepte economice fundamentale',
      url: 'https://ro.khanacademy.org/economics-finance-domain',
      icon: Youtube,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Investopedia - Productivity',
      description: 'Articole detaliate despre productivitate în economie',
      url: 'https://www.investopedia.com/terms/p/productivity.asp',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Coursera - Economics',
      description: 'Cursuri universitare online despre economie',
      url: 'https://www.coursera.org/courses?query=economics',
      icon: GraduationCap,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'edX - Business Economics',
      description: 'Cursuri gratuite de la universități de top',
      url: 'https://www.edx.org/learn/economics',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'MIT OpenCourseWare',
      description: 'Materiale de curs gratuite de la MIT',
      url: 'https://ocw.mit.edu/courses/economics/',
      icon: BookOpen,
      color: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" />Acasă</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="h-10 w-10 text-indigo-600" />
          <h1 className="text-4xl font-bold gradient-text">Lecții Online și Resurse Educaționale</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Despre Resursele Educaționale</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Colecție de platforme educaționale cu lecții, cursuri video și materiale despre productivitate și economie.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <a 
                key={index} 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${resource.color} flex items-center justify-center mb-4`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-lg flex items-center justify-between">
                      {resource.title}
                      <ExternalLink className="h-4 w-4" />
                    </CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            )
          })}
        </div>

        <div className="mt-8 flex justify-between">
          <Button asChild variant="outline">
            <Link href="/fise">← Fișe de Lucru</Link>
          </Button>
          <Button asChild>
            <Link href="/evaluare">Evaluare →</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Library, Book } from 'lucide-react'

export default function BibliografiePage() {
  const sources = [
    {
      type: 'Bibliografie',
      icon: Book,
      color: 'blue',
      items: [
        'Ailenei, Dorel; Bălan, Elena, Manual de economie, Editura All, 2018.',
        'Avram, C. D., Microeconomie: concepte, legități, teorii, Editura Universitaria, București, 2018.',
        'Bălăceanu, Cristina, Microeconomie, Editura C.H. Beck, București, 2021.',
        'Crețoiu, Gh.; Cornescu, V.; Bucur, I., Economie, ed. a III-a, Editura C.H. Beck, București, 2011.',
        'Ionescu, A. (coord.), Microeconomie. Teorie și aplicații, Editura Pro Universitaria, București, 2022.',
        'Lipsey, Richard G.; Chrystal, Alec K., Principiile economiei, Editura Economică, București, 2002.',
        'Lupșa, Elena, Manual de economie, clasa a XI-a, Editura Delfin, 2022.',
        'Marinaș, M.C., Microeconomia explicată pe înțelesul studenților, Editura ASE, București, 2021.',
        'Mungiu-Pupăzan, C.; Ilie Băbăiță, Microeconomie, Editura Academica Brâncuși, Târgu Jiu, 2008.',
        'Pociovălișteanu, Diana-Mihaela, Teorie economică generală. Elemente de microeconomie, Editura Universitaria, 2007.',
        'Serban, Andreea Claudia; Aceleanu, Mirela Ionela, Microeconomie, Editura ASE, București, 2019.',
        'Stiglitz, J.; Walsh, C., Economie, Editura Economică, București, 2005.'
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
              Proiect bazat pe surse academice și manuale școlare verificate.
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

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/lib/LanguageContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Calculator, FileText, GraduationCap, BarChart3, Library, Moon, Sun, TrendingUp, Award, Languages } from 'lucide-react'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const menuItems = [
    {
      title: t('theory'),
      titleRO: 'Teorie',
      titleEN: 'Theory',
      descriptionRO: 'Concepte fundamentale despre productivitatea factorilor de producție',
      descriptionEN: 'Fundamental concepts about production factors productivity',
      icon: BookOpen,
      href: '/teorie',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: t('schemes'),
      titleRO: 'Scheme Didactice',
      titleEN: 'Educational Schemes',
      descriptionRO: 'Vizualizări grafice și scheme interactive',
      descriptionEN: 'Graphical visualizations and interactive schemes',
      icon: BarChart3,
      href: '/scheme',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: t('calculator'),
      titleRO: 'Calculator Interactiv',
      titleEN: 'Interactive Calculator',
      descriptionRO: 'Calculează productivitatea factorilor de producție',
      descriptionEN: 'Calculate production factors productivity',
      icon: Calculator,
      href: '/calculator',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: t('worksheets'),
      titleRO: 'Fișe de Lucru',
      titleEN: 'Worksheets',
      descriptionRO: 'Descarcă fișierele pentru exerciții',
      descriptionEN: 'Download worksheet files',
      icon: FileText,
      href: '/fise',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: t('lessons'),
      titleRO: 'Lecții Online',
      titleEN: 'Online Lessons',
      descriptionRO: 'Resurse educaționale și platforme de învățare',
      descriptionEN: 'Educational resources and learning platforms',
      icon: GraduationCap,
      href: '/lectii',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: t('evaluation'),
      titleRO: 'Evaluare',
      titleEN: 'Evaluation',
      descriptionRO: 'Testează-ți cunoștințele cu teste interactive',
      descriptionEN: 'Test your knowledge with interactive tests',
      icon: Award,
      href: '/evaluare',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: t('bibliography'),
      titleRO: 'Bibliografie',
      titleEN: 'Bibliography',
      descriptionRO: 'Surse și resurse utilizate',
      descriptionEN: 'Sources and resources used',
      icon: Library,
      href: '/bibliografie',
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white truncate">
              {language === 'ro' ? 'Productivitatea Factorilor' : 'Production Factors'}
            </h1>
          </div>
          {mounted && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleLanguage}
                title={language === 'ro' ? 'Switch to English' : 'Schimbă în Română'}
              >
                <Languages className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            {t('mainTitle')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Link href="/teorie">{t('startLesson')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/evaluare">{t('testKnowledge')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center border-t-4 border-t-blue-500">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-blue-600">7</CardTitle>
              <CardDescription>{t('sections')}</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center border-t-4 border-t-green-500">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-green-600">50+</CardTitle>
              <CardDescription>{t('questions')}</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center border-t-4 border-t-purple-500">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-purple-600">100%</CardTitle>
              <CardDescription>{t('content')}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('exploreContent')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Link key={index} href={item.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">
                      {language === 'ro' ? item.titleRO : item.titleEN}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {language === 'ro' ? item.descriptionRO : item.descriptionEN}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>

      {/* What is Productivity Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-none">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center mb-4">
              {t('whatIsProductivity')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              {t('productivityDesc')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2026 - {t('footerText')}</p>
          <p className="text-sm mt-2">{t('footerSubtext')}</p>
        </div>
      </footer>
    </div>
  )
}

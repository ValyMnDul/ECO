'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, Download } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function FisePage() {
  const { language } = useLanguage()

  const worksheets = [
    {
      title: language === 'ro' ? 'Fișa de Lucru - Productivitatea' : 'Worksheet - Productivity',
      description: language === 'ro' 
        ? 'Fișă completă cu exerciții despre productivitatea factorilor de producție'
        : 'Complete worksheet with exercises about production factors productivity',
      file: '/downloads/Fisa_de_lucru_Productivitatea.docx',
      size: '15 KB'
    },
    {
      title: language === 'ro' ? 'Fișa de Lucru Nr. 2' : 'Worksheet No. 2',
      description: language === 'ro'
        ? 'Exerciții suplimentare și aplicații practice'
        : 'Additional exercises and practical applications',
      file: '/downloads/Fisa_de_lucru_nr_2.docx',
      size: '16 KB'
    },
    {
      title: language === 'ro' ? 'Fișa de Lucru Nr. 3' : 'Worksheet No. 3',
      description: language === 'ro'
        ? 'Probleme avansate și studii de caz'
        : 'Advanced problems and case studies',
      file: '/downloads/Fisa_de_lucru_nr_3.docx',
      size: '13 KB'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'ro' ? 'Acasă' : 'Home'}
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="h-10 w-10 text-orange-600" />
          <h1 className="text-4xl font-bold gradient-text">
            {language === 'ro' ? 'Fișe de Lucru' : 'Worksheets'}
          </h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {language === 'ro' ? 'Descarcă Fișele de Lucru' : 'Download Worksheets'}
            </CardTitle>
            <CardDescription>
              {language === 'ro' 
                ? 'Fișiere .docx pentru exerciții și aplicații practice'
                : '.docx files for exercises and practical applications'}
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="space-y-6">
          {worksheets.map((worksheet, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-xl flex items-center justify-between">
                  <span>{worksheet.title}</span>
                  <span className="text-sm font-normal text-gray-500">{worksheet.size}</span>
                </CardTitle>
                <CardDescription>{worksheet.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href={worksheet.file} download>
                  <Button className="w-full" size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    {language === 'ro' ? 'Descarcă Fișa' : 'Download Worksheet'}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-blue-50 dark:bg-gray-800 border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg">
              {language === 'ro' ? 'ℹ️ Informații' : 'ℹ️ Information'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              {language === 'ro' 
                ? 'Fișele de lucru sunt în format Microsoft Word (.docx). Vei avea nevoie de Word, LibreOffice sau Google Docs pentru a le deschide.'
                : 'Worksheets are in Microsoft Word format (.docx). You will need Word, LibreOffice or Google Docs to open them.'}
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-between">
          <Button asChild variant="outline">
            <Link href="/calculator">
              ← {language === 'ro' ? 'Calculator' : 'Calculator'}
            </Link>
          </Button>
          <Button asChild>
            <Link href="/lectii">
              {language === 'ro' ? 'Lecții Online' : 'Online Lessons'} →
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

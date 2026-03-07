'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, CheckCircle2 } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function FisePage() {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const handleSubmit = () => {
    let totalScore = 0
    if (answers.q1a?.toLowerCase().includes('eficient')) totalScore++
    if (answers.q1b1?.toLowerCase().includes('producți') || answers.q1b1?.toLowerCase().includes('produc')) totalScore++
    if (answers.q1b2?.toLowerCase().includes('lucrător') || answers.q1b2?.toLowerCase().includes('munc')) totalScore++
    if (answers.q1c?.toLowerCase().includes('minimiz')) totalScore++
    if (answers.q2 === 'B') totalScore++
    if (answers.q3 === 'B') totalScore++
    if (answers.bonus === 'fals') totalScore++

    setScore(totalScore)
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const resetForm = () => {
    setAnswers({})
    setSubmitted(false)
    setScore(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" />Acasă</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="h-10 w-10 text-orange-600" />
          <h1 className="text-4xl font-bold gradient-text">Fișe de Lucru - Productivitatea</h1>
        </div>

        {submitted && (
          <Card className="mb-8 border-2 border-green-500">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
                Fișă Completată!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
                <p className="text-3xl font-bold text-center mb-2">
                  Scor: {score} / 7 ({Math.round((score/7)*100)}%)
                </p>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  {score === 7 && 'Excelent! Răspunsuri perfecte! 🎉'}
                  {score >= 5 && score < 7 && 'Foarte bine! Continuă astfel! 👏'}
                  {score >= 3 && score < 5 && 'Bine! Mai revizuiește teoria! 📚'}
                  {score < 3 && 'Încearcă din nou după ce revizuiești lecția! 💪'}
                </p>
              </div>
              <div className="mt-4 text-center">
                <Button onClick={resetForm} variant="outline">Încearcă Din Nou</Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">Fișa de Lucru - Productivitatea Factorilor de Producție</CardTitle>
            <CardDescription>Completează exercițiile pentru a-ți testa cunoștințele</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-4">1. Completează spațiile libere:</h3>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-base mb-2 block">
                    a) Productivitatea este un indicator economic care arată cât de{' '}
                    <Input 
                      placeholder="___________"
                      value={answers.q1a || ''}
                      onChange={(e) => setAnswers({...answers, q1a: e.target.value})}
                      disabled={submitted}
                      className="inline-block w-40 mx-2"
                    />
                    {' '}sunt utilizați factorii de producție.
                  </Label>
                  {submitted && (
                    <p className={`text-sm mt-1 ${answers.q1a?.toLowerCase().includes('eficient') ? 'text-green-600' : 'text-red-600'}`}>
                      {answers.q1a?.toLowerCase().includes('eficient') ? '✓ Corect!' : '✗ Răspuns corect: eficient'}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="text-base mb-3 block">b) Productivitatea muncii =</Label>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Input 
                      placeholder="Producția..."
                      value={answers.q1b1 || ''}
                      onChange={(e) => setAnswers({...answers, q1b1: e.target.value})}
                      disabled={submitted}
                      className="w-48"
                    />
                    <span className="text-2xl">/</span>
                    <Input 
                      placeholder="Numărul de..."
                      value={answers.q1b2 || ''}
                      onChange={(e) => setAnswers({...answers, q1b2: e.target.value})}
                      disabled={submitted}
                      className="w-48"
                    />
                  </div>
                  {submitted && (
                    <div className="space-y-1 mt-2">
                      <p className={`text-sm ${(answers.q1b1?.toLowerCase().includes('producți') || answers.q1b1?.toLowerCase().includes('produc')) ? 'text-green-600' : 'text-red-600'}`}>
                        {(answers.q1b1?.toLowerCase().includes('producți') || answers.q1b1?.toLowerCase().includes('produc')) ? '✓ Prima parte corectă!' : '✗ Prima parte: Producția obținută'}
                      </p>
                      <p className={`text-sm ${(answers.q1b2?.toLowerCase().includes('lucrător') || answers.q1b2?.toLowerCase().includes('munc')) ? 'text-green-600' : 'text-red-600'}`}>
                        {(answers.q1b2?.toLowerCase().includes('lucrător') || answers.q1b2?.toLowerCase().includes('munc')) ? '✓ A doua parte corectă!' : '✗ A doua parte: Numărul de lucrători'}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <Label className="text-base mb-2 block">
                    c) Eficiența economică presupune{' '}
                    <Input 
                      placeholder="___________"
                      value={answers.q1c || ''}
                      onChange={(e) => setAnswers({...answers, q1c: e.target.value})}
                      disabled={submitted}
                      className="inline-block w-40 mx-2"
                    />
                    {' '}costurilor.
                  </Label>
                  {submitted && (
                    <p className={`text-sm mt-1 ${answers.q1c?.toLowerCase().includes('minimiz') ? 'text-green-600' : 'text-red-600'}`}>
                      {answers.q1c?.toLowerCase().includes('minimiz') ? '✓ Corect!' : '✗ Răspuns corect: minimizarea'}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold mb-4">2. Alege răspunsul corect:</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="mb-3 font-semibold">Productivitatea capitalului se exprimă în funcție de:</p>
                  <RadioGroup value={answers.q2} onValueChange={(val) => setAnswers({...answers, q2: val})} disabled={submitted}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="A" id="q2a" />
                      <Label htmlFor="q2a" className="cursor-pointer">A. numărul muncitorilor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="B" id="q2b" />
                      <Label htmlFor="q2b" className="cursor-pointer">B. valoarea investițiilor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="C" id="q2c" />
                      <Label htmlFor="q2c" className="cursor-pointer">C. durata muncii</Label>
                    </div>
                  </RadioGroup>
                  {submitted && (
                    <p className={`text-sm mt-2 ${answers.q2 === 'B' ? 'text-green-600' : 'text-red-600'}`}>
                      {answers.q2 === 'B' ? '✓ Corect!' : '✗ Răspuns corect: B'}
                    </p>
                  )}
                </div>

                <div>
                  <p className="mb-3 font-semibold">Productivitatea pământului crește când:</p>
                  <RadioGroup value={answers.q3} onValueChange={(val) => setAnswers({...answers, q3: val})} disabled={submitted}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="A" id="q3a" />
                      <Label htmlFor="q3a" className="cursor-pointer">A. se elimină rotația culturilor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="B" id="q3b" />
                      <Label htmlFor="q3b" className="cursor-pointer">B. se îmbunătățesc substanțele nutritive</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="C" id="q3c" />
                      <Label htmlFor="q3c" className="cursor-pointer">C. se reduce suprafața agricolă</Label>
                    </div>
                  </RadioGroup>
                  {submitted && (
                    <p className={`text-sm mt-2 ${answers.q3 === 'B' ? 'text-green-600' : 'text-red-600'}`}>
                      {answers.q3 === 'B' ? '✓ Corect!' : '✗ Răspuns corect: B'}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold mb-4">3. Argumentează:</h3>
              <p className="mb-3 font-semibold">De ce este important ca un producător să fie eficient?</p>
              <Textarea 
                placeholder="Scrie 2-3 idei proprii..."
                rows={6}
                value={answers.argumentare || ''}
                onChange={(e) => setAnswers({...answers, argumentare: e.target.value})}
                disabled={submitted}
              />
              {submitted && answers.argumentare && (
                <div className="mt-3 bg-blue-50 dark:bg-gray-800 p-4 rounded">
                  <p className="font-semibold mb-2">Exemple de răspunsuri corecte:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Profit maxim cu costuri minime</li>
                    <li>• Supraviețuire în piața concurențială</li>
                    <li>• Utilizare optimă a resurselor</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-bold mb-4">4. Bonus – Găsește greșeala!</h3>
              <p className="mb-3 font-semibold">„Dacă adaug mai mulți muncitori, voi obține mereu mai multă producție."</p>
              
              <RadioGroup value={answers.bonus} onValueChange={(val) => setAnswers({...answers, bonus: val})} disabled={submitted}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="adevarat" id="bonus-adevarat" />
                  <Label htmlFor="bonus-adevarat">✅ Adevărat</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fals" id="bonus-fals" />
                  <Label htmlFor="bonus-fals">❌ Fals</Label>
                </div>
              </RadioGroup>

              {submitted && (
                <div className={`mt-3 p-4 rounded ${answers.bonus === 'fals' ? 'bg-green-50 dark:bg-gray-800' : 'bg-red-50 dark:bg-gray-800'}`}>
                  <p className={`font-semibold mb-2 ${answers.bonus === 'fals' ? 'text-green-600' : 'text-red-600'}`}>
                    {answers.bonus === 'fals' ? '✓ Corect! FALS' : '✗ Răspuns corect: FALS'}
                  </p>
                  <p className="text-sm">Legea randamentelor descrescătoare: după un punct, fiecare muncitor aduce tot mai puțin la producție.</p>
                </div>
              )}
            </div>

            {!submitted && (
              <div className="pt-6">
                <Button onClick={handleSubmit} size="lg" className="w-full">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Verifică Răspunsurile
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-between">
          <Button asChild variant="outline">
            <Link href="/calculator">← Calculator</Link>
          </Button>
          <Button asChild>
            <Link href="/lectii">Lecții Online →</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

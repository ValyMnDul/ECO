'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Award, Clock, CheckCircle2, XCircle, Trophy } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function EvaluarePage() {
  const [selectedTest, setSelectedTest] = useState(null)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [results, setResults] = useState(null)
  const [timeLeft, setTimeLeft] = useState(null)

  const tests = [
    {
      id: 'test1',
      title: 'Test 1 - Concepte Fundamentale',
      description: 'Verifică înțelegerea conceptelor de bază despre productivitate',
      duration: 15,
      questions: 10,
      difficulty: 'Ușor'
    },
    {
      id: 'test2',
      title: 'Test 2 - Formule și Calcule',
      description: 'Aplicarea eficientă și corectă a formulelor de calcul al productivității.',
      duration: 20,
      questions: 10,
      difficulty: 'Mediu'
    },
    {
      id: 'test3',
      title: 'Test 3 - Analiză și Aplicații',
      description: 'Analiză avansată detaliată și studii de caz practice relevante pentru evaluare.',
      duration: 25,
      questions: 15,
      difficulty: 'Avansat'
    }
  ]

  const testQuestions = {
    test1: [
      {
        id: 1,
        question: 'Ce reprezintă productivitatea?',
        options: [
          'Numărul de angajați dintr-o firmă',
          'Eficiența cu care sunt utilizați factorii de producție',
          'Profitul total al companiei',
          'Prețul produselor vândute'
        ],
        correct: 1
      },
      {
        id: 2,
        question: 'Care din următorii nu este un factor de producție?',
        options: ['Munca', 'Capitalul', 'Prețul', 'Pământul'],
        correct: 2
      },
      {
        id: 3,
        question: 'Formula generală a productivității este:',
        options: ['W = F / Q', 'W = Q / F', 'W = Q × F', 'W = Q - F'],
        correct: 1
      },
      {
        id: 4,
        question: 'Productivitatea muncii se calculează împărțind:',
        options: [
          'Numărul de lucrători la producție',
          'Producția la numărul de lucrători',
          'Capitalul la muncă',
          'Profitul la muncă'
        ],
        correct: 1
      },
      {
        id: 5,
        question: 'Eficiența economică presupune:',
        options: [
          'Maximizarea numărului de angajați',
          'Minimizarea costurilor',
          'Creșterea prețurilor',
          'Reducerea producției'
        ],
        correct: 1
      },
      {
        id: 6,
        question: 'Productivitatea globală analizează:',
        options: [
          'Doar munca',
          'Doar capitalul',
          'Toți factorii de producție combinați',
          'Doar pământul'
        ],
        correct: 2
      },
      {
        id: 7,
        question: 'Legea randamentelor descrescătoare înseamnă că:',
        options: [
          'Producția crește mereu',
          'După un punct, fiecare factor adițional aduce mai puțin',
          'Producția scade mereu',
          'Factorii nu au impact'
        ],
        correct: 1
      },
      {
        id: 8,
        question: 'Productivitatea marginală măsoară:',
        options: [
          'Producția totală',
          'Producția medie',
          'Suplimentul de producție la adăugarea unei unități de factor',
          'Costul total'
        ],
        correct: 2
      },
      {
        id: 9,
        question: 'Care factor NU influențează productivitatea?',
        options: [
          'Tehnologia modernă',
          'Calificarea muncitorilor',
          'Culoarea clădirii',
          'Motivarea angajaților'
        ],
        correct: 2
      },
      {
        id: 10,
        question: 'Creșterea productivității duce la:',
        options: [
          'Costuri mai mari',
          'Eficiență scăzută',
          'Competitivitate îmbunătățită',
          'Salarii mai mici'
        ],
        correct: 2
      }
    ],
    test2: [
      {
        id: 1,
        question: 'Dacă Q = 1000 și L = 50, atunci W_L = ?',
        options: ['5', '20', '50', '1050'],
        correct: 1
      },
      {
        id: 2,
        question: 'Formula productivității capitalului este:',
        options: ['W_K = K / Q', 'W_K = Q / K', 'W_K = Q + K', 'W_K = K - Q'],
        correct: 1
      },
      {
        id: 3,
        question: 'Productivitatea globală cu Q=500, L=20, P=5, K=25 este:',
        options: ['10', '20', '50', '100'],
        correct: 0
      },
      {
        id: 4,
        question: 'Productivitatea marginală se calculează cu:',
        options: ['Q / F', 'ΔQ / ΔF', 'Q × F', 'F / Q'],
        correct: 1
      },
      {
        id: 5,
        question: 'Dacă ΔQ = 300 și ΔL = 6, productivitatea marginală este:',
        options: ['50', '306', '294', '1800'],
        correct: 0
      },
      {
        id: 6,
        question: 'O firmă cu 30 lucrători produce 6000 unități. Productivitatea muncii este:',
        options: ['200', '180', '5970', '6030'],
        correct: 0
      },
      {
        id: 7,
        question: 'Productivitatea pământului cu Q=4000 kg și P=8 ha este:',
        options: ['500 kg/ha', '32 kg/ha', '4008 kg/ha', '3992 kg/ha'],
        correct: 0
      },
      {
        id: 8,
        question: 'W în formulă reprezintă:',
        options: ['Munca', 'Capitalul', 'Productivitatea', 'Pământul'],
        correct: 2
      },
      {
        id: 9,
        question: 'L în formule reprezintă:',
        options: ['Lucru', 'Muncă (Labor)', 'Lider', 'Leafă'],
        correct: 1
      },
      {
        id: 10,
        question: 'Dacă productivitatea = 15 și L = 100, atunci Q = ?',
        options: ['1500', '85', '115', '15'],
        correct: 0
      }
    ],
    test3: [
      {
        id: 1,
        question: 'În ce situație productivitatea marginală devine negativă?',
        options: [
          'Când se adaugă primul muncitor',
          'Când supraaglomerarea reduce producția totală',
          'Când producția crește',
          'Niciodată'
        ],
        correct: 1
      },
      {
        id: 2,
        question: 'Rata marginală de substituire arată:',
        options: [
          'Prețul produselor',
          'Cum se poate înlocui un factor cu altul menținând producția',
          'Salariile angajaților',
          'Profitul companiei'
        ],
        correct: 1
      },
      {
        id: 3,
        question: 'O țară cu productivitate mare are tendința de a avea:',
        options: [
          'Salarii mici',
          'Economie slabă',
          'Salarii mari și economie robustă',
          'Inflație mare'
        ],
        correct: 2
      },
      {
        id: 4,
        question: 'Tehnologia modernă influențează productivitatea prin:',
        options: [
          'Creșterea costurilor',
          'Reducerea eficienței',
          'Automatizarea și optimizarea proceselor',
          'Scăderea calității'
        ],
        correct: 2
      },
      {
        id: 5,
        question: 'Productivitatea pământului crește prin:',
        options: [
          'Eliminarea fertilizanților',
          'Rotația culturilor și îmbunătățirea solului',
          'Reducerea suprafeței',
          'Ignorarea irigațiilor'
        ],
        correct: 1
      },
      {
        id: 6,
        question: 'În economia concurențială:',
        options: [
          'Toate firmele supraviețuiesc',
          'Doar firmele eficiente supraviețuiesc',
          'Productivitatea nu contează',
          'Prețurile sunt fixe'
        ],
        correct: 1
      },
      {
        id: 7,
        question: 'Motivarea angajaților influențează:',
        options: [
          'Doar salariile',
          'Productivitatea muncii și climatul de lucru',
          'Doar profitul',
          'Nu influențează nimic'
        ],
        correct: 1
      },
      {
        id: 8,
        question: 'Eficiența tehnică se concentrează pe:',
        options: [
          'Minimizarea costurilor',
          'Maximizarea producției cu resurse date',
          'Creșterea prețurilor',
          'Reducerea angajaților'
        ],
        correct: 1
      },
      {
        id: 9,
        question: 'Dacă producția crește de la 800 la 1200 cu 5 lucrători noi, productivitatea marginală este:',
        options: ['80', '40', '240', '400'],
        correct: 0
      },
      {
        id: 10,
        question: 'Interdependența factorilor înseamnă:',
        options: [
          'Factorii lucrează independent',
          'Un factor nu afectează pe altul',
          'Factorii trebuie analizați împreună pentru optimizare',
          'Doar un factor contează'
        ],
        correct: 2
      },
      {
        id: 11,
        question: 'Investițiile în capital uman duc la:',
        options: [
          'Scăderea productivității',
          'Creșterea productivității muncii',
          'Costuri fără beneficii',
          'Reducerea calificării'
        ],
        correct: 1
      },
      {
        id: 12,
        question: 'Productivitatea ridicată permite firmei să:',
        options: [
          'Crească prețurile fără motiv',
          'Investească în inovație și să fie competitivă',
          'Ignore piața',
          'Reducă calitatea'
        ],
        correct: 1
      },
      {
        id: 13,
        question: 'Organizarea eficientă a producției este un factor:',
        options: ['Natural', 'Tehnic', 'Psihologic', 'Internațional'],
        correct: 1
      },
      {
        id: 14,
        question: 'Mai puțină risipă de resurse înseamnă:',
        options: [
          'Eficiență scăzută',
          'Utilizare inteligentă și productivitate ridicată',
          'Costuri mai mari',
          'Calitate proastă'
        ],
        correct: 1
      },
      {
        id: 15,
        question: 'Standardele internaționale de calitate influențează:',
        options: [
          'Doar exporturile',
          'Productivitatea prin creșterea cerințelor de eficiență',
          'Nu influențează nimic',
          'Doar importurile'
        ],
        correct: 1
      }
    ]
  }

  const startTest = (testId) => {
    setSelectedTest(testId)
    setAnswers({})
    setSubmitted(false)
    setResults(null)
    const duration = tests.find(t => t.id === testId).duration * 60
    setTimeLeft(duration)
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleSubmit = async () => {
    const questions = testQuestions[selectedTest]
    
    try {
      const response = await fetch('/api/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          testId: selectedTest,
          answers: answers
        })
      })

      const data = await response.json()
      setResults(data)
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error('Eroare la trimiterea testului:', error)
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (!selectedTest) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" />Acasă</Link>
            </Button>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-10 w-10 text-pink-600" />
            <h1 className="text-4xl font-bold gradient-text">Sistem de Evaluare</h1>
          </div>

          <Alert className="mb-8 bg-blue-50 dark:bg-gray-800">
            <Trophy className="h-4 w-4" />
            <AlertDescription>
              Selectează un test pentru a-ți evalua cunoștințele. Toate răspunsurile sunt verificate pe server pentru a preveni frauda.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-6">
            {tests.map((test) => (
              <Card key={test.id} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle>{test.title}</CardTitle>
                  <CardDescription>{test.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Durată:</span>
                      <span className="font-semibold">{test.duration} min</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Întrebări:</span>
                      <span className="font-semibold">{test.questions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Dificultate:</span>
                      <span className={`font-semibold ${
                        test.difficulty === 'Ușor' ? 'text-green-600' :
                        test.difficulty === 'Mediu' ? 'text-orange-600' :
                        'text-red-600'
                      }`}>{test.difficulty}</span>
                    </div>
                  </div>
                  <Button onClick={() => startTest(test.id)} className="w-full">
                    Începe Testul
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const questions = testQuestions[selectedTest]
  const progress = (Object.keys(answers).length / questions.length) * 100

  if (submitted && results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/evaluare">← Înapoi la Teste</Link>
            </Button>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="mb-8 border-2 border-green-500">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-2">
                <Trophy className="h-10 w-10 text-yellow-500" />
                Test Finalizat!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg mb-6">
                <div className="text-center mb-6">
                  <p className="text-5xl font-bold text-green-600 mb-2">
                    {results.score} / {results.total}
                  </p>
                  <p className="text-2xl text-gray-600 dark:text-gray-400">
                    {results.percentage}%
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Răspunsuri Corecte
                    </span>
                    <span className="font-bold text-green-600">{results.score}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded">
                    <span className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-600" />
                      Răspunsuri Greșite
                    </span>
                    <span className="font-bold text-red-600">{results.total - results.score}</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-xl font-semibold">
                    {results.percentage >= 90 && 'Excelent! Performanță remarcabilă! 🌟'}
                    {results.percentage >= 70 && results.percentage < 90 && 'Foarte bine! Continuă astfel! 👏'}
                    {results.percentage >= 50 && results.percentage < 70 && 'Bine! Mai revizuiește lecțiile! 📚'}
                    {results.percentage < 50 && 'Mai exersează! Recitește teoria! 💪'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => setSelectedTest(null)} variant="outline">
                  Înapoi la Teste
                </Button>
                <Button onClick={() => startTest(selectedTest)}>
                  Reîncepe Testul
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Button variant="ghost" size="sm" onClick={() => setSelectedTest(null)}>
            <ArrowLeft className="mr-2 h-4 w-4" />Înapoi
          </Button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-orange-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
              <Clock className="h-5 w-5 text-orange-600" />
              <span className="font-bold text-lg">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold">Progres: {Object.keys(answers).length} / {questions.length}</span>
            <span className="text-sm font-semibold">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-6">
          {questions.map((q) => (
            <Card key={q.id}>
              <CardHeader>
                <CardTitle className="text-lg">Întrebarea {q.id}</CardTitle>
                <CardDescription className="text-base font-semibold text-gray-900 dark:text-white">
                  {q.question}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={answers[q.id]?.toString()}
                  onValueChange={(val) => setAnswers({...answers, [q.id]: parseInt(val)})}
                >
                  {q.options.map((option, idx) => (
                    <div key={idx} className="flex items-center space-x-2 p-3 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                      <RadioGroupItem value={idx.toString()} id={`q${q.id}-${idx}`} />
                      <Label htmlFor={`q${q.id}-${idx}`} className="cursor-pointer flex-1">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button 
            onClick={handleSubmit} 
            size="lg"
            disabled={Object.keys(answers).length < questions.length}
            className="w-full md:w-auto"
          >
            <CheckCircle2 className="mr-2 h-5 w-5" />
            Trimite Testul ({Object.keys(answers).length}/{questions.length} răspunsuri)
          </Button>
        </div>
      </div>
    </div>
  )
}

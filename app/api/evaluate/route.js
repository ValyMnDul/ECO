import { NextResponse } from 'next/server'

// Definim răspunsurile corecte pentru fiecare test
const correctAnswers = {
  test1: {
    1: 1, 2: 2, 3: 1, 4: 1, 5: 1,
    6: 2, 7: 1, 8: 2, 9: 2, 10: 2
  },
  test2: {
    1: 1, 2: 1, 3: 0, 4: 1, 5: 0,
    6: 0, 7: 0, 8: 2, 9: 1, 10: 0
  },
  test3: {
    1: 1, 2: 1, 3: 2, 4: 2, 5: 1,
    6: 1, 7: 1, 8: 1, 9: 0, 10: 2,
    11: 1, 12: 1, 13: 1, 14: 1, 15: 1
  }
}

export async function POST(request) {
  try {
    const { testId, answers } = await request.json()

    // Validare input
    if (!testId || !answers) {
      return NextResponse.json(
        { error: 'Date invalide' },
        { status: 400 }
      )
    }

    // Verificăm dacă testul există
    if (!correctAnswers[testId]) {
      return NextResponse.json(
        { error: 'Test inexistent' },
        { status: 404 }
      )
    }

    // Calculăm scorul
    const testCorrectAnswers = correctAnswers[testId]
    let score = 0
    const total = Object.keys(testCorrectAnswers).length

    // Comparăm răspunsurile
    Object.keys(testCorrectAnswers).forEach((questionId) => {
      if (answers[questionId] === testCorrectAnswers[questionId]) {
        score++
      }
    })

    const percentage = Math.round((score / total) * 100)

    // Returnăm rezultatele
    return NextResponse.json({
      success: true,
      score,
      total,
      percentage,
      testId,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Eroare la evaluare:', error)
    return NextResponse.json(
      { error: 'Eroare la procesarea testului' },
      { status: 500 }
    )
  }
}

// Handler pentru GET (opțional)
export async function GET() {
  return NextResponse.json({
    message: 'API de evaluare - folosește POST pentru a trimite răspunsuri',
    availableTests: ['test1', 'test2', 'test3']
  })
}

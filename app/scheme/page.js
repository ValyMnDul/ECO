'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Network } from 'lucide-react'

export default function SchemePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" />Acasă</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Network className="h-10 w-10 text-green-600" />
          <h1 className="text-4xl font-bold gradient-text">Scheme Didactice - Productivitatea</h1>
        </div>

        <div className="space-y-8">
          {/* Schema Principala */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Schema Generală a Productivității</CardTitle>
              <CardDescription>Structura completă a formelor de productivitate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
                <div className="text-center mb-8">
                  <div className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-2xl font-bold">
                    PRODUCTIVITATEA (W)
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  {/* Productivitatea Globala */}
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-600 mb-4 text-center">PRODUCTIVITATEA GLOBALĂ</h3>
                    <div className="bg-green-50 dark:bg-gray-800 p-4 rounded mb-4">
                      <p className="text-center font-semibold mb-2">Toți factorii de producție</p>
                      <p className="text-center text-sm">L (Muncă) + P (Pământ) + K (Capital)</p>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-100 dark:bg-gray-700 p-3 rounded">
                        <p className="font-bold text-sm mb-1">Productivitate Medie:</p>
                        <p className="text-center font-mono">W = Q / (L+P+K)</p>
                      </div>
                      <div className="bg-purple-100 dark:bg-gray-700 p-3 rounded">
                        <p className="font-bold text-sm mb-1">Productivitate Marginală:</p>
                        <p className="text-center font-mono">W<sub>mg</sub> = ΔQ / Δ(L+P+K)</p>
                      </div>
                    </div>
                  </div>

                  {/* Productivitatea Partiala */}
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border-4 border-orange-500">
                    <h3 className="text-xl font-bold text-orange-600 mb-4 text-center">PRODUCTIVITATEA PARȚIALĂ</h3>
                    <div className="bg-orange-50 dark:bg-gray-800 p-4 rounded mb-4">
                      <p className="text-center font-semibold mb-2">1 SINGUR Factor de producție</p>
                    </div>
                    <div className="space-y-3">
                      {/* Munca */}
                      <div className="bg-blue-50 dark:bg-gray-800 p-3 rounded border-l-4 border-blue-500">
                        <p className="font-bold text-sm text-blue-600 mb-2">MUNCA (L)</p>
                        <div className="space-y-1 text-sm">
                          <p>Medie: W<sub>L</sub> = Q / L</p>
                          <p>Marginală: W<sub>mgL</sub> = ΔQ / ΔL</p>
                        </div>
                      </div>

                      {/* Pamant */}
                      <div className="bg-green-50 dark:bg-gray-800 p-3 rounded border-l-4 border-green-500">
                        <p className="font-bold text-sm text-green-600 mb-2">PĂMÂNT (P)</p>
                        <div className="space-y-1 text-sm">
                          <p>Medie: W<sub>P</sub> = Q / P</p>
                          <p>Marginală: W<sub>mgP</sub> = ΔQ / ΔP</p>
                        </div>
                      </div>

                      {/* Capital */}
                      <div className="bg-purple-50 dark:bg-gray-800 p-3 rounded border-l-4 border-purple-500">
                        <p className="font-bold text-sm text-purple-600 mb-2">CAPITAL (K)</p>
                        <div className="space-y-1 text-sm">
                          <p>Medie: W<sub>K</sub> = Q / K</p>
                          <p>Marginală: W<sub>mgK</sub> = ΔQ / ΔK</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Diagrama Fluxului de Calcul */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Procesul de Calcul al Productivității</CardTitle>
              <CardDescription>Pașii pentru determinarea productivității</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg text-center flex-1">
                  <p className="font-bold text-lg mb-2">1. IDENTIFICARE</p>
                  <p className="text-sm">Identifică factorii de producție utilizați (L, P, K)</p>
                </div>
                <div className="text-3xl">→</div>
                <div className="bg-green-100 dark:bg-green-900 p-6 rounded-lg text-center flex-1">
                  <p className="font-bold text-lg mb-2">2. MĂSURARE</p>
                  <p className="text-sm">Măsoară producția obținută (Q)</p>
                </div>
                <div className="text-3xl">→</div>
                <div className="bg-purple-100 dark:bg-purple-900 p-6 rounded-lg text-center flex-1">
                  <p className="font-bold text-lg mb-2">3. CALCUL</p>
                  <p className="text-sm">Aplică formula: W = Q / F</p>
                </div>
                <div className="text-3xl">→</div>
                <div className="bg-orange-100 dark:bg-orange-900 p-6 rounded-lg text-center flex-1">
                  <p className="font-bold text-lg mb-2">4. ANALIZĂ</p>
                  <p className="text-sm">Interpretează rezultatele și optimizează</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Schema Factorilor de Influenta */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Factori de Influență ai Productivității</CardTitle>
              <CardDescription>Elemente care afectează nivelul productivității</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="text-center mb-8">
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-xl font-bold">
                    PRODUCTIVITATEA
                  </div>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-600 mb-2 text-center">NATURALI</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Sol</li>
                      <li>• Resurse</li>
                      <li>• Climă</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-green-600 mb-2 text-center">TEHNICI</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Tehnologie</li>
                      <li>• Organizare</li>
                      <li>• Inovație</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-bold text-purple-600 mb-2 text-center">SOCIALI</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Calificare</li>
                      <li>• Relații</li>
                      <li>• Educație</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-bold text-yellow-600 mb-2 text-center">PSIHOLOGICI</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Motivare</li>
                      <li>• Climat</li>
                      <li>• Satisfacție</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-bold text-red-600 mb-2 text-center">INTERNAȚIONALI</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Competiție</li>
                      <li>• Standarde</li>
                      <li>• Comerț</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparatie Medie vs Marginala */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Productivitate Medie vs. Marginală</CardTitle>
              <CardDescription>Diferențele și aplicațiile celor două tipuri</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">PRODUCTIVITATE MEDIE</h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded">
                      <p className="font-semibold mb-2">Definiție:</p>
                      <p className="text-sm">Eficiența medie a unui factor de producție</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded">
                      <p className="font-semibold mb-2">Exemplu:</p>
                      <p className="text-sm">Producția medie per salariat</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded">
                      <p className="font-semibold mb-2">Utilizare:</p>
                      <p className="text-sm">Evaluarea performanței generale</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-600 mb-4 text-center">PRODUCTIVITATE MARGINALĂ</h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded">
                      <p className="font-semibold mb-2">Definiție:</p>
                      <p className="text-sm">Creșterea producției la adăugarea unei unități suplimentare</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded">
                      <p className="font-semibold mb-2">Exemplu:</p>
                      <p className="text-sm">Producția adusă de ultimul muncitor angajat</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded">
                      <p className="font-semibold mb-2">Utilizare:</p>
                      <p className="text-sm">Decizii de angajare sau investiții suplimentare</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legenda */}
          <Card className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
            <CardHeader>
              <CardTitle>Legendă - Simboluri Utilizate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl">W</span>
                  <span className="text-sm">=  Productivitatea (Randament)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl">Q</span>
                  <span className="text-sm">= Producția obținută</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl">L</span>
                  <span className="text-sm">= Muncă (Labor)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl">P</span>
                  <span className="text-sm">= Pământ (Teren)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl">K</span>
                  <span className="text-sm">= Capital (Kapital)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl">Δ</span>
                  <span className="text-sm">= Delta (variație/schimbare)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl">mg</span>
                  <span className="text-sm">= Marginal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl">F</span>
                  <span className="text-sm">= Factori de producție</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex justify-between">
          <Button asChild variant="outline">
            <Link href="/teorie">← Teorie</Link>
          </Button>
          <Button asChild>
            <Link href="/calculator">Calculator Interactiv →</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
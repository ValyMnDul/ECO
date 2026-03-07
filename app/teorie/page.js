'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function TeoriePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" />Acasă</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="h-10 w-10 text-blue-600" />
          <h1 className="text-4xl font-bold gradient-text">Teorie - Productivitatea Factorilor de Producție</h1>
        </div>

        <Tabs defaultValue="introducere" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 h-auto mb-8 p-2">
            <TabsTrigger value="introducere" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900">Introducere</TabsTrigger>
            <TabsTrigger value="forme" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900">Forme</TabsTrigger>
            <TabsTrigger value="formule" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900">Formule</TabsTrigger>
            <TabsTrigger value="factori" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900">Factori</TabsTrigger>
            <TabsTrigger value="concepte" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900">Concepte</TabsTrigger>
          </TabsList>

          <TabsContent value="introducere" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Ce este Productivitatea?</CardTitle>
                <CardDescription>Concepte fundamentale și importanța productivității</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Definiție</h3>
                  <p className="text-lg leading-relaxed">
                    <strong>Productivitatea</strong> este un indicator economic care arată cât de eficient sunt utilizați 
                    factorii de producție (munca, capitalul, pământul) pentru a obține bunuri și servicii. 
                    Se exprimă de obicei ca raport între producția realizată și resursele folosite.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Formula Generală:</h4>
                  <div className="text-center text-2xl font-mono bg-white dark:bg-gray-900 p-4 rounded">
                    W = Q / F
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <p><strong>W</strong> = Productivitatea</p>
                    <p><strong>Q</strong> = Producția obținută (unități fizice sau valoare monetară)</p>
                    <p><strong>F</strong> = Factorii de producție utilizați</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Importanța Productivității</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>Reducerea costurilor unitare</strong> - Mai multă producție cu aceleași resurse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>Creșterea competitivității pe piață</strong> - Firmele eficiente supraviețuiesc</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>Îmbunătățirea standardului de viață</strong> - Salarii mai mari fără inflație</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>Motorul creșterii economice</strong> - Reflectă eficiența transformării resurselor</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">Impact Economic</h3>
                  <p className="leading-relaxed">
                    Creșterea productivității duce la <strong>reducerea costurilor</strong>, 
                    <strong> creșterea profiturilor</strong> și <strong>îmbunătățirea competitivității</strong>. 
                    Permite mărirea salariilor fără creșteri inflaționiste și contribuie la prosperitatea economică generală.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forme" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Productivitatea Globală</CardTitle>
                  <CardDescription>Combinația tuturor factorilor de producție</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Productivitatea globală măsoară eficiența <strong>tuturor factorilor de producție</strong> combinați: 
                    munca (L), pământul (P) și capitalul (K).
                  </p>
                  <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Formula:</p>
                    <div className="text-center text-xl font-mono bg-white dark:bg-gray-900 p-3 rounded">
                      W = Q / (L + P + K)
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Productivitatea Parțială</CardTitle>
                  <CardDescription>Măsurarea unui singur factor</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Productivitatea parțială analizează eficiența <strong>unui singur factor de producție</strong> 
                    independent de ceilalți.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-gray-800 p-3 rounded">
                      <p className="font-semibold text-sm">Productivitatea Muncii:</p>
                      <p className="font-mono text-center">W<sub>L</sub> = Q / L</p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-gray-800 p-3 rounded">
                      <p className="font-semibold text-sm">Productivitatea Capitalului:</p>
                      <p className="font-mono text-center">W<sub>K</sub> = Q / K</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-gray-800 p-3 rounded">
                      <p className="font-semibold text-sm">Productivitatea Pământului:</p>
                      <p className="font-mono text-center">W<sub>P</sub> = Q / P</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Productivitatea Medie</CardTitle>
                  <CardDescription>Eficiența medie a factorilor</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Productivitatea medie arată <strong>eficiența medie</strong> a unui factor de producție. 
                    De exemplu, producția medie per salariat.
                  </p>
                  <div className="bg-indigo-50 dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Exemple:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Productivitatea medie pe salariat</li>
                      <li>• Productivitatea medie pe oră de muncă</li>
                      <li>• Productivitatea medie pe zi de muncă</li>
                      <li>• Productivitatea medie pe lună de muncă</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Productivitatea Marginală</CardTitle>
                  <CardDescription>Suplimentul de producție</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Productivitatea marginală reprezintă <strong>creșterea producției</strong> la adăugarea 
                    unei unități suplimentare dintr-un factor.
                  </p>
                  <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Formula generală:</p>
                    <div className="text-center font-mono bg-white dark:bg-gray-900 p-3 rounded">
                      W<sub>mg</sub> = ΔQ / ΔF
                    </div>
                    <p className="text-sm mt-2">Unde Δ (delta) = variație/schimbare</p>
                  </div>
                  <div className="mt-4 bg-red-50 dark:bg-gray-800 p-3 rounded">
                    <p className="text-sm"><strong>Important:</strong> Legea randamentelor desc rescătoare - 
                    după un anumit punct, fiecare unitate suplimentară aduce tot mai puțin la producție.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="formule" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Formule de Calcul</CardTitle>
                <CardDescription>Toate formulele necesare pentru calcularea productivității</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="globala">
                    <AccordionTrigger className="text-lg font-semibold">Productivitatea Globală</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg">
                          <p className="text-center text-3xl font-mono font-bold mb-4">
                            W = Q / (L + P + K)
                          </p>
                          <div className="grid md:grid-cols-4 gap-4 text-sm">
                            <div className="text-center">
                              <p className="font-bold">W</p>
                              <p className="text-gray-600 dark:text-gray-400">Productivitatea</p>
                            </div>
                            <div className="text-center">
                              <p className="font-bold">Q</p>
                              <p className="text-gray-600 dark:text-gray-400">Producția obținută</p>
                            </div>
                            <div className="text-center">
                              <p className="font-bold">L, P, K</p>
                              <p className="text-gray-600 dark:text-gray-400">Muncă, Pământ, Capital</p>
                            </div>
                            <div className="text-center">
                              <p className="font-bold">Rezultat</p>
                              <p className="text-gray-600 dark:text-gray-400">Unități/Factor</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="munca">
                    <AccordionTrigger className="text-lg font-semibold">Productivitatea Muncii</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg">
                          <h4 className="font-bold mb-3">Productivitatea Medie a Muncii:</h4>
                          <p className="text-center text-2xl font-mono font-bold mb-2">
                            W<sub>L</sub> = Q / L
                          </p>
                          <p className="text-center text-sm text-gray-600 dark:text-gray-400">sau</p>
                          <p className="text-center text-2xl font-mono font-bold mt-2">
                            W<sub>L</sub> = Q / N
                          </p>
                          <p className="text-sm mt-4">Unde <strong>N</strong> = numărul total de personal sau <strong>T</strong> = timpul total de muncă consumat</p>
                        </div>

                        <div className="bg-green-100 dark:bg-gray-700 p-6 rounded-lg">
                          <h4 className="font-bold mb-3">Productivitatea Marginală a Muncii:</h4>
                          <p className="text-center text-2xl font-mono font-bold">
                            W<sub>Lmg</sub> = ΔQ / ΔL
                          </p>
                          <p className="text-sm mt-4">
                            Reprezintă suplimentul de producție obținut la adăugarea unei unități în plus de muncă.
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="capital">
                    <AccordionTrigger className="text-lg font-semibold">Productivitatea Capitalului</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="bg-yellow-50 dark:bg-gray-800 p-6 rounded-lg">
                          <h4 className="font-bold mb-3">Productivitatea Medie a Capitalului:</h4>
                          <p className="text-center text-2xl font-mono font-bold">
                            W<sub>K</sub> = Q / K
                          </p>
                          <p className="text-sm mt-4">
                            Exprimă producția realizată în raport cu echipamentele, utilajele sau banii investiți.
                          </p>
                        </div>

                        <div className="bg-yellow-100 dark:bg-gray-700 p-6 rounded-lg">
                          <h4 className="font-bold mb-3">Productivitatea Marginală a Capitalului:</h4>
                          <p className="text-center text-2xl font-mono font-bold">
                            W<sub>Kmg</sub> = ΔQ / ΔK
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pamant">
                    <AccordionTrigger className="text-lg font-semibold">Productivitatea Pământului</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="bg-orange-50 dark:bg-gray-800 p-6 rounded-lg">
                          <h4 className="font-bold mb-3">Productivitatea Medie a Pământului:</h4>
                          <p className="text-center text-2xl font-mono font-bold">
                            W<sub>P</sub> = Q / P
                          </p>
                          <p className="text-sm mt-4">
                            Se referă la cantitatea de produse obținută pe o unitate de suprafață agricolă.
                          </p>
                        </div>

                        <div className="bg-orange-100 dark:bg-gray-700 p-6 rounded-lg">
                          <h4 className="font-bold mb-3">Productivitatea Marginală a Pământului:</h4>
                          <p className="text-center text-2xl font-mono font-bold">
                            W<sub>Pmg</sub> = ΔQ / ΔP
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="factori" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Factori care Influențează Productivitatea</CardTitle>
                <CardDescription>Elemente care afectează eficiența producției</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border rounded-lg p-6 bg-blue-50 dark:bg-gray-800">
                    <h3 className="text-lg font-bold mb-4 text-blue-600">Factori Naturali</h3>
                    <ul className="space-y-2">
                      <li>• Calitatea solului</li>
                      <li>• Resursele disponibile</li>
                      <li>• Condiții climatice</li>
                      <li>• Localizație geografică</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-6 bg-green-50 dark:bg-gray-800">
                    <h3 className="text-lg font-bold mb-4 text-green-600">Factori Tehnici</h3>
                    <ul className="space-y-2">
                      <li>• Tehnologii moderne</li>
                      <li>• Organizarea producției</li>
                      <li>• Inovație și cercetare</li>
                      <li>• Echipamente performante</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-6 bg-purple-50 dark:bg-gray-800">
                    <h3 className="text-lg font-bold mb-4 text-purple-600">Factori Sociali</h3>
                    <ul className="space-y-2">
                      <li>• Calificarea muncitorilor</li>
                      <li>• Relații patronat-salariați</li>
                      <li>• Politici sociale</li>
                      <li>• Educație și pregătire</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-6 bg-yellow-50 dark:bg-gray-800">
                    <h3 className="text-lg font-bold mb-4 text-yellow-600">Factori Psihologici</h3>
                    <ul className="space-y-2">
                      <li>• Motivarea angajaților</li>
                      <li>• Climatul de muncă</li>
                      <li>• Satisfacție profesională</li>
                      <li>• Leadership eficient</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-6 bg-red-50 dark:bg-gray-800">
                    <h3 className="text-lg font-bold mb-4 text-red-600">Factori Internaționali</h3>
                    <ul className="space-y-2">
                      <li>• Competiția globală</li>
                      <li>• Standarde de calitate</li>
                      <li>• Comerț internațional</li>
                      <li>• Transfer de tehnologie</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-6 bg-indigo-50 dark:bg-gray-800">
                    <h3 className="text-lg font-bold mb-4 text-indigo-600">Factori Economici</h3>
                    <ul className="space-y-2">
                      <li>• Investiții în capital</li>
                      <li>• Eficiență economică</li>
                      <li>• Optimizarea costurilor</li>
                      <li>• Politici fiscale</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Cum Crește Productivitatea?</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Productivitatea Muncii crește când:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Există un climat favorabil</li>
                        <li>• Motivarea muncii este ridicată</li>
                        <li>• Condiții optime de muncă</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-600 mb-2">Productivitatea Pământului crește când:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Îmbunătățirea substanțelor nutritive</li>
                        <li>• Rotația culturilor</li>
                        <li>• Achiziționarea utilajelor performante</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Productivitatea Capitalului crește când:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Combinare optimă a factorilor</li>
                        <li>• Substituirea eficientă</li>
                        <li>• Obținerea efectului economic dorit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="concepte" className="animate-fade-in">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Concepte Cheie</CardTitle>
                  <CardDescription>Termeni și noțiuni fundamentale</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="eficienta-ec">
                      <AccordionTrigger className="text-lg">Eficiența Economică</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-base leading-relaxed">
                          Eficiența economică se obține când <strong>costul producerii este cel mai mic posibil</strong> 
                          pentru o cantitate dată de produse. Este esenţială pentru <strong>minimizarea cheltuielilor</strong> 
                          și maximizarea profitului.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="eficienta-teh">
                      <AccordionTrigger className="text-lg">Eficiența Tehnică</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-base leading-relaxed">
                          Eficiența tehnică se obține când se produce <strong>cât mai mult cu un anumit set de resurse</strong>. 
                          Se concentrează pe <strong>maximizarea output-ului</strong> și op timizarea proceselor de producție.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="rata-ms">
                      <AccordionTrigger className="text-lg">Rata Marginală de Substituire</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-base leading-relaxed">
                          Este un concept central în alegerea combinației optime de factori pentru a fi eficient. 
                          Arată <strong>cu cât trebuie redus un factor de producție</strong> pentru a compensa creșterea 
                          cu o unitate a altui factor, menținând același nivel al producției.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="legea-rand">
                      <AccordionTrigger className="text-lg">Legea Randamentelor Desc rescătoare</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <p className="text-base leading-relaxed">
                            După un anumit punct, <strong>fiecare muncitor suplimentar aduce tot mai puțin la producție</strong>. 
                            De aceea, analiza marginală este esențială pentru eficiență.
                          </p>
                          <div className="bg-red-50 dark:bg-gray-800 p-4 rounded">
                            <p className="font-semibold mb-2">Exemplu:</p>
                            <p className="text-sm">
                              Dacă adăugi mai mulți muncitori, vei obține mereu mai multă producție - <strong>FALS!</strong> 
                              La un moment dat, adăugarea unui nou muncitor ar putea chiar să scadă producția totală 
                              din cauza supraaglomerării, a problemelor de coordonare sau a limitării altor factori.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="concurenta">
                      <AccordionTrigger className="text-lg">Concurența și Eficiența</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-base leading-relaxed">
                          Într-o economie concurențială, <strong>doar firmele eficiente supraviețuiesc</strong>. 
                          Celelalte dispar din piață. Aceasta creează o presiune constantă pentru îmbunătățirea 
                          productivității și optimizarea resurselor.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="interdependenta">
                      <AccordionTrigger className="text-lg">Interdependența între Factori</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-base leading-relaxed">
                          Productivitatea parțială (a unui singur factor) și globală (a tuturor factorilor) 
                          trebuie <strong>analizate împreună</strong> pentru a optimiza resursele. Productivitatea marginală 
                          arată când adăugarea de resurse încetează să mai fie profitabilă.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl">De ce este Importantă Productivitatea?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-3">Pentru Producător:</h4>
                      <ul className="space-y-2">
                        <li>✓ Este "motorul" succesului și al supraviețuirii pe piață</li>
                        <li>✓ Permite vânzarea la prețuri mai bune decât concurența</li>
                        <li>✓ Oferă posibilitatea de a investi mai mult în inovație</li>
                        <li>✓ Mai puțină risipă de materiale și timp</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">Pentru Consumator:</h4>
                      <ul className="space-y-2">
                        <li>✓ Impact direct asupra vieții de zi cu zi</li>
                        <li>✓ Produsele ajung mai repede pe piață</li>
                        <li>✓ Variante mai diverse de produse</li>
                        <li>✓ Prețuri mai mici datorită eficienței</li>
                      </ul>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-purple-600 mb-3">La Nivel Macro (Economie Națională):</h4>
                      <ul className="space-y-2">
                        <li>✓ Creșterea productivității unei țări duce la <strong>salarii mai mari</strong></li>
                        <li>✓ O economie mai robustă și competitivă</li>
                        <li>✓ Oferă consumatorilor o <strong>putere de cumpărare mai mare</strong></li>
                        <li>✓ Contribuie la prosperitatea și dezvoltarea economică</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-between">
          <Button asChild variant="outline">
            <Link href="/">Înapoi la Meniu</Link>
          </Button>
          <Button asChild>
            <Link href="/calculator">Calculator Interactiv →</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
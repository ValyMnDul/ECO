'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Calculator as CalcIcon, TrendingUp } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function CalculatorPage() {
  // Productivitate Globala
  const [globalQ, setGlobalQ] = useState('')
  const [globalL, setGlobalL] = useState('')
  const [globalP, setGlobalP] = useState('')
  const [globalK, setGlobalK] = useState('')
  const [globalResult, setGlobalResult] = useState(null)

  // Productivitate Munca
  const [muncaQ, setMuncaQ] = useState('')
  const [muncaL, setMuncaL] = useState('')
  const [muncaResult, setMuncaResult] = useState(null)

  // Productivitate Capital
  const [capitalQ, setCapitalQ] = useState('')
  const [capitalK, setCapitalK] = useState('')
  const [capitalResult, setCapitalResult] = useState(null)

  // Productivitate Pamant
  const [pamantQ, setPamantQ] = useState('')
  const [pamantP, setPamantP] = useState('')
  const [pamantResult, setPamantResult] = useState(null)

  // Productivitate Marginala
  const [margDeltaQ, setMargDeltaQ] = useState('')
  const [margDeltaF, setMargDeltaF] = useState('')
  const [margResult, setMargResult] = useState(null)

  const calculateGlobal = () => {
    const q = parseFloat(globalQ)
    const l = parseFloat(globalL)
    const p = parseFloat(globalP)
    const k = parseFloat(globalK)

    if (isNaN(q) || isNaN(l) || isNaN(p) || isNaN(k)) {
      alert('Te rog introdu valori valide pentru toate câmpurile!')
      return
    }

    const total = l + p + k
    if (total === 0) {
      alert('Suma factorilor nu poate fi 0!')
      return
    }

    const result = q / total
    setGlobalResult({
      value: result.toFixed(4),
      q,
      l,
      p,
      k,
      total
    })
  }

  const calculateMunca = () => {
    const q = parseFloat(muncaQ)
    const l = parseFloat(muncaL)

    if (isNaN(q) || isNaN(l) || l === 0) {
      alert('Te rog introdu valori valide!')
      return
    }

    const result = q / l
    setMuncaResult({
      value: result.toFixed(4),
      q,
      l
    })
  }

  const calculateCapital = () => {
    const q = parseFloat(capitalQ)
    const k = parseFloat(capitalK)

    if (isNaN(q) || isNaN(k) || k === 0) {
      alert('Te rog introdu valori valide!')
      return
    }

    const result = q / k
    setCapitalResult({
      value: result.toFixed(4),
      q,
      k
    })
  }

  const calculatePamant = () => {
    const q = parseFloat(pamantQ)
    const p = parseFloat(pamantP)

    if (isNaN(q) || isNaN(p) || p === 0) {
      alert('Te rog introdu valori valide!')
      return
    }

    const result = q / p
    setPamantResult({
      value: result.toFixed(4),
      q,
      p
    })
  }

  const calculateMarginala = () => {
    const dq = parseFloat(margDeltaQ)
    const df = parseFloat(margDeltaF)

    if (isNaN(dq) || isNaN(df) || df === 0) {
      alert('Te rog introdu valori valide!')
      return
    }

    const result = dq / df
    setMargResult({
      value: result.toFixed(4),
      dq,
      df
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" />Acasă</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <CalcIcon className="h-10 w-10 text-purple-600" />
          <h1 className="text-4xl font-bold gradient-text">Calculator Interactiv de Productivitate</h1>
        </div>

        <Alert className="mb-8 bg-blue-50 dark:bg-gray-800 border-blue-200">
          <TrendingUp className="h-4 w-4" />
          <AlertDescription>
            Utilizează acest calculator pentru a determina rapid productivitatea factorilor de producție. 
            Introdu valorile și apasă butonul "Calculează" pentru a obține rezultatul.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="globala" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            <TabsTrigger value="globala">Globală</TabsTrigger>
            <TabsTrigger value="munca">Munca</TabsTrigger>
            <TabsTrigger value="capital">Capital</TabsTrigger>
            <TabsTrigger value="pamant">Pământ</TabsTrigger>
            <TabsTrigger value="marginala">Marginală</TabsTrigger>
          </TabsList>

          {/* Productivitatea Globala */}
          <TabsContent value="globala" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Productivitatea Globală</CardTitle>
                <CardDescription>Calculează productivitatea tuturor factorilor combinați</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
                      <p className="font-semibold mb-2">Formula:</p>
                      <p className="text-center text-2xl font-mono">W = Q / (L + P + K)</p>
                    </div>

                    <div>
                      <Label htmlFor="globalQ">Producția Obținută (Q)</Label>
                      <Input 
                        id="globalQ" 
                        type="number" 
                        placeholder="Ex: 1000" 
                        value={globalQ}
                        onChange={(e) => setGlobalQ(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Cantitatea totală produsă (unități sau valoare)</p>
                    </div>

                    <div>
                      <Label htmlFor="globalL">Munca (L)</Label>
                      <Input 
                        id="globalL" 
                        type="number" 
                        placeholder="Ex: 50" 
                        value={globalL}
                        onChange={(e) => setGlobalL(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Număr de lucrători sau ore de muncă</p>
                    </div>

                    <div>
                      <Label htmlFor="globalP">Pământul (P)</Label>
                      <Input 
                        id="globalP" 
                        type="number" 
                        placeholder="Ex: 10" 
                        value={globalP}
                        onChange={(e) => setGlobalP(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Suprafață agricolă sau teren (hectare, m²)</p>
                    </div>

                    <div>
                      <Label htmlFor="globalK">Capitalul (K)</Label>
                      <Input 
                        id="globalK" 
                        type="number" 
                        placeholder="Ex: 200" 
                        value={globalK}
                        onChange={(e) => setGlobalK(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Valoarea echipamentelor și utilajelor</p>
                    </div>

                    <Button onClick={calculateGlobal} className="w-full" size="lg">
                      <CalcIcon className="mr-2 h-4 w-4" />
                      Calculează Productivitatea Globală
                    </Button>
                  </div>

                  <div>
                    {globalResult ? (
                      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg h-full">
                        <h3 className="text-xl font-bold mb-4 text-green-600">Rezultat:</h3>
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg mb-4">
                          <p className="text-4xl font-bold text-center text-blue-600">
                            {globalResult.value}
                          </p>
                          <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                            unități de producție / unitate de factor
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-900 p-4 rounded">
                            <p className="font-semibold mb-2">Interpretare:</p>
                            <p className="text-sm">
                              Pentru fiecare unitate de factor de producție utilizat, 
                              se obțin <strong>{globalResult.value}</strong> unități de producție.
                            </p>
                          </div>

                          <div className="bg-white dark:bg-gray-900 p-4 rounded">
                            <p className="font-semibold mb-2">Calcul detaliat:</p>
                            <p className="text-sm font-mono">
                              W = {globalResult.q} / ({globalResult.l} + {globalResult.p} + {globalResult.k})
                            </p>
                            <p className="text-sm font-mono mt-1">
                              W = {globalResult.q} / {globalResult.total} = {globalResult.value}
                            </p>
                          </div>

                          <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded">
                            <p className="text-sm">
                              <strong>Sfat:</strong> O productivitate mai mare înseamnă utilizare mai eficientă a resurselor!
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg h-full flex items-center justify-center">
                        <p className="text-gray-500 text-center">
                          Completează câmpurile și apasă "Calculează" pentru a vedea rezultatul
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Productivitatea Muncii */}
          <TabsContent value="munca" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Productivitatea Muncii</CardTitle>
                <CardDescription>Calculează eficiența factorului muncă</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
                      <p className="font-semibold mb-2">Formula:</p>
                      <p className="text-center text-2xl font-mono">W<sub>L</sub> = Q / L</p>
                    </div>

                    <div>
                      <Label htmlFor="muncaQ">Producția Obținută (Q)</Label>
                      <Input 
                        id="muncaQ" 
                        type="number" 
                        placeholder="Ex: 1000" 
                        value={muncaQ}
                        onChange={(e) => setMuncaQ(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Cantitatea totală produsă</p>
                    </div>

                    <div>
                      <Label htmlFor="muncaL">Factorul Muncă (L)</Label>
                      <Input 
                        id="muncaL" 
                        type="number" 
                        placeholder="Ex: 50" 
                        value={muncaL}
                        onChange={(e) => setMuncaL(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Număr de lucrători sau ore de muncă</p>
                    </div>

                    <Button onClick={calculateMunca} className="w-full" size="lg">
                      <CalcIcon className="mr-2 h-4 w-4" />
                      Calculează Productivitatea Muncii
                    </Button>

                    <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                      <p className="text-sm">
                        <strong>Exemplu:</strong> Dacă 10 lucrători produc 500 de unități, 
                        productivitatea muncii este 500/10 = 50 unități per lucrător.
                      </p>
                    </div>
                  </div>

                  <div>
                    {muncaResult ? (
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg h-full">
                        <h3 className="text-xl font-bold mb-4 text-green-600">Rezultat:</h3>
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg mb-4">
                          <p className="text-4xl font-bold text-center text-green-600">
                            {muncaResult.value}
                          </p>
                          <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                            unități / lucrător (sau oră de muncă)
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-900 p-4 rounded">
                            <p className="font-semibold mb-2">Interpretare:</p>
                            <p className="text-sm">
                              Fiecare lucrător produce în medie <strong>{muncaResult.value}</strong> unități.
                            </p>
                          </div>

                          <div className="bg-white dark:bg-gray-900 p-4 rounded">
                            <p className="font-semibold mb-2">Calcul:</p>
                            <p className="text-sm font-mono">
                              W<sub>L</sub> = {muncaResult.q} / {muncaResult.l} = {muncaResult.value}
                            </p>
                          </div>

                          <div className="bg-green-50 dark:bg-gray-800 p-4 rounded">
                            <p className="text-sm">
                              <strong>Cum crește:</strong> Motivare, calificare, condiții optime de muncă
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg h-full flex items-center justify-center">
                        <p className="text-gray-500 text-center">
                          Completează câmpurile pentru calculul productivității muncii
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Productivitatea Capitalului */}
          <TabsContent value="capital" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Productivitatea Capitalului</CardTitle>
                <CardDescription>Calculează eficiența investițiilor în echipamente și utilaje</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-yellow-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
                      <p className="font-semibold mb-2">Formula:</p>
                      <p className="text-center text-2xl font-mono">W<sub>K</sub> = Q / K</p>
                    </div>

                    <div>
                      <Label htmlFor="capitalQ">Producția Obținută (Q)</Label>
                      <Input 
                        id="capitalQ" 
                        type="number" 
                        placeholder="Ex: 5000" 
                        value={capitalQ}
                        onChange={(e) => setCapitalQ(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Cantitatea totală produsă</p>
                    </div>

                    <div>
                      <Label htmlFor="capitalK">Factorul Capital (K)</Label>
                      <Input 
                        id="capitalK" 
                        type="number" 
                        placeholder="Ex: 1000" 
                        value={capitalK}
                        onChange={(e) => setCapitalK(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Valoarea echipamentelor, utilajelor sau investiției</p>
                    </div>

                    <Button onClick={calculateCapital} className="w-full" size="lg">
                      <CalcIcon className="mr-2 h-4 w-4" />
                      Calculează Productivitatea Capitalului
                    </Button>

                    <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                      <p className="text-sm">
                        <strong>Exemplu:</strong> Dacă investești 10.000 lei în echipamente și produci 
                        bunuri în valoare de 50.000 lei, productivitatea capitalului este 5.
                      </p>
                    </div>
                  </div>

                  <div>
                    {capitalResult ? (
                      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg h-full">
                        <h3 className="text-xl font-bold mb-4 text-yellow-600">Rezultat:</h3>
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg mb-4">
                          <p className="text-4xl font-bold text-center text-yellow-600">
                            {capitalResult.value}
                          </p>
                          <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                            unități / unitate de capital
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-900 p-4 rounded">
                            <p className="font-semibold mb-2">Interpretare:</p>
                            <p className="text-sm">
                              Pentru fiecare unitate monetară investită în capital, 
                              se obțin <strong>{capitalResult.value}</strong> unități de producție.
                            </p>
                          </div>

                          <div className="bg-white dark:bg-gray-900 p-4 rounded">
                            <p className="font-semibold mb-2">Calcul:</p>
                            <p className="text-sm font-mono">
                              W<sub>K</sub> = {capitalResult.q} / {capitalResult.k} = {capitalResult.value}
                            </p>
                          </div>

                          <div className="bg-yellow-50 dark:bg-gray-800 p-4 rounded">
                            <p className="text-sm">
                              <strong>Cum crește:</strong> Combinare optimă, substituire eficientă a factorilor
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg h-full flex items-center justify-center">
                        <p className="text-gray-500 text-center">
                          Completează câmpurile pentru calculul productivității capitalului
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Productivitatea Pamantului */}
          <TabsContent value="pamant" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Productivitatea Pământului</CardTitle>
                <CardDescription>Calculează randamentul suprafeței agricole sau terenului</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-orange-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
                      <p className="font-semibold mb-2">Formula:</p>
                      <p className="text-center text-2xl font-mono">W<sub>P</sub> = Q / P</p>
                    </div>

                    <div>
                      <Label htmlFor="pamantQ">Producția Obținută (Q)</Label>
                      <Input 
                        id="pamantQ" 
                        type="number" 
                        placeholder="Ex: 3000" 
                        value={pamantQ}
                        onChange={(e) => setPamantQ(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Cantitatea totală produsă (kg, tone, etc.)</p>
                    </div>

                    <div>
                      <Label htmlFor="pamantP">Factorul Pământ (P)</Label>
                      <Input 
                        id="pamantP" 
                        type="number" 
                        placeholder="Ex: 10" 
                        value={pamantP}
                        onChange={(e) => setPamantP(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Suprafața (hectare, m², etc.)</p>
                    </div>

                    <Button onClick={calculatePamant} className="w-full" size="lg">
                      <CalcIcon className="mr-2 h-4 w-4" />
                      Calculează Productivitatea Pământului
                    </Button>

                    <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                      <p className="text-sm">
                        <strong>Exemplu:</strong> Dacă pe 5 hectare de teren obții 2000 kg de grâu, 
                        productivitatea pământului este 400 kg/hectar.
                      </p>
                    </div>
                  </div>

                  <div>
                    {pamantResult ? (
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg h-full">
                        <h3 className="text-xl font-bold mb-4 text-orange-600">Rezultat:</h3>
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg mb-4">
                          <p className="text-4xl font-bold text-center text-orange-600">
                            {pamantResult.value}
                          </p>
                          <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                            unități / unitate de suprafață
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-900 p-4 rounded">
                            <p className="font-semibold mb-2">Interpretare:</p>
                            <p className="text-sm">
                              Fiecare unitate de suprafață produce <strong>{pamantResult.value}</strong> unități.
                            </p>
                          </div>

                          <div className="bg-white dark:bg-gray-900 p-4 rounded">
                            <p className="font-semibold mb-2">Calcul:</p>
                            <p className="text-sm font-mono">
                              W<sub>P</sub> = {pamantResult.q} / {pamantResult.p} = {pamantResult.value}
                            </p>
                          </div>

                          <div className="bg-orange-50 dark:bg-gray-800 p-4 rounded">
                            <p className="text-sm">
                              <strong>Cum crește:</strong> Îmbunătățirea substanțelor nutritive, rotația culturilor, utilaje performante
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg h-full flex items-center justify-center">
                        <p className="text-gray-500 text-center">
                          Completează câmpurile pentru calculul productivității pământului
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Productivitatea Marginala */}
          <TabsContent value="marginala" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Productivitatea Marginală</CardTitle>
                <CardDescription>Calculează suplimentul de producție la adăugarea unei unități de factor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
                      <p className="font-semibold mb-2">Formula:</p>
                      <p className="text-center text-2xl font-mono">W<sub>mg</sub> = ΔQ / ΔF</p>
                    </div>

                    <div>
                      <Label htmlFor="margDeltaQ">Variația Producției (ΔQ)</Label>
                      <Input 
                        id="margDeltaQ" 
                        type="number" 
                        placeholder="Ex: 100" 
                        value={margDeltaQ}
                        onChange={(e) => setMargDeltaQ(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Cu cât a crescut producția</p>
                    </div>

                    <div>
                      <Label htmlFor="margDeltaF">Variația Factorului (ΔF)</Label>
                      <Input 
                        id="margDeltaF" 
                        type="number" 
                        placeholder="Ex: 5" 
                        value={margDeltaF}
                        onChange={(e) => setMargDeltaF(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Cu cât a crescut factorul (lucrători, capital, teren)</p>
                    </div>

                    <Button onClick={calculateMarginala} className="w-full" size="lg">
                      <CalcIcon className="mr-2 h-4 w-4" />
                      Calculează Productivitatea Marginală
                    </Button>

                    <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                      <p className="text-sm">
                        <strong>Exemplu:</strong> Dacă angajezi 2 lucrători suplimentari și producția 
                        crește cu 80 de unități, productivitatea marginală este 80/2 = 40 unități per lucrător nou.
                      </p>
                    </div>

                    <div className="bg-red-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
                      <p className="text-sm font-semibold mb-2">⚠️ Legea Randamentelor Descrescătoare:</p>
                      <p className="text-xs">
                        După un anumit punct, productivitatea marginală scade! 
                        Nu poți adăuga la infinit factori și să te aștepți la aceleași rezultate.
                      </p>
                    </div>
                  </div>

                  <div>
                    {margResult ? (
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg h-full">
                        <h3 className="text-xl font-bold mb-4 text-purple-600">Rezultat:</h3>
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg mb-4">
                          <p className="text-4xl font-bold text-center text-purple-600">
                            {margResult.value}
                          </p>
                          <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                            unități de producție / unitate suplimentară de factor
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-900 p-4 rounded">
                            <p className="font-semibold mb-2">Interpretare:</p>
                            <p className="text-sm">
                              Fiecare unitate suplimentară de factor aduce <strong>{margResult.value}</strong> unități 
                              de producție în plus.
                            </p>
                          </div>

                          <div className="bg-white dark:bg-gray-900 p-4 rounded">
                            <p className="font-semibold mb-2">Calcul:</p>
                            <p className="text-sm font-mono">
                              W<sub>mg</sub> = {margResult.dq} / {margResult.df} = {margResult.value}
                            </p>
                          </div>

                          <div className={`p-4 rounded ${
                            parseFloat(margResult.value) > 0 
                              ? 'bg-green-50 dark:bg-gray-800 border-l-4 border-green-500' 
                              : 'bg-red-50 dark:bg-gray-800 border-l-4 border-red-500'
                          }`}>
                            <p className="text-sm">
                              {parseFloat(margResult.value) > 0 ? (
                                <>
                                  <strong>✓ Pozitivă:</strong> Adăugarea de factori este profitabilă
                                </>
                              ) : (
                                <>
                                  <strong>✗ Negativă:</strong> Adăugarea de factori reduce eficiența
                                </>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg h-full flex items-center justify-center">
                        <p className="text-gray-500 text-center">
                          Completează câmpurile pentru calculul productivității marginale
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-between">
          <Button asChild variant="outline">
            <Link href="/scheme">← Scheme Didactice</Link>
          </Button>
          <Button asChild>
            <Link href="/fise">Fișe de Lucru →</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

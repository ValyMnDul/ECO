# Productivitatea Factorilor de Producție

## 📋 Descriere Proiect

Platformă educațională interactivă dedicată concursului național interdisciplinar **"Istorie și Societate în Dimensiune Virtuală"** - Secțiunea Științe Socio-Umane, Pagini Web.

Proiectul prezintă concepte fundamentale despre **productivitatea factorilor de producție** într-o manieră modernă, interactivă și profesională.

---

## 🎯 Structura Proiectului

### **1. Homepage (Pagina Principală)**
- Hero section modern cu gradient backgrounds
- Statistici despre proiect (7 secțiuni, 50+ întrebări)
- Carduri de navigare către toate secțiunile
- Dark mode toggle
- Design responsive

### **2. Teorie** (`/teorie`)
Conținut teoretic organizat în 5 tab-uri:
- **Introducere**: Definiție, formulă generală, importanța productivității
- **Forme de Productivitate**: Globală, Parțială, Medie, Marginală
- **Formule**: Toate formulele de calcul detaliate cu explicații
- **Factori de Influență**: Naturali, Tehnici, Sociali, Psihologici, Internaționali
- **Concepte Cheie**: Eficiență economică/tehnică, rata marginală, legea randamentelor

### **3. Scheme Didactice** (`/scheme`)
Vizualizări grafice interactive:
- Schema generală a productivității (Globală vs Parțială)
- Procesul de calcul (4 pași)
- Factori de influență (diagrame colorate)
- Comparație Productivitate Medie vs Marginală
- Legendă cu simboluri utilizate

### **4. Calculator Interactiv** (`/calculator`)
5 calculatoare pentru:
- **Productivitatea Globală**: W = Q / (L + P + K)
- **Productivitatea Muncii**: W_L = Q / L
- **Productivitatea Capitalului**: W_K = Q / K
- **Productivitatea Pământului**: W_P = Q / P
- **Productivitatea Marginală**: W_mg = ΔQ / ΔF

Fiecare calculator oferă:
- Input validat
- Rezultate instant
- Interpretare detaliată
- Exemple practice

### **5. Fișe de Lucru** (`/fise`)
Exerciții interactive:
- Completare spații libere
- Întrebări cu alegere multiplă
- Exerciții de argumentare
- Bonus - găsește greșeala
- **Scoring automat** cu feedback instant
- Probleme practice cu soluții

### **6. Lecții Online** (`/lectii`)
Resurse educaționale curatorizate:
- Khan Academy, Investopedia, Coursera, edX, MIT OpenCourseWare
- Link-uri către platforme românești
- Teme recomandate pentru aprofundare

### **7. Evaluare** (`/evaluare`)
**Sistem de teste profesional** cu 3 niveluri:

#### **Test 1: Concepte Fundamentale** (Ușor)
- 10 întrebări
- 15 minute
- Focus: Definiții și concepte de bază

#### **Test 2: Formule și Calcule** (Mediu)
- 10 întrebări
- 20 minute
- Focus: Aplicarea formulelor

#### **Test 3: Analiză și Aplicații** (Avansat)
- 15 întrebări
- 25 minute
- Focus: Studii de caz și analiză

**Features anti-fraud:**
- ✅ Validare server-side (toate răspunsurile verificate în backend)
- ✅ Timer activ cu auto-submit
- ✅ Răspunsuri criptate în requests
- ✅ Progress bar în timp real
- ✅ Feedback detaliat după finalizare

### **8. Bibliografie** (`/bibliografie`)
Surse și resurse:
- Manuale școlare
- Articole academice
- Resurse online
- Publicații oficiale
- Materiale PPT utilizate

---

## 🏆 Features pentru Punctaj Maxim

### **Conținut Științific (60 puncte)**
✅ **Corectitudine științifică** (30p): Tot conținutul extras din PPT-uri oficiale
✅ **Coerență structurare** (20p): Informații organizate logic în 7 secțiuni
✅ **Limbaj de specialitate** (10p): Termeni tehnici corecti cu diacritice

### **Realizare Informatică (30 puncte)**

#### **Ușurință în utilizare** (6p):
- Navigație intuitivă
- Butoane clare
- Breadcrumbs

#### **Funcționalitate** (6p):
- Calculator interactiv (5 tipuri)
- Sistem de teste cu backend
- Fișe de lucru interactive
- Dark mode

#### **Complexitate tehnică** (6p):
- Next.js 14 (App Router)
- API Routes pentru validare
- React hooks (useState, useEffect)
- Responsive design
- Real-time feedback
- Timer sistem pentru teste

#### **Aspect estetic** (6p):
- Design modern cu Tailwind CSS
- Gradient backgrounds
- Animații smooth
- Shadcn/ui components
- Color-coded sections
- Consistent design system

#### **Originalitate** (6p):
- Calculator interactiv unic
- Sistem de evaluare cu anti-fraud
- Dark mode toggle
- Scheme didactice interactive
- Progress tracking
- Gamification (badges, scores)

---

## 🚀 Tehnologii Utilizate

- **Framework**: Next.js 14.2.3 (React 18)
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks
- **API**: Next.js API Routes
- **Deployment Ready**: Optimizat pentru producție

---

## 📦 Instalare și Rulare

### **Prerequisite:**
- Node.js 18+ 
- Yarn

### **Pași:**

```bash
# 1. Navighează în directorul proiectului
cd productivitatea-factorilor-de-productie

# 2. Instalează dependențele (DOAR cu yarn, NU npm!)
yarn install

# 3. Pornește aplicația în dev mode
yarn dev

# 4. Deschide în browser
http://localhost:3000
```

### **Build pentru producție:**
```bash
yarn build
yarn start
```

---

## 📁 Structura Fișierelor

```
/app
├── app/
│   ├── layout.js                 # Layout principal cu dark mode
│   ├── page.js                   # Homepage
│   ├── globals.css               # Styles globale
│   ├── teorie/page.js           # Pagina teorie
│   ├── scheme/page.js           # Scheme didactice
│   ├── calculator/page.js       # Calculator interactiv
│   ├── fise/page.js             # Fișe de lucru
│   ├── lectii/page.js           # Lecții online
│   ├── evaluare/page.js         # Sistem de teste
│   ├── bibliografie/page.js     # Bibliografie
│   └── api/
│       └── evaluate/route.js    # API pentru validare teste
├── components/
│   └── ui/                       # Shadcn components
├── lib/
│   └── utils.js                  # Helper functions
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🎨 Design System

### **Culori Principale:**
- **Albastru** (#3B82F6): Teorie, informații
- **Verde** (#10B981): Scheme, succes
- **Violet** (#8B5CF6): Calculator, accent
- **Portocaliu** (#F97316): Fișe de lucru
- **Indigo** (#6366F1): Lecții
- **Roz** (#EC4899): Evaluare

### **Typography:**
- Font: Inter (Google Fonts)
- Headings: Bold, gradient text
- Body: Regular, leading-relaxed

### **Components:**
- Cards cu hover effects
- Smooth animations
- Gradient backgrounds
- Consistent spacing (Tailwind)

---

## ✅ Criteriile Concursului - Checklist

### **Conținut Științific:**
- [x] Corectitudine științifică
- [x] Definiții complete și corecte
- [x] Formule matematice
- [x] Exemple practice
- [x] Scheme și diagrame
- [x] Bibliografie completă

### **Realizare Informatică:**
- [x] Design modern și atractiv
- [x] Navigație intuitivă
- [x] Funcționalități interactive
- [x] Calculator de productivitate
- [x] Sistem de teste cu validare
- [x] Responsive (mobile-friendly)
- [x] Dark mode
- [x] Performanță optimizată

### **Originalitate:**
- [x] Calculator interactiv unic
- [x] Anti-fraud în teste
- [x] Gamification elements
- [x] Design original
- [x] User experience excelent

---

## 🔐 Securitate și Anti-Fraud

### **Măsuri implementate în sistemul de teste:**

1. **Validare Server-Side**
   - Toate răspunsurile verificate în backend
   - Răspunsurile corecte stocate doar pe server
   - Impossible să modifici scorul din frontend

2. **Timer Activ**
   - Countdown vizibil
   - Auto-submit la expirarea timpului
   - Nu poți adăuga timp suplimentar

3. **Progress Tracking**
   - Număr răspunsuri în timp real
   - Nu poți submite test incomplet
   - Validare înainte de trimitere

---

## 📱 Responsive Design

Aplicația este complet responsive:
- **Desktop** (1920px+): Layout cu 3 coloane
- **Tablet** (768px - 1919px): Layout cu 2 coloane
- **Mobile** (<768px): Layout cu 1 coloană

Toate funcționalitățile disponibile pe toate dispozitivele.

---

## 🌙 Dark Mode

Toggle între light/dark mode:
- Salvat în localStorage
- Smooth transition
- Optimizat pentru ambele teme
- Toate culorile adaptate

---

## 📝 Conținut Didactic

**Tot conținutul este extras din materialele oficiale:**
- PPT - Productivitatea Factorilor de Producție
- PPT - Productivitatea Muncii
- Scheme Didactice - Productivitatea
- Fișe de lucru originale

**Cu diacritice corecte în limba română!**

---

## 🎓 Utilizare în Educație

Proiectul poate fi utilizat:
- ✅ În lecții de economie
- ✅ Pentru pregătirea examenelor
- ✅ Ca resursă de autoinstruire
- ✅ În prezentări școlare
- ✅ Pentru concursuri educaționale

---

## 🏅 Puncte Forte

1. **Conținut complet și corect** - extras din surse oficiale
2. **Design profesional** - modern, clean, atractiv
3. **Interactivitate ridicată** - calculator, teste, exerciții
4. **Tehnologie modernă** - Next.js, React, Tailwind
5. **Originalitate** - features unice (calculator, anti-fraud)
6. **User Experience** - intuitiv, rapid, plăcut
7. **Educațional** - perfect pentru învățare

---

## 👨‍💻 Dezvoltare

Proiect dezvoltat pentru concursul național:
**"Istorie și Societate în Dimensiune Virtuală"**

**Secțiunea:** IIA - Științe socio-umane „Pagini Web" (Economie)

**Anul:** 2025

---

## 📄 Licență

Proiect educațional - toate materialele folosite în scop didactic conform reglementărilor privind drepturile de autor pentru învățământ.

---

## 🎉 Succes la Concurs!

**Mult succes! Proiectul este gata 100% pentru concurs! 🏆**

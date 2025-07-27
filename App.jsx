import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { 
  Search, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Eye, 
  Target, 
  Mail, 
  Share2, 
  BarChart3,
  Settings,
  Menu,
  X,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react'
import './App.css'

// Dados de exemplo para os gráficos
const trafficData = [
  { name: 'Jan', visits: 4000, conversions: 240 },
  { name: 'Fev', visits: 3000, conversions: 139 },
  { name: 'Mar', visits: 2000, conversions: 980 },
  { name: 'Abr', visits: 2780, conversions: 390 },
  { name: 'Mai', visits: 1890, conversions: 480 },
  { name: 'Jun', visits: 2390, conversions: 380 },
]

const sourceData = [
  { name: 'Orgânico', value: 45, color: '#2563EB' },
  { name: 'Pago', value: 30, color: '#10B981' },
  { name: 'Social', value: 15, color: '#F59E0B' },
  { name: 'Direto', value: 10, color: '#EF4444' },
]

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">SiteFlow Boost</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Configurações
            </Button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out`}>
          <div className="flex items-center justify-between p-4 lg:hidden">
            <span className="text-lg font-semibold">Menu</span>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="mt-8 px-4">
            <div className="space-y-2">
              <Button variant="secondary" className="w-full justify-start">
                <BarChart3 className="h-4 w-4 mr-3" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Search className="h-4 w-4 mr-3" />
                SEO
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Share2 className="h-4 w-4 mr-3" />
                Social Media
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Target className="h-4 w-4 mr-3" />
                Anúncios
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Mail className="h-4 w-4 mr-3" />
                E-mail
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="h-4 w-4 mr-3" />
                Parcerias
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Métricas principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tráfego Total</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,430</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% em relação ao mês anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversões</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,207</div>
                <p className="text-xs text-muted-foreground">
                  +15.3% em relação ao mês anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Receita</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 45,231</div>
                <p className="text-xs text-muted-foreground">
                  +25.7% em relação ao mês anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">9.7%</div>
                <p className="text-xs text-muted-foreground">
                  +2.1% em relação ao mês anterior
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Gráficos e análises */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Tráfego e Conversões</CardTitle>
                <CardDescription>Evolução mensal do tráfego e conversões</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="visits" stroke="#2563EB" strokeWidth={2} />
                    <Line type="monotone" dataKey="conversions" stroke="#10B981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fontes de Tráfego</CardTitle>
                <CardDescription>Distribuição do tráfego por origem</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={sourceData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {sourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Tarefas recomendadas */}
          <Card>
            <CardHeader>
              <CardTitle>Tarefas Recomendadas</CardTitle>
              <CardDescription>Ações prioritárias para melhorar seu tráfego</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div className="flex-1">
                    <p className="font-medium">Otimizar meta tags da página inicial</p>
                    <p className="text-sm text-muted-foreground">Impacto: Alto • Esforço: Baixo</p>
                  </div>
                  <Badge variant="secondary">Concluído</Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                  <div className="flex-1">
                    <p className="font-medium">Criar campanha no Google Ads</p>
                    <p className="text-sm text-muted-foreground">Impacto: Alto • Esforço: Médio</p>
                  </div>
                  <Badge variant="outline">Em andamento</Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Info className="h-5 w-5 text-blue-500" />
                  <div className="flex-1">
                    <p className="font-medium">Publicar 3 posts no Instagram</p>
                    <p className="text-sm text-muted-foreground">Impacto: Médio • Esforço: Baixo</p>
                  </div>
                  <Badge variant="outline">Pendente</Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Info className="h-5 w-5 text-blue-500" />
                  <div className="flex-1">
                    <p className="font-medium">Configurar sequência de e-mail marketing</p>
                    <p className="text-sm text-muted-foreground">Impacto: Alto • Esforço: Alto</p>
                  </div>
                  <Badge variant="outline">Pendente</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

function OnboardingFlow() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    siteUrl: '',
    niche: '',
    objective: ''
  })

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    // Aqui seria feita a integração com o backend
    console.log('Dados do formulário:', formData)
    // Redirecionar para o dashboard
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-2xl">SiteFlow Boost</CardTitle>
          <CardDescription>Configure sua estratégia de tráfego em 3 passos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <Progress value={(step / 3) * 100} className="w-full" />
            <p className="text-sm text-muted-foreground mt-2">Passo {step} de 3</p>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="siteUrl">URL do seu site</Label>
                <Input
                  id="siteUrl"
                  type="url"
                  placeholder="https://seusite.com"
                  value={formData.siteUrl}
                  onChange={(e) => setFormData({...formData, siteUrl: e.target.value})}
                />
              </div>
              <Button onClick={handleNext} className="w-full" disabled={!formData.siteUrl}>
                Próximo
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="niche">Qual é o seu nicho?</Label>
                <Select value={formData.niche} onValueChange={(value) => setFormData({...formData, niche: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione seu nicho" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="saude">Saúde e Bem-estar</SelectItem>
                    <SelectItem value="educacao">Educação</SelectItem>
                    <SelectItem value="tecnologia">Tecnologia</SelectItem>
                    <SelectItem value="servicos">Serviços</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={handleBack} className="flex-1">
                  Voltar
                </Button>
                <Button onClick={handleNext} className="flex-1" disabled={!formData.niche}>
                  Próximo
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="objective">Qual é o seu objetivo principal?</Label>
                <Select value={formData.objective} onValueChange={(value) => setFormData({...formData, objective: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione seu objetivo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="leads">Gerar Leads</SelectItem>
                    <SelectItem value="vendas">Aumentar Vendas</SelectItem>
                    <SelectItem value="visitas">Aumentar Visitas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={handleBack} className="flex-1">
                  Voltar
                </Button>
                <Button onClick={handleSubmit} className="flex-1" disabled={!formData.objective}>
                  Começar
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function App() {
  const [isOnboarded, setIsOnboarded] = useState(true) // Mudando para true para mostrar o dashboard

  return (
    <Router>
      <Routes>
        <Route path="/" element={isOnboarded ? <Dashboard /> : <OnboardingFlow />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboarding" element={<OnboardingFlow />} />
      </Routes>
    </Router>
  )
}

export default App


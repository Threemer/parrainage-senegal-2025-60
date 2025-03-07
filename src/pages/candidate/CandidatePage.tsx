
import React from 'react';
import { ArrowLeft, Bookmark, CheckCircle, Users, PieChart, Download, File } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CandidatePage = () => {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Espace Candidat</h1>
          <p className="text-sm text-muted-foreground">Tableau de bord de suivi des parrainages</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total des parrainages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12,437</div>
            <div className="flex items-center justify-between mt-1">
              <p className="text-xs text-muted-foreground">Objectif: 52,300</p>
              <p className="text-xs font-medium text-primary">23.8%</p>
            </div>
            <Progress value={23.8} className="h-1.5 mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Parrainages validés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">11,586</div>
            <div className="flex items-center gap-1.5 mt-1">
              <CheckCircle className="h-3.5 w-3.5 text-green-500" />
              <p className="text-xs text-muted-foreground">93.2% de validation</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Parrainages en attente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">812</div>
            <div className="flex items-center gap-1.5 mt-1">
              <Bookmark className="h-3.5 w-3.5 text-yellow-500" />
              <p className="text-xs text-muted-foreground">En cours de vérification</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Parrainages par jour</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">286</div>
            <div className="flex items-center gap-1.5 mt-1">
              <Users className="h-3.5 w-3.5 text-blue-500" />
              <p className="text-xs text-muted-foreground">Moyenne des 7 derniers jours</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="regional">Distribution régionale</TabsTrigger>
          <TabsTrigger value="export">Rapports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Progression des parrainages</CardTitle>
              <CardDescription>Évolution du nombre de parrainages collectés</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center border border-dashed rounded-md">
                <PieChart className="h-12 w-12 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Graphique de progression</span>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Statistiques démographiques</CardTitle>
                <CardDescription>Répartition par âge et genre</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Genre</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                        <div className="bg-blue-500 h-full" style={{ width: '58%' }}></div>
                      </div>
                      <span className="text-sm font-medium w-8">58%</span>
                    </div>
                    <div className="flex text-sm text-muted-foreground justify-between">
                      <span>Hommes: 7,213 (58%)</span>
                      <span>Femmes: 5,224 (42%)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-6">
                    <span className="text-sm">Tranches d'âge</span>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs">18-25 ans</span>
                        <div className="w-full max-w-[60%] mx-4 bg-muted rounded-full h-2 overflow-hidden">
                          <div className="bg-green-500 h-full" style={{ width: '15%' }}></div>
                        </div>
                        <span className="text-xs font-medium">15%</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs">26-35 ans</span>
                        <div className="w-full max-w-[60%] mx-4 bg-muted rounded-full h-2 overflow-hidden">
                          <div className="bg-green-500 h-full" style={{ width: '32%' }}></div>
                        </div>
                        <span className="text-xs font-medium">32%</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs">36-50 ans</span>
                        <div className="w-full max-w-[60%] mx-4 bg-muted rounded-full h-2 overflow-hidden">
                          <div className="bg-green-500 h-full" style={{ width: '28%' }}></div>
                        </div>
                        <span className="text-xs font-medium">28%</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs">51-65 ans</span>
                        <div className="w-full max-w-[60%] mx-4 bg-muted rounded-full h-2 overflow-hidden">
                          <div className="bg-green-500 h-full" style={{ width: '18%' }}></div>
                        </div>
                        <span className="text-xs font-medium">18%</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs">+65 ans</span>
                        <div className="w-full max-w-[60%] mx-4 bg-muted rounded-full h-2 overflow-hidden">
                          <div className="bg-green-500 h-full" style={{ width: '7%' }}></div>
                        </div>
                        <span className="text-xs font-medium">7%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Statut des vérifications</CardTitle>
                <CardDescription>État actuel du processus de validation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Vérification des identités</span>
                      <span className="text-xs font-medium">96%</span>
                    </div>
                    <Progress value={96} className="h-2" />
                    <p className="text-xs text-muted-foreground">11,940 électeurs vérifiés sur 12,437</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Validation des parrainages</span>
                      <span className="text-xs font-medium">93%</span>
                    </div>
                    <Progress value={93} className="h-2" />
                    <p className="text-xs text-muted-foreground">11,586 parrainages validés sur 12,437</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Détection des doublons</span>
                      <span className="text-xs font-medium">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                    <p className="text-xs text-muted-foreground">39 doublons détectés et écartés</p>
                  </div>
                  
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm">
                    <p className="font-medium text-yellow-800">Important</p>
                    <p className="text-yellow-700 text-xs mt-1">Les parrainages sont vérifiés dans un délai de 24 à 48 heures après leur enregistrement.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="regional" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Répartition par région</CardTitle>
              <CardDescription>Distribution géographique des parrainages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Placeholder for actual data and visualizations */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dakar</span>
                  <div className="w-full max-w-[70%] mx-4 bg-muted rounded-full h-2.5 overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '42%' }}></div>
                  </div>
                  <span className="text-sm font-medium">5,224</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Thiès</span>
                  <div className="w-full max-w-[70%] mx-4 bg-muted rounded-full h-2.5 overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '16%' }}></div>
                  </div>
                  <span className="text-sm font-medium">1,990</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Saint-Louis</span>
                  <div className="w-full max-w-[70%] mx-4 bg-muted rounded-full h-2.5 overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '8%' }}></div>
                  </div>
                  <span className="text-sm font-medium">995</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Diourbel</span>
                  <div className="w-full max-w-[70%] mx-4 bg-muted rounded-full h-2.5 overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '7%' }}></div>
                  </div>
                  <span className="text-sm font-medium">870</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Ziguinchor</span>
                  <div className="w-full max-w-[70%] mx-4 bg-muted rounded-full h-2.5 overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '5%' }}></div>
                  </div>
                  <span className="text-sm font-medium">622</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Kaolack</span>
                  <div className="w-full max-w-[70%] mx-4 bg-muted rounded-full h-2.5 overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '4.5%' }}></div>
                  </div>
                  <span className="text-sm font-medium">560</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Autres régions</span>
                  <div className="w-full max-w-[70%] mx-4 bg-muted rounded-full h-2.5 overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '17.5%' }}></div>
                  </div>
                  <span className="text-sm font-medium">2,176</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <PieChart className="mr-2 h-4 w-4" />
                Afficher la carte détaillée
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="export" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Rapports disponibles</CardTitle>
              <CardDescription>Téléchargez les rapports et documents relatifs à vos parrainages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center gap-3">
                  <File className="h-8 w-8 text-blue-500" />
                  <div>
                    <h3 className="font-medium">Rapport de parrainages hebdomadaire</h3>
                    <p className="text-xs text-muted-foreground">22 Mai 2024 • PDF • 2.4 MB</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center gap-3">
                  <File className="h-8 w-8 text-green-500" />
                  <div>
                    <h3 className="font-medium">Liste des parrains validés</h3>
                    <p className="text-xs text-muted-foreground">25 Mai 2024 • Excel • 4.8 MB</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center gap-3">
                  <File className="h-8 w-8 text-purple-500" />
                  <div>
                    <h3 className="font-medium">Statistiques démographiques</h3>
                    <p className="text-xs text-muted-foreground">20 Mai 2024 • PDF • 1.7 MB</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center gap-3">
                  <File className="h-8 w-8 text-orange-500" />
                  <div>
                    <h3 className="font-medium">Rapport de distribution géographique</h3>
                    <p className="text-xs text-muted-foreground">18 Mai 2024 • PDF • 3.5 MB</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Générer un nouveau rapport</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CandidatePage;

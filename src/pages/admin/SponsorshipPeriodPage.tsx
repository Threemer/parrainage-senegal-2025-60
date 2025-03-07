
import React from 'react';
import { ArrowLeft, Calendar, Clock, Check, Hourglass, AlertTriangle, Users, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const SponsorshipPeriodPage = () => {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/admin">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Période de parrainage</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Statut actuel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <div className="text-lg font-bold">Actif</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">La période de parrainage est en cours</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Date de début</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div className="text-lg font-bold">15 Mai 2024</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Il y a 10 jours</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Date de fin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div className="text-lg font-bold">15 Juillet 2024</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Dans 51 jours</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Progression</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">16%</div>
            <Progress value={16} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-1">10 jours sur 62 au total</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Configuration de la période</CardTitle>
            <CardDescription>Définissez les paramètres de la période de parrainage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <Label className="text-base">Activer la période de parrainage</Label>
                <p className="text-sm text-muted-foreground mt-1">Permet aux électeurs de parrainer des candidats</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start-date">Date de début</Label>
                <div className="p-2 border rounded-md flex items-center">
                  <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                  <span>15/05/2024</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="end-date">Date de fin</Label>
                <div className="p-2 border rounded-md flex items-center">
                  <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                  <span>15/07/2024</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start-time">Heure de début</Label>
                <div className="p-2 border rounded-md flex items-center">
                  <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                  <span>00:00</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="end-time">Heure de fin</Label>
                <div className="p-2 border rounded-md flex items-center">
                  <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                  <span>23:59</span>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <Label>Limite de parrainages par candidat</Label>
              <div className="p-2 border rounded-md flex items-center">
                <Users className="h-4 w-4 text-muted-foreground mr-2" />
                <span>52,300 parrainages (0.7% des électeurs)</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Réinitialiser</Button>
            <Button>Enregistrer les modifications</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Statut actuel des parrainages</CardTitle>
            <CardDescription>Vue d'ensemble de l'avancement des parrainages</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Hourglass className="h-5 w-5 text-primary" />
                  <span className="font-medium">Temps restant</span>
                </div>
                <span className="font-bold">51 jours</span>
              </div>
              <Progress value={16} className="h-2" />
            </div>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Total des parrainages</span>
                </div>
                <span className="font-bold">32,486</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Parrainages validés</span>
                </div>
                <span className="font-bold">30,210</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span>Parrainages en attente</span>
                </div>
                <span className="font-bold">1,822</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <span>Parrainages rejetés</span>
                </div>
                <span className="font-bold">454</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Exporter les statistiques
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SponsorshipPeriodPage;

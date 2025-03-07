
import React from 'react';
import { ArrowLeft, Upload, Download, FilePlus, AlertCircle, CheckCircle, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const ElectoralFilePage = () => {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/admin">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Gestion du fichier électoral</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total des électeurs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">7,315,458</div>
            <p className="text-xs text-muted-foreground mt-1">Électeurs enregistrés</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Électeurs validés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">7,290,312</div>
            <p className="text-xs text-muted-foreground mt-1">99.7% du fichier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Anomalies détectées</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">25,146</div>
            <p className="text-xs text-muted-foreground mt-1">0.3% du fichier</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Importer un fichier électoral</CardTitle>
            <CardDescription>Chargez le fichier électoral officiel au format CSV ou Excel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center border-2 border-dashed rounded-lg p-12 border-muted-foreground/25">
              <div className="text-center space-y-4">
                <Upload className="h-10 w-10 text-muted-foreground mx-auto" />
                <div>
                  <p className="text-sm font-medium">Déposez votre fichier ici ou</p>
                  <p className="text-xs text-muted-foreground">Format accepté: CSV, XLSX (max. 100MB)</p>
                </div>
                <Button>
                  <FilePlus className="mr-2 h-4 w-4" />
                  Parcourir les fichiers
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Statut du fichier actuel</CardTitle>
            <CardDescription>Dernière mise à jour: 15 Mai 2024</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Validation des données</span>
                <span className="text-sm text-muted-foreground">100%</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Détection des doublons</span>
                <span className="text-sm text-muted-foreground">100%</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Vérification des identités</span>
                <span className="text-sm text-muted-foreground">100%</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>

            <Separator />
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Fichier validé et prêt à être utilisé</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              <Server className="mr-2 h-4 w-4" />
              Voir les détails
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Exporter les statistiques
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Anomalies détectées</CardTitle>
          <CardDescription>Liste des problèmes identifiés dans le fichier électoral</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-yellow-800">Doublons d'identifiants</h4>
                <p className="text-xs text-yellow-700 mt-1">15,782 électeurs ont des numéros d'identification similaires ou identiques</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 border border-red-200">
              <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-red-800">Identités non valides</h4>
                <p className="text-xs text-red-700 mt-1">9,364 électeurs possèdent des informations d'identité incomplètes ou incorrectes</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-blue-800">Données manquantes</h4>
                <p className="text-xs text-blue-700 mt-1">2,578 électeurs manquent d'informations essentielles (adresse, bureau de vote)</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Résoudre les anomalies</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ElectoralFilePage;

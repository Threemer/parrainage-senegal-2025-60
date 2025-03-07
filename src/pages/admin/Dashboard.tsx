
import React from 'react';
import { 
  Users, FileText, Check, Calendar, BarChart3, PieChart, TrendingUp, Landmark 
} from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import StatCard from '@/components/ui-custom/StatCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Mock data
const mockStats = {
  totalVoters: '6,245,782',
  totalCandidates: 24,
  totalSponsorships: '345,129',
  requiredSponsors: '0.8%',
  sponsorshipProgress: 72,
  topCandidates: [
    { name: 'Amadou Diop', party: 'PDS', count: 67452, percent: 20 },
    { name: 'Mariama Sow', party: 'APR', count: 58235, percent: 17 },
    { name: 'Ibrahim Ndiaye', party: 'PS', count: 45128, percent: 13 },
    { name: 'Fatou Diagne', party: 'BBY', count: 38520, percent: 11 },
  ],
  daysRemaining: 45,
}

const AdminDashboard = () => {
  return (
    <MainLayout title="Tableau de bord">
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Électeurs inscrits" 
            value={mockStats.totalVoters} 
            icon={<Users />} 
            description="Fichier électoral validé"
          />
          <StatCard 
            title="Candidats enregistrés" 
            value={mockStats.totalCandidates} 
            icon={<Landmark />} 
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard 
            title="Parrainages soumis" 
            value={mockStats.totalSponsorships} 
            icon={<Check />} 
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard 
            title="Jours restants" 
            value={mockStats.daysRemaining} 
            icon={<Calendar />} 
            description="Fin du parrainage"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Évolution des parrainages
              </CardTitle>
              <CardDescription>
                Visualisation des parrainages sur les 30 derniers jours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full flex items-center justify-center">
                <p className="text-muted-foreground">Graphique d'évolution des parrainages</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Répartition des parrainages
              </CardTitle>
              <CardDescription>
                Top candidats par nombre de parrainages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockStats.topCandidates.map((candidate, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">{candidate.name}</span>
                        <span className="text-sm text-muted-foreground ml-2">({candidate.party})</span>
                      </div>
                      <span className="text-sm font-medium">{candidate.count.toLocaleString()}</span>
                    </div>
                    <Progress value={candidate.percent} className="h-2" />
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/admin/candidates">
                    Voir tous les candidats
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Statut du fichier électoral
              </CardTitle>
              <CardDescription>
                Informations sur l'importation du fichier électoral
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Date d'importation</span>
                    <span className="font-medium">15/01/2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Taille du fichier</span>
                    <span className="font-medium">156 MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Checksum SHA256</span>
                    <span className="font-medium text-xs truncate max-w-[200px]">
                      2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Statut</span>
                    <span className="text-green-600 font-medium">Validé</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/admin/electoral-file">
                    Gérer le fichier électoral
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Parrainage par région
              </CardTitle>
              <CardDescription>
                Répartition géographique des parrainages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48 w-full flex items-center justify-center">
                <p className="text-muted-foreground">Carte de répartition des parrainages</p>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Voir les statistiques détaillées
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;

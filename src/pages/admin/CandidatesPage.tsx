
import React from 'react';
import { ArrowLeft, UserPlus, Search, Filter, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const candidats = [
  { id: 1, nom: 'Diallo', prenom: 'Mamadou', parti: 'Parti du Progrès', statut: 'En attente', parrainages: 0 },
  { id: 2, nom: 'Sow', prenom: 'Aminata', parti: 'Mouvement pour la Justice', statut: 'Approuvé', parrainages: 1250 },
  { id: 3, nom: 'Ndiaye', prenom: 'Ibrahim', parti: 'Alliance Nationale', statut: 'Approuvé', parrainages: 980 },
  { id: 4, nom: 'Faye', prenom: 'Fatou', parti: 'Union pour la Démocratie', statut: 'En attente', parrainages: 0 },
  { id: 5, nom: 'Sarr', prenom: 'Ousmane', parti: 'Coalition Citoyenne', statut: 'Rejeté', parrainages: 0 },
];

const CandidatesPage = () => {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/admin">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Gestion des candidats</h1>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Ajouter un candidat
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total des candidats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{candidats.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Candidats enregistrés</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Candidats approuvés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{candidats.filter(c => c.statut === 'Approuvé').length}</div>
            <p className="text-xs text-muted-foreground mt-1">Candidats validés</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Candidats en attente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{candidats.filter(c => c.statut === 'En attente').length}</div>
            <p className="text-xs text-muted-foreground mt-1">Validation en cours</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Rechercher un candidat..." className="pl-8" />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 h-4 w-4" />
          Filtrer
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nom</TableHead>
                <TableHead>Prénom</TableHead>
                <TableHead>Parti politique</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Parrainages</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidats.map((candidat) => (
                <TableRow key={candidat.id}>
                  <TableCell className="font-medium">{candidat.id}</TableCell>
                  <TableCell>{candidat.nom}</TableCell>
                  <TableCell>{candidat.prenom}</TableCell>
                  <TableCell>{candidat.parti}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      candidat.statut === 'Approuvé' 
                        ? 'bg-green-100 text-green-800' 
                        : candidat.statut === 'Rejeté' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {candidat.statut}
                    </span>
                  </TableCell>
                  <TableCell>{candidat.parrainages}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CandidatesPage;

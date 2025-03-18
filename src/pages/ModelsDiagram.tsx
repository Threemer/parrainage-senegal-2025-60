
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MainLayout from '@/components/layout/MainLayout';
import ClassDiagram from '@/models/class-diagram';
import UseCaseDiagram from '@/models/use-case-diagram';
import SequenceDiagram from '@/models/sequence-diagram';

const ModelsDiagram = () => {
  return (
    <MainLayout title="Modèles UML">
      <div className="space-y-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold text-senegal-green mb-4">
            Modèles conceptuels UML
          </h1>
          <p className="text-muted-foreground">
            Ces diagrammes représentent l'architecture conceptuelle du système de parrainage électoral.
            Les modèles UML montrent les relations entre les entités, les cas d'utilisation et les séquences d'interactions.
          </p>
        </div>

        <Tabs defaultValue="class" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="class" className="text-lg py-3">Diagramme de Classes</TabsTrigger>
            <TabsTrigger value="usecase" className="text-lg py-3">Cas d'Utilisation</TabsTrigger>
            <TabsTrigger value="sequence" className="text-lg py-3">Diagramme de Séquence</TabsTrigger>
          </TabsList>
          <TabsContent value="class">
            <ClassDiagram />
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Description du diagramme de classes</h3>
              <p>Ce diagramme représente les entités principales du système et leurs relations :</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><span className="text-senegal-green font-medium">User</span> : Entité de base pour l'authentification</li>
                <li><span className="text-senegal-yellow font-medium">Voter</span> : Représente un électeur inscrit</li>
                <li><span className="text-senegal-red font-medium">Candidate</span> : Représente un candidat à l'élection</li>
                <li><span className="text-senegal-green font-medium">ElectoralFile</span> : Gère le fichier électoral</li>
                <li><span className="text-senegal-yellow font-medium">SponsorshipPeriod</span> : Définit la période de parrainage</li>
                <li><span className="text-senegal-red font-medium">Sponsorship</span> : Représente l'acte de parrainage</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="usecase">
            <UseCaseDiagram />
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Description du diagramme de cas d'utilisation</h3>
              <p>Ce diagramme montre les interactions possibles entre les acteurs et le système :</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><span className="text-senegal-green font-medium">Administrateur</span> : Gère le système, le fichier électoral et valide les candidats</li>
                <li><span className="text-senegal-yellow font-medium">Électeur</span> : S'inscrit, parraine des candidats et vérifie son statut</li>
                <li><span className="text-senegal-red font-medium">Candidat</span> : S'inscrit comme candidat et suit ses parrainages</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="sequence">
            <SequenceDiagram />
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Description du diagramme de séquence</h3>
              <p>Ce diagramme illustre le flux d'interactions entre les acteurs et le système lors du processus de parrainage :</p>
              <ol className="list-decimal list-inside mt-2 space-y-1">
                <li>L'électeur s'inscrit sur la plateforme</li>
                <li>Le système vérifie et confirme l'inscription</li>
                <li>L'électeur parraine un candidat</li>
                <li>Le système valide et enregistre le parrainage</li>
                <li>Le candidat reçoit la notification et consulte ses parrainages</li>
                <li>Le système fournit des statistiques sur les parrainages</li>
                <li>Le candidat confirme sa candidature une fois le seuil atteint</li>
              </ol>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ModelsDiagram;

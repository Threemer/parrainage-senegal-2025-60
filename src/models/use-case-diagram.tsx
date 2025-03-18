
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UseCaseDiagram = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Diagramme de Cas d'Utilisation UML</CardTitle>
      </CardHeader>
      <CardContent className="overflow-auto">
        <div className="bg-white p-4 rounded-lg border border-gray-200 min-w-[900px] h-[600px] relative">
          {/* System Boundary */}
          <div className="border-2 border-gray-400 rounded-lg p-4 absolute top-[50px] left-[200px] w-[600px] h-[500px]">
            <div className="absolute -top-3 left-4 bg-white px-2 font-bold text-lg">
              Système de Parrainage Électoral
            </div>

            {/* Use Cases */}
            {/* Admin Use Cases */}
            <div className="border border-senegal-green rounded-pill bg-gray-50 px-4 py-2 absolute top-[30px] left-[80px] text-center">
              Gérer le fichier électoral
            </div>
            <div className="border border-senegal-green rounded-pill bg-gray-50 px-4 py-2 absolute top-[80px] left-[300px] text-center">
              Valider les candidats
            </div>
            <div className="border border-senegal-green rounded-pill bg-gray-50 px-4 py-2 absolute top-[130px] left-[120px] text-center">
              Définir la période de parrainage
            </div>
            <div className="border border-senegal-green rounded-pill bg-gray-50 px-4 py-2 absolute top-[180px] left-[350px] text-center">
              Consulter les statistiques
            </div>

            {/* Voter Use Cases */}
            <div className="border border-senegal-yellow rounded-pill bg-gray-50 px-4 py-2 absolute top-[240px] left-[80px] text-center">
              S'inscrire comme électeur
            </div>
            <div className="border border-senegal-yellow rounded-pill bg-gray-50 px-4 py-2 absolute top-[290px] left-[300px] text-center">
              Parrainer un candidat
            </div>
            <div className="border border-senegal-yellow rounded-pill bg-gray-50 px-4 py-2 absolute top-[340px] left-[120px] text-center">
              Vérifier statut de parrainage
            </div>

            {/* Candidate Use Cases */}
            <div className="border border-senegal-red rounded-pill bg-gray-50 px-4 py-2 absolute top-[400px] left-[350px] text-center">
              S'inscrire comme candidat
            </div>
            <div className="border border-senegal-red rounded-pill bg-gray-50 px-4 py-2 absolute top-[450px] left-[150px] text-center">
              Consulter ses parrainages
            </div>
          </div>

          {/* Actors */}
          <div className="absolute top-[120px] left-[50px] text-center">
            <svg width="60" height="100" viewBox="0 0 60 100">
              <circle cx="30" cy="20" r="15" stroke="#00853F" strokeWidth="2" fill="white" />
              <line x1="30" y1="35" x2="30" y2="70" stroke="#00853F" strokeWidth="2" />
              <line x1="10" y1="45" x2="50" y2="45" stroke="#00853F" strokeWidth="2" />
              <line x1="30" y1="70" x2="10" y2="90" stroke="#00853F" strokeWidth="2" />
              <line x1="30" y1="70" x2="50" y2="90" stroke="#00853F" strokeWidth="2" />
            </svg>
            <div className="font-bold text-senegal-green">Administrateur</div>
          </div>

          <div className="absolute top-[280px] left-[50px] text-center">
            <svg width="60" height="100" viewBox="0 0 60 100">
              <circle cx="30" cy="20" r="15" stroke="#FFCD00" strokeWidth="2" fill="white" />
              <line x1="30" y1="35" x2="30" y2="70" stroke="#FFCD00" strokeWidth="2" />
              <line x1="10" y1="45" x2="50" y2="45" stroke="#FFCD00" strokeWidth="2" />
              <line x1="30" y1="70" x2="10" y2="90" stroke="#FFCD00" strokeWidth="2" />
              <line x1="30" y1="70" x2="50" y2="90" stroke="#FFCD00" strokeWidth="2" />
            </svg>
            <div className="font-bold text-senegal-yellow">Électeur</div>
          </div>

          <div className="absolute top-[420px] left-[50px] text-center">
            <svg width="60" height="100" viewBox="0 0 60 100">
              <circle cx="30" cy="20" r="15" stroke="#E31B23" strokeWidth="2" fill="white" />
              <line x1="30" y1="35" x2="30" y2="70" stroke="#E31B23" strokeWidth="2" />
              <line x1="10" y1="45" x2="50" y2="45" stroke="#E31B23" strokeWidth="2" />
              <line x1="30" y1="70" x2="10" y2="90" stroke="#E31B23" strokeWidth="2" />
              <line x1="30" y1="70" x2="50" y2="90" stroke="#E31B23" strokeWidth="2" />
            </svg>
            <div className="font-bold text-senegal-red">Candidat</div>
          </div>

          {/* Relationships - Lines connecting actors to use cases */}
          <svg width="100%" height="600" className="absolute top-0 left-0 pointer-events-none">
            {/* Admin Connections */}
            <line x1="110" y1="135" x2="280" y2="90" stroke="#00853F" strokeWidth="1.5" />
            <line x1="110" y1="135" x2="300" y2="140" stroke="#00853F" strokeWidth="1.5" />
            <line x1="110" y1="135" x2="220" y2="190" stroke="#00853F" strokeWidth="1.5" />
            <line x1="110" y1="135" x2="350" y2="240" stroke="#00853F" strokeWidth="1.5" />

            {/* Voter Connections */}
            <line x1="110" y1="295" x2="180" y2="300" stroke="#FFCD00" strokeWidth="1.5" />
            <line x1="110" y1="295" x2="300" y2="350" stroke="#FFCD00" strokeWidth="1.5" />
            <line x1="110" y1="295" x2="220" y2="400" stroke="#FFCD00" strokeWidth="1.5" />

            {/* Candidate Connections */}
            <line x1="110" y1="435" x2="350" y2="460" stroke="#E31B23" strokeWidth="1.5" />
            <line x1="110" y1="435" x2="250" y2="510" stroke="#E31B23" strokeWidth="1.5" />
          </svg>
        </div>
      </CardContent>
    </Card>
  );
};

export default UseCaseDiagram;

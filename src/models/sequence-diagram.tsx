
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SequenceDiagram = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Diagramme de Séquence UML</CardTitle>
      </CardHeader>
      <CardContent className="overflow-auto">
        <div className="bg-white p-4 rounded-lg border border-gray-200 min-w-[1000px]">
          {/* Lifeline Headers */}
          <div className="flex justify-around mb-4">
            <div className="border border-gray-300 rounded p-2 w-32 text-center bg-senegal-yellow">
              Électeur
            </div>
            <div className="border border-gray-300 rounded p-2 w-32 text-center bg-senegal-green">
              Système
            </div>
            <div className="border border-gray-300 rounded p-2 w-32 text-center bg-senegal-red">
              Candidat
            </div>
          </div>

          {/* Lifelines */}
          <div className="flex justify-around relative" style={{ height: '600px' }}>
            {/* Vertical Lines */}
            <div className="absolute border-l border-dashed border-gray-400" style={{ left: '15%', height: '600px', top: '0' }}></div>
            <div className="absolute border-l border-dashed border-gray-400" style={{ left: '50%', height: '600px', top: '0' }}></div>
            <div className="absolute border-l border-dashed border-gray-400" style={{ left: '85%', height: '600px', top: '0' }}></div>

            {/* Step 1: Voter registration */}
            <div className="absolute" style={{ left: '15%', top: '50px', transform: 'translateX(-50%)' }}>
              <div className="w-20 h-8 bg-senegal-yellow rounded flex items-center justify-center" style={{ marginLeft: '10px' }}>
                <span className="text-xs">Inscription</span>
              </div>
            </div>
            <svg className="absolute" style={{ left: '15%', top: '60px', width: '35%', height: '50px' }}>
              <line x1="0" y1="20" x2="100%" y2="20" stroke="#FFCD00" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="50%" y="15" textAnchor="middle" fontSize="12" fill="#000">1. Soumet formulaire</text>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#FFCD00" />
                </marker>
              </defs>
            </svg>

            {/* Step 2: System Verification */}
            <div className="absolute" style={{ left: '50%', top: '110px', transform: 'translateX(-50%)' }}>
              <div className="w-24 h-12 bg-senegal-green rounded flex items-center justify-center" style={{ marginLeft: '12px' }}>
                <span className="text-xs text-white text-center">Vérification des données</span>
              </div>
            </div>

            {/* Step 3: System Confirmation */}
            <svg className="absolute" style={{ left: '50%', right: '15%', top: '160px', width: '35%', height: '50px' }}>
              <line x1="0" y1="20" x2="100%" y2="20" stroke="#00853F" strokeWidth="2" markerEnd="url(#arrowhead2)" />
              <text x="50%" y="15" textAnchor="middle" fontSize="12" fill="#000">2. Confirme inscription</text>
              <defs>
                <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#00853F" />
                </marker>
              </defs>
            </svg>

            {/* Step 4: Sponsorship Request */}
            <div className="absolute" style={{ left: '15%', top: '220px', transform: 'translateX(-50%)' }}>
              <div className="w-20 h-8 bg-senegal-yellow rounded flex items-center justify-center" style={{ marginLeft: '10px' }}>
                <span className="text-xs">Parrainage</span>
              </div>
            </div>
            <svg className="absolute" style={{ left: '15%', top: '230px', width: '35%', height: '50px' }}>
              <line x1="0" y1="20" x2="100%" y2="20" stroke="#FFCD00" strokeWidth="2" markerEnd="url(#arrowhead3)" />
              <text x="50%" y="15" textAnchor="middle" fontSize="12" fill="#000">3. Parraine candidat</text>
              <defs>
                <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#FFCD00" />
                </marker>
              </defs>
            </svg>

            {/* Step 5: System Processing */}
            <div className="absolute" style={{ left: '50%', top: '280px', transform: 'translateX(-50%)' }}>
              <div className="w-24 h-12 bg-senegal-green rounded flex items-center justify-center" style={{ marginLeft: '12px' }}>
                <span className="text-xs text-white text-center">Validation du parrainage</span>
              </div>
            </div>
            <svg className="absolute" style={{ left: '50%', top: '300px', width: '35%', height: '50px' }}>
              <line x1="0" y1="20" x2="100%" y2="20" stroke="#00853F" strokeWidth="2" markerEnd="url(#arrowhead4)" />
              <text x="50%" y="15" textAnchor="middle" fontSize="12" fill="#000">4. Enregistre parrainage</text>
              <defs>
                <marker id="arrowhead4" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#00853F" />
                </marker>
              </defs>
            </svg>

            {/* Step 6: Candidate Receipt */}
            <div className="absolute" style={{ left: '85%', top: '350px', transform: 'translateX(-50%)' }}>
              <div className="w-24 h-12 bg-senegal-red rounded flex items-center justify-center" style={{ marginLeft: '12px' }}>
                <span className="text-xs text-white text-center">Réception du parrainage</span>
              </div>
            </div>

            {/* Step 7: Candidate Verification */}
            <svg className="absolute" style={{ left: '85%', top: '370px', width: '35%', height: '50px', transform: 'scaleX(-1)' }}>
              <line x1="0" y1="20" x2="100%" y2="20" stroke="#E31B23" strokeWidth="2" markerEnd="url(#arrowhead5)" />
              <text x="50%" y="15" textAnchor="middle" fontSize="12" fill="#000" transform="scale(-1, 1)" style={{ transform: 'scale(-1, 1)', transformOrigin: 'center' }}>5. Consulte parrainages</text>
              <defs>
                <marker id="arrowhead5" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#E31B23" />
                </marker>
              </defs>
            </svg>

            {/* Step 8: System Response */}
            <div className="absolute" style={{ left: '50%', top: '420px', transform: 'translateX(-50%)' }}>
              <div className="w-24 h-12 bg-senegal-green rounded flex items-center justify-center" style={{ marginLeft: '12px' }}>
                <span className="text-xs text-white text-center">Génération des statistiques</span>
              </div>
            </div>
            <svg className="absolute" style={{ left: '50%', top: '440px', width: '35%', height: '50px' }}>
              <line x1="0" y1="20" x2="100%" y2="20" stroke="#00853F" strokeWidth="2" markerEnd="url(#arrowhead6)" />
              <text x="50%" y="15" textAnchor="middle" fontSize="12" fill="#000">6. Fournit statistiques</text>
              <defs>
                <marker id="arrowhead6" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#00853F" />
                </marker>
              </defs>
            </svg>

            {/* Step 9: Candidate Final Check */}
            <div className="absolute" style={{ left: '85%', top: '490px', transform: 'translateX(-50%)' }}>
              <div className="w-24 h-12 bg-senegal-red rounded flex items-center justify-center" style={{ marginLeft: '12px' }}>
                <span className="text-xs text-white text-center">Confirmation candidature</span>
              </div>
            </div>
            <svg className="absolute" style={{ left: '50%', top: '510px', width: '35%', height: '50px', transform: 'scaleX(-1)' }}>
              <line x1="0" y1="20" x2="100%" y2="20" stroke="#E31B23" strokeWidth="2" markerEnd="url(#arrowhead7)" />
              <text x="50%" y="15" textAnchor="middle" fontSize="12" fill="#000" transform="scale(-1, 1)" style={{ transform: 'scale(-1, 1)', transformOrigin: 'center' }}>7. Valide candidature</text>
              <defs>
                <marker id="arrowhead7" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#E31B23" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SequenceDiagram;

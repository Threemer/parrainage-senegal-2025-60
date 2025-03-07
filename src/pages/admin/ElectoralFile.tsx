
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import FileUpload from '@/components/ui-custom/FileUpload';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertTriangle, CheckCircle2, FileText, Search, UploadCloud } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { FileValidationResult } from '@/lib/types';

// Mock data
const mockValidationErrors = [
  { line: 245, message: "Format de carte d'identité invalide", data: "AB123456" },
  { line: 367, message: "Caractères non autorisés dans le nom", data: "N'diaye" },
  { line: 892, message: "Date de naissance incorrecte", data: "31/02/1980" },
  { line: 1024, message: "Numéro d'électeur en doublon", data: "E78902453" },
  { line: 1568, message: "Bureau de vote inexistant", data: "BV5467" },
];

const mockUploadHistory = [
  { 
    id: 1, 
    date: "15/01/2024 14:32", 
    user: "admin@dge.sn", 
    status: "validated", 
    checksum: "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824", 
    filename: "electeurs_2025.csv",
    errors: 0 
  },
  { 
    id: 2, 
    date: "10/01/2024 09:15", 
    user: "tech@dge.sn", 
    status: "rejected", 
    checksum: "a6b8df2d79b8c47f3a13d7a4720615f7c3b138b8261ab9b36286441ac5b1f13c", 
    filename: "liste_electeurs.csv",
    errors: 56 
  },
  { 
    id: 3, 
    date: "05/01/2024 16:47", 
    user: "admin@dge.sn", 
    status: "rejected", 
    checksum: "45f639aa33f5bc3af688e112e50133ba8bef72e42bccdab59fd68e9d49486287", 
    filename: "electeurs_2025_v1.csv",
    errors: 127 
  },
];

const ElectoralFile = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [validationResult, setValidationResult] = useState<FileValidationResult | null>(null);
  const [activeTab, setActiveTab] = useState('upload');
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleFileUpload = async (file: File, checksum: string) => {
    console.log('Handling file upload:', file.name, 'with checksum:', checksum);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Simulate validation result
    const mockResult: FileValidationResult = {
      isValid: false,
      errors: mockValidationErrors
    };
    
    setValidationResult(mockResult);
    setActiveTab('validation');
    
    return {
      success: true,
      message: "Fichier importé, validation requise"
    };
  };

  const handleValidateFile = () => {
    // Toggle confirmation modal
    setIsConfirmationOpen(true);
  };

  const confirmValidation = () => {
    // In a real app, this would call the backend to finalize the import
    console.log('File validated and imported to permanent storage');
    setIsConfirmationOpen(false);
    setValidationResult(prev => prev ? { ...prev, isValid: true } : null);
  };

  const filteredErrors = validationResult?.errors?.filter(error => 
    error.message.toLowerCase().includes(searchTerm.toLowerCase()) || 
    error.data?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    error.line.toString().includes(searchTerm)
  );

  return (
    <MainLayout title="Gestion du fichier électoral">
      <Tabs 
        defaultValue="upload" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="upload" className="flex gap-2 items-center">
              <UploadCloud className="h-4 w-4" />
              <span>Importation</span>
            </TabsTrigger>
            <TabsTrigger value="validation" className="flex gap-2 items-center">
              <CheckCircle2 className="h-4 w-4" />
              <span>Validation</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex gap-2 items-center">
              <FileText className="h-4 w-4" />
              <span>Historique</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="upload" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Importation du fichier électoral</CardTitle>
              <CardDescription>
                Importez le fichier CSV contenant la liste des électeurs. Assurez-vous que le fichier est au format UTF-8.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FileUpload 
                onFileSelect={handleFileUpload} 
                accept=".csv"
                maxSize={200}
                showChecksumInput={true}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Instructions</CardTitle>
              <CardDescription>
                Consignes pour la préparation et l'importation du fichier électoral
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Format du fichier</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Fichier CSV avec séparateur point-virgule (;)</li>
                  <li>Encodage UTF-8 sans BOM</li>
                  <li>Une ligne par électeur</li>
                  <li>Pas d'en-tête</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Structure des données</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Colonne 1: Numéro de carte d'identité nationale</li>
                  <li>Colonne 2: Numéro d'électeur</li>
                  <li>Colonne 3: Nom de famille</li>
                  <li>Colonne 4: Prénom(s)</li>
                  <li>Colonne 5: Date de naissance (format: JJ/MM/AAAA)</li>
                  <li>Colonne 6: Lieu de naissance</li>
                  <li>Colonne 7: Sexe (M/F)</li>
                  <li>Colonne 8: Bureau de vote</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Calcul du checksum SHA256</h3>
                <p className="text-sm text-muted-foreground">
                  Pour calculer le checksum SHA256 du fichier, utilisez la commande suivante:
                </p>
                <pre className="bg-muted p-2 rounded text-xs mt-1 overflow-x-auto">
                  sha256sum fichier_electoral.csv
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="validation" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Validation du fichier</CardTitle>
                  <CardDescription>
                    Vérifiez les erreurs détectées lors de l'analyse du fichier
                  </CardDescription>
                </div>
                {validationResult && (
                  <Badge variant={validationResult.isValid ? "default" : "destructive"} className="ml-auto">
                    {validationResult.isValid ? "Validé" : `${validationResult.errors?.length || 0} erreurs`}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {validationResult ? (
                <>
                  {validationResult.isValid ? (
                    <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-md">
                      <CheckCircle2 className="h-5 w-5" />
                      <p>Le fichier est valide et a été importé avec succès.</p>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 p-4 bg-amber-50 text-amber-700 rounded-md">
                        <AlertTriangle className="h-5 w-5" />
                        <p>
                          Le fichier contient {validationResult.errors?.length} erreurs qui doivent être corrigées avant validation.
                        </p>
                      </div>
                      
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            placeholder="Rechercher dans les erreurs..."
                            className="pl-8"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                        <Button variant="outline">Exporter les erreurs</Button>
                      </div>
                      
                      <div className="border rounded-md">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[100px]">Ligne</TableHead>
                              <TableHead>Message d'erreur</TableHead>
                              <TableHead>Données</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {filteredErrors && filteredErrors.length > 0 ? (
                              filteredErrors.map((error, index) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">{error.line}</TableCell>
                                  <TableCell>{error.message}</TableCell>
                                  <TableCell className="font-mono text-sm">{error.data}</TableCell>
                                </TableRow>
                              ))
                            ) : (
                              <TableRow>
                                <TableCell colSpan={3} className="text-center py-4 text-muted-foreground">
                                  {searchTerm ? "Aucun résultat trouvé" : "Aucune erreur détectée"}
                                </TableCell>
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                      </div>
                      
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setActiveTab('upload')}>
                          Annuler l'importation
                        </Button>
                        <Button onClick={handleValidateFile} disabled={validationResult.errors && validationResult.errors.length > 0}>
                          Valider le fichier
                        </Button>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Aucun fichier en attente de validation</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setActiveTab('upload')}
                  >
                    Importer un fichier
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Historique des importations</CardTitle>
              <CardDescription>
                Liste des tentatives d'importation du fichier électoral
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Utilisateur</TableHead>
                      <TableHead>Fichier</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead className="text-right">Erreurs</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUploadHistory.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.user}</TableCell>
                        <TableCell className="font-mono text-xs">{item.filename}</TableCell>
                        <TableCell>
                          <Badge variant={item.status === 'validated' ? 'default' : 'destructive'}>
                            {item.status === 'validated' ? 'Validé' : 'Rejeté'}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{item.errors}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Modal for confirmation would go here - using simple JS alert for this example */}
      {isConfirmationOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-2">Confirmer la validation</h3>
            <p className="text-muted-foreground mb-4">
              Cette action est irréversible. Le fichier électoral sera validé et transféré en base de données persistante.
              Aucune autre importation ne sera possible après cette étape.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsConfirmationOpen(false)}>
                Annuler
              </Button>
              <Button onClick={confirmValidation}>
                Confirmer la validation
              </Button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default ElectoralFile;

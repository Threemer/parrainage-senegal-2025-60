
import React from 'react';
import { ArrowLeft, CheckCircle, User, Mail, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const RegisterPage = () => {
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4 md:px-0 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Inscription des électeurs</h1>
      </div>

      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Vérifiez votre identité</CardTitle>
          <CardDescription>Entrez vos informations pour vérifier votre éligibilité au parrainage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nin">Numéro d'identification nationale</Label>
                <Input id="nin" placeholder="Entrez votre NIN" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="voter-id">Numéro de carte d'électeur</Label>
                <Input id="voter-id" placeholder="Entrez votre numéro de carte" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom de famille</Label>
                <Input id="name" placeholder="Entrez votre nom" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prenom">Prénom</Label>
                <Input id="prenom" placeholder="Entrez votre prénom" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dob">Date de naissance</Label>
                <Input id="dob" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="region">Région de vote</Label>
                <select id="region" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Sélectionnez votre région</option>
                  <option value="Dakar">Dakar</option>
                  <option value="Thiès">Thiès</option>
                  <option value="Saint-Louis">Saint-Louis</option>
                  <option value="Diourbel">Diourbel</option>
                  <option value="Ziguinchor">Ziguinchor</option>
                  <option value="Fatick">Fatick</option>
                  <option value="Kaffrine">Kaffrine</option>
                  <option value="Sédhiou">Sédhiou</option>
                  <option value="Matam">Matam</option>
                  <option value="Kédougou">Kédougou</option>
                  <option value="Kolda">Kolda</option>
                  <option value="Tambacounda">Tambacounda</option>
                  <option value="Kaolack">Kaolack</option>
                  <option value="Louga">Louga</option>
                </select>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="email">Adresse email</Label>
              <Input id="email" type="email" placeholder="votre.email@exemple.com" />
              <p className="text-xs text-muted-foreground">Nous vous enverrons un code de vérification à cette adresse</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tel">Numéro de téléphone</Label>
              <Input id="tel" type="tel" placeholder="+221 XX XXX XX XX" />
              <p className="text-xs text-muted-foreground">Pour la vérification par SMS et les notifications importantes</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Vérifier mon identité</Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Comment ça marche ?</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">1</div>
              <div>
                <h3 className="font-medium">Vérification d'identité</h3>
                <p className="text-sm text-muted-foreground">Nous vérifions vos informations dans le fichier électoral</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">2</div>
              <div>
                <h3 className="font-medium">Création de compte</h3>
                <p className="text-sm text-muted-foreground">Définissez votre mot de passe et complétez votre profil</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">3</div>
              <div>
                <h3 className="font-medium">Parrainage</h3>
                <p className="text-sm text-muted-foreground">Choisissez et parrainez le candidat de votre choix</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>Sécurité et confidentialité</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h3 className="font-medium">Identification sécurisée</h3>
                <p className="text-sm text-muted-foreground">Vérification à double facteur pour garantir votre identité</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h3 className="font-medium">Notifications</h3>
                <p className="text-sm text-muted-foreground">Vous êtes informé à chaque étape du processus</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h3 className="font-medium">Anti-fraude</h3>
                <p className="text-sm text-muted-foreground">Système avancé pour prévenir les parrainages multiples</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;

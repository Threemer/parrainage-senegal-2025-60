
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, FileText, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Gestion des électeurs',
    description: 'Importation et validation du fichier électoral en toute sécurité.',
    icon: <FileText className="h-10 w-10 text-primary" />,
    link: '/admin/electoral-file'
  },
  {
    title: 'Enregistrement des candidats',
    description: 'Saisie et contrôle des informations des candidats.',
    icon: <Users className="h-10 w-10 text-primary" />,
    link: '/admin/candidates'
  },
  {
    title: 'Période de parrainage',
    description: 'Configuration et contrôle de la période de parrainage.',
    icon: <Calendar className="h-10 w-10 text-primary" />,
    link: '/admin/sponsorship-period'
  },
  {
    title: 'Sécurité et transparence',
    description: 'Authentification sécurisée et validation des parrainages.',
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    link: '/voter/register'
  },
];

// Update how we create the MotionCard to use the newer API
const MotionCard = motion(Card);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-20 md:py-32 px-4">
        <div className="container max-w-6xl mx-auto text-center space-y-8">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Plateforme de Gestion des Parrainages
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Simplifiez et sécurisez le processus de parrainage pour les élections présidentielles du Sénégal 2025.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="h-12 px-6">
              <Link to="/admin">
                Administration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-6">
              <Link to="/voter/register">
                Espace électeur
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-accent">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Fonctionnalités principales</h2>
            <p className="text-muted-foreground mt-2">Découvrez les possibilités de notre plateforme</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <MotionCard 
                key={index}
                className="h-full hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/80">{feature.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link to={feature.link}>
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Processus simplifié</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary flex-center text-white font-bold text-lg">1</div>
              <h3 className="text-xl font-semibold">Importation</h3>
              <p className="text-muted-foreground">Importez et validez le fichier électoral avec vérification de sécurité</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary flex-center text-white font-bold text-lg">2</div>
              <h3 className="text-xl font-semibold">Configuration</h3>
              <p className="text-muted-foreground">Enregistrez les candidats et définissez la période de parrainage</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary flex-center text-white font-bold text-lg">3</div>
              <h3 className="text-xl font-semibold">Parrainage</h3>
              <p className="text-muted-foreground">Permettez aux électeurs de s'inscrire et parrainer en toute sécurité</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card text-card-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Accédez dès maintenant à notre plateforme pour moderniser et sécuriser le processus de parrainage électoral.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/admin">Accès administrateur</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/candidate">Espace candidat</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2024 Parrainage Sénégal 2025. Tous droits réservés.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/about" className="text-muted-foreground hover:text-foreground">À propos</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground">Confidentialité</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, FileText, Users, CalendarClock, LayoutDashboard, LogOut, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useApp } from '@/context/AppContext';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
  backLink?: string;
}

const MainLayout = ({ children, title, showBackButton = false, backLink = '/' }: MainLayoutProps) => {
  const { user, isAuthenticated } = useApp();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const adminNavItems = [
    { label: 'Tableau de bord', path: '/admin', icon: <LayoutDashboard className="h-5 w-5" /> },
    { label: 'Fichier électoral', path: '/admin/electoral-file', icon: <FileText className="h-5 w-5" /> },
    { label: 'Candidats', path: '/admin/candidates', icon: <Users className="h-5 w-5" /> },
    { label: 'Période de parrainage', path: '/admin/sponsorship-period', icon: <CalendarClock className="h-5 w-5" /> },
  ];

  const candidateNavItems = [
    { label: 'Tableau de bord', path: '/candidate', icon: <LayoutDashboard className="h-5 w-5" /> },
  ];

  const renderNavItems = () => {
    if (!isAuthenticated) return null;
    const items = user?.role === 'admin' ? adminNavItems : candidateNavItems;

    return (
      <div className="space-y-1 py-2">
        {items.map((item) => (
          <Link key={item.path} to={item.path}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2 text-left px-3 py-6",
                location.pathname === item.path && "bg-accent text-accent-foreground"
              )}
              onClick={() => setOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Button>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                  <div className="flex flex-col gap-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Menu</h3>
                        <p className="text-sm text-muted-foreground">Navigation</p>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                    {renderNavItems()}
                  </div>
                </SheetContent>
              </Sheet>
            )}
            
            {showBackButton ? (
              <Button variant="ghost" size="icon" asChild>
                <Link to={backLink}>
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Retour</span>
                </Link>
              </Button>
            ) : (
              <div className="hidden md:flex">
                <Link to="/" className="flex items-center space-x-2">
                  <span className="font-bold text-lg">Parrainage Sénégal 2025</span>
                </Link>
              </div>
            )}
            
            {title && (
              <div className="flex items-center gap-1 md:ml-4">
                <h1 className="text-lg font-semibold">{title}</h1>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <Button variant="ghost" size="sm">
                <LogOut className="mr-2 h-4 w-4" />
                Déconnexion
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <Button asChild variant="ghost" size="sm">
                  <Link to="/login">Connexion</Link>
                </Button>
                <Button asChild variant="default" size="sm">
                  <Link to="/register">Inscription</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>
      
      <div className="flex flex-1">
        {isAuthenticated && (
          <aside className="hidden w-[240px] flex-shrink-0 border-r md:flex flex-col">
            <nav className="flex-1 overflow-y-auto py-6 px-3">
              {renderNavItems()}
            </nav>
          </aside>
        )}
        
        <main className="flex-1 overflow-y-auto">
          <div className="container py-6">
            <div className="scale-in">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

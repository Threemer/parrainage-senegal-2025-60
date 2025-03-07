
import React, { useState } from 'react';
import { Upload, File, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils';

interface FileUploadProps {
  onFileSelect: (file: File, checksum: string) => Promise<{ success: boolean; message: string }>;
  accept?: string;
  maxSize?: number; // in MB
  showChecksumInput?: boolean;
}

const FileUpload = ({ 
  onFileSelect, 
  accept = ".csv", 
  maxSize = 10,
  showChecksumInput = true
}: FileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [checksum, setChecksum] = useState<string>('');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      handleFiles(files);
    }
  };

  const handleFiles = (files: FileList) => {
    setError(null);
    setSuccess(null);
    
    if (files.length === 0) return;
    
    const selectedFile = files[0];
    
    // Check file type
    const fileType = selectedFile.name.split('.').pop()?.toLowerCase();
    if (!accept.includes(fileType || '')) {
      setError(`Type de fichier non accepté. Veuillez choisir ${accept}`);
      return;
    }
    
    // Check file size
    if (selectedFile.size > maxSize * 1024 * 1024) {
      setError(`Le fichier est trop volumineux. Taille maximale: ${maxSize}MB`);
      return;
    }
    
    setFile(selectedFile);
  };

  const simulateProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }
        return prev + 5;
      });
    }, 100);
    
    return () => clearInterval(interval);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Veuillez sélectionner un fichier');
      return;
    }
    
    if (showChecksumInput && !checksum) {
      setError('Veuillez saisir le checksum SHA256');
      return;
    }
    
    setError(null);
    setSuccess(null);
    setIsUploading(true);
    
    const cleanup = simulateProgress();
    
    try {
      const result = await onFileSelect(file, checksum);
      setProgress(100);
      
      if (result.success) {
        setSuccess(result.message || 'Fichier importé avec succès');
      } else {
        setError(result.message || 'Une erreur est survenue');
      }
    } catch (err) {
      setError('Une erreur est survenue lors de l\'importation');
      console.error(err);
    } finally {
      cleanup();
      setIsUploading(false);
    }
  };

  const resetUpload = () => {
    setFile(null);
    setChecksum('');
    setProgress(0);
    setError(null);
    setSuccess(null);
  };

  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      <div 
        className={cn(
          "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors hover:bg-accent/50",
          isDragging ? "bg-accent border-primary" : "border-border",
          isUploading && "pointer-events-none opacity-60"
        )}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-input')?.click()}
      >
        <input
          id="file-input"
          type="file"
          accept={accept}
          className="hidden"
          onChange={handleFileInput}
          disabled={isUploading}
        />
        
        <div className="flex flex-col items-center justify-center space-y-2">
          {file ? (
            <>
              <File className="h-10 w-10 text-primary" />
              <div className="font-medium">{file.name}</div>
              <div className="text-sm text-muted-foreground">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </div>
            </>
          ) : (
            <>
              <Upload className="h-10 w-10 text-muted-foreground" />
              <div className="font-medium">Glissez ou cliquez pour importer</div>
              <div className="text-sm text-muted-foreground">
                {accept} (Max: {maxSize}MB)
              </div>
            </>
          )}
        </div>
      </div>
      
      {showChecksumInput && (
        <div className="space-y-2">
          <label htmlFor="checksum" className="text-sm font-medium">
            Checksum SHA256
          </label>
          <Input
            id="checksum"
            value={checksum}
            onChange={(e) => setChecksum(e.target.value)}
            placeholder="Entrez le checksum SHA256 du fichier"
            disabled={isUploading || !file}
          />
        </div>
      )}

      {isUploading && (
        <div className="space-y-1">
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-center text-muted-foreground">
            Importation: {progress}%
          </p>
        </div>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erreur</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="bg-green-50 text-green-800 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertTitle>Succès</AlertTitle>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      <div className="flex space-x-2">
        {file && (
          <Button
            variant="outline"
            onClick={resetUpload}
            disabled={isUploading}
            className="flex-1"
          >
            Réinitialiser
          </Button>
        )}
        <Button
          onClick={handleUpload}
          disabled={!file || (showChecksumInput && !checksum) || isUploading}
          className="flex-1"
        >
          {isUploading ? 'Importation...' : 'Importer'}
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;

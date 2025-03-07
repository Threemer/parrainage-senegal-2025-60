
import { StatCardProps } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const StatCard = ({ title, value, description, icon, trend, className }: StatCardProps) => {
  return (
    <Card className={cn("overflow-hidden hover-lift transition-all duration-300", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="h-5 w-5 text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center space-x-2 mt-1">
          {trend && (
            <span
              className={cn(
                "inline-flex items-center text-xs font-medium",
                trend.isPositive ? "text-green-500" : "text-red-500"
              )}
            >
              {trend.isPositive ? (
                <ArrowUp className="mr-1 h-3 w-3" />
              ) : (
                <ArrowDown className="mr-1 h-3 w-3" />
              )}
              {trend.value}%
            </span>
          )}
          {description && (
            <CardDescription className="text-xs">{description}</CardDescription>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;

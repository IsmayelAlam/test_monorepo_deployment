import RandomButton from '@/components/templates/RandomButton';
import { CardContent, CardHeader } from '@/components/ui/card';

export default function RandomPage() {
  return (
    <div>
      <CardHeader>
        <h1 className="text-center font-bold text-2xl">Random Number</h1>
      </CardHeader>
      <CardContent className="space-y-4">
        <RandomButton />
      </CardContent>
    </div>
  );
}

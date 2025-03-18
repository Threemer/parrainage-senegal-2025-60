
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ClassDiagram = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Diagramme de Classes UML</CardTitle>
      </CardHeader>
      <CardContent className="overflow-auto">
        <div className="bg-white p-4 rounded-lg border border-gray-200 min-w-[900px]">
          {/* User Class */}
          <div className="border border-gray-300 rounded p-2 w-56 bg-gray-50 absolute top-[50px] left-[50px]">
            <div className="font-bold border-b border-gray-300 p-1 bg-senegal-green text-white">User</div>
            <div className="p-1 border-b border-gray-300">
              <ul className="text-sm">
                <li>+ id: string</li>
                <li>+ email: string</li>
                <li>+ role: string</li>
                <li>+ name: string</li>
              </ul>
            </div>
            <div className="p-1 text-sm">
              <ul>
                <li>+ authenticate()</li>
                <li>+ logout()</li>
              </ul>
            </div>
          </div>

          {/* Voter Class */}
          <div className="border border-gray-300 rounded p-2 w-56 bg-gray-50 absolute top-[200px] left-[200px]">
            <div className="font-bold border-b border-gray-300 p-1 bg-senegal-yellow text-black">Voter</div>
            <div className="p-1 border-b border-gray-300">
              <ul className="text-sm">
                <li>+ id: string</li>
                <li>+ voterNumber: string</li>
                <li>+ nationalIdNumber: string</li>
                <li>+ firstName: string</li>
                <li>+ lastName: string</li>
                <li>+ birthDate: string</li>
                <li>+ birthPlace: string</li>
                <li>+ gender: string</li>
                <li>+ pollingStation: string</li>
                <li>+ email: string</li>
                <li>+ phone: string</li>
                <li>+ hasSponsored: boolean</li>
              </ul>
            </div>
            <div className="p-1 text-sm">
              <ul>
                <li>+ register()</li>
                <li>+ sponsor()</li>
                <li>+ verifyIdentity()</li>
              </ul>
            </div>
          </div>

          {/* Candidate Class */}
          <div className="border border-gray-300 rounded p-2 w-56 bg-gray-50 absolute top-[200px] right-[200px]">
            <div className="font-bold border-b border-gray-300 p-1 bg-senegal-red text-white">Candidate</div>
            <div className="p-1 border-b border-gray-300">
              <ul className="text-sm">
                <li>+ id: string</li>
                <li>+ voterNumber: string</li>
                <li>+ nationalIdNumber: string</li>
                <li>+ firstName: string</li>
                <li>+ lastName: string</li>
                <li>+ birthDate: string</li>
                <li>+ email: string</li>
                <li>+ phone: string</li>
                <li>+ politicalParty: string</li>
                <li>+ slogan: string</li>
                <li>+ photoUrl: string</li>
                <li>+ partyColors: string[]</li>
                <li>+ websiteUrl: string</li>
                <li>+ sponsorshipCount: number</li>
              </ul>
            </div>
            <div className="p-1 text-sm">
              <ul>
                <li>+ register()</li>
                <li>+ updateProfile()</li>
                <li>+ viewSponsors()</li>
              </ul>
            </div>
          </div>

          {/* ElectoralFile Class */}
          <div className="border border-gray-300 rounded p-2 w-56 bg-gray-50 absolute top-[50px] right-[50px]">
            <div className="font-bold border-b border-gray-300 p-1 bg-senegal-green text-white">ElectoralFile</div>
            <div className="p-1 border-b border-gray-300">
              <ul className="text-sm">
                <li>+ id: string</li>
                <li>+ name: string</li>
                <li>+ uploadDate: string</li>
                <li>+ status: string</li>
                <li>+ checksum: string</li>
                <li>+ errorCount: number</li>
              </ul>
            </div>
            <div className="p-1 text-sm">
              <ul>
                <li>+ upload()</li>
                <li>+ validate()</li>
                <li>+ generateStats()</li>
              </ul>
            </div>
          </div>

          {/* SponsorshipPeriod Class */}
          <div className="border border-gray-300 rounded p-2 w-56 bg-gray-50 absolute top-[350px] left-[400px]">
            <div className="font-bold border-b border-gray-300 p-1 bg-senegal-yellow text-black">SponsorshipPeriod</div>
            <div className="p-1 border-b border-gray-300">
              <ul className="text-sm">
                <li>+ id: string</li>
                <li>+ startDate: string</li>
                <li>+ endDate: string</li>
                <li>+ isActive: boolean</li>
              </ul>
            </div>
            <div className="p-1 text-sm">
              <ul>
                <li>+ activate()</li>
                <li>+ deactivate()</li>
                <li>+ updateDates()</li>
              </ul>
            </div>
          </div>

          {/* Sponsorship Class */}
          <div className="border border-gray-300 rounded p-2 w-56 bg-gray-50 absolute top-[350px] right-[400px]">
            <div className="font-bold border-b border-gray-300 p-1 bg-senegal-red text-white">Sponsorship</div>
            <div className="p-1 border-b border-gray-300">
              <ul className="text-sm">
                <li>+ id: string</li>
                <li>+ voterId: string</li>
                <li>+ candidateId: string</li>
                <li>+ date: string</li>
                <li>+ verificationCode: string</li>
              </ul>
            </div>
            <div className="p-1 text-sm">
              <ul>
                <li>+ create()</li>
                <li>+ verify()</li>
                <li>+ revoke()</li>
              </ul>
            </div>
          </div>

          {/* Relationship Lines */}
          <svg width="100%" height="550" className="absolute top-0 left-0 pointer-events-none">
            {/* User -> Voter (1-to-1) */}
            <line x1="106" y1="120" x2="210" y2="200" stroke="#00853F" strokeWidth="2" />
            <text x="150" y="170" fill="#00853F" fontSize="12" fontWeight="bold">1</text>
            
            {/* User -> Candidate (1-to-1) */}
            <line x1="106" y1="120" x2="720" y2="200" stroke="#00853F" strokeWidth="2" />
            <text x="400" y="150" fill="#00853F" fontSize="12" fontWeight="bold">1</text>
            
            {/* Voter -> Sponsorship (1-to-many) */}
            <line x1="240" y1="300" x2="710" y2="350" stroke="#FFCD00" strokeWidth="2" />
            <text x="450" y="320" fill="#FFCD00" fontSize="12" fontWeight="bold">1..n</text>
            
            {/* Candidate -> Sponsorship (1-to-many) */}
            <line x1="760" y1="300" x2="710" y2="350" stroke="#E31B23" strokeWidth="2" />
            <text x="740" y="320" fill="#E31B23" fontSize="12" fontWeight="bold">1..n</text>
            
            {/* SponsorshipPeriod -> Sponsorship (1-to-many) */}
            <line x1="456" y1="380" x2="570" y2="380" stroke="#FFCD00" strokeWidth="2" />
            <text x="510" y="370" fill="#FFCD00" fontSize="12" fontWeight="bold">1..n</text>
            
            {/* ElectoralFile -> Voter (1-to-many) */}
            <line x1="750" y1="120" x2="256" y2="210" stroke="#00853F" strokeWidth="2" />
            <text x="500" y="160" fill="#00853F" fontSize="12" fontWeight="bold">1..n</text>
          </svg>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClassDiagram;

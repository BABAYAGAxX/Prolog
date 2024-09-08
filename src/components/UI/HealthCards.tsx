"use client";
import React from 'react';
import Link from 'next/link'; // Use Link from Next.js for internal routing
import { Hospital, Home, LifeBuoy, Shield, Star } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Type for Lucide icons
  link: string;
}

const icons = {
  'Healthcare System': Shield,
  'Hospitals': Hospital,
  'Nursing Home': Home,
  'Emergency Rooms': LifeBuoy,
  'Private Practices': Hospital,
  'All Specialties': Star,
};

const Card: React.FC<CardProps> = ({ title, description, Icon, link }) => (
  <Link href={link}>
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
      <div className="mb-4">
        <Icon className="w-10 h-10 text-gray-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-black">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </Link>
);

const HealthcareCards: React.FC = () => {
  const cards: CardProps[] = [
    { title: 'Healthcare System', description: 'Comprehensive care management for all health needs.', Icon: icons['Healthcare System'], link: '/healthcare-system' },
    { title: 'Hospitals', description: 'State-of-the-art facilities providing inpatient and outpatient care.', Icon: icons['Hospitals'], link: '/hospitals' },
    { title: 'Nursing Home', description: 'Long-term care with compassionate and professional staff.', Icon: icons['Nursing Home'], link: '/nursing-home' },
    { title: 'Emergency Rooms', description: '24/7 emergency services for urgent medical needs.', Icon: icons['Emergency Rooms'], link: '/emergency-rooms' },
    { title: 'Private Practices', description: 'Personalized care from specialized medical professionals.', Icon: icons['Private Practices'], link: '/private-practices' },
    { title: 'All Specialties', description: 'Access to a wide range of medical specialties and experts.', Icon: icons['All Specialties'], link: '/all-specialties' },
  ];

  return (
    <div className="flex justify-center bg-gray-300 items-center w-full">
      <div className="py-10 px-5 w-2/3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
              link={card.link} // The URL to navigate to
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthcareCards;

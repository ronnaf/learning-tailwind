import styled from 'styled-components';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { HomeFilters } from './components/HomeFilters';
import { ProfileCard } from './components/ProfileCard';
import { SidePanel } from './components/SidePanel';

const cards = [
  {
    title: 'User Experience Design',
    subtitle: '2972 Westheimer Rd. Santa Ana.',
    tags: ['full time', 'senior level'],
    imageLink: 'https://picsum.photos/250',
  },
  {
    title: 'Sr. Product Designer',
    subtitle: '2972 Westheimer Rd. Santa Ana.',
    tags: ['full time', 'senior level'],
    imageLink: 'https://picsum.photos/250',
  },
  {
    title: 'User Interface Desinger',
    subtitle: '2972 Westheimer Rd. Santa Ana.',
    tags: ['full time', 'senior level'],
    imageLink: 'https://picsum.photos/250',
  },
  {
    active: true,
    title: 'UI / UX Designer',
    subtitle: '2972 Westheimer Rd. Santa Ana.',
    tags: ['full time', 'senior level'],
    imageLink: 'https://picsum.photos/250',
  },
  {
    title: 'UX Engineer',
    subtitle: '2972 Westheimer Rd. Santa Ana.',
    tags: ['full time', 'senior level'],
    imageLink: 'https://picsum.photos/250',
  },
  {
    title: 'Lead Product Designer',
    subtitle: '2972 Westheimer Rd. Santa Ana.',
    tags: ['full time', 'senior level'],
    imageLink: 'https://picsum.photos/250',
  },
  {
    title: 'Head of Visual Design',
    subtitle: '2972 Westheimer Rd. Santa Ana.',
    tags: ['full time', 'senior level'],
    imageLink: 'https://picsum.photos/250',
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className='px-24 py-10 bg-gray-100'>
        <HomeFilters />
        <div className='h-12' />
        <div className='grid grid-cols-4 gap-12'>
          <div className='col-auto'>
            <SidePanel />
          </div>
          <div className='col-auto'>
            <Cards>
              {cards.map((card, index) => (
                <Card
                  key={index}
                  active={card.active}
                  imageLink={card.imageLink}
                  title={card.title}
                  subtitle={card.subtitle}
                  tags={card.tags}
                />
              ))}
            </Cards>
          </div>
          <div className='col-span-2'>
            <ProfileCard
              listing={{
                address: 'Londontowne, MD',
                applicantCount: '98',
                datePosted: new Date().toJSON(),
                employeeType: 'Full Time Job',
                experience: 'Minimum 1 Year',
                headerImageLink: 'https://picsum.photos/848/480',
                patreonLink: 'https://picsum.photos/250',
                overview:
                  'UX (user experience) designers measure and optimise applications (usually web based) to improve ease of use (usability), and create the best user experience by exploring many different approaches to solve end-users’ problems. One way that a UX designer might do this is by conducting in-person user tests to observe behaviour. They then refine and tweak apps, software and websites to create products that people like and find easy to use.',
                profileImageLink: 'https://picsum.photos/250',
                requirements: [
                  'Artistic eye for design',
                  'Ability to think creatively',
                  'Mathematical aptitude and strong problem-solving skills',
                  'Excellent IT and programming skills',
                  'Excellent organisational, time and project management skills',
                  'Accuracy and attention to detail',
                  'An understanding of the latest trends and their role in a commercial environment',
                  'Self-development skills to keep up to date with fast-changing trends',
                  'Professional approach to time, costs and deadlines',
                ],
                salaryOffer: '2000',
                title: 'UI / UX Designer',
                workLevel: 'Senior Level',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const Cards = styled.div`
  & > :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export default App;

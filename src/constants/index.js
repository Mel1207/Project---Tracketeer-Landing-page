import logoOrg1 from '../assets/logo-org-1.svg'
import logoOrg2 from '../assets/logo-org-2.svg'
import logoOrg3 from '../assets/logo-org-3.svg'
import logoOrg4 from '../assets/logo-org-4.svg'
import logoOrg5 from '../assets/logo-org-5.svg'
import feature1 from '../assets/icon-transactions.svg'
import feature2 from '../assets/icon-calculator.svg'
import feature3 from '../assets/icon-file.svg'
import iconCheck from '../assets/icon-check.svg'
import article1 from '../assets/article-1.png'
import article2 from '../assets/article-2.png'
import article3 from '../assets/article-3.png'

export const organizations = [
  { 
    id: 1, 
    title: 'Organization 1',
    imgSrc: logoOrg1
  },
  { 
    id: 2, 
    title: 'Organization 2',
    imgSrc: logoOrg2
  },
  { 
    id: 3, 
    title: 'Organization 3',
    imgSrc: logoOrg3
  },
  { 
    id: 4, 
    title: 'Organization 4',
    imgSrc: logoOrg4
  },
  { 
    id: 5, 
    title: 'Organization 5',
    imgSrc: logoOrg5
  }
]

export const features = [
  {
    id: 1,
    title: 'Add transactions',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    iconSrc: feature1
  },
  {
    id: 2,
    title: 'Auto compute balance',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    iconSrc: feature2
  },
  {
    id: 3,
    title: 'Monitor transactions history',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    iconSrc: feature3
  }
]

export const benefits = [
  {
    id: 1,
    benefit: [
      {
        id: 1,
        text: 'Monitor your transactions',
        iconSrc: iconCheck
      },
      {
        id: 2,
        text: 'Control your expenses',
        iconSrc: iconCheck
      },
      {
        id: 3,
        text: 'Save more than you outlay',
        iconSrc: iconCheck
      },
      {
        id: 4,
        text: 'Achieve your goal savings',
        iconSrc: iconCheck
      }
    ]
  }, 
  {
    id: 2,
    benefit: [
      {
        id: 1,
        text: 'Financial Awareness',
        iconSrc: iconCheck
      },
      {
        id: 2,
        text: 'Cashflow management',
        iconSrc: iconCheck
      },
      {
        id: 3,
        text: 'Improve your credit score',
        iconSrc: iconCheck
      },
      {
        id: 4,
        text: 'Help you avoid getting debt',
        iconSrc: iconCheck
      }
    ]
  }
]

export const articles = [
  {
    id: 1, 
    imgSrc: article1,
    title: 'Find ways to cut spending',
    date: 'January 10, 2024',
    link: '/article1'
  },
  {
    id: 2, 
    imgSrc: article2,
    title: 'Determine your financial priorities',
    date: 'January 10, 2024',
    link: '/article1'
  },
  {
    id: 3, 
    imgSrc: article3,
    title: 'How to automate your savings',
    date: 'January 10, 2024',
    link: '/article1'
  },
]
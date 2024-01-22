import JDMarket from '../assets/pictures/JDMarket.png'
import Umbrella from '../assets/pictures/umbrella.png'

let firstProjectDate1 = new Date(2023, 8)
let firstProjectDate2 = new Date(2023, 9)
firstProjectDate2.setMonth(firstProjectDate1.getMonth() + 1)
firstProjectDate2.setMonth(firstProjectDate2.getMonth() + 1)

export const projects = [
  {
    projectName: 'JDMarket',
    projectDate: firstProjectDate1
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
      })
      .toUpperCase(),
    pictureOfProject: JDMarket,
    textOverview:
      'Explore, compare, and secure your dream Japanese sports car effortlessly on JDMarket. Your direct path to high-performance automotive excellence.',
    firstTech: 'React',
    secondTech: 'SCSS',
    linkToCode: 'https://github.com/BazyshynAnton/JDM',
    projectDemo: 'https://jdmarket.vercel.app/',
    position: 'left',
    id: '018d08bc-3bd4-74b8-aaac-4fb192402edb',
  },
  {
    projectName: 'UMBRELLA',
    projectDate: firstProjectDate2
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
      })
      .toUpperCase(),
    pictureOfProject: Umbrella,
    textOverview:
      'On this site, delve into the forefront of medical innovation. Explore how Umbrella cutting-edge technology is shaping the future of global healthcare, combating infectious diseases and fostering a healthier world.',
    firstTech: 'React',
    secondTech: 'Material UI',
    linkToCode: 'https://github.com/BazyshynAnton/Umbrella.corp',
    projectDemo: 'https://umbrella-corp.vercel.app/',
    position: 'right',
    id: '018d08bc-3bd4-7966-939d-9692addd2661',
  },
]

// 018d08bc-3bd4-77c9-82ff-a5acce5d493b

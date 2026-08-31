export interface Project {
  id: string
  name: string
  summary: string
  logo: string
  cover: string
}

export const projects: Project[] = [
  {
    id: 'blueprint',
    name: 'Blueprint',
    summary: 'Nonprofit organization',
    logo: '/img/works/logo/blueprint.svg',
    cover: '/img/works/banner/vertical/blueprint.jpg',
  },
  {
    id: 'nebula',
    name: 'Nebula',
    summary: 'Pterodactyl theme',
    logo: '/img/works/logo/nebula.svg',
    cover: '/img/works/banner/vertical/nebula.jpg',
  },
  {
    id: 'writea',
    name: 'Writea',
    summary: 'Blogging site',
    logo: '/img/works/logo/writea.svg',
    cover: '/img/works/banner/vertical/writea.jpg',
  },
  {
    id: 'bashatime',
    name: 'Bashatime',
    summary: 'Wakatime plugin',
    logo: '/img/works/logo/bashatime.svg',
    cover: '/img/works/banner/vertical/bashatime.jpg',
  },
  {
    id: 'circles',
    name: 'Circles',
    summary: 'Brand kit',
    logo: '/img/works/logo/circles.svg',
    cover: '/img/works/banner/vertical/circles.jpg',
  },
]

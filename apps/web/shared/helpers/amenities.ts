export type AmenityKey = keyof typeof AMENITIES_DATA;

export const AMENITIES_DATA = {
  airConditioner: {
    name: 'Ar Condicionado',
    icon: '/images/icons/air-conditioner.svg',
  },
  fan: {
    name: 'Ventilador',
    icon: '/images/icons/fan.svg',
  },
  heating: {
    name: 'Calefação',
    icon: '/images/icons/heating-square.svg',
  },
  tv: {
    name: 'TV',
    icon: '/images/icons/tv.svg',
  },
  cableTv: {
    name: 'TV a cabo',
    icon: '/images/icons/tv-usb.svg',
  },
  pool: {
    name: 'Piscina',
    icon: '/images/icons/swimming-pool.svg',
  },
  reception24h: {
    name: 'Recepção 24h',
    icon: '/images/icons/clock.svg',
  },
  telephone: {
    name: 'Telefone',
    icon: '/images/icons/telephone.svg',
  },
  wifi: {
    name: 'Wifi',
    icon: '/images/icons/wifi.svg',
  },
  minibar: {
    name: 'Frigobar',
    icon: '/images/icons/refrigerator.svg',
  },
  equippedKitchen: {
    name: 'Cozinha Equipada',
    icon: '/images/icons/kitchen.svg',
  },
  safe: {
    name: 'Cofre',
    icon: '/images/icons/safe-vault.svg',
  },
  hairDryer: {
    name: 'Secador de Cabelo',
    icon: '/images/icons/blow-dryer.svg',
  },
  bar: {
    name: 'Bar',
    icon: '/images/icons/bar.svg',
  },
  microwave: {
    name: 'Microondas',
    icon: '/images/icons/microwave.svg',
  },
  towels: {
    name: 'Toalheiro',
    icon: '/images/icons/towel-rack.svg',
  },
  restaurant: {
    name: 'Restaurante',
    icon: '/images/icons/food.svg',
  },
  laundry: {
    name: 'Lavanderia',
    icon: '/images/icons/laundry.svg',
  },
  parking: {
    name: 'Estacionamento',
    icon: '/images/icons/parking-location.svg',
  },
  paidParking: {
    name: 'Estacionamento a pagar',
    icon: '/images/icons/parking-lot-charge.svg',
  },
  heatedPool: {
    name: 'Piscina Térmica',
    icon: '/images/icons/heated-pool.svg',
  },
  sauna: {
    name: 'Sauna Seca',
    icon: '/images/icons/sauna.svg',
  },
  gym: {
    name: 'Espaço Fitness',
    icon: '/images/icons/gym.svg',
  },
  gameRoom: {
    name: 'Sala de Jogos',
    icon: '/images/icons/game.svg',
  },
  sportsField: {
    name: 'Quadra de Esportiva',
    icon: '/images/icons/sportscourt.svg',
  },
  playground: {
    name: 'Playground',
    icon: '/images/icons/playground-slide.svg',
  },
  nearBeach: {
    name: 'Próximo à Praia',
    icon: '/images/icons/beach.svg',
  },
  meetingRoom: {
    name: 'Sala de Reunião',
    icon: '/images/icons/group-meeting-call.svg',
  },
  smallPetsPaid: {
    name: 'Animais de Pequeno Porte (a cobrar)',
    icon: '/images/icons/pet-extra-charge.svg',
  },
  smallPetsAllowed: {
    name: 'Aceita Animais de Pequeno Porte',
    icon: '/images/icons/pet.svg',
  },
  helipad: {
    name: 'Heliponto',
    icon: '/images/icons/helicopter.svg',
  },
  transfer: {
    name: 'Transfer',
    icon: '/images/icons/transfer-line.svg',
  },
  convenience: {
    name: 'Conveniência',
    icon: '/images/icons/shop-server.svg',
  },
  recreation: {
    name: 'Recreação',
    icon: '/images/icons/horse-toy.svg',
  },
  library: {
    name: 'Biblioteca',
    icon: '/images/icons/books.svg',
  },
  winery: {
    name: 'Adega',
    icon: '/images/icons/wine.svg',
  },
  beautyRoom: {
    name: 'Salão de Beleza',
    icon: '/images/icons/beauty.svg',
  },
  nursery: {
    name: 'Enfermaria',
    icon: '/images/icons/medical-kit.svg',
  },
  pneRoom: {
    name: 'Apartamento PNE',
    icon: '/images/icons/disability.svg',
  },
  horses: {
    name: 'Cavalos',
    icon: '/images/icons/horse-head.svg',
  },
  fishing: {
    name: 'Pesca',
    icon: '/images/icons/fishing-area.svg',
  },
  climbingWall: {
    name: 'Parede de Escalada',
    icon: '/images/icons/climbing-wall.svg',
  },
  nonSmoking: {
    name: '100% Não Fumante',
    icon: '/images/icons/cigarette-off.svg',
  },
  coveredParking: {
    name: 'Estacionamento Coberto',
    icon: '/images/icons/parking-lot-covered.svg',
  },
  generator: {
    name: 'Gerador',
    icon: '/images/icons/energy.svg',
  },
  smokingAllowed: {
    name: 'Apto para Fumantes',
    icon: '/images/icons/smoke.svg',
  },
  elevator: {
    name: 'Elevador',
    icon: '/images/icons/elevator.svg',
  },
  spa: {
    name: 'Spa',
    icon: '/images/icons/spa.svg',
  },
  hammockBalcony: {
    name: 'Varanda com Rede',
    icon: '/images/icons/hammock.svg',
  },
  seaView: {
    name: 'Vista para o Mar',
    icon: '/images/icons/sea-waves.svg',
  },
} as const;

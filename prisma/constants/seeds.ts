import { randomUUID } from 'node:crypto'

export const books = [
  {
    id: 'c8176d86-896a-4c21-9219-6bb28cccaa5f',
    name: '14 Hábitos de Desenvolvedores Altamente Produtivos',
    author: 'Zeno Rocha',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    coverUrl:
      '/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png',
    totalPages: 160,
    categories: [
      {
        name: 'Educação',
        id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d'
      },
      {
        name: 'Programação',
        id: 'c9f22067-4978-4a24-84a1-7d37f343dfc2'
      }
    ]
  },
  {
    id: '375948a7-bca3-4b59-9f97-bfcde036b4ca',
    name: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    summary:
      'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh',
    coverUrl: '/images/books/o-hobbit.png',
    totalPages: 360,
    categories: [
      {
        name: 'Ficção',
        id: '8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09'
      },
      {
        name: 'Aventura',
        id: 'e9c6d3f6-f3ec-4c52-ae28-6adcbab6ee67'
      }
    ]
  },
  {
    id: '86596503-369b-4614-bacf-11c9bb73e779',
    name: 'O guia do mochileiro das galáxias',
    author: 'Douglas Adams',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    coverUrl: '/images/books/o-guia-do-mochileiro-das-galaxias.png',
    totalPages: 250,
    categories: [
      {
        name: 'Ficção',
        id: '8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09'
      },
      {
        name: 'Geek',
        id: '2e65c193-325a-40c3-98f3-6c13e9b75b02'
      }
    ]
  },
  {
    id: 'd0d70b05-d48f-4d83-b1e8-0b4dd984c97d',
    name: 'A revolução dos bichos',
    author: 'George Orwell',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    coverUrl: '/images/books/a-revolucao-dos-bixos.png',
    totalPages: 350,
    categories: [
      {
        name: 'Alegoria',
        id: 'a1d0ee25-9c9a-49c8-84eb-7af1e0dd356d'
      },
      {
        name: 'Fábula',
        id: '997f8a10-21fb-4c80-bd16-17e8b79a31a3'
      }
    ]
  },
  {
    id: '48b86ac2-014e-401d-bcbb-331ce5f4a457',
    name: 'O fim da eternidade',
    author: 'Isaac Asimov',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    coverUrl: '/images/books/o-fim-da-eternidade.png',
    totalPages: 165,
    categories: [
      {
        name: 'Ficção',
        id: '8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09'
      },
      {
        name: 'Romance',
        id: '70efc33d-7d6b-4db4-bab6-524c4c4b2e2c'
      }
    ]
  },
  {
    id: 'e688c24f-d14d-4607-a12e-90e6e367398d',
    name: 'Entendendo Algoritmos',
    author: 'Aditya Y. Bhargava',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    coverUrl: '/images/books/entendendo-algoritmos.png',
    totalPages: 165,
    categories: [
      {
        name: 'Programação',
        id: 'c9f22067-4978-4a24-84a1-7d37f343dfc2'
      },
      {
        name: 'Educação',
        id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d'
      }
    ]
  },
  {
    id: '0440ad7d-230e-4573-b455-84ca38b5d339',
    name: 'Código Limpo',
    author: 'Robert C. Martin',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    coverUrl: '/images/books/codigo-limpo.png',
    totalPages: 365,
    categories: [
      {
        name: 'Programação',
        id: 'c9f22067-4978-4a24-84a1-7d37f343dfc2'
      },
      {
        name: 'Educação',
        id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d'
      }
    ]
  },
  {
    id: '14f410df-b28a-4e72-b1b4-363e26e160dd',
    name: 'O poder do hábito',
    author: 'Charles Duhigg',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    coverUrl: '/images/books/o-poder-do-habito.png',
    totalPages: 288,
    categories: [
      {
        name: 'Autoajuda',
        id: 'a4d63d4e-f8ad-4a60-b7b9-9d925a2a8a92'
      },
      {
        name: 'Educação',
        id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d'
      }
    ]
  },
  {
    id: 'd2870ad0-3312-4ac2-af9f-76af6565587d',
    name: 'Arquitetura limpa',
    author: 'Robert C. Martin',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    coverUrl: '/images/books/arquitetura-limpa.png',
    totalPages: 288,
    categories: [
      {
        name: 'Programação',
        id: 'c9f22067-4978-4a24-84a1-7d37f343dfc2'
      },
      {
        name: 'Educação',
        id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d'
      }
    ]
  },
  {
    id: '4fd2b389-b211-40b5-9797-f78cbb985645',
    name: 'Histórias extraordinárias',
    author: 'Edgar Allan Poe',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    coverUrl: '/images/books/historias-extraordinarias.png',
    totalPages: 332,
    categories: [
      {
        name: 'Ficção',
        id: '8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09'
      },
      {
        name: 'Suspense',
        id: '7c8dc74a-2e03-4d72-96de-822e332e5530'
      }
    ]
  },
  {
    id: '6de9f6b8-5ff4-4e06-b9f4-843eca462803',
    name: 'Refatoração',
    author: 'Martin Fowler',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    coverUrl: '/images/books/refatoracao.png',
    totalPages: 332,
    categories: [
      {
        name: 'Programação',
        id: 'c9f22067-4978-4a24-84a1-7d37f343dfc2'
      },
      {
        name: 'Educação',
        id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d'
      }
    ]
  },
  {
    id: 'd0590f9a-dd89-42fd-9bbb-bf26c2e4dcf9',
    name: 'Domain-Driven Design',
    author: 'Eric Evans',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    coverUrl: '/images/books/domain-driven-design.png',
    totalPages: 288,
    categories: [
      {
        name: 'Programação',
        id: 'c9f22067-4978-4a24-84a1-7d37f343dfc2'
      },
      {
        name: 'Arquitetura',
        id: 'a2891eaa-6d9e-48d8-a86a-10aa017d3d3f'
      }
    ]
  },
  {
    id: '1d5cdbdc-b90f-40d5-8fe9-d4923ae12dbd',
    name: 'Viagem ao Centro da Terra',
    author: 'Julio Verne',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    coverUrl: '/images/books/viagem-ao-centro-da-terra.png',
    totalPages: 288,
    categories: [
      {
        name: 'Romance',
        id: '70efc33d-7d6b-4db4-bab6-524c4c4b2e2c'
      },
      {
        name: 'Ficção',
        id: '8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09'
      }
    ]
  },
  {
    id: '404e47f8-da53-44fd-ab53-37ed171c3a9f',
    name: 'Fragmentos do Horror',
    author: 'Junji Ito',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    coverUrl: '/images/books/fragmentos-do-horror.png',
    totalPages: 144,
    categories: [
      {
        name: 'Ficção',
        id: '8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09'
      },
      {
        name: 'Terror',
        id: 'a0a61b53-37d7-48ec-9b92-6db074f6d9c9'
      }
    ]
  },
  {
    id: '66cb0f47-7e20-4492-b640-9c020fcae6f2',
    name: 'O Programador Pragmático',
    author: 'Andrew Hunt',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    coverUrl: '/images/books/o-programador-pragmatico.png',
    totalPages: 205,
    categories: [
      {
        name: 'Programação',
        id: 'c9f22067-4978-4a24-84a1-7d37f343dfc2'
      },
      {
        name: 'Educação',
        id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d'
      }
    ]
  }
]

export const categories = [
  {
    name: 'Programação',
    id: 'c9f22067-4978-4a24-84a1-7d37f343dfc2'
  },
  {
    name: 'Educação',
    id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d'
  },
  {
    name: 'Ficção',
    id: '8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09'
  },
  {
    name: 'Aventura',
    id: 'e9c6d3f6-f3ec-4c52-ae28-6adcbab6ee67'
  },
  {
    name: 'Geek',
    id: '2e65c193-325a-40c3-98f3-6c13e9b75b02'
  },
  {
    name: 'Alegoria',
    id: 'a1d0ee25-9c9a-49c8-84eb-7af1e0dd356d'
  },
  {
    name: 'Fábula',
    id: '997f8a10-21fb-4c80-bd16-17e8b79a31a3'
  },
  {
    name: 'Romance',
    id: '70efc33d-7d6b-4db4-bab6-524c4c4b2e2c'
  },
  {
    name: 'Suspense',
    id: '7c8dc74a-2e03-4d72-96de-822e332e5530'
  },
  {
    name: 'Autoajuda',
    id: 'a4d63d4e-f8ad-4a60-b7b9-9d925a2a8a92'
  },
  {
    name: 'Arquitetura',
    id: 'a2891eaa-6d9e-48d8-a86a-10aa017d3d3f'
  },
  {
    name: 'Terror',
    id: 'a0a61b53-37d7-48ec-9b92-6db074f6d9c9'
  }
]

export const ratings = [
  {
    id: randomUUID(),
    rate: 4,
    description:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    bookId: '375948a7-bca3-4b59-9f97-bfcde036b4ca',
    userId: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60'
  },
  {
    id: randomUUID(),
    rate: 4,
    description: 'Nec tempor nunc in egestas.',
    bookId: '86596503-369b-4614-bacf-11c9bb73e779',
    userId: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502'
  },
  {
    id: randomUUID(),
    rate: 5,
    description:
      'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh',
    bookId: 'e688c24f-d14d-4607-a12e-90e6e367398d',
    userId: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef'
  },
  {
    id: randomUUID(),
    rate: 4,
    description:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    bookId: '48b86ac2-014e-401d-bcbb-331ce5f4a457',
    userId: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60'
  },
  {
    id: randomUUID(),
    rate: 4,
    description: 'Nec tempor nunc in egestas.',
    bookId: 'd0d70b05-d48f-4d83-b1e8-0b4dd984c97d',
    userId: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502'
  },
  {
    id: randomUUID(),
    rate: 5,
    description:
      'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh',
    bookId: '375948a7-bca3-4b59-9f97-bfcde036b4ca',
    userId: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef'
  },
  {
    id: randomUUID(),
    rate: 4,
    description:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    bookId: 'c8176d86-896a-4c21-9219-6bb28cccaa5f',
    userId: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60'
  },
  {
    id: randomUUID(),
    rate: 4,
    description: 'Nec tempor nunc in egestas.',
    bookId: '0440ad7d-230e-4573-b455-84ca38b5d339',
    userId: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502'
  },
  {
    id: randomUUID(),
    rate: 5,
    description:
      'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh',
    bookId: '14f410df-b28a-4e72-b1b4-363e26e160dd',
    userId: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef'
  },
  {
    id: randomUUID(),
    rate: 4,
    description:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    bookId: 'd2870ad0-3312-4ac2-af9f-76af6565587d',
    userId: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60'
  },
  {
    id: randomUUID(),
    rate: 4,
    description: 'Nec tempor nunc in egestas.',
    bookId: '4fd2b389-b211-40b5-9797-f78cbb985645',
    userId: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502'
  },
  {
    id: randomUUID(),
    rate: 5,
    description:
      'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh',
    bookId: '6de9f6b8-5ff4-4e06-b9f4-843eca462803',
    userId: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef'
  },
  {
    id: randomUUID(),
    rate: 4,
    description:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    bookId: 'd0590f9a-dd89-42fd-9bbb-bf26c2e4dcf9',
    userId: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60'
  },
  {
    id: randomUUID(),
    rate: 4,
    description: 'Nec tempor nunc in egestas.',
    bookId: '1d5cdbdc-b90f-40d5-8fe9-d4923ae12dbd',
    userId: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502'
  },
  {
    id: randomUUID(),
    rate: 5,
    description:
      'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh',
    bookId: '404e47f8-da53-44fd-ab53-37ed171c3a9f',
    userId: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef'
  },
  {
    id: randomUUID(),
    rate: 4,
    description:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    bookId: '66cb0f47-7e20-4492-b640-9c020fcae6f2',
    userId: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60'
  }
]

export const users = [
  {
    id: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60',
    name: 'Jaxson Dias',
    email: 'jaxson@gmail.com',
    avatarUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
  },
  {
    id: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502',
    name: 'Brandon Botosh',
    email: 'brandon@gmail.com',
    avatarUrl:
      'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  },
  {
    id: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
    name: 'Lindsey Philips',
    email: 'lindsey@gmail.com',
    avatarUrl:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
  },
  {
    id: '6624df61-5947-4f8c-9c7e-39c8c40fa158',
    name: 'Jaylon Franci',
    email: 'jaylon@gmail.com',
    avatarUrl:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }
]

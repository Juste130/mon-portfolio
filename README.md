# Juste HOUEZO — Portfolio

Portfolio personnel de **Juste HOUEZO**, développeur Full-Stack & Blockchain (EVM) basé au Bénin.

🔗 **Live** : [mon-portfolio-two-psi.vercel.app](https://mon-portfolio-two-psi.vercel.app)

## Stack technique

| Domaine       | Technologies |
|----------------|--------------|
| Framework      | [Next.js 15](https://nextjs.org) (App Router) |
| UI             | React 19, Tailwind CSS 4, Framer Motion, lucide-react |
| Web3 / EVM     | Solidity, Hardhat |
| i18n           | Context React fait maison (FR / EN) |
| Déploiement    | Vercel |

## Structure du projet

```
src/
├── app/
│   ├── layout.js            # Layout racine + metadata SEO (OG, Twitter, robots)
│   ├── page.js               # Server Component — assemble les sections
│   ├── opengraph-image.jsx   # Image Open Graph générée dynamiquement
│   ├── twitter-image.jsx     # Image Twitter Card générée dynamiquement
│   ├── robots.js             # robots.txt (convention Next.js)
│   └── sitemap.js            # sitemap.xml (convention Next.js)
├── components/
│   ├── sections/              # Sections de la page (Hero, Parcours, Compétences, Projets, Contact)
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   ├── Timeline.jsx
│   ├── ProjectCard.jsx
│   └── ToolIcon.jsx
├── context/
│   └── LanguageContext.js    # Provider FR/EN
├── data/
│   ├── projects.js           # Liste des projets affichés
│   ├── skills.js              # Compétences par catégorie
│   └── tools.js                # Outils/environnement de dev
└── locales/
    ├── fr.js
    └── en.js
```

Chaque section de la page (`src/components/sections/`) est un **Client Component** isolé (traductions via contexte, animations Framer Motion, état local). `page.js` reste un **Server Component** : il n'assemble que les sections, sans logique client à ce niveau.

## Getting Started

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarre le serveur de développement (Turbopack) |
| `npm run build` | Build de production |
| `npm run start` | Démarre le serveur de production |
| `npm run lint` | Vérifie le code avec ESLint |

## Ajouter un projet

Les projets affichés dans la section *Projets* viennent de `src/data/projects.js`. Pour en ajouter un :

1. Ajouter l'entrée dans `src/data/projects.js` (id, titre, description, tags, `category`, `liveUrl` et/ou `githubUrl`).
2. Ajouter la traduction correspondante (titre + description) dans `src/locales/fr.js` et `src/locales/en.js`, section `projects.projectsList`, avec le même `id`.
3. Si la `category` est nouvelle, lui ajouter un style dans `categoryConfig` de `src/components/ProjectCard.jsx`.

## Licence

Projet personnel — tous droits réservés.

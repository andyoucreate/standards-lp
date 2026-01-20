# Guide Designer - Standards Landing Page

Salut Bastien ! Voici comment utiliser ce projet avec Cursor pour éditer la landing page.

## Prérequis

- [Cursor](https://cursor.com) installé sur ton Mac
- Node.js 20+ (vérifie avec `node -v`)
- pnpm (`npm install -g pnpm` si besoin)

## Installation rapide

```bash
# Clone le repo
git clone https://github.com/andyoucreate/standards-lp.git
cd standards-lp

# Installe les dépendances
pnpm install

# Lance le serveur de dev
pnpm dev
```

Le site sera accessible sur **http://localhost:3000**

## Ouvrir avec Cursor

### Option 1 : Depuis le terminal

```bash
cursor /chemin/vers/standards-lp
```

### Option 2 : Depuis Cursor

1. Ouvre Cursor
2. `File` → `Open Folder...` (ou `Cmd + O`)
3. Sélectionne le dossier `standards-lp`

### Option 3 : Web Editor (sans installation)

Tu peux aussi utiliser Cursor directement dans le navigateur :

1. Va sur **https://cursor.com**
2. Clique sur **"Open in Browser"** ou **"Try Cursor Online"**
3. Connecte ton compte GitHub
4. Ouvre le repo `andyoucreate/standards-lp`

## Structure du projet

```
standards-lp/
├── mocks/           ← TEXTES ET DONNÉES (modifie ici !)
│   ├── benefits.tsx
│   ├── features.tsx
│   ├── pricing.tsx
│   ├── testimonials.tsx
│   └── ...
├── constants/       ← NAVIGATION ET LIENS
│   ├── navigation.tsx
│   └── socials.tsx
├── public/images/   ← IMAGES
├── components/      ← Composants UI
├── templates/       ← Pages complètes
└── app/             ← Routes Next.js
```

## Comment modifier le contenu

### Textes et données

Tous les textes sont dans le dossier `mocks/`. Ouvre n'importe quel fichier et modifie les chaînes de caractères.

**Exemple - `mocks/features.tsx` :**

```tsx
export const features = [
  {
    id: "1",
    title: "Ton nouveau titre ici",
    description: "Ta description ici...",
    icon: "/images/icons/ton-icon.svg",
  },
  // ...
];
```

### Navigation

Édite `constants/navigation.tsx` pour changer les liens du header/footer.

### Images

1. Ajoute tes images dans `public/images/`
2. Référence-les avec `/images/ton-image.png`

## Utiliser l'IA de Cursor

### Chat (Cmd + L)

Demande à l'IA de faire des modifications :

> "Change le titre du hero en 'Standards - Build Faster'"

> "Ajoute un nouveau témoignage dans la section testimonials"

> "Remplace la couleur primary par #558BF4"

### Composer (Cmd + I)

Sélectionne du code et demande une modification inline.

### Agent Mode

Pour des tâches complexes, utilise le mode Agent qui peut modifier plusieurs fichiers.

## Cursor Rules (déjà configurées)

Le projet contient des règles dans `.cursor/rules/` qui guident l'IA :

- **design-system.mdc** : Couleurs, fonts, espacements
- **components.mdc** : Conventions pour les composants
- **content.mdc** : Comment éditer le contenu

L'IA connaît automatiquement ces règles quand tu travailles sur les fichiers concernés.

## Commandes utiles

```bash
# Lancer le dev server
pnpm dev

# Build de production
pnpm build

# Linter
pnpm lint

# Formatter le code
pnpm format
```

## Palette de couleurs Standards

| Couleur | Hex | Usage |
|---------|-----|-------|
| Primary | `#558BF4` | CTAs, liens |
| Secondary | `#003155` | Navigation, headers |
| Destructive | `#E7000B` | Erreurs |
| Success | `#08826F` | Confirmations |
| Warning | `#E77700` | Alertes |

## Typographie

- **Font principale** : Manrope (Google Fonts)
- **Weights** : 200 à 800

## Besoin d'aide ?

1. Ouvre le Chat Cursor (`Cmd + L`)
2. Décris ce que tu veux faire
3. L'IA te guidera !

Les Cursor Rules sont là pour t'aider - l'IA connaît déjà le design system et les conventions du projet.

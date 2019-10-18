# S. WS
## Seek Workspace

<p align="center"><img src="https://raw.githubusercontent.com/guiseek/sws/develop/libs/shared/assets/logo/sws.png" width="350"></p>


## TODO

- Components
  - [x] Form
  - [x] Toolbar
  - [x] Table
  - [x] Dialog
  - [x] Cards
  - [ ] Sidebar

- Features
  - [x] Companies
  - [x] Users
  - [x] Projects
  - [ ] Plans
  - [-] Licenses (<small>Em progresso</small>)


# Como contribuir (How to contribute)

1. Faça o fork do repositório principal para sua conta (fork main repository)
2. Clone seu repositório
```bash
git clone https://github.com/your-users/sws.git
```
3. Adicione o repositório principal como upstream (add main repository as upstream)
```bash
git remote add upstream https://github.com/guiseek/sws.git

# Confirm
git remote -v
origin    https://github.com/your-user/sws.git (fetch)
origin    https://github.com/your-user/sws.git (push)
upstream  https://github.com/guiseek/sws.git (fetch)
upstream  https://github.com/guiseek/sws.git (push)
```

## Mantenha-se atualizado (how to stay up to date)
```bash
git fetch upstream

git pull upstream master
```

## Requirements
 
- node
- npm
- yarn
- nx
- docker
- git-flow

## Tested with
| | |
| - | - |
| Node | v12.10.0 |
| NPM | v6.10.3 |
| Yarn | 1.17.3 |
| NX | 8.1.0 |
| Docker | 18.06.1 |


## Install

### git-flow

```bash
# macOS
brew install git-flow-avh

# or

# Macports
port install git-flow-avh
```

```bash
# Linux
apt-get install git-flow
```

```bash
# Windows (Cygwin)
wget -q -O - --no-check-certificate https://raw.github.com/petervanderdoes/gitflow-avh/develop/contrib/gitflow-installer.sh install stable | bash
```


## Usage

```bash
git clone https://github.com/guiseek/sws.git
```

```bash
yarn install
```

```bash
docker-compose up -d
```

```bash
yarn dev
```


---



| NX | |
| --- | --- |
|  <img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="150"> | This project was generated using [Nx](https://nx.dev). <br> 🔎 **Nx is a set of Extensible Dev Tools for Monorepos.** <br> [Nx Documentation](https://nx.dev/angular) <br> [Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application) |

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@sws/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

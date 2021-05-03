# Blockchain-Forest
Plateforme d’investissement à impact positif

# Description of the project
1. Sélection des projets 
L’ONG ChainForest sélectionne des projets de reforestation éthique, écoresponsable et viable

2. Investissements 
Les investisseurs et les donateurs font un apport sur la plateforme ChainForest et choisissent la durée du contrat et le projet.

3. Les intérêts vont aux projets
La plateforme utilise la DEFI pour faire fructifier les investissements.
Au terme du contrat les apports sont rendus aux investisseurs et les intérêts sont distribués aux projets choisis (un % est conservé pour le fonctionnement de la plateforme).

4. Les arbres sont plantés
Les Associations porteuses plantent les arbres

5. Enregistrement des arbres
Les informations sont enregistrées sur une blockchain publique, elles indiquent le numéro unique de l’arbre, la date de plantation, la position géographique, l’essence, et une photo)

6. Suivi et contrôle continu
Les arbres sont régulièrement surveillés et des photos mises en ligne pour suivre l’évolution des plantations.

# Statut du projet
Developpement du projet avec pour objectif Proof of Concept en juin 2021.

# Installation
Install npm
Install the Solidity Compiler version 0.6.11
Clone the Github repository
git clone @github.com/Universe-art/Blockchain-Forest/tree/main
Install the npm packages for the back-end and the front-end
Install the npm packages for the back-end

npm install
ℹ️ You will need to update pragma solidity version in @uniswap/v2-periphery/libraries/SafeMath.sol for 0.6.11

Install the npm packages for the front-end


Deploy
You need to deploy the smart contract BlockchainForestDefi.sol

Deploy on a Test Network
Deploy the contracts on the kovan environment
npm truffle deploy --network kovan


Set the smart contract in the Front-End
Modify the smart contract address in main.js file (variable : defiAddress)

Install local server software on your machine
https://www.npmjs.com/package/lite-server

Run
Run local server on your machine by the command lite-server, in the directory of the application

Run ganache on port 7545 beforehand

npm truffle deploy --reset --network kovan

npm truffle test # Run the unit and integration tests
Code Coverage
Runs the tests then displays a report of the smart-contracts code coverage.

npm run coverage
Gas Report
To get a report of the gas consumed by the smart-contracts while running the tests.

You will need some Dai on Kovan to test the app.

# Technologies utilisées
HTML / NodeJS / Solidity


# FAQ


# Droits d’auteurs et informations sur la licence.

/* 
Auteur  : Benjamin Plouffe
Date    : 2025-01-23
Sujet   : Exercice 1 de la série 1.2
*/ 

//si "type": "commonjs" qui est dans package.json (ou si pas de type)
// const prompt = require('prompt-sync')();

//si "type": "commonjs" qui est dans package.json
import promptsync from 'prompt-sync'
const prompt = promptsync();

// E2 : Lire le nom et l’âge d’un individu, puis convertir son âge en jours (approximatif). Imprimer un message incluant son nom pour l’informer du nombre de jours vécus.

let nom = prompt("Entrer votre nom complet : ");
let age = prompt("Entrer votre age : ");
console.log(nom ,"a vécu environs" , Math.round(age*365.25), "jour dans sa vie.");
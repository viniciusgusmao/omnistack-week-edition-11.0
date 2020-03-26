# Omnistack 11 Week 

> A full project (back-end, frontend and mobile) developed using react, react native and nodejs between March 23 and 27 at the year 2020.

This project was idealized by <a href="https://rocketseat.com.br/" target="blank">Rocketseat</a>, a brazilian company that works with learning and consulting of several technologies in the world of programming.

## Overview and Goals

This application aims to connect people to organizations that rescue animals in street situations. These people choose a specific case to help financially treat this rescued animal.
My goal in developing this project is to apply React, React Native and Nodejs technologies in a real project.

## Screenshot



### Backend routes
|  Route |  Method  | Objective | Params | Body |  Response |
| ------------ | ------------ | ------------ | ------------ |
| ongs  | GET  |  List ongs |   | -  | [{ id: Number, name: String, email: String, whatsapp: String, city: String, uf: String  }] |
| ongs  | POST  |  Register new ong |   | { id: Number, name: String, email: String, whatsapp: String, city: String, uf: String }  |   |
| incidents  | GET  |  List incidents |   |   | [{ id: Number, title: String, description: String, value: Number, ong_id: Number, name: String, email: String, whatsapp: String, city: String  }]  |
| incidents  | POST  | Register new incident |  | { title: String, description: String, value: Number}  |   |
| incidents  | DELETE  | Delete incident | {id: Number}   |   |   |
| profile  | GET  | List incidents by ong |   |   |  [{ id: Number, title: String, description: String, value: Number, ong_id: Number}],  |
| sessions  | POST  | Verify if exist an specific ong |  |   |  { id: String }  |

## Instalation

### Steps (pending)
1. git clone https://github.com/viniciusgusmao/omnistack-11-week.git
2. 

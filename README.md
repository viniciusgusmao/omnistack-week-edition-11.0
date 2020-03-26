# Omnistack 11 Week 

> A full project (back-end, frontend and mobile) developed using react, react native and nodejs between March 23 and 27 at the year 2020.

This project was idealized by <a href="https://rocketseat.com.br/" target="blank">Rocketseat</a>, a brazilian company that works with learning and consulting of several technologies in the world of programming.

## Overview and Goals

This application aims to connect people to organizations that rescue animals in street situations. These people choose a specific case to help financially treat this rescued animal.
My goal in developing this project is to apply React, React Native and Nodejs technologies in a real project.

## Screenshot

### Frontend pages
<img src="https://i.ibb.co/M8BYf6T/Captura-de-tela-de-2020-03-26-15-10-31.png" />
<img src="https://i.ibb.co/MV6hPyk/Captura-de-tela-de-2020-03-26-15-12-40.png" />
<img src="https://i.ibb.co/bXTSQms/Captura-de-tela-de-2020-03-26-15-13-11.png" />

### Mobile pages
|  Screen 1  |  Screen 2  |
| ------------ | ------------ | 
| <img src="https://i.ibb.co/qjjnRkv/Screenshot-20200326-151452.png" /> | <img src="https://i.ibb.co/fvPjSyt/Screenshot-20200326-151502.png" /> |

### Backend routes
<table>
  <tr>
    <td>Route</td>
    <td>Method</td>
    <td>Objective</td>
    <td>Params</td>
    <td>Headers</td>
    <td>Body</td>
    <td>Response</td>
  </tr>
  <tr>
    <td>ongs</td>
    <td>GET</td>
    <td>List ongs</td>
    <td></td>
    <td></td>
    <td></td>
    <td>[{ id: Number, name: String, email: String, whatsapp: String, city: String, uf: String  }]</td>
  </tr>
  <tr>
    <td>ongs</td>
    <td>POST</td>
    <td>Register new ong</td>
    <td></td>
    <td></td>
    <td>{ id: Number, name: String, email: String, whatsapp: String, city: String, uf: String }</td>
    <td></td>
  </tr>
  <tr>
    <td>incidents</td>
    <td>GET</td>
    <td>List incidents</td>
    <td></td>
    <td></td>
    <td></td>
    <td>[{ id: Number, title: String, description: String, value: Number, ong_id: Number, name: String, email: String, whatsapp: String, city: String  }]</td>
  </tr>
  <tr>
    <td>incidents</td>
    <td>POST</td>
    <td>Register new incident</td>
    <td></td>
    <td>{ Authorization: ong_id}</td>
    <td>{ title: String, description: String, value: Number}</td>
    <td></td>
  </tr>
  <tr>
    <td>incidents</td>
    <td>DELETE</td>
    <td>Delete incident</td>
    <td>{id: Number}</td>
    <td>{ Authorization: ong_id}</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>profile</td>
    <td>GET</td>
    <td>List incidents by ong</td>
    <td></td>
    <td>{ Authorization: ong_id}</td>
    <td></td>
    <td>[{ id: Number, title: String, description: String, value: Number, ong_id: Number}]</td>
  </tr>
  <tr>
    <td>sessions</td>
    <td>POST</td>
    <td>Verify if exist an specific ong and returns an ong</td>
    <td></td>
    <td></td>
    <td></td>
    <td>{ id: String } </td>
  </tr>
</table> 

## Technologies used
- React
- React Native with expo
- Express
- Knex
- Sqlite

## Instalation

### Steps
1. git clone https://github.com/viniciusgusmao/omnistack-11-week.git

In the root directory, apply the commands below:

2. cd backend && npm install && npm start 

The server will be running at port 3333


To initialize a frontend project:

3. cd frontend && npm install && npm start

To initialize a mobile project, but before install expo-cli globally in your environment using *npm install -g expo-cli*

4. cd mobile && npm install && expo start

**Attention**

In order to communicate the mobile app with localhost server, you will need to modify the IP address at the file: 
```js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://[YOUR-IP]:3333'
})

export default api;
```
